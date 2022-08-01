

const homeContent = () => {
    const container = document.createElement('div');
    container.classList.add('tabPage');
    const title = document.createElement('h1');
    title.innerHTML = "Cats and Coffee";
    const descDiv = document.createElement('div');
    descDiv.classList.add('homeInfo');
    descDiv.innerText = "Welcome to Cats and Coffee! The purrrfect location to come get your caffiene and kitty fix. We carry a variety of locally sources coffee beans that" +
    " allow us to offer a high quality brew. The cats are just a plus!"
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('homeInfo');
    hoursDiv.innerHTML = "HOURS:<br> Sunday: 8am-8pm<br>Monday: 6am-6pm<br>Tuesday: 6am-6pm<br>Wednesday: 6am-6pm<br>Thursday: 6am-6pm<br>Friday: 6am-10pm<br>Saturday: 8am-10pm";
    const addressDiv = document.createElement('div');
    addressDiv.innerHTML = "Location: 333 Cat Nap Ln, Wilmington, North Carolina"

    container.appendChild(title);
    container.appendChild(descDiv);
    container.appendChild(hoursDiv);
    container.appendChild(addressDiv);
};

export { homeContent };