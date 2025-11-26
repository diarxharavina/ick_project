const onSubmit = async e => {
    e.preventDefault();

    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 30, // optional, defaults to 60
            }),
        });
        const data = await response.json();

        if (!response.ok) return

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
    } catch (error) {
        console.error(error.message);
    }
};

const getCurrentUser = async () => {
    try {
        const response = await fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Pass JWT via Authorization header
            },
        });

        if (!response.ok) return;

        const res = await response.json();
        
        console.log(res);
    } catch (error) {
        console.log('error');
    }
};
