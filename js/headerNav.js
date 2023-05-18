let move = document.getElementsByClassName('moveSec');
let sections = document.querySelectorAll('section');


move[0].onclick = () => {
    let sec1Top = sections[0].offsetTop;
    window.scroll({top: sec1Top, behavior: 'smooth'});
}
move[1].onclick = () => {
    let sec2Top = sections[1].offsetTop;
    window.scroll({top: sec2Top, behavior: 'smooth'});
}
move[2].onclick = () => {
    let sec3Top = sections[2].offsetTop;
    window.scroll({top: sec3Top, behavior: 'smooth'});
}
move[3].onclick = () => {
    let sec4Top = sections[3].offsetTop;
    window.scroll({top: sec4Top, behavior: 'smooth'});
}
move[4].onclick = () => {
    let sec5Top = sections[4].offsetTop;
    window.scroll({top: sec5Top, behavior: 'smooth'});
}
