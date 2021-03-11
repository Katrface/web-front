"use strict"

const STORAGE_PHONES = "phones";

function getStorageArray() {
    const json = localStorage[STORAGE_PHONES];
    let arrayFromJson = json ? json.split(',') : null;
    return arrayFromJson ?? [];
}

export function getAll(){
    const phones = getStorageArray();
    return phones;
}

export function addItem(text){
    const phones = getStorageArray();
    phones.push(text);
    localStorage.setItem(STORAGE_PHONES, phones);
}

export function updateItem(oldText, newText){
    const phones = getStorageArray();
    let updetingIndex = phones.indexOf(oldText);
    phones[updetingIndex] = newText;
    localStorage.setItem(STORAGE_PHONES, phones);
}

export function deleteItem(text){
    const phones = getStorageArray();
    let deleteIndex = phones.indexOf(text);
    phones.splice(deleteIndex, 1);
    localStorage.setItem(STORAGE_PHONES, phones);
}
