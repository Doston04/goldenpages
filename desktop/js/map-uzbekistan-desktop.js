const regionName = document.querySelector("#region")
const population = document.querySelector("#population")
const square = document.querySelector("#square")

const Andijan = document.querySelector("#Andijan")
const Bukhara = document.querySelector("#Bukhara")
const Fergana = document.querySelector("#Fergana")
const Jizzakh = document.querySelector("#Jizzakh")
const Namangan = document.querySelector("#Namangan")
const Navoiy = document.querySelector("#Navoiy")
const Kashkadarya = document.querySelector("#Kashkadarya")
const Karakalpakstan = document.querySelector("#Karakalpakstan")
const Samarkand = document.querySelector("#Samarkand")
const Sirdarya = document.querySelector("#Sirdarya")
const Surkhandarya = document.querySelector("#Surkhandarya")
const TashkentCity = document.querySelector("#TashkentCity")
const TashkentRegion = document.querySelector("#TashkentRegion")
const Kharezm = document.querySelector("#Kharezm")

const regions = document.querySelectorAll(".region")
regions.forEach((region, i) => {
  region.addEventListener("click", () => {
    regions.forEach(region => {
      region.classList.remove("active")
    })
    regions[i].classList.add("active")
  })
})

TashkentCity.addEventListener("click", () => {
  regionName.innerHTML = "г. Ташкент"
  population.innerHTML = "2,573,758"
  square.innerHTML = "435 km²"
})

Andijan.addEventListener("click", () => {
  regionName.innerHTML = "Aндижан"
  population.innerHTML = "447,800"
  square.innerHTML = "160,8 km²"
})