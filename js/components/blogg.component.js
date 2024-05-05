import Card from './card.component.js';

class BloggCards extends HTMLElement {
  constructor() {
    super();

    this.postContainer = document.querySelector(".post-container");
    this.bloggCards = [
      {
        id: 1,
        image:
          "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "blogg er kav",
        description: "heihei takk for at du leser bloggen",
        author: "Petrine Lynghaug",
      },
      {
        id: 2,
        image:
          "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "blogg er kav",
        description: "heihei takk for at du leser bloggen",
        author: "Petrine Lynghaug",
      },
      {
        id: 3,
        image:
          "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "blogg er kav",
        description: "heihei takk for at du leser bloggen",
        author: "Petrine Lynghaug",
      },
      {
        id: 4,
        image:
          "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "blogg er kav",
        description: "heihei takk for at du leser bloggen",
        author: "Petrine Lynghaug",
      },
      {
        id: 5,
        image:
          "https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "blogg er kav",
        description: "heihei takk for at du leser bloggen",
        author: "Petrine Lynghaug",
      },
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('post-container');
    this.bloggCards.map((c) => {
      let newCard = new Card(c.id, c.image, c.title, c.description, c.author);
      this.append(newCard);
    });
  }
}

export default BloggCards;