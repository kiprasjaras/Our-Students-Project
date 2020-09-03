import { routes } from "./routes"
import Scroll from "../libs/animations/scroll"

export default class Routing {
  constructor(container, links) {
    this.redirect = this.redirect.bind(this)
    this.pop = this.pop.bind(this)
    this.container = document.querySelector(container);
    this.window = window.window;
    this.container.innerHTML = routes[window.location.pathname];
    window.onpopstate = e => this.pop(e);
    this.links = document.querySelectorAll(links)
      .forEach(link => {
        let tempLink = link.cloneNode(true)
        link.parentNode.replaceChild(tempLink, link);
        tempLink.addEventListener('click', this.redirect(this.container, tempLink))
      })
  }
  pop(e) {
    e.preventDefault()
    console.log(window.location.pathname);
    if (routes[window.location.pathname] === undefined) this.container.innerHTML = "aasdfasdfasd";
    else {
      this.container.innerHTML = routes[window.location.pathname];
    }
    new Scroll(".js-scroll");
    new Routing(".js-container", ".js-link");
  }
  redirect(container, link) {
    return function (e) {
      if (routes[link.pathname] === undefined) container.innerHTML = "aasdfasdfasd";
      else {
        container.innerHTML = routes[link.pathname];
        window.history.pushState(
          {},
          link.pathname,
          window.location.origin + link.pathname
        );
      }
      e.preventDefault();
      new Scroll(".js-scroll");
      new Routing(".js-container", ".js-link");
    }
  }
}