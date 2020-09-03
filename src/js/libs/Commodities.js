import commodities from '../../data/commodities.js';
import Scroll from "../libs/animations/scroll"
export default class Commodities {
  constructor(container) {
    this.container = document.querySelector(container);
    this.render = this.render.bind(this);
    this.render();
  }

  render() {
    commodities.forEach(el => {
      let div = document.createElement("div")
      div.classList.add('js-content')
      div.innerHTML = `
      <div class="page-cover">
        <img src="images/${el.cover}" class="page-cover__img">
      <div class="container" style="position: relative; margin-left: 0;">
          <div class="grid-commodities">
              <h1 class="grid-commodities__question h1-l p--regular-m">What do you want to ship?</h1>
              <h2 class="grid-commodities__title h3-s p--regular-s js-commodities-subtitle">${el.subTitle}</h2>
              <div class="grid-commodities__card grid-commodities__first-card">
                  <div class="grid-commodities__card-container">
                      <div class="grid-commodities__card__title js-commodities-card-title">${el.title1}</div>
                      <div class="grid-commodities__card__content js-commodities-card-content">${el.content1}</div>
                      <button class="btn grid-commodities__card__button">Get in touch</button>
                  </div>
              </div>
              <img src="images/${el.imgSrc1}" alt=""
                  class="grid-commodities__card__img grid-commodities__card-first-img js-commodities-card-image">
              <div class="grid-commodities__card grid-commodities__second-card">
                  <div class="grid-commodities__card-container">
                      <div class="grid-commodities__card__title js-commodities-card-title">${el.title2}</div>
                      <div class="grid-commodities__card__content js-commodities-card-content">${el.content2}</div>
                      <button class="btn grid-commodities__card__button">Get in touch</button>
                  </div>
              </div>
              <img src="images/${el.imgSrc2}" alt=""
                  class="grid-commodities__card__img grid-commodities__card-second-img js-commodities-card-image">
              <div class="grid-commodities__card grid-commodities__third-card">
                  <div class="grid-commodities__card-container">
                      <div class="grid-commodities__card__title js-commodities-card-title">${el.title3}</div>
                      <div class="grid-commodities__card__content js-commodities-card-content">${el.content3}</div>
                      <button class="btn grid-commodities__card__button">Get in touch</button>
                  </div>
              </div>
              <img src="images/${el.imgSrc3}" alt=""
                  class="grid-commodities__card__img grid-commodities__card-third-img js-commodities-card-image">
          </div>
      </div>
  </div>`;
  this.container.appendChild(div)
    });
    new Scroll(".js-content")
  }


}