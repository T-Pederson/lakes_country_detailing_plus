export function toggle_mobile_navbar() {
  const mobileDropdown = document.querySelector(".mobile_dropdown");
  if (getComputedStyle(mobileDropdown).display == "none") {
    mobileDropdown.style.display = "flex";
  } else {
    mobileDropdown.style.display = "none";
  }
}

export function toggle_services_dropdown() {
  const servicesDropdown = document.querySelector(".mobile_services_dropdown");
  if (getComputedStyle(servicesDropdown).display == "none") {
    servicesDropdown.style.display = "flex";
  } else {
    servicesDropdown.style.display = "none";
  }
}
