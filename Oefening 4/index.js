const app = document.getElementById('list-app');
let itemList = document.getElementById('items');

app.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    let newItem = document.getElementById('item').value;

    let li = document.createElement('li');

    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newItem));

    itemList.appendChild(li);
}