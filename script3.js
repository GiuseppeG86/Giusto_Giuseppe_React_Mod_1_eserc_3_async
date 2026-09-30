import print_cards from "./script2.js";

const btn = document.querySelector('#show_products');
const loader = document.querySelector('#loader');

btn.addEventListener("click", ()=>{
    const div = document.createElement('div');
    div.classList.add('loader');
    loader.appendChild(div);
    btn.style.display = 'none';    
    
    setTimeout( 
        ()=>{
        loader.removeChild(div);
        print_cards();
        }
        , 1500)});



