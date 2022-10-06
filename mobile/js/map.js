const regions = document.querySelectorAll(".region")
const modal = document.querySelector(".infoModal")
const xBtn = document.querySelector(".xBtn_div")
const regionName = document.querySelector("#regionName")
const population = document.querySelector("#regionPopulation")
const square = document.querySelector("#regionSquare")

regions.forEach(region => {
  region.addEventListener("click", (e) => {
    // console.log(e.target.getAttribute('title'));
    modal.style.display = "flex"
    const element = e.target.getAttribute('title')
    if (element == "Andijon") {
      regionName.innerHTML = "Aндижанская область"
      population.innerHTML = "447,800"
      square.innerHTML = "4,303 km²"
    } else if (element == "Toshkent viloyati") {
      regionName.innerHTML = "Ташкентская область"
      population.innerHTML = "2,975,900"
      square.innerHTML = "15,250 km²"
    } else if (element == "Toshkent shahri") {
      regionName.innerHTML = "г. Ташкент"
      population.innerHTML = "2,573,758"
      square.innerHTML = "435 km²"
    } else if (element == "Buxoro") {
      regionName.innerHTML = "Бухаринская область"
      population.innerHTML = "280,187"
      square.innerHTML = "40,216 km²"
    } else if (element == "Farg'ona") {
      regionName.innerHTML = "Ферганская область"
      population.innerHTML = "299,200"
      square.innerHTML = "22,000 km²"
    } else if (element == "Jizzah") {
      regionName.innerHTML = "Джизакская область"
      population.innerHTML = "1,443,408"
      square.innerHTML = "21,210 km²"
    } else if (element == "Namangan") {
      regionName.innerHTML = "Наманганская область"
      population.innerHTML = "644,800"
      square.innerHTML = "7,440 km²"
    } else if (element == "Samarqand") {
      regionName.innerHTML = "Самаркандская область"
      population.innerHTML = "4,031,324"
      square.innerHTML = "16,773 km²"
    } else if (element == "Navoiy") {
      regionName.innerHTML = "Наваинская область"
      population.innerHTML = "1,033,857"
      square.innerHTML = "111,095 km²"
    } else if (element == "Qashqadaryo") {
      regionName.innerHTML = "Кашкадаринская область"
      population.innerHTML = "3,408,345"
      square.innerHTML = "28,568 km²"
    } else if (element == "Qoraqalpog'iston") {
      regionName.innerHTML = "Республика Каракалпактсан"
      population.innerHTML = "1,948,488"
      square.innerHTML = "166,590 km²"
    } else if (element == "Sirdaryo") {
      regionName.innerHTML = "Сырдаринская область"
      population.innerHTML = "860,900"
      square.innerHTML = "4,276 km²"
    } else if (element == "Surhandaryo") {
      regionName.innerHTML = "Сурхандаринская область"
      population.innerHTML = "2,743,201"
      square.innerHTML = "20,099 km²"
    } else if (element == "Xorazm") {
      regionName.innerHTML = "Хорезмская область"
      population.innerHTML = "1,893,300"
      square.innerHTML = "6,050 km²"
    }
  })
})

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none"
  }
})

xBtn.addEventListener("click", () => {
  modal.style.display = "none"
})