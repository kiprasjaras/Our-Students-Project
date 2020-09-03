import SidebarLoader from '../libs/SidebarLoader';

const sidebar = new SidebarLoader(".sidebar", ".sidebar__menu", ".sidebar__menu__content", ".submenu__content", ".submenu__content-all");
// TODO: kas darys uzkrovima, sulaukit kol uztraus ir tik tada:
sidebar.init();
