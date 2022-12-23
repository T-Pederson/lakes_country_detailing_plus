body = document.querySelector("body");
menu = document.querySelector(".menu");
mobileDropdown = document.querySelector(".mobile_dropdown");
mobileServices = document.querySelector(".mobile_services");
servicesDropdown = document.querySelector(".services_dropdown");

menu.addEventListener("click", toggle_mobile_navbar);
mobileServices.addEventListener("click", toggle_services_dropdown);

function toggle_mobile_navbar() {
  if (getComputedStyle(mobileDropdown).display == "none") {
    mobileDropdown.style.display = "flex";
    body.style.gridTemplateRows = "60px auto auto 1fr 80px";
  } else {
    mobileDropdown.style.display = "none";
    body.style.gridTemplateRows = "60px auto 1fr 80px";
  }
}

function toggle_services_dropdown() {
  if (getComputedStyle(servicesDropdown).display == "none") {
    servicesDropdown.style.display = "flex";
  } else {
    servicesDropdown.style.display = "none";
  }
}