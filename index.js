servicesMenu = document.querySelector(".services");
modal = document.querySelector(".modal");
servicesMenu.addEventListener("mouseover", showModal);

function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}