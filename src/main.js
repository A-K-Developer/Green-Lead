let section = document.getElementById('sectionOne')
let main = document.querySelector('main');
let content = document.getElementsByTagName('body')[0]
let turbin = document.querySelector('.windturbinSpin');
let heading = document.getElementsByClassName('heading')[0];
let spanReplace = document.getElementById('spanReplace')
let scrollReplace = document.getElementById('scrollReplace');
let scroll = document.getElementById('bottomNav');
let span = spanReplace.querySelector('span')

let windTurbin = document.getElementById('windTurbin');
let windTurbinSpin = document.getElementById('windTurbinSpin');

let backgroundImg= '';

spanReplace.remove()

let windLeftPosition = 25;
let rightPosition = 200;
let spinerPosition = 7.5;
let lastScroll = 0;
window.addEventListener('wheel',() => {
    if(paragraph.textContent == ''){
        heading.textContent = textContentArr[0]
        paragraph.textContent = textContentArr[1]
    }else if(paragraph.textContent == textContentArr[1]){
        scrollReplace.replaceWith(spanReplace)
        paragraph.textContent =  textContentArr[2]
    }else if(paragraph.textContent == textContentArr[2]){
        span.textContent = '02 /'
        paragraph.textContent =  textContentArr[3]
    }else if(paragraph.textContent == textContentArr[3]){
        span.textContent = '03 /'
        paragraph.textContent =  textContentArr[4]
    }else if(paragraph.textContent == textContentArr[4]){
        let section = document.getElementById('sectionOne')
        heading.remove();
        paragraph.remove();
        spanReplace.remove();
        backgroundImg = createElement('img',section,'backgroundImg', ['src','../img/myBackground.png','alt','backgorund misssign'],'','','','')
        paragraph.textContent ='stop';
    }else if(backgroundImg !== ''){
        
        if(rightPosition > 0 ){
            backgroundImg.style.right = `-${rightPosition}%`;
            rightPosition--
        }
        if(windLeftPosition > -200){
            windTurbin.style.left= `${windLeftPosition}%`;
            windLeftPosition--

        }
        if(spinerPosition > -200){
            windTurbinSpin.style.left = `${spinerPosition}%`;
            spinerPosition--
        }

    }

    turbin.classList.add('windAnimation')

    turbin.addEventListener('animationend',()=> {
        turbin.classList.remove('windAnimation')
    })

});
if(screen.width < 800){
    section.style.display = 'none';
    let verticalDevice = createElement('div',main, 'verticalDevice','','','','','')
    createElement('p',verticalDevice,'','','','','',`Hi.`)
    createElement('p',verticalDevice,'','','','','',`For a better experience,please, turn your device horizontally.`)
    let imgContainer = createElement('div',verticalDevice, 'imgContainer','','','','','')
    createElement('img',imgContainer,'',['src','../img/mobile.png','alt','deviceImg'],'',['phone','phoneX'],'','')
    createElement('img',imgContainer,'',['src','../img/1.png','alt','deviceImg'],'',['phone','phoneY'],'','')
}


let textArea = document.getElementById('textContainer');
let paragraph = textArea.querySelector('p');

let logo = document.getElementById('logo')




let textContentArr = ['Green Lead','Guiding the green energy transition','GreenLead advises on renewable energy systems. We have a large portfolio of projects and a broad network of investors - we often work in the empty space between financing and the project. We specialize in designing green projects and describing the project to investors as well as finding the right projects for the right investor. This means making the green transition a reality.','Then GreenLead is able to help you. Over the past 10 years, we have worked with exactly that field, from wind turbines, arctic hydropower, energy storage, waste-to-energy, solar cells, and energy optimization of plants. Our projects range from smaller projects of around 1 million. DKK up to projects up to 3 billion DKK. ','Does your company have a vision for a green transition and do you need help to convert the vision into an action plan? Or do you lack experts who can guide you to the best green investments on the market?','']



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
    }else{
        console.log(parent);
        parent.appendChild(container)
    }

    return container
}