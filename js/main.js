import * as navbar from './modules/navbar.js';
import { populateHeader, populateMobileDropdown } from './modules/header.js';
import { populateFooter } from './modules/footer.js';

populateHeader();
populateMobileDropdown();
populateFooter();

document.querySelector(".menu").addEventListener("click", navbar.toggle_mobile_navbar);
document.querySelector(".mobile_services").addEventListener("click", navbar.toggle_services_dropdown);
