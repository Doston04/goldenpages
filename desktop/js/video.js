const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const video1 = document.querySelector("#video1")
const video2 = document.querySelector("#video2")

btn1.addEventListener("click", () => {
  video1.play()
  btn1.style.display = "none"
})

video1.addEventListener("click", () => {
  video1.stop()
  btn1.style.display = "flex"
})

btn2.addEventListener("click", () => {
  video2.play()
  btn2.style.display = "none"
})

video2.addEventListener("click", () => {
  video2.stop()
  btn2.style.display = "flex"
})
