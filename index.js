let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('date-spent').value;
    row.insertCell(1).innerHTML = document.getElementById('place-spent').value;
    row.insertCell(2).innerHTML = document.getElementById('amount-spent').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('date-spent').value = '';
    document.getElementById('place-spent').value = '';
    document.getElementById('amount-spent').value = '';
});

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

