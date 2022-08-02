const menuContent = () => {
    //I reused the JS from mainPageLoad to create the top part of the page
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
    //I create a div that will hold a grid to display the items on the menu
    const menuBody = document.createElement('div');
    menuBody.setAttribute('id', 'menuBody');
    //I create the six menu items I will display on the page
    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const item5 = document.createElement('div');
    const item6 = document.createElement('div');
    item1.classList.add('menuItem');
    item2.classList.add('menuItem');
    item3.classList.add('menuItem');
    item4.classList.add('menuItem');
    item5.classList.add('menuItem');
    item6.classList.add('menuItem');
    //Append the items to the menuBody div
    menuBody.appendChild(item1)
    menuBody.appendChild(item2)
    menuBody.appendChild(item3)
    menuBody.appendChild(item4)
    menuBody.appendChild(item5)
    menuBody.appendChild(item6)

    container.appendChild(menuBody);
    return container;
    
};

export { menuContent };