import BloggService from "../services/blogg.service.js";
class Admin extends HTMLElement {
  constructor() {
    super();
    this.bloggService = new BloggService();
    this.posts = null;
  }

  async connectedCallback() {
    this.posts = await this.bloggService.getAllPosts();

    this.render();
    this.listner();
  }

  renderListItem(post) {
    return `
      <li>
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
      <h1>Admin Panel</h1>

      <ul class="admin-list">
        ${ this.posts.map((post) => this.renderListItem(post)).join('') }
      </ul>
    `;
  }

 listner(){
    const editButtonList = this.querySelectorAll(".edit-btn"); // [ <button></button> ]
    const deleteBtnList = this.querySelectorAll(".delete-btn");

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
          console.log('Posten ble slettet');
          notify.classList.remove('hidden');
          notify.classList.add('success');
          notifyTitle.innerHTML = 'Post slettet!';
          notifyBody.innerHTML = 'Posten ble slettet';
        } else {
            // !TODO
          console.log('Posten ble ikke slettet!');
        }

        
      })  
     
   

    })
   
 }  
}
export default Admin;
