const coloringArea = document.querySelector('.coloringArea');
const randomBtn = document.querySelector('.randomColor');
const hexaInput = document.querySelector('.hexaText');

const hexaChar = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

randomBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let bg = '#';
    for (let i = 0; i < 6; i++) bg += hexaChar[Math.floor(Math.random() * 16)];
    coloringArea.style.backgroundColor = bg;
    hexaInput.value = bg;
})

hexaInput.addEventListener('keydown', (e) => {
    if(!(hexaChar.includes(e.key) || e.key == 'Backspace')) e.preventDefault();
    if(!e.target.value.startsWith('#')) e.target.value = `#${e.target.value}`;
    if(e.target.value.length > 2){
        coloringArea.style.backgroundColor = e.target.value + e.key;
    }
})

coloringArea.addEventListener('mouseover', (e) => {
    let bgChange = setInterval(() => {
        let bg = '#';
        for (let i = 0; i < 6; i++) bg += hexaChar[Math.floor(Math.random() * 16)];
        coloringArea.style.backgroundColor = bg;
        hexaInput.value = bg;
    }, 500)

    e.target.addEventListener('mouseout', (e) => {
        clearInterval(bgChange)
    })
})