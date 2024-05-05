// All posts: https://v2.api.noroff.dev/blog/posts/petrine
// Single post: https://v2.api.noroff.dev/blog/posts/petrine/3fa85f64-5717-4562-b3fc-2c963f66afa6

import Navbar from './navbar.component.js';
import Carousel from './carousel.component.js';
import Card from './card.component.js';
import BloggCards from './blogg.component.js';
import Login from './login.component.js';
import Register from './register.component.js';

customElements.define("app-navbar", Navbar);
customElements.define('app-carousel', Carousel);
customElements.define('app-card', Card);
customElements.define('app-blogg', BloggCards);
customElements.define('app-login', Login);
customElements.define('app-register', Register);