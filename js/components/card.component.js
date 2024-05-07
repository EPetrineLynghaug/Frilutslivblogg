class Card extends HTMLElement{
    constructor(id, image, title, body, author, created){
     super()
     this.id = id;
     this.title = title;
     this.author = author;
     this.created = new Date(created).toDateString();

     this.img = image ? image.url : 'https://picsum.photos/200';
     this.alt = image ? image.alt : 'Lorem Picsum: The Lorem Ipsum for photos';
     this.body = body ? body : '';
    }



    connectedCallback() {
        this.render();
        this.listener();
    };

    render() {
    this.classList.add("card-container")
    this.innerHTML= `
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
            <p>${this.body}</p> 
        </div>
        <div class="actions">
            <button class="btn card-read-more">
                Les mer
            </button>
        </div>
    `;
    }
    
    listener(){
       const readMore = this.querySelector(".card-read-more");
       
        readMore.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = `/post/index.html?id=${this.id}`
        })
    };
};


export default Card; 