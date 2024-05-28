class Card extends HTMLElement {
  constructor(post) { // id, image, title, body, author, created
    super();
    this.id = post.id;
    this.title = post.title;
    this.author = post.author;
    this.created = new Date(post.created).toDateString();

    this.img = post.media ? post.media.url : "https://picsum.photos/200";
    this.alt = post.media ? post.media.alt : "Lorem Picsum: The Lorem Ipsum for photos";
    this.body = post.body ? post.body : "";
  }

  connectedCallback() {
    this.render();
    this.listener();
  }

  render() {
    this.classList.add("card-container");
    this.innerHTML = `
        <div class="hero-container">
            <img src="${this.img}" alt="${this.alt}">
         </div>
         <div class="body-content">
            <div class="author">
                <div>
                    <i class="nf nf-fa-calendar"></i>
                    ${this.created}
                </div>
                <div>
                    <i class="nf nf-fa-user"></i>
                    ${this.author}
                </div>
            </div>
            <h3>${this.title}</h3>
            <div class="excerpt">
                <p>${this.body}</p> 
                <div class="excerpt-gradient"></div>
            </div>
        </div>
        <div class="actions">
            <button class="btn card-read-more">
                Les mer
            </button>
        </div>
    `;
  }

  listener() {
    const readMore = this.querySelector(".card-read-more");

    readMore.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = `/post/index.html?id=${this.id}`;
    });
  }
}

export default Card;
