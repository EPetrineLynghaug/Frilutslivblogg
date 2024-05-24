// Create a class for the element
class Navbar extends HTMLElement {
  constructor() {
    super();
    this.menuOpen = false;

    
    this.menu = [
      {
        text: 'Hjem',
        href: '/index.html'
      },
      {
        text: 'Om meg',
        href: '/about.html'
      },
    ];
  } //constructor//

  currentPage(pagePath) {
    const pathname = window.location.pathname;
    return pagePath === pathname
      ? true
      : false;
  }

  connectedCallback() {
    this.render()
    this.listener();
  }

  menuItem(item) {
    return `
      <li class="${this.currentPage(item.href) ? 'active' : 'inactive'}">
        <a href="${item.href}">${item.text}</a>
      </li>
    `;
  }

  render() {
    this.innerHTML = `
      <div class="branding">
        <img src="../media/Eventyrer.png">
      </div>

      <nav class="desktop-menu">
        <ul>
          ${this.menu.map(item => this.menuItem(item)).join('')}
        </ul>
      </nav>
      <nav class="mobile-menu">
        <button id="menuToggle">
          <i class="nf nf-md-menu"></i> Meny
        </button>

        <div class="dropdown">
          <ul>
            <li>
              <a href="/index.html">Hjem</a>
            </li>
            <li>
              <a href="/about.html">Om meg</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }//render//

  listener(){
    let menuButton = this.querySelector("#menuToggle");
    let dropdownMenu = this.querySelector(".dropdown")
    
    menuButton.addEventListener("click", (event) => {
      event.preventDefault();

      this.menuOpen = !this.menuOpen;

      if (this.menuOpen) {
        menuButton.innerHTML = '<i class="nf nf-md-close"></i> Meny';
        dropdownMenu.classList.add("open");
      } else {
        menuButton.innerHTML = '<i class="nf nf-md-menu"></i> Meny'
        dropdownMenu.classList.remove("open");
      }
    });

  }

} 


export default Navbar;