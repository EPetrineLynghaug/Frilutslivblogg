import BloggService from "../services/blogg.service.js";
import Card from "./card.component.js";

class BloggCards extends HTMLElement {
  constructor() {
    super();

    this.bloggService = new BloggService();

    this.postContainer = document.querySelector(".post-container");
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    const allPosts = await this.bloggService.getAllPosts(); // allPosts = [...] || allPosts = false

    this.classList.add("post-container");
    allPosts.map((post) => {
      let newPost = {
        id: post.id,
        media: post.media,
        title: post.title,
        body: post.body,
        author: post.author.name,
        created: post.created
      };

      let newCard = new Card(newPost);
      this.append(newCard);
    });
  }
}

export default BloggCards;
