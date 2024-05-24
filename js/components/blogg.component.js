import Card from "./card.component.js";
import BloggService from "../services/blogg.service.js";

class BloggCards extends HTMLElement {
  constructor() {
    super();

    this.postContainer = document.querySelector(".post-container");
    this.bloggService = new BloggService();
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    const allPosts = await this.bloggService.getAllPosts(); // allPosts = [...] || allPosts = false

    this.classList.add("post-container");
    allPosts.map((post) => {
      let newCard = new Card(
        post.id,
        post.media,
        post.title,
        post.body,
        post.author.name,
        post.created
      );
      this.append(newCard);
    });
  }
}

export default BloggCards;
