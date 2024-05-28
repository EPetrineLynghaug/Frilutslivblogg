import BloggService from "../services/blogg.service.js";

class SidebarComponent extends HTMLElement {
  constructor() {
    super();

    this.bloggService = new BloggService();

    this.prevPost = null;
    this.nextPost = null;
    this.currentPostId = this.getAttribute("id");
  }

  selectNextPost(allPosts, idx) {
    if (idx === allPosts.length - 1) {
      return allPosts[0];
    } else {
      return allPosts[idx + 1];
    }
  }

  selectPrevPost(allPosts, idx) {
    if (idx === 0) {
      return allPosts[allPosts.length - 1];
    } else {
      return allPosts[idx - 1];
    }
  }

  async getPosts() {
    const allPosts = await this.bloggService.getAllPosts();
    const idx = allPosts.findIndex((post) => post.id === this.currentPostId);

    if (idx !== -1) {
      this.prevPost = this.selectPrevPost(allPosts, idx);
      this.nextPost = this.selectNextPost(allPosts, idx);
    }
  }

  async connectedCallback() {
    await this.getPosts();
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>Les flere poster</h2>

      <div class="sidebar-prev-box">
        <div class="sidebar-box-card">
          <img src="${this.prevPost.media.url}" />
          <div class="sidebar-box-content">
            <a href="/post/index.html?id=${this.prevPost.id}"><i class="nf nf-fa-chevron_left"></i> Les forrige post</a>
            <span class="sidebar-box-title">${this.prevPost.title}</span>
            <span class="sidebar-box-author">${this.prevPost.author.name}</span>
          </div>
        </div>
      </div>

      <div class="sidebar-next-box">
        <div class="sidebar-box-card">
          <img src="${this.nextPost.media.url}" />
          <div class="sidebar-box-content">
            <a href="/post/index.html?id=${this.nextPost.id}">Les neste post <i class="nf nf-fa-chevron_right"></i></a>
            <span class="sidebar-box-title">${this.nextPost.title}</span>
            <span class="sidebar-box-author">${this.nextPost.author.name}</span>
          </div>
        </div>
      </div>
    `;
  }
}

export default SidebarComponent;
