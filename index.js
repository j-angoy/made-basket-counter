let saveEl = document.getElementById("save-el")
let makeEl = document.getElementById("shot-make")
let totalEl = document.getElementById("shot-total")
let percEl = document.getElementById("percent")

let shotMake = 0
let shotTotal = 0

function incrementMake() {
    shotMake += 1
    shotTotal += 1
    counter.textContent = shotMake + "/" + shotTotal
}


function incrementTotal() {
    shotTotal += 1
    counter.textContent = shotMake + "/" + shotTotal
}

function save() {
    let percentage = (shotMake / shotTotal)*100
    let percNum = parseFloat(percentage).toFixed(0)
    
    let countStr = shotMake + "/" + shotTotal + " - "
    saveEl.textContent += countStr

    percEl.textContent = "Last percentage: " + percNum +"%"
    
    shotMake = 0
    shotTotal = 0
    counter.textContent = shotMake + "/" + shotTotal
}
