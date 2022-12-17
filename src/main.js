let firstThree = document.getElementById('firstThree');
let main = document.querySelector('main');
let content = document.getElementsByTagName('body')[0]

let lastScroll = 0;
window.addEventListener('wheel',() => {
    let currentScroll = window.pageYOffset;
    if(currentScroll - lastScroll >0){
        console.log(lastScroll)
    }else{
        console.log(currentScroll)
    }

    lastScroll = currentScroll
console.log(currentScroll)

});
if(screen.width < 800){
    firstThree.style.display = 'none';
    let verticalDevice = createElement('div',main, 'verticalDevice','','','','','')
    createElement('p',verticalDevice,'','','','','',`Hi.`)
    createElement('p',verticalDevice,'','','','','',`For a better experience,please, turn your device horizontally.`)
    let imgContainer = createElement('div',verticalDevice, 'imgContainer','','','','','')
    createElement('img',imgContainer,'',['src','../img/mobile.png','alt','deviceImg'],'',['phone','phoneX'],'','')
    createElement('img',imgContainer,'',['src','../img/1.png','alt','deviceImg'],'',['phone','phoneY'],'','')
}

let leftArrow = document.querySelector('.leftArrow');
let rightArrow= document.querySelector('.rightArrow');
let turbin = document.querySelector('.windturbinSpin');
let textArea = document.getElementById('textContainer');
let paragraph = textArea.querySelector('p');
let pageNumber = document.getElementById('pageNumber');
let logo = document.getElementById('logo')
let currentPage = pageNumber.querySelector('span')
let trip = document.getElementById('frame');

rightArrow.addEventListener('click',rightArrowClick);
leftArrow.addEventListener('click',leftArrowClick)

function rightArrowClick(){
    if(currentPage.textContent == '01 /'){
        currentPage.textContent = '02 /';
        paragraph.textContent = 'Then GreenLead is able to help you. Over the past 10 years, we have worked with exactly that field, from wind turbines, arctic hydropower, energy storage, waste-to-energy, solar cells, and energy optimization of plants. Our projects range from smaller projects of around 1 million. DKK up to projects up to 3 billion DKK. '
    }else if(currentPage.textContent == '02 /'){
        currentPage.textContent = '03 /'
        paragraph.textContent = 'Does your company have a vision for a green transition and do you need help to convert the vision into an action plan? Or do you lack experts who can guide you to the best green investments on the market?'
            
    }else if(currentPage.textContent == '00 /'){
        currentPage.textContent = '01 /'
        paragraph.textContent = 'GreenLead advises on renewable energy systems. We have a large portfolio of projects and a broad network of investors - we often work in the empty space between financing and the project. We specialize in designing green projects and describing the project to investors as well as finding the right projects for the right investor. This means making the green transition a reality.'
    }
    turbin.classList.add('windAnimation')

    pageNumber.style.zIndex = 1;
    logo.style.zIndex = 1
    leftArrow.style.zIndex = 1

    turbin.addEventListener('animationend',()=> {
        turbin.classList.remove('windAnimation')
    })
}
function leftArrowClick(){
    turbin.classList.add('windAnimation')

    if(currentPage.textContent == '01 /'){
        paragraph.textContent = 'Guiding the green energy transition';
        currentPage.textContent = '00 /';
        pageNumber.style.zIndex = -1;
        logo.style.zIndex = -1
        leftArrow.style.zIndex = -1
    }else if(currentPage.textContent == '02 /'){
        paragraph.textContent ='GreenLead advises on renewable energy systems. We have a large portfolio of projects and a broad network of investors - we often work in the empty space between financing and the project. We specialize in designing green projects and describing the project to investors as well as finding the right projects for the right investor. This means making the green transition a reality.';
        currentPage.textContent = '01 /';
    }else if(currentPage.textContent == '03 /'){
        currentPage.textContent = '02 /'
        paragraph.textContent = 'Then GreenLead is able to help you. Over the past 10 years, we have worked with exactly that field, from wind turbines, arctic hydropower, energy storage, waste-to-energy, solar cells, and energy optimization of plants. Our projects range from smaller projects of around 1 million. DKK up to projects up to 3 billion DKK.'
    }   
    
}

function createElement(type, parent, id, attributeArr,
    eventListenerArr, classArr, action, context,) {

    let container = document.createElement(type);
    
    if(type == 'button'){
        container.setAttribute('type','button')
    }

    if (context !== '') {
        container.textContent = context;
    }
    if (id !== '') {
        container.id = id;
    }
    while(attributeArr.length > 1){
        let href = attributeArr.shift();
        let path = attributeArr.shift();

        if (href !== undefined && path !== undefined) {
            container.setAttribute(href, path)
        }
    }
   
    while (classArr.length > 0 && classArr !== '') {
        container.classList.add(classArr.shift())
    }

    if (eventListenerArr !== '') {
        let event = eventListenerArr.shift();

        while (eventListenerArr.length > 0) {
            container.addEventListener(event, eventListenerArr[0]);
            eventListenerArr.shift();
        }
    }

    if (action == 'push') {
        parent.push(container)
    } else {
        parent.appendChild(container)
    }

    return container
}