// All posts: https://v2.api.noroff.dev/blog/posts/petrine
// Single post: https://v2.api.noroff.dev/blog/posts/petrine/3fa85f64-5717-4562-b3fc-2c963f66afa6

import Navbar from './navbar.component.js';
import Carousel from './carousel.component.js';
import Card from './card.component.js';
import Login from './login.component.js';
import Register from './register.component.js';

//let postContainer = document.querySelector(".post-container");

customElements.define("app-navbar", Navbar);
customElements.define('app-carousel', Carousel);
customElements.define('app-card', Card);
customElements.define('app-login', Login);
customElements.define('app-register', Register);

// TODO: Refactor cards for homepage

// let cards = [
//     {
//         id: 1,
//         image: "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         title: "blogg er kav",
//         description: "heihei takk for at du leser bloggen",
//         author: "Petrine Lynghaug"
//     },
//     {
//         id: 2,
//         image: "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         title: "blogg er kav",
//         description: "heihei takk for at du leser bloggen",
//         author: "Petrine Lynghaug"
//     },
//     {
//         id: 3,
//         image: "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         title: "blogg er kav",
//         description: "heihei takk for at du leser bloggen",
//         author: "Petrine Lynghaug"
//     },
//     {
//         id: 4,
//         image: "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         title: "blogg er kav",
//         description: "heihei takk for at du leser bloggen",
//         author: "Petrine Lynghaug"
//     },
//     {
//         id: 5,
//         image: "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         title: "blogg er kav",
//         description: "heihei takk for at du leser bloggen",
//         author: "Petrine Lynghaug"
//     },
// ];

// cards.map(c => {
//     let newCard = new Card(c.id, c.image, c.title, c.description, c.author);

//     postContainer.append(newCard);
// })