const miniElement = document.querySelectorAll(".miniElement")
const accordionButton = document.querySelectorAll(".accordionButton")
const dropDown = document.querySelectorAll(".dropDownMenu")

let clicked = false
const activeAccordion = () => {
    if (clicked) {
        dropDown.forEach(menu => {
            menu.style.display = "none"
            clicked = false
        })
    } else {
        dropDown.forEach(menu => {
            menu.style.display = "flex"
            clicked = true
        })
    }
}

accordionButton.forEach((button) => {
    button.addEventListener("click", () => {
        const body = button.nextElementSibling;
        // console.log(body);
        body.classList.toggle("active")
    })
})





// const names = document.querySelectorAll("#name")
// const descriptions = document.querySelectorAll("#description")
// const locations = document.querySelectorAll("#location")
// const dates = document.querySelectorAll("#date")
// const logos = document.querySelectorAll("#logo")
// const organizators = document.querySelectorAll("#organizators")
// const phoneNumbers = document.querySelectorAll("#phoneNumber")
// const faxes = document.querySelectorAll("#faks")
// const emails = document.querySelectorAll("#email")

// var obj;
// fetch("../data.json")
//   .then((res) => res.json())
//   .then((data) => obj = data.exhibitions)
//   .then(() => {
//     obj.forEach(exhibition => {

//     });
//   })
//   .catch((err) => console.log(err))
