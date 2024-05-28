import BloggService from "../services/blogg.service.js";

class Carousel extends HTMLElement {
  constructor() {
    super();
    this.bloggService = new BloggService();

    this.slides = [];
    this.autoPlay = true;
    this.activeSlideIndex = 0;
  }

  async getPosts() {
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
          <a href="/post/index.html?id=${
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

      <button class="prev slide-btn-prev" aria-label="image carousel previous slide">
        <i class="nf nf-fa-chevron_left"></i>
      </button>
      <button class="next slide-btn-next" aria-label="image carousel next slide">
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
  }

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
      this.activeSlideIndex--;
    } else {
      this.activeSlideIndex = allSlides.length - 1;
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

    allIndicators.forEach((indicator, index) => {
      indicator.addEventListener("click", (event) => {
        this.activeSlideIndex = index;
        this.updateSlides(allSlides, allIndicators);
      });
    });

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
}

export default Carousel;
