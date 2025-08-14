let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
    addItem(this.value);
    this.value = "";
    }
});

function addItem(text) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${text} <i></i>`;


    listItem.addEventListener("click", function(e) {
        if (e.target.tagName !== "I") {
            this.classList.toggle('done');
        }
    });

    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove();
    });

    list.appendChild(listItem);
}



