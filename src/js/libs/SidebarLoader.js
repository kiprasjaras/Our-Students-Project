import * as submenuContentLoader from './sidebarSubmenus'
export default class SidebarLoader {
  constructor(sidebarContainer, sidebarMenu, sidebarMenuContent, subMenuContent, submenuContentAll) {
    // TODO: pakeisti korektiškai selektorius
    this.sidebar = document.querySelector(sidebarContainer);
    this.menu = this.sidebar.querySelector(sidebarMenu);
    this.menuContent = this.sidebar.querySelector(sidebarMenuContent);
    this.submenu = document.querySelector(subMenuContent);
    this.subMenuContent = document.querySelector(submenuContentAll);
    this.menuOpen = false;
    this.submenuOpen = false;
    this.outside = false;
    this.init = this.init.bind(this);
    this.expandMenu = this.expandMenu.bind(this);
    this.stickySubMenu = this.stickySubMenu.bind(this);
    this.subMenuExpand = this.subMenuExpand.bind(this);
  }

  init() {
    this.menu.addEventListener("click", this.expandMenu);
    this.menu.addEventListener("click", this.stickySubMenu);
    this.submenu.addEventListener("click", this.subMenuExpand);
  }

  expandMenu() {
    this.menuContent.classList.toggle("sidebar__menu__content--expanded");
    if (this.submenuOpen) {
      this.subMenuExpand();
    }
    this.menuOpen = !this.menuOpen;
  }

  stickySubMenu() {
    this.submenu.classList.toggle("submenu__services--slide");
    this.submenu.classList.toggle("submenu__commodities--slide");
  }

  subMenuExpand() {
    if (this.menuOpen) {
        this.submenu.classList.remove("submenu__services--slide");
      this.expandMenu();
    }
      this.subMenuContent.classList.toggle(
        "submenu__content__services--subExpanded"
      );
      this.subMenuContent.classList.toggle(
        "submenu__content__commodities--subExpanded"
      );
      this.submenuOpen = !this.submenuOpen;
  }

}

// // Sidebar opening
// document.querySelector(".sidebar-menu").addEventListener("click", () => {
//     document.querySelector(".container").classList.toggle("change");
//   });
//   // end

//   const modalBtn = document.querySelector('#modal-btn');

//   let expaded = false;
//   modalBtn.addEventListener('click', toggleModal);
//   document.querySelector('.main-section').addEventListener('click', outsideClick);

//   function toggleModal() {
//     modal.classList.toggle('modal--expanded');
//     expaded = !expanded;
//   }

//   // Close overlay clicking on background
//   function outsideClick() {
//     if(expaded) toggleModal();
//   }
