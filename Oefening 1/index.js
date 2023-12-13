const namenLijst = ['Izzy van Gisteren', 'Annebelle Blaas', 'Piet Saman', 'Coos Busters'];
let list = document.querySelector('ul');

namenLijst.forEach(function(item){
    let newListItem = document.createElement('li');
    newListItem.textContent = item;
    list.appendChild(newListItem);
})
