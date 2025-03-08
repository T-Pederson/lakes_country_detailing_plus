import * as createElement from './createElement.js';

// Set up paths depending current page is index.html or not
let logoIcon;
let logoText;
let expandMore;
let chevronRight;
let menuIcon;
let indexPath;
let autoDetailingPath;
let headlightRestorationPath;
let windowTintingPath;
let glassChipRepairPath;
let paintCorrectionPath;
let diamondCoatingsPath;
let woolwaxPath;
let ContactUsPath;
if (window.location.pathname.includes('index.html') || !(window.location.pathname.includes('html'))) {
  logoIcon = 'images/icon.svg';
  logoText = 'images/text.svg';
  expandMore = 'images/expand_more.svg';
  chevronRight = 'images/chevron_right.svg';
  menuIcon = 'images/menu.svg';
  indexPath = 'index.html';
  autoDetailingPath = 'html/auto_detailing.html';
  headlightRestorationPath = 'html/headlight_restoration.html';
  windowTintingPath = 'html/window_tinting.html';
  glassChipRepairPath = 'html/glass_chip_repair.html';
  paintCorrectionPath = 'html/paint_correction.html';
  diamondCoatingsPath = 'html/diamond_coatings.html';
  woolwaxPath = 'html/woolwax.html';
  ContactUsPath = 'html/contact_us.html';
} else {
  logoIcon = '../images/icon.svg';
  logoText = '../images/text.svg';
  expandMore = '../images/expand_more.svg';
  chevronRight = '../images/chevron_right.svg';
  menuIcon = '../images/menu.svg';
  indexPath = '../index.html';
  autoDetailingPath = 'auto_detailing.html';
  headlightRestorationPath = 'headlight_restoration.html';
  windowTintingPath = 'window_tinting.html';
  glassChipRepairPath = 'glass_chip_repair.html';
  paintCorrectionPath = 'paint_correction.html';
  diamondCoatingsPath = 'diamond_coatings.html';
  woolwaxPath = 'woolwax.html';
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

  const glassChipRepairHref = createElement.a(glassChipRepairPath);
  servicesDropdown.appendChild(glassChipRepairHref);
  glassChipRepairHref.appendChild(createElement.div());
  glassChipRepairHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  glassChipRepairHref.firstChild.appendChild(createElement.p('GLASS CHIP/SCRATCH REPAIR'));

  const headlightRestorationHref = createElement.a(headlightRestorationPath);
  servicesDropdown.appendChild(headlightRestorationHref);
  headlightRestorationHref.appendChild(createElement.div());
  headlightRestorationHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  headlightRestorationHref.firstChild.appendChild(createElement.p('HEADLIGHT RESTORATION'));

  const windowTintingHref = createElement.a(windowTintingPath);
  servicesDropdown.appendChild(windowTintingHref);
  windowTintingHref.appendChild(createElement.div());
  windowTintingHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  windowTintingHref.firstChild.appendChild(createElement.p('WINDOW TINTING'));

  const paintCorrectionHref = createElement.a(paintCorrectionPath);
  servicesDropdown.appendChild(paintCorrectionHref);
  paintCorrectionHref.appendChild(createElement.div());
  paintCorrectionHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  paintCorrectionHref.firstChild.appendChild(createElement.p('PAINT CORRECTION'));

  const diamondCoatingsHref = createElement.a(diamondCoatingsPath);
  servicesDropdown.appendChild(diamondCoatingsHref);
  diamondCoatingsHref.appendChild(createElement.div());
  diamondCoatingsHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  diamondCoatingsHref.firstChild.appendChild(createElement.p('DIAMOND COATINGS'));

  const woolwaxHref = createElement.a(woolwaxPath);
  servicesDropdown.appendChild(woolwaxHref);
  woolwaxHref.appendChild(createElement.div());
  woolwaxHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  woolwaxHref.firstChild.appendChild(createElement.p('WOOLWAX'));

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

  const glassChipRepairHref = createElement.a(glassChipRepairPath, 'service');
  mobileServicesDropdown.appendChild(glassChipRepairHref);
  glassChipRepairHref.appendChild(createElement.div());
  glassChipRepairHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  glassChipRepairHref.firstChild.appendChild(createElement.p('GLASS CHIP/SCRATCH REPAIR'));

  const headlightRestorationHref = createElement.a(headlightRestorationPath, 'service');
  mobileServicesDropdown.appendChild(headlightRestorationHref);
  headlightRestorationHref.appendChild(createElement.div());
  headlightRestorationHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  headlightRestorationHref.firstChild.appendChild(createElement.p('HEADLIGHT RESTORATION'));

  const windowTintingHref = createElement.a(windowTintingPath, 'service');
  mobileServicesDropdown.appendChild(windowTintingHref);
  windowTintingHref.appendChild(createElement.div());
  windowTintingHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  windowTintingHref.firstChild.appendChild(createElement.p('WINDOW TINTING'));

  const paintCorrectionHref = createElement.a(paintCorrectionPath, 'service');
  mobileServicesDropdown.appendChild(paintCorrectionHref);
  paintCorrectionHref.appendChild(createElement.div());
  paintCorrectionHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  paintCorrectionHref.firstChild.appendChild(createElement.p('PAINT CORRECTION'));

  const diamondCoatingsHref = createElement.a(diamondCoatingsPath, 'service');
  mobileServicesDropdown.appendChild(diamondCoatingsHref);
  diamondCoatingsHref.appendChild(createElement.div());
  diamondCoatingsHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  diamondCoatingsHref.firstChild.appendChild(createElement.p('DIAMOND COATINGS'));

  const woolwaxHref = createElement.a(woolwaxPath, 'service');
  mobileServicesDropdown.appendChild(woolwaxHref);
  woolwaxHref.appendChild(createElement.div());
  woolwaxHref.firstChild.appendChild(createElement.img(chevronRight, 'chevron right', 'arrow_icon'));
  woolwaxHref.firstChild.appendChild(createElement.p('WOOLWAX'));
}
