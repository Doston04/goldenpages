const modal = document.querySelector(".imageModal")
const xBtn = document.querySelector(".xBtn_div")
const element = document.querySelector(".codesImage")

element.addEventListener("click", () => {
  modal.style.display = "flex"
})

xBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none"
  }
})