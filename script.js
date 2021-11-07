let currentStorage = localStorage; // sessionStorage или localStorage
let emptyHeader = "Локальное хранилище пусто";

const storage = document.querySelector('#storage');
storage.addEventListener('change', getStorage);

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', clearStorage);

const btnSave = document.querySelector('#save');
btnSave.addEventListener('click', saveItem);

// const delbtn = document.getElementById('del');
// delbtn.addEventListener('click', )

const inputKey = document.getElementById('key');
const inputValue = document.getElementById('value');
   
function updateTable(){}

function getStorage(){}

function saveItem(){
    localStorage.setItem(inputKey.value, inputValue.value)
}

function deleteItem(key){}

function clearStorage(){
    localStorage.clear();
}