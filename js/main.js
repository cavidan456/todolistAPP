const add = document.getElementById("add");
const duyme = document.getElementById("btn");
const list = document.getElementById("uli");

function sabit() {
    const taskText = add.value;
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerText = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function() {
            list.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
        add.value = ""; 
    } else {
        alert("inputunuzumu bosdur");
    }
}
duyme.addEventListener("click", sabit);