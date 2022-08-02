
//module used to create the initial home page
const homeContent = () => {
    //I create a div element and begin adding a title, buttons, along with divs containing different sections for the page.
    //I append all of the additional elements to their appropriate div then append those divs to the main container div.
    //I then return the container
    const container = document.createElement('div');
    container.classList.add('tabPage');
    container.setAttribute('id', 'homeID');
    const title = document.createElement('h1');
    title.innerHTML = "Cats and Coffee";
    const buttonBar = document.createElement('div');
    buttonBar.classList.add('buttonbar');
    const homeBtn = document.createElement('button');
    homeBtn.innerHTML = "HOME";
    homeBtn.setAttribute('id','homeBtn')
    homeBtn.classList.add('barBtns');
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = "MENU";
    menuBtn.setAttribute('id', 'menuBtn');
    menuBtn.classList.add('barBtns');
    const contactusBtn = document.createElement('button');
    contactusBtn.innerHTML = "CONTACT US";
    contactusBtn.classList.add('barBtns');
    contactusBtn.setAttribute('id', 'contactBtn');
    buttonBar.appendChild(homeBtn);
    buttonBar.appendChild(menuBtn);
    buttonBar.appendChild(contactusBtn);
    const descDiv = document.createElement('div');
    descDiv.classList.add('homeInfo');
    descDiv.innerText = "Welcome to Cats and Coffee! The purrrfect location to come get your caffiene and kitty fix. We carry a variety of locally sources coffee beans that" +
    " allow us to offer a high quality brew. The cats are just a plus!"
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('homeInfo');
    hoursDiv.innerHTML = "HOURS:<br> Sunday: 8am-8pm<br>Monday: 6am-6pm<br>Tuesday: 6am-6pm<br>Wednesday: 6am-6pm<br>Thursday: 6am-6pm<br>Friday: 6am-10pm<br>Saturday: 8am-10pm";
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('homeInfo');
    addressDiv.innerHTML = "Location: 333 Cat Nap Ln, Wilmington, North Carolina"

    container.appendChild(title);
    container.appendChild(buttonBar);
    container.appendChild(descDiv);
    container.appendChild(hoursDiv);
    container.appendChild(addressDiv);
    return container;
};
//I export this module for use in my index.js
export { homeContent };