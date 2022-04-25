// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

var x = JSON.parse(localStorage.getItem("amount"));
console.log(x);
document.querySelector("#wallet").innerHTML=x;

var y = JSON.parse(localStorage.getItem("movie"));
// console.log(y)

var div = document.createElement("div");

let img = document.createElement("img");
img.src = y.Posterimg;

let title = document.createElement("p");
title.innerText = y.Titlesrc;

div.append(img,title);

document.querySelector("#movie").append(div);

function myfun(){

  var seats = document.querySelector("#number_of_seats").value;
  
  if(seats*100 <= x )
  {
    alert("Booking Successfull!")

    var total = x - seats*100;
    localStorage.setItem("amount",JSON.stringify(total));
    document.querySelector("#wallet").innerHTML=total;

  }
  else{
    alert("Insufficient Balance!")
  }
}