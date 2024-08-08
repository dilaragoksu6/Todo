const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// alert ile uyarı verme
function addTask() {
    if (inputBox.value === '') {
        alert("Lütfen Bir metin Giriniz!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Input kutusunu temizler
        inputBox.value = "";
    }
}
// metin girme
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

//tıklama
function saveDate() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();