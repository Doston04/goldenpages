const btn1 = document.querySelector("#btn1")
const video1 = document.querySelector("#video1")
const videoDiv1 = document.querySelector("#videoDiv1")
video1.removeAttribute("controls")

let clicked = false

const clickFunction1 = () => {
  if (clicked) {
    btn1.style.display = "flex"
    video1.pause()
    clicked = false
    video1.toggleAttribute("controls")
  } else {
    btn1.style.display = "none"
    video1.play()
    clicked = true
    video1.toggleAttribute("controls")
  }
}

videoDiv1.addEventListener("click", clickFunction1)

const videoDiv2 = document.querySelector("#videoDiv2")
const video2 = document.querySelector("#video2")
const btn2 = document.querySelector("#btn2")
video2.removeAttribute("controls")

let clicked2 = false

const clickFunction2 = () => {
  if (clicked2) {
    btn2.style.display = "flex"
    video2.pause();
    clicked2 = false
    video2.toggleAttribute("controls")
  } else {
    btn2.style.display = "none"
    video2.play();
    clicked2 = true
    video2.toggleAttribute("controls")
  }
}

videoDiv2.addEventListener("click", clickFunction2)
