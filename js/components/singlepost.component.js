import BloggService from "../services/blogg.service.js";
import SidebarComponent from "./singlepost-sidebar.component.js";

class SinglePost extends HTMLElement {
  constructor() {
    super();
    this.bloggService = new BloggService();
    this.post = null;
  }

  async connectedCallback() {
    await this.getSinglePost();
    this.render();
    this.listener();
  }

  async getSinglePost() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get(`id`);

    this.post = await this.bloggService.getSinglePost(id);
  }

  render() {
    this.classList.add("single-post-page");
    this.innerHTML = `
      <img src="${
        this.post.media && this.post.media.url
          ? this.post.media.url
          : "https://picsum.photos/1920/750"
      }" alt="${
      this.post.media && this.post.media.alt
        ? this.post.media.alt
        : "Lorem ipsum bilde"
    }" />
      <div class="single-post-wrapper">
        <div class="single-post-content">
          <div class="author">
            <div>
              <span class="light-text">Skrevet</span> ${new Date(
                this.post.created
              ).toDateString()} <span class="light-text">av</span> ${
      this.post.author.name
    }
            </div>
          </div>
          <h1>${this.post.title}</h1>
          <p>
            ${this.post.body ? this.post.body : "Denne posten har ingen tekst"}
          </p>
          <div class="single-post-actions">
            <button class="btn btn-back">Tilbake</button>
          </div>
        </div>
        <app-sidebar id="${this.post.id}"></app-sidebar>
      </div>
    `;
  }
  listener() {
    const btnBack = this.querySelector(".btn-back");

    btnBack.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "/index.html";
    });
  }
}
export default SinglePost;
