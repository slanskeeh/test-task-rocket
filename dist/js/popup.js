const buttonsMain = document.querySelectorAll(".btn_main");
const buttonMenu = document.querySelector(".btn_menu");
const popup = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup__overlay");

const triggerPopup = () => {
  popup.classList.add("popup_active");
};

buttonsMain.forEach((el) => {
  el.addEventListener("click", triggerPopup);
});
buttonMenu.addEventListener("click", triggerPopup);

popupOverlay.addEventListener("click", () => {
  popup.classList.remove("popup_active");
});
