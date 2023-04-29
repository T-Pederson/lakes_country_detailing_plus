import * as createElement from './createElement.js';

// Set up paths depending current page is index.html or not
let footerLogo;
let indexPath;
let fbLogo;
let igLogo
if (window.location.pathname.includes('index.html') || !(window.location.pathname.includes('html'))) {
  footerLogo = 'images/full.svg';
  indexPath = 'index.html';
  fbLogo = 'images/facebook.svg';
  igLogo = 'images/instagram.svg';
} else {
  footerLogo = '../images/full.svg';
  indexPath = '../index.html';
  fbLogo = '../images/facebook.svg';
  igLogo = '../images/instagram.svg';
}

export function populateFooter() {
  const footer = document.querySelector('.footer');

  // Add footer logo
  const indexHref = createElement.a(indexPath);
  footer.appendChild(indexHref);
  indexHref.appendChild(createElement.img(footerLogo, 'logo', 'footer_logo'));

  // Populate contact info
  const contactDiv = createElement.div();
  footer.appendChild(contactDiv);
  contactDiv.appendChild(createElement.p('1006 Redwood Lane, Fergus Falls, MN 56537'));

  const contactSubDiv = createElement.div();
  contactDiv.appendChild(contactSubDiv);
  contactSubDiv.appendChild(createElement.a('mailto:lakescountrydetailing@gmail.com', 'underline', 'Lakescountrydetailing@gmail.com'));
  contactSubDiv.appendChild(createElement.span(' • '));
  contactSubDiv.appendChild(createElement.a('tel: 2187312897', 'underline', '(218) 731-2897'));

  const socialsSubDiv = createElement.div('socials');
  contactDiv.appendChild(socialsSubDiv);
  const fbHref = createElement.a("https://www.facebook.com/LakesCountryDetailing")
  socialsSubDiv.appendChild(fbHref)
  const igHref = createElement.a("https://www.instagram.com/lakescountrydetailing/")
  socialsSubDiv.appendChild(igHref)
  fbHref.appendChild(createElement.img(fbLogo, 'facebook', 'socials_logo'));
  igHref.appendChild(createElement.img(igLogo, 'instagram', 'socials_logo'));

  // Populate copyright info and website credit
  const copyright = createElement.div('copyright');
  footer.appendChild(copyright);
  copyright.appendChild(createElement.p('2023 © Lakes Country Detailing Plus'));

  const copyrightDiv = createElement.div();
  copyright.appendChild(copyrightDiv);
  copyrightDiv.appendChild(createElement.span('Website by '));
  copyrightDiv.appendChild(createElement.a('https://www.linkedin.com/in/tyson-pederson-814445109/', 'underline', 'Tyson Pederson'));
}
