class MyIcon extends HTMLElement {
    // 1) tell the browser we care about "iconName"
    static get observedAttributes() {
        return ['iconname']; // lowercase! attributes are case-insensitive
    }

    connectedCallback() {
        this.render();
    }

    // 2) this runs every time iconname="" changes
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const iconName = this.getAttribute('iconName');
        const iconColor = this.getAttribute('iconColor');
        const width = this.getAttribute('width');
        const height = this.getAttribute('height');
        const invalidIcon = `
      <svg
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="red"
        version="1.1"
        id="Capa_1"
        viewBox="0 0 55.704 55.703"
        xml:space="preserve"
      >
        <g>
          <path
            d="M27.852,0C19.905,0,12.743,3.363,7.664,8.72C7.628,8.751,7.583,8.762,7.549,8.796C7.495,8.85,7.476,8.922,7.426,8.98
               C2.833,13.949,0,20.568,0,27.852c0,15.357,12.493,27.851,27.851,27.851c15.356,0,27.851-12.494,27.851-27.851
               C55.703,12.494,43.208,0,27.852,0z M4.489,27.851c0-5.315,1.805-10.207,4.806-14.138l32.691,32.694
               c-3.93,3.001-8.819,4.806-14.135,4.806C14.969,51.213,4.489,40.732,4.489,27.851z M45.282,43.352l-32.933-32.93
               c4.13-3.678,9.551-5.934,15.503-5.934c12.881,0,23.362,10.48,23.362,23.363C51.213,33.803,48.958,39.225,45.282,43.352z"
          />
        </g>
      </svg>
    `;

        const icons = {
            burger: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z" fill="white"/>
        </svg>
      `,
            close: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.75 12.75L12.75 0.750001M0.75 0.75L12.75 12.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
            home: `
        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint0_linear_121_1892)"/>
          <rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint1_linear_121_1892)"/>
          <rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint2_linear_121_1892)"/>
          <rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint3_linear_121_1892)"/>
          <path d="M28.8937 36.1058C30.8853 38.0975 34.1145 38.0975 36.1061 36.1058C36.3509 35.8611 36.5656 35.5976 36.7502 35.3201C37.6639 36.6941 39.2261 37.5996 40.9999 37.5996C42.7739 37.5996 44.3364 36.6938 45.25 35.3196C45.4347 35.5973 45.6495 35.8609 45.8944 36.1059C47.8861 38.0975 51.1152 38.0975 53.1069 36.1059C55.0986 34.1142 55.0986 30.885 53.1069 28.8934L52.6094 28.3958C51.9718 27.7582 51.107 27.4 50.2052 27.4H31.7953C30.8936 27.4 30.0288 27.7582 29.3911 28.3958L28.8937 28.8933C26.902 30.885 26.902 34.1141 28.8937 36.1058Z" fill="#A685FA"/>
          <path d="M29.0999 39.3548C31.5275 40.5591 34.4616 40.3947 36.7509 38.8615C37.9654 39.6741 39.4269 40.1496 40.9999 40.1496C42.573 40.1496 44.0347 39.674 45.2493 38.8612C47.5384 40.3946 50.4723 40.5592 52.8999 39.3552V52.05H53.3249C54.0291 52.05 54.5999 52.6208 54.5999 53.325C54.5999 54.0292 54.0291 54.6 53.3249 54.6H45.6749C44.9707 54.6 44.3999 54.0292 44.3999 53.325V47.375C44.3999 46.6708 43.8291 46.1 43.1249 46.1H38.8749C38.1707 46.1 37.5999 46.6708 37.5999 47.375V53.325C37.5999 54.0292 37.0291 54.6 36.3249 54.6H28.6749C27.9707 54.6 27.3999 54.0292 27.3999 53.325C27.3999 52.6208 27.9707 52.05 28.6749 52.05H29.0999V39.3548Z" fill="#A685FA"/>
          <defs>
          <linearGradient id="paint0_linear_121_1892" x1="6.75" y1="86.5" x2="85.75" y2="-5.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_121_1892" x1="81.75" y1="-10.5" x2="6.75" y2="82" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint2_linear_121_1892" x1="3.25" y1="13.5" x2="71.75" y2="72" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint3_linear_121_1892" x1="84.25" y1="86" x2="12.25" y2="35" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>
      `,
            arrow: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 22.25L22.25 1M22.25 1L6.3125 1M22.25 1V16.9375" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
            money: `
        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint0_linear_121_1900)"/>
          <rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint1_linear_121_1900)"/>
          <rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint2_linear_121_1900)"/>
          <rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint3_linear_121_1900)"/>
          <path d="M41 34.625C39.2396 34.625 37.8125 36.0521 37.8125 37.8125C37.8125 39.5729 39.2396 41 41 41C42.7604 41 44.1875 39.5729 44.1875 37.8125C44.1875 36.0521 42.7604 34.625 41 34.625Z" fill="#A685FA"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.125 30.9062C26.125 29.4392 27.3142 28.25 28.7812 28.25H53.2188C54.6858 28.25 55.875 29.4392 55.875 30.9062V44.7188C55.875 46.1858 54.6858 47.375 53.2188 47.375H28.7812C27.3142 47.375 26.125 46.1858 26.125 44.7188V30.9062ZM35.6875 37.8125C35.6875 34.8785 38.066 32.5 41 32.5C43.934 32.5 46.3125 34.8785 46.3125 37.8125C46.3125 40.7465 43.934 43.125 41 43.125C38.066 43.125 35.6875 40.7465 35.6875 37.8125ZM50.5625 36.75C49.9757 36.75 49.5 37.2257 49.5 37.8125V37.8231C49.5 38.4099 49.9757 38.8856 50.5625 38.8856H50.5731C51.1599 38.8856 51.6356 38.4099 51.6356 37.8231V37.8125C51.6356 37.2257 51.1599 36.75 50.5731 36.75H50.5625ZM30.375 37.8125C30.375 37.2257 30.8507 36.75 31.4375 36.75H31.4481C32.0349 36.75 32.5106 37.2257 32.5106 37.8125V37.8231C32.5106 38.4099 32.0349 38.8856 31.4481 38.8856H31.4375C30.8507 38.8856 30.375 38.4099 30.375 37.8231V37.8125Z" fill="#A685FA"/>
          <path d="M27.1875 49.5C26.6007 49.5 26.125 49.9757 26.125 50.5625C26.125 51.1493 26.6007 51.625 27.1875 51.625C34.8376 51.625 42.247 52.6481 49.2872 54.5644C50.9738 55.0235 52.6875 53.7738 52.6875 51.9864V50.5625C52.6875 49.9757 52.2118 49.5 51.625 49.5H27.1875Z" fill="#A685FA"/>
          <defs>
          <linearGradient id="paint0_linear_121_1900" x1="6.75" y1="86.5" x2="85.75" y2="-5.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_121_1900" x1="81.75" y1="-10.5" x2="6.75" y2="82" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint2_linear_121_1900" x1="3.25" y1="13.5" x2="71.75" y2="72" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint3_linear_121_1900" x1="84.25" y1="86" x2="12.25" y2="35" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>
      `,
            apartment: `
        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint0_linear_121_1908)"/>
          <rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint1_linear_121_1908)"/>
          <rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint2_linear_121_1908)"/>
          <rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint3_linear_121_1908)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25.7002 28.675C25.7002 27.9708 26.271 27.4 26.9752 27.4H44.8252C45.5294 27.4 46.1002 27.9708 46.1002 28.675C46.1002 29.3792 45.5294 29.95 44.8252 29.95H44.4002V53.325C44.4002 54.0292 43.8294 54.6 43.1252 54.6H40.5752C39.871 54.6 39.3002 54.0292 39.3002 53.325V49.075C39.3002 48.3708 38.7294 47.8 38.0252 47.8H33.7752C33.071 47.8 32.5002 48.3708 32.5002 49.075V53.325C32.5002 54.0292 31.9294 54.6 31.2252 54.6H26.9752C26.271 54.6 25.7002 54.0292 25.7002 53.325C25.7002 52.6208 26.271 52.05 26.9752 52.05H27.4002V29.95H26.9752C26.271 29.95 25.7002 29.3792 25.7002 28.675ZM30.8002 33.35C30.8002 32.8806 31.1808 32.5 31.6502 32.5H33.3502C33.8196 32.5 34.2002 32.8806 34.2002 33.35V35.05C34.2002 35.5194 33.8196 35.9 33.3502 35.9H31.6502C31.1808 35.9 30.8002 35.5194 30.8002 35.05V33.35ZM31.6502 39.3C31.1808 39.3 30.8002 39.6806 30.8002 40.15V41.85C30.8002 42.3194 31.1808 42.7 31.6502 42.7H33.3502C33.8196 42.7 34.2002 42.3194 34.2002 41.85V40.15C34.2002 39.6806 33.8196 39.3 33.3502 39.3H31.6502ZM37.6002 33.35C37.6002 32.8806 37.9808 32.5 38.4502 32.5H40.1502C40.6196 32.5 41.0002 32.8806 41.0002 33.35V35.05C41.0002 35.5194 40.6196 35.9 40.1502 35.9H38.4502C37.9808 35.9 37.6002 35.5194 37.6002 35.05V33.35ZM38.4502 39.3C37.9808 39.3 37.6002 39.6806 37.6002 40.15V41.85C37.6002 42.3194 37.9808 42.7 38.4502 42.7H40.1502C40.6196 42.7 41.0002 42.3194 41.0002 41.85V40.15C41.0002 39.6806 40.6196 39.3 40.1502 39.3H38.4502Z" fill="#A685FA"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M48.2252 34.2C47.521 34.2 46.9502 34.7708 46.9502 35.475V52.9C46.9502 53.8389 47.7113 54.6 48.6502 54.6H55.0252C55.7294 54.6 56.3002 54.0292 56.3002 53.325C56.3002 52.6208 55.7294 52.05 55.0252 52.05H54.6002V36.75H55.0252C55.7294 36.75 56.3002 36.1792 56.3002 35.475C56.3002 34.7708 55.7294 34.2 55.0252 34.2H48.2252ZM49.0752 40.15C49.0752 39.6806 49.4558 39.3 49.9252 39.3H51.6252C52.0946 39.3 52.4752 39.6806 52.4752 40.15V41.85C52.4752 42.3194 52.0946 42.7 51.6252 42.7H49.9252C49.4558 42.7 49.0752 42.3194 49.0752 41.85V40.15ZM49.9252 46.1C49.4558 46.1 49.0752 46.4806 49.0752 46.95V48.65C49.0752 49.1194 49.4558 49.5 49.9252 49.5H51.6252C52.0946 49.5 52.4752 49.1194 52.4752 48.65V46.95C52.4752 46.4806 52.0946 46.1 51.6252 46.1H49.9252Z" fill="#A685FA"/>
          <defs>
          <linearGradient id="paint0_linear_121_1908" x1="6.75" y1="86.5" x2="85.75" y2="-5.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_121_1908" x1="81.75" y1="-10.5" x2="6.75" y2="82" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint2_linear_121_1908" x1="3.25" y1="13.5" x2="71.75" y2="72" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint3_linear_121_1908" x1="84.25" y1="86" x2="12.25" y2="35" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>
      `,
            sun: `
        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint0_linear_121_1916)"/>
          <rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint1_linear_121_1916)"/>
          <rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint2_linear_121_1916)"/>
          <rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint3_linear_121_1916)"/>
          <path d="M41 27.1875C41.5868 27.1875 42.0625 27.6632 42.0625 28.25V31.4375C42.0625 32.0243 41.5868 32.5 41 32.5C40.4132 32.5 39.9375 32.0243 39.9375 31.4375V28.25C39.9375 27.6632 40.4132 27.1875 41 27.1875Z" fill="#A685FA"/>
          <path d="M34.625 41C34.625 37.4792 37.4792 34.625 41 34.625C44.5208 34.625 47.375 37.4792 47.375 41C47.375 44.5208 44.5208 47.375 41 47.375C37.4792 47.375 34.625 44.5208 34.625 41Z" fill="#A685FA"/>
          <path d="M50.767 32.7356C51.1819 32.3207 51.1819 31.648 50.767 31.233C50.3521 30.8181 49.6793 30.8181 49.2644 31.233L47.0105 33.4869C46.5955 33.9019 46.5955 34.5746 47.0105 34.9895C47.4254 35.4045 48.0982 35.4045 48.5131 34.9895L50.767 32.7356Z" fill="#A685FA"/>
          <path d="M54.8125 41C54.8125 41.5868 54.3368 42.0625 53.75 42.0625H50.5625C49.9757 42.0625 49.5 41.5868 49.5 41C49.5 40.4132 49.9757 39.9375 50.5625 39.9375H53.75C54.3368 39.9375 54.8125 40.4132 54.8125 41Z" fill="#A685FA"/>
          <path d="M49.2642 50.7669C49.6792 51.1818 50.3519 51.1818 50.7668 50.7669C51.1818 50.3519 51.1818 49.6792 50.7668 49.2643L48.5129 47.0104C48.098 46.5954 47.4253 46.5954 47.0103 47.0104C46.5954 47.4253 46.5954 48.098 47.0103 48.513L49.2642 50.7669Z" fill="#A685FA"/>
          <path d="M41 49.5C41.5868 49.5 42.0625 49.9757 42.0625 50.5625V53.75C42.0625 54.3368 41.5868 54.8125 41 54.8125C40.4132 54.8125 39.9375 54.3368 39.9375 53.75V50.5625C39.9375 49.9757 40.4132 49.5 41 49.5Z" fill="#A685FA"/>
          <path d="M34.9898 48.513C35.4047 48.098 35.4047 47.4253 34.9898 47.0104C34.5749 46.5954 33.9021 46.5954 33.4872 47.0104L31.2333 49.2643C30.8184 49.6792 30.8184 50.3519 31.2333 50.7669C31.6482 51.1818 32.321 51.1818 32.7359 50.7669L34.9898 48.513Z" fill="#A685FA"/>
          <path d="M32.5 41C32.5 41.5868 32.0243 42.0625 31.4375 42.0625H28.25C27.6632 42.0625 27.1875 41.5868 27.1875 41C27.1875 40.4132 27.6632 39.9375 28.25 39.9375H31.4375C32.0243 39.9375 32.5 40.4132 32.5 41Z" fill="#A685FA"/>
          <path d="M33.487 34.9895C33.902 35.4045 34.5747 35.4045 34.9896 34.9895C35.4046 34.5746 35.4046 33.9019 34.9896 33.4869L32.7357 31.233C32.3208 30.8181 31.6481 30.8181 31.2331 31.233C30.8182 31.648 30.8182 32.3207 31.2331 32.7356L33.487 34.9895Z" fill="#A685FA"/>
          <defs>
          <linearGradient id="paint0_linear_121_1916" x1="6.75" y1="86.5" x2="85.75" y2="-5.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_121_1916" x1="81.75" y1="-10.5" x2="6.75" y2="82" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint2_linear_121_1916" x1="3.25" y1="13.5" x2="71.75" y2="72" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint3_linear_121_1916" x1="84.25" y1="86" x2="12.25" y2="35" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A685FA"/>
          <stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>
      `,
            sparks: `
        <svg width="69" height="30" viewBox="0 0 69 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_75_930)">
          <path d="M15 30.0166C23.2843 30.0166 30 23.3009 30 15.0166C30 6.73233 23.2843 0.0166836 15 0.0166836C6.71573 0.0166836 0 6.73233 0 15.0166C0 23.3009 6.71573 30.0166 15 30.0166Z" fill="#666666"/>
          <path d="M0 45C8.28427 45 15 38.2843 15 30C15 21.7157 8.28427 15 0 15C-8.28427 15 -15 21.7157 -15 30C-15 38.2843 -8.28427 45 0 45Z" fill="#141414"/>
          <path d="M30 45C38.2843 45 45 38.2843 45 30C45 21.7157 38.2843 15 30 15C21.7157 15 15 21.7157 15 30C15 38.2843 21.7157 45 30 45Z" fill="#141414"/>
          <path d="M0 15C8.28427 15 15 8.28427 15 0C15 -8.28427 8.28427 -15 0 -15C-8.28427 -15 -15 -8.28427 -15 0C-15 8.28427 -8.28427 15 0 15Z" fill="#141414"/>
          <path d="M30 15C38.2843 15 45 8.28427 45 0C45 -8.28427 38.2843 -15 30 -15C21.7157 -15 15 -8.28427 15 0C15 8.28427 21.7157 15 30 15Z" fill="#141414"/>
          </g>
          <g clip-path="url(#clip1_75_930)">
          <path d="M45 24.01C49.9706 24.01 54 19.9805 54 15.01C54 10.0394 49.9706 6.01001 45 6.01001C40.0294 6.01001 36 10.0394 36 15.01C36 19.9805 40.0294 24.01 45 24.01Z" fill="#333333"/>
          <path d="M36 33C40.9706 33 45 28.9706 45 24C45 19.0294 40.9706 15 36 15C31.0294 15 27 19.0294 27 24C27 28.9706 31.0294 33 36 33Z" fill="#141414"/>
          <path d="M54 33C58.9706 33 63 28.9706 63 24C63 19.0294 58.9706 15 54 15C49.0294 15 45 19.0294 45 24C45 28.9706 49.0294 33 54 33Z" fill="#141414"/>
          <path d="M36 15C40.9706 15 45 10.9706 45 6C45 1.02944 40.9706 -3 36 -3C31.0294 -3 27 1.02944 27 6C27 10.9706 31.0294 15 36 15Z" fill="#141414"/>
          <path d="M54 15C58.9706 15 63 10.9706 63 6C63 1.02944 58.9706 -3 54 -3C49.0294 -3 45 1.02944 45 6C45 10.9706 49.0294 15 54 15Z" fill="#141414"/>
          </g>
          <g clip-path="url(#clip2_75_930)">
          <path d="M64.2 19.2046C66.5196 19.2046 68.4 17.3242 68.4 15.0046C68.4 12.6851 66.5196 10.8047 64.2 10.8047C61.8804 10.8047 60 12.6851 60 15.0046C60 17.3242 61.8804 19.2046 64.2 19.2046Z" fill="#333333"/>
          <path d="M59.9998 23.4C62.3194 23.4 64.1998 21.5196 64.1998 19.2C64.1998 16.8804 62.3194 15 59.9998 15C57.6802 15 55.7998 16.8804 55.7998 19.2C55.7998 21.5196 57.6802 23.4 59.9998 23.4Z" fill="#141414"/>
          <path d="M68.3997 23.4C70.7193 23.4 72.5997 21.5196 72.5997 19.2C72.5997 16.8804 70.7193 15 68.3997 15C66.0801 15 64.1997 16.8804 64.1997 19.2C64.1997 21.5196 66.0801 23.4 68.3997 23.4Z" fill="#141414"/>
          <path d="M59.9998 15C62.3194 15 64.1998 13.1196 64.1998 10.8C64.1998 8.4804 62.3194 6.6 59.9998 6.6C57.6802 6.6 55.7998 8.4804 55.7998 10.8C55.7998 13.1196 57.6802 15 59.9998 15Z" fill="#141414"/>
          <path d="M68.3997 15C70.7193 15 72.5997 13.1196 72.5997 10.8C72.5997 8.4804 70.7193 6.6 68.3997 6.6C66.0801 6.6 64.1997 8.4804 64.1997 10.8C64.1997 13.1196 66.0801 15 68.3997 15Z" fill="#141414"/>
          </g>
          <defs>
          <clipPath id="clip0_75_930">
          <rect width="30" height="30" fill="white"/>
          </clipPath>
          <clipPath id="clip1_75_930">
          <rect width="18" height="18" fill="white" transform="translate(36 6)"/>
          </clipPath>
          <clipPath id="clip2_75_930">
          <rect width="8.4" height="8.4" fill="white" transform="translate(60 10.8)"/>
          </clipPath>
          </defs>
        </svg>
      `,
            leftArrow: `
        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21 9C21 9.62132 20.4963 10.125 19.875 10.125L3.91812 10.125L10.1547 16.0641C10.6026 16.4947 10.6166 17.2069 10.1859 17.6548C9.75529 18.1026 9.04312 18.1166 8.59525 17.6859L0.345253 9.81094C0.124664 9.59883 -4.06779e-07 9.30602 -3.93403e-07 9C-3.80026e-07 8.69398 0.124664 8.40117 0.345253 8.18906L8.59525 0.314064C9.04312 -0.116579 9.75529 -0.102615 10.1859 0.345254C10.6166 0.793122 10.6026 1.5053 10.1547 1.93594L3.91812 7.875L19.875 7.875C20.4963 7.875 21 8.37868 21 9Z" fill="#808080"/>
        </svg>
      `,
            rightArrow: `
        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.93403e-07 9C-4.20561e-07 8.37868 0.503679 7.875 1.125 7.875L17.0819 7.875L10.8453 1.93593C10.3974 1.50529 10.3834 0.793119 10.8141 0.345249C11.2447 -0.102618 11.9569 -0.116583 12.4047 0.31406L20.6547 8.18906C20.8753 8.40116 21 8.69398 21 9C21 9.30602 20.8753 9.59883 20.6547 9.81093L12.4047 17.6859C11.9569 18.1166 11.2447 18.1026 10.8141 17.6547C10.3834 17.2069 10.3974 16.4947 10.8453 16.0641L17.0819 10.125L1.125 10.125C0.503679 10.125 -3.66244e-07 9.62132 -3.93403e-07 9Z" fill="white"/>
        </svg>
      `,
            analytics: `
                <svg
                    width="82"
                    height="82"
                    viewBox="0 0 82 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.5"
                        y="0.5"
                        width="81"
                        height="81"
                        rx="40.5"
                        stroke="url(#paint0_linear_104_11410)"
                    />
                    <rect
                        x="0.5"
                        y="0.5"
                        width="81"
                        height="81"
                        rx="40.5"
                        stroke="url(#paint1_linear_104_11410)"
                    />
                    <rect
                        x="10.5"
                        y="10.5"
                        width="61"
                        height="61"
                        rx="30.5"
                        stroke="url(#paint2_linear_104_11410)"
                    />
                    <rect
                        x="10.5"
                        y="10.5"
                        width="61"
                        height="61"
                        rx="30.5"
                        stroke="url(#paint3_linear_104_11410)"
                    />
                    <path
                        d="M50.0312 27.1875C48.5642 27.1875 47.375 28.3767 47.375 29.8438V52.1562C47.375 53.6233 48.5642 54.8125 50.0312 54.8125H51.0938C52.5608 54.8125 53.75 53.6233 53.75 52.1562V29.8438C53.75 28.3767 52.5608 27.1875 51.0938 27.1875H50.0312Z"
                        fill="#A685FA"
                    />
                    <path
                        d="M37.8125 36.2188C37.8125 34.7517 39.0017 33.5625 40.4688 33.5625H41.5312C42.9983 33.5625 44.1875 34.7517 44.1875 36.2188V52.1562C44.1875 53.6233 42.9983 54.8125 41.5312 54.8125H40.4688C39.0017 54.8125 37.8125 53.6233 37.8125 52.1562V36.2188Z"
                        fill="#A685FA"
                    />
                    <path
                        d="M28.25 42.5938C28.25 41.1267 29.4392 39.9375 30.9062 39.9375H31.9688C33.4358 39.9375 34.625 41.1267 34.625 42.5938V52.1562C34.625 53.6233 33.4358 54.8125 31.9688 54.8125H30.9062C29.4392 54.8125 28.25 53.6233 28.25 52.1562V42.5938Z"
                        fill="#A685FA"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_104_11410"
                            x1="6.75"
                            y1="86.5"
                            x2="85.75"
                            y2="-5.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#A685FA" />
                            <stop
                                offset="0.323723"
                                stop-color="#A685FA"
                                stop-opacity="0"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_104_11410"
                            x1="81.75"
                            y1="-10.5"
                            x2="6.75"
                            y2="82"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#A685FA" />
                            <stop
                                offset="0.576615"
                                stop-color="#A685FA"
                                stop-opacity="0"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_104_11410"
                            x1="3.25"
                            y1="13.5"
                            x2="71.75"
                            y2="72"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#A685FA" />
                            <stop
                                offset="0.323723"
                                stop-color="#A685FA"
                                stop-opacity="0"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_104_11410"
                            x1="84.25"
                            y1="86"
                            x2="12.25"
                            y2="35"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#A685FA" />
                            <stop
                                offset="0.576615"
                                stop-color="#A685FA"
                                stop-opacity="0"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            `,
            maintenance: `<svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint0_linear_104_11426)"/>
<rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint1_linear_104_11426)"/>
<rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint2_linear_104_11426)"/>
<rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint3_linear_104_11426)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.1875 43.125C27.1875 36.6702 32.4202 31.4375 38.875 31.4375C39.4618 31.4375 39.9375 31.9132 39.9375 32.5V42.0625H49.5C50.0868 42.0625 50.5625 42.5382 50.5625 43.125C50.5625 49.5798 45.3298 54.8125 38.875 54.8125C32.4202 54.8125 27.1875 49.5798 27.1875 43.125Z" fill="#A685FA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.0625 28.25C42.0625 27.6632 42.5382 27.1875 43.125 27.1875C49.5798 27.1875 54.8125 32.4202 54.8125 38.875C54.8125 39.4618 54.3368 39.9375 53.75 39.9375H43.125C42.5382 39.9375 42.0625 39.4618 42.0625 38.875V28.25Z" fill="#A685FA"/>
<defs>
<linearGradient id="paint0_linear_104_11426" x1="6.75" y1="86.5" x2="85.75" y2="-5.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_104_11426" x1="81.75" y1="-10.5" x2="6.75" y2="82" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_104_11426" x1="3.25" y1="13.5" x2="71.75" y2="72" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_104_11426" x1="84.25" y1="86" x2="12.25" y2="35" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`,
            financial: `<svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint0_linear_104_11473)"/>
<rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint1_linear_104_11473)"/>
<rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint2_linear_104_11473)"/>
<rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint3_linear_104_11473)"/>
<path d="M53.75 33.0313C53.75 36.8455 48.0416 39.9375 41 39.9375C33.9584 39.9375 28.25 36.8455 28.25 33.0313C28.25 29.217 33.9584 26.125 41 26.125C48.0416 26.125 53.75 29.217 53.75 33.0313Z" fill="#A685FA"/>
<path d="M41 42.0625C44.804 42.0625 48.3532 41.2319 51.0277 39.7832C52.0052 39.2537 52.9351 38.5978 53.7142 37.822C53.7379 37.9943 53.75 38.1682 53.75 38.3438C53.75 42.158 48.0416 45.25 41 45.25C33.9584 45.25 28.25 42.158 28.25 38.3438C28.25 38.1682 28.2621 37.9943 28.2858 37.822C29.0649 38.5978 29.9948 39.2537 30.9723 39.7832C33.6468 41.2319 37.196 42.0625 41 42.0625Z" fill="#A685FA"/>
<path d="M41 47.375C44.804 47.375 48.3532 46.5444 51.0277 45.0957C52.0052 44.5662 52.9351 43.9103 53.7142 43.1345C53.7379 43.3068 53.75 43.4807 53.75 43.6562C53.75 47.4705 48.0416 50.5625 41 50.5625C33.9584 50.5625 28.25 47.4705 28.25 43.6562C28.25 43.4807 28.2621 43.3068 28.2858 43.1345C29.0649 43.9103 29.9948 44.5662 30.9723 45.0957C33.6468 46.5444 37.196 47.375 41 47.375Z" fill="#A685FA"/>
<path d="M41 52.6875C44.804 52.6875 48.3532 51.8569 51.0277 50.4082C52.0052 49.8787 52.9351 49.2228 53.7142 48.447C53.7379 48.6193 53.75 48.7932 53.75 48.9687C53.75 52.783 48.0416 55.875 41 55.875C33.9584 55.875 28.25 52.783 28.25 48.9687C28.25 48.7932 28.2621 48.6193 28.2858 48.447C29.0649 49.2228 29.9948 49.8787 30.9723 50.4082C33.6468 51.8569 37.196 52.6875 41 52.6875Z" fill="#A685FA"/>
<defs>
<linearGradient id="paint0_linear_104_11473" x1="6.75" y1="86.5" x2="85.75" y2="-5.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_104_11473" x1="81.75" y1="-10.5" x2="6.75" y2="82" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_104_11473" x1="3.25" y1="13.5" x2="71.75" y2="72" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_104_11473" x1="84.25" y1="86" x2="12.25" y2="35" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
            legal: `<svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint0_linear_104_11495)"/>
<rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint1_linear_104_11495)"/>
<rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint2_linear_104_11495)"/>
<rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint3_linear_104_11495)"/>
<path d="M47.915 30.156C44.9808 31.3298 41.8383 32.0937 38.5576 32.3768C37.612 32.4584 36.6547 32.5 35.6875 32.5H34.625C30.5174 32.5 27.1875 35.8299 27.1875 39.9375C27.1875 43.6203 29.8642 46.6779 33.3783 47.271C33.8518 49.2104 34.5089 51.0779 35.33 52.8538C35.9874 54.2758 37.7017 54.7239 38.9887 53.9809L39.9185 53.444C41.1653 52.7242 41.5699 51.1877 41.0123 49.9475C40.6796 49.2075 40.3826 48.448 40.1237 47.6711C42.84 48.0367 45.451 48.7333 47.915 49.719C48.9431 46.6458 49.5 43.3567 49.5 39.9375C49.5 36.5183 48.9431 33.2293 47.915 30.156Z" fill="#A685FA"/>
<path d="M49.8692 29.2994C51.0075 32.6366 51.625 36.2149 51.625 39.9375C51.625 43.6601 51.0074 47.2384 49.8692 50.5757C49.791 50.8048 49.7107 51.033 49.6277 51.2598C49.426 51.8108 49.7092 52.4211 50.2602 52.6228C50.8112 52.8245 51.4215 52.5413 51.6232 51.9903C51.8215 51.4484 52.0069 50.9002 52.1789 50.3462C52.9208 47.9566 53.4139 45.458 53.6281 42.881C54.3605 42.1182 54.8125 41.0803 54.8125 39.9375C54.8125 38.7948 54.3605 37.7569 53.6281 36.9941C53.4139 34.417 52.9208 31.9184 52.1789 29.5289C52.0069 28.9748 51.8215 28.4267 51.6232 27.8848C51.4215 27.3338 50.8112 27.0506 50.2602 27.2523C49.7092 27.454 49.426 28.0642 49.6277 28.6153C49.7107 28.8421 49.7911 29.0702 49.8692 29.2994Z" fill="#A685FA"/>
<defs>
<linearGradient id="paint0_linear_104_11495" x1="6.75" y1="86.5" x2="85.75" y2="-5.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_104_11495" x1="81.75" y1="-10.5" x2="6.75" y2="82" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_104_11495" x1="3.25" y1="13.5" x2="71.75" y2="72" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.323723" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_104_11495" x1="84.25" y1="86" x2="12.25" y2="35" gradientUnits="userSpaceOnUse">
<stop stop-color="#A685FA"/>
<stop offset="0.576615" stop-color="#A685FA" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
        };

        this.innerHTML = icons[iconName] || invalidIcon;
    }
}

customElements.define('my-icon', MyIcon);
