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
  regionName.innerHTML = "Aндижанская область"
  population.innerHTML = "447,800"
  square.innerHTML = "4,303 km²"
})

TashkentRegion.addEventListener("click", () => {
  regionName.innerHTML = "Ташкентская область"
  population.innerHTML = "2,975,900"
  square.innerHTML = "15,250 km²"
})

Bukhara.addEventListener("click", () => {
  regionName.innerHTML = "Бухаринская область"
  population.innerHTML = "280,187"
  square.innerHTML = "40,216 km²"
})

Fergana.addEventListener("click", () => {
  regionName.innerHTML = "Ферганская область"
  population.innerHTML = "299,200"
  square.innerHTML = "22,000 km²"
})

Namangan.addEventListener("click", () => {
  regionName.innerHTML = "Наманганская область"
  population.innerHTML = "644,800"
  square.innerHTML = "7,440 km²"
})

Jizzakh.addEventListener("click", () => {
  regionName.innerHTML = "Джизакская область"
  population.innerHTML = "1,443,408"
  square.innerHTML = "21,210 km²"
})

Samarkand.addEventListener("click", () => {
  regionName.innerHTML = "Самаркандская область"
  population.innerHTML = "4,031,324"
  square.innerHTML = "16,773 km²"
})

Sirdarya.addEventListener("click", () => {
  regionName.innerHTML = "Сырдаринская область"
  population.innerHTML = "860,900"
  square.innerHTML = "4,276 km²"
})

Surkhandarya.addEventListener("click", () => {
  regionName.innerHTML = "Сурхандаринская область"
  population.innerHTML = "2,743,201"
  square.innerHTML = "20,099 km²"
})

Kashkadarya.addEventListener("click", () => {
  regionName.innerHTML = "Кашкадаринская область"
  population.innerHTML = "3,408,345"
  square.innerHTML = "28,568 km²"
})

Navoiy.addEventListener("click", () => {
  regionName.innerHTML = "Наваинская область"
  population.innerHTML = "1,033,857"
  square.innerHTML = "111,095 km²"
})

Kharezm.addEventListener("click", () => {
  regionName.innerHTML = "Хорезмская область"
  population.innerHTML = "1,893,300"
  square.innerHTML = "6,050 km²"
})

Karakalpakstan.addEventListener("click", () => {
  regionName.innerHTML = "Республика Каракалпактсан"
  population.innerHTML = "1,948,488"
  square.innerHTML = "166,590 km²"
})