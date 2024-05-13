import BloggService from "../services/blogg.service.js";

class Carousel extends HTMLElement {
  constructor() {
    super();

    this.bloggService = new BloggService();

    this.autoPlay = true;
    this.activeSlideIndex = 0;
    this.slides = [];

    this.idList = [
      "edb2beef-2061-45bc-bbf0-ba75932fe760",
      "4f3ab5db-2c22-421f-89ff-03cb220893db",
      "66de9bf8-ea06-4ad4-885e-dc9124e63834",
    ];
  }

  async getPosts() {
    // ?limit=3

    return await this.bloggService.getAllPosts(3);
  }

  async connectedCallback() {
    this.slides = await this.getPosts();

    this.render();
    this.listener();
  }

  newSlide(slide) {
    return `
      <div class="slide">
        <img src="${slide.media ? slide.media.url : ""}" alt="${slide.title}" />
        <div class="caption">
          <h2>${slide.title}</h2>
          <p>${slide.body}</p>
          <a href="post.html?id=${
            slide.id
          }" class="btn app-btn-info">Les mer</a>
        </div>
      </div>
    `;
  }

  newIndicator(image, altText) {
    return `
      <div class="indicator">
        <img src="${image}" alt="${altText}" />
      </div>
    `;
  }

  render() {
    this.classList.add("carousel");
    this.innerHTML = `
      ${this.slides.map((slide) => this.newSlide(slide)).join("")}

      <button class="prev slide-btn-prev">
        <i class="nf nf-fa-chevron_left"></i>
      </button>
      <button class="next slide-btn-next">
        <i class="nf nf-fa-chevron_right"></i>
      </button>

      <div class="indicators">
        ${this.slides
          .map((slide) =>
            this.newIndicator(slide.media ? slide.media.url : "", slide.title)
          )
          .join("")}
      </div>
    `;
  } // render()

  nextSlide(allSlides, allIndicators) {
    if (this.activeSlideIndex < allSlides.length - 1) {
      this.activeSlideIndex++;
    } else {
      this.activeSlideIndex = 0;
    }

    this.updateSlides(allSlides, allIndicators);
  }

  prevSlide(allSlides, allIndicators) {
    if (this.activeSlideIndex > 0) {
      // 0, 1, 2
      this.activeSlideIndex--;
    } else {
      this.activeSlideIndex = allSlides.length - 1; // 1, 2, 3
    }

    this.updateSlides(allSlides, allIndicators);
  }

  autoSlider(allSlides, allIndicators) {
    setInterval(() => {
      if (this.autoPlay) {
        this.nextSlide(allSlides, allIndicators);
      }
    }, 5000);
  }

  updateSlides(allSlides, allIndicators) {
    allSlides.forEach((slide, index) => {
      if (index === this.activeSlideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    allIndicators.forEach((indicator, index) => {
      if (index === this.activeSlideIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  listener() {
    const allSlides = this.querySelectorAll(".slide");
    const allIndicators = this.querySelectorAll(".indicator");
    const prevButton = this.querySelector(".slide-btn-prev");
    const nextButton = this.querySelector(".slide-btn-next");

    allSlides[0].classList.add("active");
    allIndicators[0].classList.add("active");

    prevButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.prevSlide(allSlides, allIndicators);
    });

    nextButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.nextSlide(allSlides, allIndicators);
    });

    this.autoSlider(allSlides, allIndicators);

    this.addEventListener(`mouseover`, (event) => {
      event.preventDefault();
      this.autoPlay = false;
    });

    this.addEventListener(`mouseout`, (event) => {
      event.preventDefault();
      this.autoPlay = true;
    });
  }
} // klasse karusell //

export default Carousel;
