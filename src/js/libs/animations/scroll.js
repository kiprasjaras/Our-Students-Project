let scrolled = false;
let viewportWidth, maxWidth, scrollPosition, scrollToPos;
maxWidth = viewportWidth = scrollPosition = scrollToPos = 0;
export default class Scroll {
  constructor(selector, scrollIndex = false) {
    this.scroll = this.scroll.bind(this);
    this.resize = this.resize.bind(this);
    this.scrollToElement = this.scrollToElement.bind(this);
    this.el = document.querySelectorAll(selector);
    this.scrollIndex = parseInt(scrollIndex);
    setTimeout(() => {
      if (isNaN(this.scrollIndex)) window.scrollTo(0, 0);
      else this.scrollToElement()
    }, 0);
    window.addEventListener('resize', this.resize);
    this.el.forEach(screen => { screen.addEventListener("wheel", this.scroll) });
  }
  scrollToElement() {
    scrollPosition = this.scrollIndex
    scrollToPos = this.el[0].offsetWidth * this.scrollIndex
    window.scrollTo(scrollToPos, 0)
  }
  scroll(e) {
    viewportWidth = scrollPosition * this.el[0].offsetWidth
    maxWidth = -this.el[0].offsetWidth - 1
    this.el.forEach(screen => maxWidth += screen.offsetWidth)
    if (e.ctrlKey);
    else if (e.shiftKey);
    else {
      e.preventDefault()
      if (!scrolled) {
        scrolled = true;
        setTimeout(() => { scrolled = false; }, 700);
        if (e.deltaY > 0) {
          if (viewportWidth < maxWidth) {
            viewportWidth += this.el[0].offsetWidth
            scrollPosition++
          }
          window.scrollTo(viewportWidth, 0)
        } else if (e.deltaY < 0) {
          if (viewportWidth >= this.el[0].offsetWidth) {
            viewportWidth -= this.el[0].offsetWidth
            scrollPosition--
          }
          window.scrollTo(viewportWidth, 0)
        };
      }
    }
  }
  resize() {
    window.scroll({
      top: 0,
      left: scrollPosition * this.el[0].offsetWidth,
      behavior: 'auto'
    });
  }
}

