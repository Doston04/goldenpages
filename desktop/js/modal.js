const modalBtn = document.querySelector(".modalLinkDiv")
const xBtn = document.querySelector(".modal_xBtn")
const modal = document.querySelector(".modal")
const body = document.querySelector("body")

modalBtn.addEventListener("click", () => {
  modal.style.display = "block"
  body.classList.add("scroll_lock")
})

xBtn.addEventListener("click", () => {
  modal.style.display = "none"
  body.classList.remove("scroll_lock")
})