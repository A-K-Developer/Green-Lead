let main = document.querySelector('main');
let frame = document.getElementById('frame');
let firstThree = document.getElementById('firstThree');


window.addEventListener('scroll',() => console.log('scroll on window element'));
console.log('Hello i am Main.js');
if(screen.width < 800){
    frame.style.display = 'none';
    firstThree.style.display = 'none';
    console.log('Mobile under 800px')
    let verticalDevice = createElement('div',main, 'verticalDevice','','','','','')
    createElement('p',verticalDevice,'','','','','',`Hi.`)
    createElement('p',verticalDevice,'','','','','',`For a better experience,please, turn your device horizontally.`)
    let imgContainer = createElement('div',verticalDevice, 'imgContainer','','','','','')
    createElement('img',imgContainer,'',['src','../img/mobile.png','alt','deviceImg'],'',['phone','phoneX'],'','')
    createElement('img',imgContainer,'',['src','../img/1.png','alt','deviceImg'],'',['phone','phoneY'],'','')
}else{
    firstThree.style.display = 'block'
    
    frame.style.display = 'none';

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



/*
<!-- Noo neeed for now 

<section id="frame">
            <div id="content">
                <div id="frameContainer">
                    <section id="header">
                        <img src="../img/hand-cursor.png" alt="Logo missing" id="logo">
                        <button class="btn">Portfolio</button>
                    </section>
                    <section id="sideNav">
                        <div class="line line1"></div>
                        <img src="../img/gmail.png" alt="gmailiconMissing" class="icon">
                        <img src="../img/insta.png" alt="insta icon missing " class="icon">
                        <div class="line lin2"></div>
                    </section>
                    <section id="bottomNav">
                        <img src="../img/rightArrow.png" alt="gmailiconMissing" class="icon leftArrow">
                        <img src="../img/hand-cursor.png" alt="gmailiconMissing" class="icon">
                        <img src="../img/rightArrow.png" alt="gmailiconMissing" class="icon">
                        <div class="line line3"></div>

                    </section>

                </div>
                <div class="slide one">
                    <img src="../img/Artboard3.png" alt="imgMissing">
                    <img src="../img/Artboard4.png" alt="Img Missing">
                    <div id="textContainer">
                        <h1 class="heading">Green Lead</h1>
                        <p>Guiding the green energy</p>
                    </div>
                </div>
                <div class="slide two"></div>
                <div class="slide three"></div>
            </div>
        
        
        -->

*/