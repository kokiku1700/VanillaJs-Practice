let modalBtn = document.getElementsByClassName('modalImo');
let modal = document.getElementsByClassName('modal');
let modalClose = document.querySelector('.modal img');

modalBtn[0].addEventListener('click', () => {
    modal[0].style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
modalClose.addEventListener('click', () => {
    modal[0].style.display = 'none';
    document.body.style.removeProperty('overflow');
})
