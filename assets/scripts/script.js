let background = document.querySelector('.background__container');
let menu_button = document.querySelector('.color__button');
let border_header = document.getElementsByTagName('header');
let pageName = document.querySelector('.color__titulo');
let text_title = document.getElementsByTagName('h2');
let menu_color = document.querySelector('.menu__lista');
let border_footer = document.getElementsByTagName('footer');

let colorChose = 1;

let win = window.innerWidth;

console.log(menu_button)
if(colorChose === 0) colorSet('acid');
if(colorChose === 1) colorSet('synthwave');

function colorSet(themeName) {
    for(let i = 0; i < text_title.length; i++){
        text_title[i].classList.remove('color__titulo');
        text_title[i].classList.add(`color__titulo--${themeName}-2`);
    }

    if(win < 800) menu_color.classList.add(`menu__lista--${themeName}`);

    background.classList.remove('background__container');
    menu_button.classList.remove('color__button');
    border_header[0].classList.remove('box-shadow');
    pageName.classList.remove('color__titulo');
    border_footer[0].classList.remove('box-shadow');

    background.classList.add(`background__container--${themeName}`);
    menu_button.classList.add(`color__button--${themeName}`);
    border_header[0].classList.add(`border__header--${themeName}`);
    pageName.classList.add(`color__titulo--${themeName}`);
    border_footer[0].classList.add(`border__footer--${themeName}`);
    
    return
}