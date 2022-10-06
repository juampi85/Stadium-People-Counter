let count = 0;
let countSection = document.getElementById("count-section");
let saveSection = document.getElementById("save-section");
let saveBtn = document.getElementById("save-btn");

function increment(){
    count++;
    countSection.textContent = count;
    saveBtn.removeAttribute('disabled');
}

function save(){
    let record = count + " - ";
    saveSection.textContent += record;
    count = 0;
    countSection.textContent = 0;
    saveBtn.setAttribute('disabled', "true");
}

function restart(){
    count = 0;
    countSection.textContent = 0;
    record = "";
    saveSection.textContent = "Previous entries: ";
    saveBtn.setAttribute('disabled', "true");
}