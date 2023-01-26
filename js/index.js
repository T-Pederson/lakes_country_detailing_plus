import * as navbar from './modules/navbar.js';
import './modules/header.js';
import './modules/footer.js';

document.querySelector(".menu").addEventListener("click", navbar.toggle_mobile_navbar);
document.querySelector(".mobile_services").addEventListener("click", navbar.toggle_services_dropdown);
