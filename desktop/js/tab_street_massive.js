const titles = document.querySelectorAll(".title")
const streetTab = document.querySelector("#nav-home-tab")
const massiveTab = document.querySelector("#nav-profile-tab")
streetTab.addEventListener("click", () => {
  titles.forEach(title => {
    title.innerHTML = "Переименование названий улиц в Ташкенте, Узбекистан"
  })
})
massiveTab.addEventListener("click", () => {
  titles.forEach(title => {
    title.innerHTML = "Переименование массивов в Ташкенте"
  })
})