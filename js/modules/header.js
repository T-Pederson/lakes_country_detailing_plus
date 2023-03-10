import * as createElement from './createElement.js';

// Set up paths depending current page is index.html or not
let logoIcon;
let logoText;
let expandMore;
let chevronRight;
let menuIcon;
let indexPath;
let autoDetailingPath;
let mpsDetailingPath;
let paintCorrectionPath;
let windowTintingPath;
let glassChipRepairPath;
let ContactUsPath;
if (window.location.pathname.includes('index.html') || !(window.location.pathname.includes('html'))) {
  logoIcon = 'images/icon.svg';
  logoText = 'images/text.svg';
  expandMore = 'images/expand_more.svg';
  chevronRight = 'images/chevron_right.svg';
  menuIcon = 'images/menu.svg';
  indexPath = 'index.html';
  autoDetailingPath = 'html/auto_detailing.html';
  mpsDetailingPath = 'html/marine_power_sport_detailing.html';
  paintCorrectionPath = 'html/paint_correction.html';
  windowTintingPath = 'html/window_tinting.html';
  glassChipRepairPath = 'html/glass_chip_repair.html';
  ContactUsPath = 'html/contact_us.html';
} else {
  logoIcon = '../images/icon.svg';
  logoText = '../images/text.svg';
  expandMore = '../images/expand_more.svg';
  chevronRight = '../images/chevron_right.svg';
  menuIcon = '../images/menu.svg';
  indexPath = '../index.html';
  autoDetailingPath = 'auto_detailing.html';
  mpsDetailingPath = 'marine_power_sport_detailing.html';
  paintCorrectionPath = 'paint_correction.html';
  windowTintingPath = 'window_tinting.html';
  glassChipRepairPath = 'glass_chip_repair.html';
  ContactUsPath = 'contact_us.html';
}

export function populateHeader() {
  const header = document.querySelector('.header');

  // Populate logo container
  const logoContainer = createElement.div('logo_container');
  header.appendChild(logoContainer);
  logoContainer.appendChild(createElement.a(indexPath));
  logoContainer.firstChild.appendChild(createElement.img(logoIcon, 'logo icon', 'header_logo'))
  logoContainer.firstChild.appendChild(createElement.img(logoText, 'logo text', 'header_logo'))

  // Populate navbar container
  const navbarContainer = createElement.div('navbar_container');
  header.appendChild(navbarContainer);

  const indexHref = createElement.a(indexPath);
  navbarContainer.appendChild(indexHref);
  indexHref.appendChild(createElement.p('HOME'));

  const services = createElement.div('services');
  navbarContainer.appendChild(services);
  services.appendChild(createElement.p('SERVICES'))
  services.appendChild(createElement.img(expandMore, 'expand', 'arrow_icon'));

  const contactUs = createElement.a(ContactUsPath);
  navbarContainer.appendChild(contactUs);
  contactUs.appendChild(createElement.p('CONTACT US'));

  // Populate services dropdown
  const servicesDropdown = createElement.div('services_dropdown');
  services.appendChild(servicesDropdown);

  const autoDetailingHref = createElement.a(autoDetailingPath);
  servicesDropdown.appendChild(autoDetailingHref);
  autoDetailingHref.appendChild(createElement.div());
  autoDetailingHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  autoDetailingHref.firstChild.appendChild(createElement.p('AUTO DETAILING'));

  const mpsDetailingHref = createElement.a(mpsDetailingPath);
  servicesDropdown.appendChild(mpsDetailingHref);
  mpsDetailingHref.appendChild(createElement.div());
  mpsDetailingHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  mpsDetailingHref.firstChild.appendChild(createElement.p('MARINE & POWER SPORT DETAILING'));

  const paintCorrectionHref = createElement.a(paintCorrectionPath);
  servicesDropdown.appendChild(paintCorrectionHref);
  paintCorrectionHref.appendChild(createElement.div());
  paintCorrectionHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  paintCorrectionHref.firstChild.appendChild(createElement.p('PAINT CORRECTION'));

  const windowTintingHref = createElement.a(windowTintingPath);
  servicesDropdown.appendChild(windowTintingHref);
  windowTintingHref.appendChild(createElement.div());
  windowTintingHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  windowTintingHref.firstChild.appendChild(createElement.p('WINDOW TINTING'));

  const glassChipRepairHref = createElement.a(glassChipRepairPath);
  servicesDropdown.appendChild(glassChipRepairHref);
  glassChipRepairHref.appendChild(createElement.div());
  glassChipRepairHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  glassChipRepairHref.firstChild.appendChild(createElement.p('GLASS CHIP REPAIR'));

  // Add mobile menu icon
  header.appendChild(createElement.img(menuIcon, 'menu', 'menu'));
}

export function populateMobileDropdown() {
  const mobileDropdown = document.querySelector('.mobile_dropdown');

  // Populate mobile dropdown
  const indexHref = createElement.a(indexPath);
  mobileDropdown.appendChild(indexHref);
  indexHref.appendChild(createElement.p('HOME'));

  const mobileServices = createElement.div('mobile_services');
  mobileDropdown.appendChild(mobileServices);
  mobileServices.appendChild(createElement.p('SERVICES'));
  mobileServices.appendChild(createElement.img(expandMore, 'expand', 'arrow_icon'));

  const mobileServicesDropdown = createElement.div('mobile_services_dropdown');
  mobileDropdown.appendChild(mobileServicesDropdown);

  const contactUs = createElement.a(ContactUsPath);
  mobileDropdown.appendChild(contactUs);
  contactUs.appendChild(createElement.p('CONTACT US'));

  // Populate mobile services dropdown
  const autoDetailingHref = createElement.a(autoDetailingPath, 'service');
  mobileServicesDropdown.appendChild(autoDetailingHref);
  autoDetailingHref.appendChild(createElement.div());
  autoDetailingHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  autoDetailingHref.firstChild.appendChild(createElement.p('AUTO DETAILING'));

  const mpsDetailingHref = createElement.a(mpsDetailingPath, 'service');
  mobileServicesDropdown.appendChild(mpsDetailingHref);
  mpsDetailingHref.appendChild(createElement.div());
  mpsDetailingHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  mpsDetailingHref.firstChild.appendChild(createElement.p('MARINE & POWER SPORT DETAILING'));

  const paintCorrectionHref = createElement.a(paintCorrectionPath, 'service');
  mobileServicesDropdown.appendChild(paintCorrectionHref);
  paintCorrectionHref.appendChild(createElement.div());
  paintCorrectionHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  paintCorrectionHref.firstChild.appendChild(createElement.p('PAINT CORRECTION'));

  const windowTintingHref = createElement.a(windowTintingPath, 'service');
  mobileServicesDropdown.appendChild(windowTintingHref);
  windowTintingHref.appendChild(createElement.div());
  windowTintingHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  windowTintingHref.firstChild.appendChild(createElement.p('WINDOW TINTING'));

  const glassChipRepairHref = createElement.a(glassChipRepairPath, 'service');
  mobileServicesDropdown.appendChild(glassChipRepairHref);
  glassChipRepairHref.appendChild(createElement.div());
  glassChipRepairHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  glassChipRepairHref.firstChild.appendChild(createElement.p('GLASS CHIP REPAIR'));
}