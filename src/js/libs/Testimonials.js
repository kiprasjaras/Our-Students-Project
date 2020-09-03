import testimonials from '../../data/testimonials.js';

export default class Testimonials {
  constructor(cardSelector, imageSelector, container, dotSelector) {
    this.card = document.querySelector(cardSelector);
    this.image = document.querySelector(imageSelector);
    this.container= document.querySelector(container);
    this.dots = document.querySelectorAll(dotSelector); 
    this.container.addEventListener("mouseover", this.startSlideShow); //kai yra ijungta skaidre prasideda slidinimas
    this.container.addEventListener("mouseout", this.stopSlideShow); // kai nera ijungtos skaidres, sustoja slidint
    this.render();
    this.testimonials = testimonials.map(({ fullname, title, text, imgSrc }) => {
      return {
        fullname,
        title,
        text,
        imgSrc
      }
    });
    this.createTestimonialCard = this.createTestimonialCard.bind(this);
    this.render = this.render.bind(this);
    this.startSlideShow();
  }

  startSlideShow(){
    this.currentCardIndex = 0;
    this.slideShowID = setInterval(()=>{
      this.currentCardIndex = ++this.currentCardIndex % this.testimonials.length;
      this.render();
        for (let i = 0; i < this.dots.length; i++) {
          if (i==this.currentCardIndex) this.dots[i].classList.add("is-selected");
          else this.dots[i].classList.remove("is-selected");
        }
      console.log(this.testimonials.length);
    }, 5000);
  }  

  stopSlideShow(){
    clearInterval(this.slideShowID);
  }
  createTestimonialCard({ fullname, title, text }) {
    return `
    <div class="card">
    <p>${text}</p>
      <h5> ${fullname} </h5>
      <h6> ${title} </h6></div>`;
  }

  render() {
    this.card.innerHTML = this.createTestimonialCard(this.testimonials[this.currentCardIndex]);
    this.title.innerHTML = this.testimonials[this.currentCardIndex].title
    this.fullname.innerHTML = this.testimonials[this.currentCardIndex].fullname
    this.text.innerHTML = this.testimonials[this.currentCardIndex].text
    this.image.src = this.testimonials[this.currentCardIndex].imgSrc;
  }

    
}