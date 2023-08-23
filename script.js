const NoOfPersons = document.getElementById("NoOfPersons");
const Place1 = document.getElementById("Place1");
const Place2 = document.getElementById("Place2");
const Place3 = document.getElementById("Place3");
const Place4 = document.getElementById("Place4");
const Place5 = document.getElementById("Place5");
const Place6 = document.getElementById("Place6");
const message = document.getElementById("message");


function userInput() {
  console.log(NoOfPersons.value);
}


let totalPlacesCost = 0;


function calculateCost() {
  event.preventDefault();
  if (Place1.checked) {
    totalPlacesCost = 350;
  }
  if (Place2.checked) {
    totalPlacesCost = totalPlacesCost + 400;
  }
  if (Place3.checked) {
    totalPlacesCost = totalPlacesCost + 800;
  }
  if (Place4.checked) {
    totalPlacesCost = totalPlacesCost + 1200;
  }
  if (Place5.checked) {
    totalPlacesCost = totalPlacesCost + 300;
  }
  if (Place6.checked) {
    totalPlacesCost = totalPlacesCost + 4500;
  }
  console.log(totalPlacesCost);
  message.innerHTML = `Your Preferred Package cost ${
    totalPlacesCost * NoOfPersons.value
  }`;
}


