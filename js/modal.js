let modalBtn = document.getElementsByClassName('modalImo');
let modal = document.getElementsByClassName('modal');
let modalClose = document.querySelector('.modal img');
let inputButton = document.getElementById('button');

//클릭시 모달창 열림
modalBtn[0].addEventListener('click', () => {
    modal[0].style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

//클릭시 모달창 닫힘
modalClose.addEventListener('click', () => {
    modal[0].style.display = 'none';
    document.body.style.removeProperty('overflow');
});

//클릭시 input value값이 저장되는 버튼
inputButton.addEventListener('click', () => {
    let inputValue = document.getElementById('input').value;
    let createUl = document.getElementById('todoUl');
    let createLi = document.createElement('li');

    createLi.innerHTML = inputValue;

    createUl.appendChild(createLi);
    document.getElementById('input').value = "";
});
