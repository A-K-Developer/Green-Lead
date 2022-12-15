let main = document.querySelector('main');

window.addEventListener('scroll',() => console.log('scroll on window element'));
console.log('Hello i am Main.js');
if(screen.width < 800){
    console.log('Mobile under 800px')
    let verticalDevice = createElement('div',main, 'verticalDevice','','','','','')
    createElement('p',verticalDevice,'','','','','',`Hi.`)
    createElement('p',verticalDevice,'','','','','',`For a better experience,please, turn your device horizontally.`)
    let imgContainer = createElement('div',verticalDevice, 'imgContainer','','','','','')
    createElement('img',imgContainer,'',['src','../img/mobile.png','alt','deviceImg'],'',['phone','phoneX'],'','')
    createElement('img',imgContainer,'',['src','../img/1.png','alt','deviceImg'],'',['phone','phoneY'],'','')
}else{
    canvasforMobile(main)
    createSlideShow();
}   

function createSlideShow(){
    let frame = createElement('div',main,'frame','','','','','')
    let content = createElement('div',frame,'content','','','','','')
    let slideOne = createElement('div',content,'','','',['slide','one'],'','')
    
    
    slideOne.addEventListener('scroll' , (e) => {
        console.log('scroll on slide');
    })
    createElement('img',slideOne,'',['src','../img/Artboard3.png','alt','ImgMissing'],'',['windturbin'],'','',)
    createElement('img',slideOne,'',['src','../img/Artboard4.png','alt','ImgMissing'],'',['windturbinSpin'],'','',)


    let textContent = createElement('section',slideOne,'textContainer','','','','','');
    createElement('h1',textContent,'','','',['heading'],'','Green Lead');
    createElement('p',textContent,'','','','','','Guiding the green energy transition')

    createElement('div',content,'','','',['slide','two'],'','')
    createElement('div',content,'','','',['slide','three'],'','')

    
}
function canvasforMobile(main){
    let slideFrameContainer = createElement('section',main,'frameContainer','','','','','');
    let header = createElement('section',slideFrameContainer,'header','','','','','')
    createElement('img',header,'logo',['src','../img/hand-cursor.png','alt','iconMissing-insta'],'',['icon'],'','')
    createElement('button',header,'','','',['btn'],'','Portfolio')

    let sideNav = createElement('section',slideFrameContainer,'sideNav','','','','','');
    createElement('div',sideNav,'','','',['line', 'line1'],'','','',);
    createElement('img',sideNav,'',['src','../img/gmail.png','alt','iconMissing-gmail'],'',['icon'],'','')
    createElement('img',sideNav,'',['src','../img/insta.png','alt','iconMissing-insta'],'',['icon'],'','')
    createElement('div',sideNav,'','','',['line', 'line2'],'','','');

    let bottomNav = createElement('section',slideFrameContainer,'bottomNav','','','','','');
    createElement('img',bottomNav,'',['src','../img/rightArrow.png','alt','iconMissing-insta'],'',['icon','leftArrow'],'','')
    createElement('img',bottomNav,'',['src','../img/hand-cursor.png','alt','iconMissing-insta'],'',['icon'],'','')
    createElement('img',bottomNav,'',['src','../img/rightArrow.png','alt','iconMissing-insta'],'',['icon'],'','')
    createElement('div',bottomNav,'','','',['line', 'line3'],'','');

    slideFrameContainer.addEventListener('click', (e) => {
        console.log('hello maci');
    })
}

/*
    <div id="frame">
        <div id="content">
            <div class="slide one"></div>
            <div class="slide two"></div>
            <div class="slide three"></div>

        </div>    
    </div>
 */
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
