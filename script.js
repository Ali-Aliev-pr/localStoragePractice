let currentStorage = localStorage; // sessionStorage или localStorage
let emptyHeader = "Локальное хранилище пусто";

const storage = document.querySelector('#storage');
storage.addEventListener('change', getStorage);

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', clearStorage);

const btnSave = document.querySelector('#save');
btnSave.addEventListener('click', saveItem);

let output = document.getElementById('output');

// const delbtn = document.getElementById('del');
// delbtn.addEventListener('click', )

const inputKey = document.getElementById('key');
const inputValue = document.getElementById('value');
   
function updateTable(){
    if (localStorage.length == 0) {
        console.log(emptyHeader);
    } else {
        output.innerHTML = ``
        for(let i = 0; i < localStorage.length; i++) {
            let column = document.createElement('tr');
            let idtext = document.createElement('td');
            let keytext = document.createElement('td');
            let valuetext = document.createElement('td');
            let key = localStorage.key(i)

            idtext.innerText = i+1
            keytext.innerText = key
            valuetext.innerText = localStorage.getItem(key);
            column.appendChild(idtext);
            column.appendChild(keytext);
            column.appendChild(valuetext);
            output.appendChild(column);
            console.log(localStorage.length);
        }
    }
}

// idtext.innerText = localStorage.key(i);


function getStorage(){
    let a = storage.value[0]
    console.log(a);
}

function saveItem(){
    localStorage.setItem(inputKey.value, inputValue.value)
    updateTable()
}

function deleteItem(key){}

function clearStorage(){
    localStorage.clear();
}