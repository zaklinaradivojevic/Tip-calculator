
function getValue5() {
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var total = bill / people;
    var percentage = (total * 5) / 100;
    var totalOutput = total + percentage;
    document.getElementById("total").innerHTML = `<h1>$${totalOutput.toFixed(
        2
    )}</h1>`;
    document.getElementById("tip-amount").innerHTML = `<h1>$${percentage.toFixed(
        2
    )}</h1>`;
}

function getValue10() {
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var total = bill / people;
    var percentage = (total * 10) / 100;
    var totalOutput = total + percentage;
    document.getElementById("total").innerHTML = `<h1>$${totalOutput.toFixed(
        2
    )}</h1>`;
    document.getElementById("tip-amount").innerHTML = `<h1>$${percentage.toFixed(
        2
    )}</h1>`;
}

function getValue15() {
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var total = bill / people;
    var percentage = (total * 15) / 100;
    var totalOutput = total + percentage;
    document.getElementById("total").innerHTML = `<h1>$${totalOutput.toFixed(
        2
    )}</h1>`;
    document.getElementById("tip-amount").innerHTML = `<h1>$${percentage.toFixed(
        2
    )}</h1>`;
}

function getValue25() {
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var total = bill / people;
    var percentage = (total * 25) / 100;
    var totalOutput = total + percentage;
    document.getElementById("total").innerHTML = `<h1>$${totalOutput.toFixed(
        2
    )}</h1>`;
    document.getElementById("tip-amount").innerHTML = `<h1>$${percentage.toFixed(
        2
    )}</h1>`;
}

function getValue50() {
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var total = bill / people;
    var percentage = (total * 50) / 100;
    var totalOutput = total + percentage;
    document.getElementById("total").innerHTML = `<h1>$${totalOutput.toFixed(
        2
    )}</h1>`;
    document.getElementById("tip-amount").innerHTML = `<h1>$${percentage.toFixed(
        2
    )}</h1>`;
}

function getValueCustom() {
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var total = bill / people;
    var percentage = (total * 0) / 100;
    var totalOutput = total + percentage;
    document.getElementById("total").innerHTML = `<h1>$${totalOutput.toFixed(
        2
    )}</h1>`;
    document.getElementById("tip-amount").innerHTML = `<h1>$${percentage.toFixed(
        2
    )}</h1>`;
}

function myFunction() {
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("total").value = "";
    document.getElementById("tip-amount").value = "";
}
