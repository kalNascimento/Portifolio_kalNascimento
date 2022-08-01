let background = document.querySelector('.background__container');
let menu_button = document.querySelector('.color__button');
let boxshadow_header = document.querySelector('.box-shadow');
let pageName = document.querySelector('.color__titulo');
let text_title = document.getElementsByTagName('h2');
let boxshadow_footer = document.getElementsByTagName('footer');

let colorChose = Math.floor(Math.random() * 2);

if(colorChose === 0) colorSet('acid')
if(colorChose === 1) colorSet('synthwave')

console.log(colorChose)


function colorSet(themeName) {
    for(let i = 0; i < text_title.length; i++){
        text_title[i].classList.remove('color__titulo')
        text_title[i].classList.add(`color__titulo-${themeName}-2`)
    }
    
    background.classList.remove('background__container')
    menu_button.classList.remove('color__button')
    boxshadow_header.classList.remove('box-shadow')
    pageName.classList.remove('color__titulo')
    boxshadow_footer[0].classList.remove('box-shadow')
    
    background.classList.add(`background__container-${themeName}`)
    menu_button.classList.add(`color__button-${themeName}`)
    boxshadow_header.classList.add(`box-shadow-${themeName}`)
    pageName.classList.add(`color__titulo-${themeName}`)
    boxshadow_footer[0].classList.add(`box-shadow-${themeName}`)
}
