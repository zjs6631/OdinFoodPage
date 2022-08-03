const contactContent = () => {

    const container = document.createElement('div');
    container.classList.add('tabPage');
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
    container.appendChild(title)
    container.appendChild(buttonBar);
    //Create a body that will hold the contact information
    const contactBody = document.createElement('div');
    contactBody.setAttribute('id', 'contactBody');
    //create the divs and content to be held in the contact body

    //title for page
    const contactTitle = document.createElement('div');
    contactTitle.setAttribute('id', 'contactTitle');
    contactTitle.innerHTML = "Contact Us";
    //card 1
    const contactCard1 = document.createElement('div');
    contactCard1.classList.add('contactCard');
    contactCard1.innerHTML = "Zachary Smith<br>Dev<br>999-888-7777<br>myREALemail@gmail.com"
    //card 2
    const contactCard2 = document.createElement('div');
    contactCard2.classList.add('contactCard');
    contactCard2.innerHTML = "Zachary Smith<br>Dev<br>999-888-7777<br>myREALemail@gmail.com"
    //card 3
    const contactCard3 = document.createElement('div');
    contactCard3.classList.add('contactCard');
    contactCard3.innerHTML = "Zachary Smith<br>Dev<br>999-888-7777<br>myREALemail@gmail.com"

    //append all newly created divs to the contact body
    contactBody.appendChild(contactTitle);
    contactBody.appendChild(contactCard1);
    contactBody.appendChild(contactCard2);
    contactBody.appendChild(contactCard3);

    container.appendChild(contactBody);

    return container;



};

export {contactContent};