export function about() {
return ``
}
// TODO scroll to
export function services() {
  return `<div class="submenu__content__services submenu__content-all text-semibold25">
          <div class=" grid__row-3-4 justify">
            <li><a :click="page(/services/all)" class="" :scrollPos="0">Road</a></li>
            <li><a :click="page(/services/all)" class="" :scrollPos="1">Sea</a></li>
            <li><a :click="page(/services/all)" class="" :scrollPos="2">Air</a></li>
            <li><a :click="page(/services/all)" class="" :scrollPos="3">Rail</a></li>
            <li><a :click="page(/services/all)" class="" :scrollPos="4">Warehouse Logistics</a></li>
            <li><a :click="page(/services/all)" class="" :scrollPos="5">Full load</a></li>
            <li><a :click="page(/services/all)" class="" :scrollPos="6">Partial load</a></li>
            <li><a :click="page(/services/all)" class="" :scrollPos="7">Customs Procedures</a></li>
          </div>
        </div>`
}

export function commodities() {
  return `<div class="submenu__content__commodities submenu__content-all">
  <div class=" grid__row-2-3 justify">
    <div class="text-semibold24 ">FAST MOVING CONSUMER GOODS</div>
    <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="0">Automotive</a></li>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="0">Household & Decorations</a></li>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="0">Flooring</a></li>
    </div>
    <div class=" grid__row-3-4 justify">
      <div class="text-semibold24">FOREST</div>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="1">Wood & Wood Pulp</a></li>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="1">Paper</a></li>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="1">Plants & Seedlings</a></li>
    </div>
    <div class=" grid__row-4-5 justify">
      <div class="text-semibold24">INDUSTRIAL PRODUCTS</div>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="2">Chemicals</a></li>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="2">Ferro & Non-Ferro</a></li>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="2">Glass</a></li>
    </div> 
    <div class=" grid__row-5-6 justify">
      <div class="text-semibold24">AGRICULTURAL PRODUCTS</div>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="3">Food</a></li>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="3">Minerals</a></li>
      <li><a :click="page(/commodities/all)" class="text-semibold25" :scrollPos="3">Fertilisers</a></li>
    </div>
  </div>`
}
export function careers(){
  return `<div class="submenu__content__careers submenu__content-all text-semibold25">
  <div class=" grid__row-3-4 justify">
      <li><a :click="page(/careers/drivers)" class="">Drivers</a></li>
      <li><a :click="page(/careers/administration)" class="">Administration</a></li>
  </div>
</div>`
}