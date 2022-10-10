const imageModal = document.querySelector(".imageModal")
const image_xBtn = document.querySelector(".xBtn_div")
const element = document.querySelector(".codesImage")

element.addEventListener("click", () => {
  imageModal.style.display = "flex"
})

image_xBtn.addEventListener("click", () => {
  imageModal.style.display = "none"
})

window.addEventListener("click", (e) => {
  if (e.target == imageModal) {
    imageModal.style.display = "none"
  }
})