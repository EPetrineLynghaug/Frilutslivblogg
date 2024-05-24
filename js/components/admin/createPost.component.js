import AuthService from "../../services/auth.service.js";
import BloggService from "../../services/blogg.service.js";

class CreatePost extends HTMLElement {
  constructor() {
    super();

    this.authService = new AuthService();
    this.bloggService = new BloggService();
  }

  connectedCallback() {
    this.render().listener();
  }

  render() {
    this.classList.add("make-container");
    this.innerHTML = `
      <form id="blogForm" enctype="multipart/form-data">
        <div class="notification hidden">
          <span class="notification-title"></span>
          <span class="notification-body"></span>
        </div>
        <h1>Opprett et nytt blogginnlegg</h1>

        <input type="text" id="image" name="image" placeholder="Bilde URL"><br>
        <input type="text" id="title" name="title" placeholder="Tittel"><br>
        <textarea id="text" name="text" placeholder="Tekst på maks 500 tegn" maxlength="500"></textarea><br>

        <div class="actions">
          <a href="/post/admin.html" class="btn btn-back">Tilbake</a>
          <button type="button" class="btn post-btn">Publiser</button>
        </div>
      </form>
    `;

    return this;
  }

  listener() {
    const submitButton = this.querySelector(".post-btn");

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

      const response = await this.bloggService.createPost(post);

      if (response) {
        notify.classList.remove("hidden");
        notify.classList.add("success");
        notifyTitle.innerHTML = "Post opprettet!";
        notifyBody.innerHTML =
          "Posten ble opprettet, gå tilbake til administrasjons panelet for å se posten";
      } else {
        notify.classList.remove("hidden");
        notify.classList.add("error");
        notifyTitle.innerHTML = "Det skjedde en feil!";
        notifyBody.innerHTML =
          "Posten ble ikke opprettet, sjekk at du er logget inn!";
      }
    });

    return this;
  }
}
export default CreatePost;
