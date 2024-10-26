
let input = document.getElementById('Input');
let itemBtn = document.getElementById('btn');
let listItem = document.getElementById('list');

function addItem() {
    let inputVal = input.value.trim();
    if (!inputVal) return; // Avoid adding empty items

    let newLi = document.createElement('li');

    let span = document.createElement('span');
    span.classList.add('task');

    let checkbutton = document.createElement('input');
    checkbutton.type = 'checkbox';
    span.appendChild(checkbutton);

    let taskText = document.createElement('span');
    taskText.innerText = inputVal;
    span.appendChild(taskText);

    checkbutton.addEventListener('click', () => {
        taskText.style.textDecoration = checkbutton.checked ? 'line-through' : 'none';
    });

    let delbtn = document.createElement('button');
    delbtn.textContent = 'Delete';
    delbtn.classList.add('delete-btn');
    delbtn.addEventListener('click', () => {
        newLi.remove();
    });

    newLi.appendChild(span);
    newLi.appendChild(delbtn);
    listItem.appendChild(newLi);

    input.value = '';
}

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') addItem();
});
itemBtn.addEventListener('click', addItem);
