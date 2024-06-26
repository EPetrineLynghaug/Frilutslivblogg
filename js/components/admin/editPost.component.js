import AuthService from "../../services/auth.service.js";
import BloggService from "../../services/blogg.service.js";

class EditPost extends HTMLElement {
  constructor() {
    super();

    this.authService = new AuthService();
    this.bloggService = new BloggService();

    this.post = null;
  }

  async getSinglePost() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    return await this.bloggService.getSinglePost(id);
  }

  async connectedCallback() {
    if (!this.authService.isLoggedIn()) {
      window.location.href = '/account/login.html';
    }

    this.post = await this.getSinglePost();

    this.render();
    this.listener();
  }

  render() {
    this.classList.add("make-container");
    this.innerHTML = `
      <form id="blogForm" enctype="multipart/form-data">
        <div class="notification hidden">
          <span class="notification-title"></span>
          <span class="notification-body"></span>
        </div>
        <h1>Oppdater ${this.post.title}</h1>

        <input type="text" id="image" name="image" placeholder="Bilde URL" value="${
          this.post.media && this.post.media.url ? this.post.media.url : ""
        }"><br>
        <input type="text" id="title" name="title" placeholder="Tittel" value="${
          this.post.title
        }"><br>
        <textarea id="text" name="text" placeholder="Tekst på maks 500 tegn" maxlength="500">${
          this.post.body
        }</textarea><br>

        <div class="actions">
          <button type="button" class="btn slett-btn">Tilbake</button>
          <button type="button" class="btn post-btn">Oppdater</button>
        </div>
      </form>
    `;
  }

  listener() {
    const submitButton = this.querySelector(".post-btn");
    const backButton = this.querySelector(".slett-btn");

    const notify = this.querySelector(".notification");
    const notifyTitle = this.querySelector(".notification-title");
    const notifyBody = this.querySelector(".notification-body");

    const imageInput = this.querySelector("#image");
    const titleInput = this.querySelector("#title");
    const textInput = this.querySelector("#text");

    submitButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const post = {
        title: titleInput.value,
        body: textInput.value,
        media: {
          url: imageInput.value,
        },
      };

      const response = await this.bloggService.editPost(post, this.post.id);

      if (response) {
        notify.classList.remove("hidden");
        notify.classList.add("success");
        notifyTitle.innerHTML = "Post oppdatert!";
        notifyBody.innerHTML =
          "Posten ble oppdatert, gå tilbake til administrasjons panelet for å se posten";
      } else {
        notify.classList.remove("hidden");
        notify.classList.add("error");
        notifyTitle.innerHTML = "Det skjedde en feil!";
        notifyBody.innerHTML =
          "Posten ble ikke oppdatert, sjekk at du er logget inn!";
      }
    });

    backButton.addEventListener("click", async (event) => {
      event.preventDefault();

      window.location.href = "/post/admin.html";
    });
  }
}

export default EditPost;
