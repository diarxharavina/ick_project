const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const password = form.password.value;

    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 30, // optional, defaults to 60
            }),
        });
        const data = await response.json();


        if (!response.ok) return;

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        window.location.href = '/pages/home';
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

        const data = await response.json();

    } catch (error) {
        console.error(error.message);
    }
};

const isLoggedIn = async () => {
    try {
        if (!getCurrentUser()) return false;

        return true;
    } catch (error) {
        console.error(erorr.message);
    }
};

const handleRefreshAuth = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) return false;

        const response = await fetch('https://dummyjson.com/auth/refresh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                refreshToken: refreshToken,
                expiresInMins: 30,
            }),
        });

        if (!response.ok) return false;

        const data = await response.json();

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        return true;
    } catch (error) {
        console.error('Refresh failed:', error.message);
        return false;
    }
};
