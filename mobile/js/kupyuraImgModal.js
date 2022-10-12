const imageModal = document.querySelector(".imageModal")
const content = document.querySelector(".imageModal_content")
const xBtn = document.querySelector(".xBtn_div")
const elements = document.querySelectorAll(".kupyura_img_div")
const imagesContainer = document.querySelector(".imagesContainer")

elements.forEach(element => {
  element.addEventListener("click", (e) => {
    const title = e.target.getAttribute("title")
    if (title == "k50") {
      imageModal.style.display = "flex"
      const imageModal_image = document.createElement("div")
      imageModal_image.setAttribute("class", "imageModal_image")
      const img1 = document.createElement("img")
      img1.setAttribute("src", "/mobile/img/k50-front-mobile.png")
      img1.setAttribute("alt", "k50")

      imageModal_image.append(img1)
      imagesContainer.innerHTML = ""
      imagesContainer.append(imageModal_image)
    }
    if (title == "k100") {
      imageModal.style.display = "flex"
      const imageModal_image = document.createElement("div")
      imageModal_image.setAttribute("class", "imageModal_image")
      const img1 = document.createElement("img")
      img1.setAttribute("src", "/mobile/img/k100-front-mobile.png")
      img1.setAttribute("alt", "k100 front")

      const imageModal_image2 = document.createElement("div")
      imageModal_image2.setAttribute("class", "imageModal_image")
      const img2 = document.createElement("img")
      img2.setAttribute("src", "/mobile/img/k100-back-mobile.png")
      img2.setAttribute("alt", "k100 back")

      imageModal_image.append(img1)
      imageModal_image2.append(img2)
      imagesContainer.innerHTML = ""
      imagesContainer.append(imageModal_image, imageModal_image2)
    }
  })
})

xBtn.addEventListener("click", () => {
  imageModal.style.display = "none"
})

window.addEventListener("click", (e) => {
  if (e.target == imageModal) {
    imageModal.style.display = "none"
  } else if (e.target == content) {
    imageModal.style.display = "flex"
  }
})