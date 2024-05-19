// All posts: https://v2.api.noroff.dev/blog/posts/petrine
// Single post: https://v2.api.noroff.dev/blog/posts/petrine/3fa85f64-5717-4562-b3fc-2c963f66afa6

import Login from './components/admin/login.component.js';
import Register from './components/admin/register.component.js';
import Admin from './components/admin/admin.component.js';
import CreatePost from './components/admin/createPost.component.js';
import EditPost from './components/admin/editPost.component.js';

import Navbar from './components/navbar.component.js';
import Carousel from './components/carousel.component.js';
import Card from './components/card.component.js';
import BloggCards from './components/blogg.component.js';
import SinglePost from './components/singlepost.component.js';
import Footer from './components/footer.component.js';
import SidebarComponent from './components/singlepost-sidebar.component.js';

customElements.define("app-navbar", Navbar);
customElements.define('app-carousel', Carousel);
customElements.define('app-card', Card);
customElements.define('app-blogg', BloggCards);
customElements.define('app-login', Login);
customElements.define('app-register', Register);
customElements.define('app-make', CreatePost);
customElements.define('app-singlepost', SinglePost);
customElements.define('app-admin', Admin);
customElements.define('app-edit', EditPost);
customElements.define('app-footer', Footer);
customElements.define('app-sidebar', SidebarComponent);