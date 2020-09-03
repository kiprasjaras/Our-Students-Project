export { routes };
import * as about from '../pages/about'


let homePage = `
WELCOME TO THE HOME PAGE
`;

let aboutPage = about.test()

let servicesPage = `
WELCOME TO THE SERVICES PAGE
`;

let commoditiesPage = `
<div class="js-sidebar" style="height: 100vh; width: 15%; background-color: yellow; position: fixed; left: 0; top: 0; z-index: 999;">
<a href="about" class="js-link">ABOUT</a>
<a href="services" class="js-link">SERVICES</a>
<a href="commodities" class="js-link">COMMODITES</a>
<a href="routingEnv" class="js-link">HOME</a></div>
  <div class="js-scroll" style="height: 100vh; width: 85%; background-color: green; position: absolute; top: 0; left: 15%;"></div>
  <div class="js-scroll" style="height: 100vh; position: absolute; top: 0; left: 100%; width: 85%; background-color: red;"></div>
  <div class="js-scroll" style="height: 100vh; position: absolute; top: 0; left: 185%; width: 85%; background-color: blue;"></div>  
`;
let errorPage = `ERRRROOOOR 404`;
let routes = {
  '/dev/routingEnv': homePage,
  '/dev/about': aboutPage,
  '/dev/services': servicesPage,
  '/dev/commodities': commoditiesPage,
  '/dev/error' : errorPage
};