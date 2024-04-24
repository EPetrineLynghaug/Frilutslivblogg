// All posts: https://v2.api.noroff.dev/blog/posts/petrine
// Single post: https://v2.api.noroff.dev/blog/posts/petrine/3fa85f64-5717-4562-b3fc-2c963f66afa6

import Navbar from './navbar.component.js';
import Carousel from './carousel.component.js';

let baseUrl = "https://v2.api.noroff.dev/";

customElements.define("app-navbar", Navbar);
customElements.define('app-carousel', Carousel);