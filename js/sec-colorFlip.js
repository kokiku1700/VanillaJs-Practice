let btnFlip = document.getElementById('btnFlip');
let bgColorFlip = document.getElementById('section1');


btnFlip.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    
    bgColorFlip.style.backgroundColor = rgb;
    console.log(rgb);  
    
});

