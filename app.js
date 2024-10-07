function Add() {
    let rand = Math.floor(Math.random() * 6 + 1)
    let paste = document.getElementById('paste');
    paste.innerHTML = rand
}