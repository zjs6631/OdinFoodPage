import {homeContent} from './mainPageLoad';
import {menuContent} from './menuPageLoad';

console.log("index.js connected");

const container = document.getElementById('content')

container.appendChild(homeContent());


let trackerVar = 0;

container.addEventListener('click', function(e){
    if (e.target.classList.contains('barBtns')){
        
        const home = document.getElementById('homeBtn');
        const menu = document.getElementById('menuBtn');
        home.addEventListener('click', ()=>{
            if(trackerVar != 0){
                let currDisplay = document.getElementsByClassName('tabPage');
                currDisplay[0].parentNode.removeChild(currDisplay[0]);
                container.appendChild(homeContent());
                trackerVar = 0;
                console.log("Home button tracker variable worked!")
            }
            console.log("home button clicked!")
        })
        
        
        
        
        menu.addEventListener('click', ()=>{
            if(trackerVar != 1){
                let currDisplay = document.getElementsByClassName('tabPage');
                currDisplay[0].parentNode.removeChild(currDisplay[0]);
                container.appendChild(menuContent())
                trackerVar = 1;
                console.log("Menu button tracker variable worked!")
            }
            console.log("Menu button clicked!")
        })


    }
})

