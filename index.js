servicesMenu = document.querySelector(".services");
servicesMenu.addEventListener("mouseover", showModal);

function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}