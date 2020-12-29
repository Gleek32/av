const amount = document.getElementById("amount");
// console.log("amount");
const form = document.getElementById("form")
const form2 = document.getElementById("form2");
const errorMessage =  document.getElementById("errorMessage");


form.addEventListener("submit", function(e) {
  var val = Number.parseFloat(amount.value);
let message = []
if (Number.isNaN(val)){
message.push("Please Enter your Mortgage Balance")
}
  if (message.length > 0) {
    e.preventDefault()
    errorMessage.innerText = message.join(",")

  }

});

form.addEventListener("submit", function(e) {
  var val = Number.parseFloat(amount2.value);
let message = []
if (Number.isNaN(val)){
message.push("Please Enter amount to borrow")
}
  if (message.length > 0) {
    e.preventDefault()
    errorMessage.innerText = message.join(",")

  }

});

form.addEventListener("submit", function(e) {
  var val = Number.parseFloat(amount3.value);
let message = []
if (Number.isNaN(val)){
message.push("Please Enter estimated home value")
}
  if (message.length > 0) {
    e.preventDefault()
    errorMessage.innerText = message.join(",")

  }

});

form.addEventListener("submit", function(e) {
  var val = Number.parseFloat(phone.value);
let message = []
if (Number.isNaN(val)){
message.push("Please Enter a valid phone number!")
}
  if (message.length > 0) {
    e.preventDefault()
    errorMessage.innerText = message.join(",")

  }
});

form.addEventListener("submit", function(e) {
  var val = Number.parseFloat(email.value);
let message = []
if (Number.isNaN(val)){
message.push("Please Enter a valid Email!")
}
  if (message.length > 0) {
    e.preventDefault()
    errorMessage.innerText = message.join(",")

  }

});

// form.addEventListener("submit", function(e) {
// const message = []
// if (number.parseFloat(amount.value) === NaN || amount.value == null){
// message.push("Please Enter your Mortgage Balance")
// }
//   if (message.length > 0) {
//     e.preventDefault()
//     errorMessage.innerText = message.join(",")
//
//   }
//
// })
