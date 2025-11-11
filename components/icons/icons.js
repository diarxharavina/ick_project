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
    // console.log('Name: ', name);
    // console.log('oldValue: ', oldValue);
    // console.log('newValue: ', newValue);
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

    };

    this.innerHTML = icons[iconName] || invalidIcon;
  }
}

customElements.define('my-icon', MyIcon);
