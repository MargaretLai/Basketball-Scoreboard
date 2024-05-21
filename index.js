let home = document.getElementById("home")
let guest = document.getElementById("guest")

function homePlus1(){
    home.innerText = parseInt(home.innerText) + 1
}

function homePlus2(){
    home.innerText = parseInt(home.innerText) + 2
}

function homePlus3(){
    home.innerText = parseInt(home.innerText) + 3
}

function guestPlus1() {
    guest.innerText = 1 + parseInt(guest.innerText)
}

function guestPlus2() {
    guest.innerText = 2 + parseInt(guest.innerText)
}
function guestPlus3() {
    guest.innerText = 3 + parseInt(guest.innerText)
}