// Create a class for the element
class Navbar extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    this.branding = 'Eventyrer';
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
  }

  connectedCallback() {
    this.render()
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
        ${ this.menu.map((item) => this.menuItem(item)) }
      </nav>
    `;
  }
}

export default Navbar;