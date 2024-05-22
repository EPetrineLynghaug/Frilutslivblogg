import AuthService from "../../services/auth.service.js";
import BloggService from "../../services/blogg.service.js";

class Admin extends HTMLElement {
  constructor() {
    super();
    this.authService = new AuthService();
    this.bloggService = new BloggService();
    this.posts = null;
  }

  async connectedCallback() {
    if (!this.authService.isLoggedIn()) {
      window.location.href = '/account/login.html';
    }

    this.posts = await this.bloggService.getAllPosts();

    this.render();
    this.listner();
  }

  renderListItem(post) {
    return `
      <li data-id="${post.id}">
        <img class="thumbnail" src="${post.media ? post.media.url : ''}">
        <span>${post.title}</span>
        <button data-id="${post.id}" class="btn edit-btn">Rediger</button>
        <button data-id="${post.id}" class="btn delete-btn">Slett</button>
      </li>
    `;
  }

  render() {
    this.classList.add("admin-container");
    this.innerHTML = `
         <div class="notification hidden">
          <span class="notification-title"></span>
          <span class="notification-body"></span>
        </div>
      <h1 class="admin-title">Velkommen til admin Panelet</h1>
      <a href=/post/make.html class="btn make-btn btn-new-post">Opprett nytt innlegg</a>

      <ul class="admin-list">
        ${ this.posts.map((post) => this.renderListItem(post)).join('') }
      </ul>
    `;
  }

 listner() {
    const editButtonList = this.querySelectorAll(".edit-btn"); 
    const deleteBtnList = this.querySelectorAll(".delete-btn");

    const notify = this.querySelector('.notification');
    const notifyTitle = this.querySelector('.notification-title');
    const notifyBody = this.querySelector('.notification-body');

    editButtonList.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const id = button.getAttribute('data-id');
        window.location.href = `/post/edit.html?id=${id}`;
      });
    });

    deleteBtnList.forEach((button) => {
      button.addEventListener("click", async (event) => {
        event.preventDefault();
        const id = button.getAttribute('data-id');
        const deletedPost = await this.bloggService.deletePost(id);

        if (deletedPost) {
          const listElement = this.querySelector(`[data-id="${id}"]`);
          const postIndex = this.posts.findIndex((post) => post.id === id);
          
          if (postIndex !== -1) {
            this.posts.splice(postIndex, 1);
            listElement.remove();
          }

          notify.classList.remove('hidden');
          notify.classList.add('success');
          notifyTitle.innerHTML = 'Post slettet!';
          notifyBody.innerHTML = 'Posten ble slettet';
        } else {
          notify.classList.remove('hidden');
          notify.classList.add('error');
          notifyTitle.innerHTML = 'Posten ble ikke slettet!';
          notifyBody.innerHTML = 'Posten ble ikke slettet, prøv igjen senere';
        } 
      }); 
    }); 
 }  
}

export default Admin;
