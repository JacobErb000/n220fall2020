let txtTotal = document.getElementById("txtTotal");
let dvResult = document.getElementById("dvResult");

function check(){
    let tip = Number(txtTotal.value) * 0.20;
    let final = Number(tip) + Number(txtTotal.value);
    dvResult.innerHTML = "Tip: $" + tip + " Total: $" + final; 

}