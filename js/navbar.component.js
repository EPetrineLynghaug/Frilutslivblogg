// Create a class for the element
class Navbar extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    this.menuOpen = false;

    this.branding = 'Friluftsliv';
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


  connectedCallback() {
    this.render()
    this.listener();
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  menuItem(item) {
    return `<a href="${item.href}">${item.text}</a>`;
  }

  render() {
    this.innerHTML = `
      <div class="branding">
        ${this.branding}
      </div>

      <nav>
        <button id="menuToggle">
          <i class="nf nf-md-menu"></i> Meny
        </button>

        <div class="dropdown">
          <ul>
            <li>
              <a href="#">Hjem</a>
            </li>
            <li>
              <a href="#">Om meg</a>
            </li>
          </ul>
        </div>
      </nav>

    `;
  }//render//

  listener(){
    let menuButton = this.querySelector("#menuToggle");
    
    menuButton.addEventListener("click", (event) => {
      event.preventDefault();

      this.menuOpen = !this.menuOpen;

      if (this.menuOpen) {
        menuButton.innerHTML = '<i class="nf nf-md-close"></i> Meny';
      } else {
        menuButton.innerHTML = '<i class="nf nf-md-menu"></i> Meny'
      }
    });

  }//listener//

} //class navbar//


export default Navbar;