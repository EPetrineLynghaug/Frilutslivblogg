class Card extends HTMLElement{
    constructor(id,image,title,descption,author){
     super()
     this.id = id;
     this.img = image;
     this.title = title;
     this.desc = descption;
     this.author = author;
    }



    connectedCallback() {
        this.render();

    };

    render() {
    this.classList.add("card-container")
    this.innerHTML= `
        <div class="hero-container">
            <img src="${this.img}">
         </div>
         <div class="body-content">
            <div class="author">
                <div>
                    <i class="nf nf-fa-calendar"></i>
                    28. April 2024
                </div>
                <div>
                    <i class="nf nf-fa-user"></i>
                    ${this.author}
                </div>
            </div>
            <h3>${this.title}</h3>
            <p>${this.desc}</p> 
        </div>
        <div class="actions">
            <button class="btn card-read-more">
                Les mer
            </button>
        </div>
    `;
    }
    
};


export default Card; 