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
    };

    this.innerHTML = icons[iconName] || invalidIcon;
  }
}

customElements.define('my-icon', MyIcon);
