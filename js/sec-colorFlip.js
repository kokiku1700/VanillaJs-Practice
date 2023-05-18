let btnFlip = document.getElementById('btnFlip');
let bgColorFlip = document.getElementById('section1');


btnFlip.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    let colorArr = [];
    colorArr.push(rgb);
    if(colorArr.length > 1) {
        colorArr.shift();
    }
    bgColorFlip.style.backgroundColor = colorArr[0];
    console.log(rgb);  
});

