class Carousel extends HTMLElement {
  constructor() {
      super();

      this.activeSlideIndex = 0;
      this.slides = [
        {
          img: 'https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Slide 1',
          desc: 'this is slide 1',
        },
        {
          img: 'https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Slide 2',
          desc: 'this is slide 2',
        },
        {
          img: 'https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Slide 3',
          desc: 'this is slide 3',
        },
      ];
  }

  connectedCallback() {
    this.render();
    this.listener();
  }

  newSlide(slide) {
    return `
      <div class="slide">
        <img src="${slide.img}" alt="${slide.title}" />
        <div class="caption">
          <h2>${slide.title}</h2>
          <p>${slide.desc}</p>
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
    this.classList.add('carousel');
    this.innerHTML = `
      ${ this.slides.map( (slide) => this.newSlide(slide) ).join('') }

      <button class="prev slide-btn-prev">
        <i class="nf nf-fa-chevron_left"></i>
      </button>
      <button class="next slide-btn-next">
        <i class="nf nf-fa-chevron_right"></i>
      </button>

      <div class="indicators">
        ${ this.slides.map( (slide) => this.newIndicator(slide.img, slide.title) ).join('') }
      </div>
    `;
  } // render()

updateSlides(allSlides, allIndicators) {
  allSlides.forEach((slide, index) => {
    if (index === this.activeSlideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  allIndicators.forEach((indicator, index) => {
    if (index === this.activeSlideIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

  listener() {
    const allSlides = this.querySelectorAll('.slide');
    const allIndicators = this.querySelectorAll('.indicator');
    const prevButton = this.querySelector('.slide-btn-prev');
    const nextButton = this.querySelector('.slide-btn-next');
    
    allSlides[0].classList.add('active');
    allIndicators[0].classList.add('active');

    prevButton.addEventListener('click', (event) => {
      event.preventDefault();

      if (this.activeSlideIndex > 0) { // 0, 1, 2
        this.activeSlideIndex--;
      } else {
        this.activeSlideIndex = allSlides.length - 1; // 1, 2, 3
      }

      this.updateSlides(allSlides, allIndicators);
    });

    nextButton.addEventListener('click', (event) => {
      event.preventDefault();


      if (this.activeSlideIndex < allSlides.length - 1) {
        this.activeSlideIndex++;
      }else{
        this.activeSlideIndex = 0;
      }

      this.updateSlides(allSlides, allIndicators);
    });

  }

} //klasse karusell //

export default Carousel;