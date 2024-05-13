class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="footer-top">
          <div class="footer-logo">
            <img src="../media/Eventyrer.PNG" alt="Brandinglogo">
            <div class="footer-logo-shadow"></div>
          </div>
            <b>Petrine Lynghaug</b>
            <span class="copy-right">Copyright © 2024 - All right reserved</span>
        </div>
        <ul class="footer-bottom">
            <li>
                <a>Hjem</a>
            </li>
            <li>
                <a>Om meg</a>
            </li>
            <li>
                <a>Login</a>
            </li>
        </ul>
    `;
  }
}
export default Footer;
