let list = document.querySelectorAll('ul');

for(let i = 0; i < list.length; i++){
    list[i].firstElementChild.textContent = "Eerste Item";
    list[i].lastElementChild.textContent = "Laatste Item";
};