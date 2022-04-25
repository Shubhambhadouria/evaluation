// Store the wallet amount to your local storage with key "amount"

//  var x = localStorage.getItem(JSON.parse(amount)) || []; 
  
  

function addmoney(){

    var x = JSON.parse(localStorage.getItem("amount")) || [];

    var z = document.querySelector("#amount").value;

    var y = Number(x)+Number(z);

    localStorage.setItem("amount",JSON.stringify(y));

    document.querySelector("#wallet").innerHTML=y;

  }

  
  
  
  
  
  
