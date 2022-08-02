import {homeContent} from './mainPageLoad';
import {menuContent} from './menuPageLoad';

console.log("index.js connected");

const container = document.getElementById('content')

container.appendChild(homeContent());
let homeDis = document.getElementById('homeID');
let trackerVar = 0;
const home = document.getElementById('homeBtn');
const menu = document.getElementById('menuBtn');

home.addEventListener('click', ()=>{
    if(trackerVar != 0){
        const currDisplay = document.getElementsByClassName('tabPage');
        container.removeChild(currDisplay)
        container.appendChild(homeContent());
        trackerVar = 0;
    }
})




menu.addEventListener('click', ()=>{
    if(trackerVar != 1){
        const currDisplay = document.getElementsByClassName('tabPage');
        container.removeChild(container.currDisplay)
        container.appendChild(menuContent())
        trackerVar = 1;
    }
})