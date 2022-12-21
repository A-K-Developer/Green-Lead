import {
    doc
} from "firebase/firestore";

let textArea = document.getElementById('textContainer');
let paragraph = textArea.querySelector('p');



let logo = document.getElementById('logo')
let section = document.getElementById('sectionOne')
let section2 = document.getElementById('sectiontwo')
let main = document.querySelector('main');
let content = document.getElementsByTagName('body')[0]
let videoContainer = document.getElementById('frame')
let textContainer = document.getElementById('textContainer')
let heading = textContainer.querySelector('h1')
let spanReplace = document.getElementById('spanReplace')
let scrollReplace = document.getElementById('scrollReplace');
let scroll = document.getElementById('bottomNav');
let span = spanReplace.querySelector('span')
let windTurbin = document.getElementById('windTurbin');
let windTurbinSpin = document.getElementById('windTurbinSpin');
let windContainerArr = Array.from(document.getElementsByClassName('windContainer'));
let backgroundImg = '';
let windLeftPosition = 25;
let rightPosition = 240;
let spinerPosition = 7.5;
let lastScroll = 0;
let action = 'print'
let emptyString = createElement('p', main, '', '', '', '', '', '')
let turbinContainer = document.getElementById('imageContainer');
let newTurbin = turbinContainer.cloneNode(true)
let activeScrollDown = false;
let mainContainer = document.getElementById('main-container');

let top = 400;

spanReplace.remove()

let textContentArr = ['Green Lead', 'Guiding the green energy transition',
    'GreenLead advises on renewable energy systems. We have a large portfolio of projects and a broad network of investors - we often work in the empty space between financing and the project. We specialize in designing green projects and describing the project to investors as well as finding the right projects for the right investor. This means making the green transition a reality.',
    'Then GreenLead is able to help you. Over the past 10 years, we have worked with exactly that field, from wind turbines, arctic hydropower, energy storage, waste-to-energy, solar cells, and energy optimization of plants. Our projects range from smaller projects of around 1 million. DKK up to projects up to 3 billion DKK. ',
    'Does your company have a vision for a green transition and do you need help to convert the vision into an action plan? Or do you lack experts who can guide you to the best green investments on the market?', ''
]

setInterval(moveCursor, 1010)

function moveCursor() {
    scrollReplace.style.top = '10px';
    scrollReplace.style.bottom = '20px'

}


window.addEventListener('wheel', (e) => {
    let wDelta = e.wheelDelta < 0 ? 'down' : 'up';


    if (wDelta == 'down') {
        console.log('Yes');
    } else {
        console.log('No');

    }
    if (paragraph.textContent == '') {
        if (wDelta == 'down') {
            turbinSpin('down')

            controllAnimation(heading, '', ['animate__zoomOut'], textContentArr[0], ['animate__zoomIn'])
            controllAnimation(paragraph, '', ['animate__zoomOut'], textContentArr[1], ['animate__zoomIn'])
        } else {
            turbinSpin('Up')
        }
    } else if (paragraph.textContent == textContentArr[1]) {
        if (wDelta == 'down') {
            turbinSpin('down')
            controllAnimation(heading, textContentArr[0], ['animate__zoomOut'], textContentArr[0], ['animate__zoomIn'])
            controllAnimation(paragraph, textContentArr[1], ['animate__zoomOut'], textContentArr[2], ['animate__zoomIn'])

            scrollReplace.replaceWith(spanReplace)
        } else {
            controllAnimation(heading, textContentArr[0], ['animate__zoomOut'], 'empty', ['animate__zoomIn'])
            controllAnimation(paragraph, textContentArr[1], ['animate__zoomOut'], 'empty', ['animate__zoomIn'])
            turbinSpin('Up')
            span.textContent = '01 /'
        }

    } else if (paragraph.textContent == textContentArr[2]) {
        if (wDelta == 'down') {
            turbinSpin('down')
            controllAnimation(heading, textContentArr[0], ['animate__zoomOut'], textContentArr[0], ['animate__zoomIn'])
            controllAnimation(paragraph, textContentArr[2], ['animate__zoomOut'], textContentArr[3], ['animate__zoomIn'])

            span.textContent = '02 /'
        } else {
            controllAnimation(heading, textContentArr[0], ['animate__zoomOut'], textContentArr[0], ['animate__zoomIn'])
            controllAnimation(paragraph, textContentArr[2], ['animate__zoomOut'], textContentArr[1], ['animate__zoomIn'])
            turbinSpin('Up')
            spanReplace.replaceWith(scrollReplace)
        }

    } else if (paragraph.textContent == textContentArr[3]) {
        if (wDelta == 'down') {
            turbinSpin('down')
            controllAnimation(heading, textContentArr[0], ['animate__zoomOut'], textContentArr[0], ['animate__zoomIn'])
            controllAnimation(paragraph, textContentArr[3], ['animate__zoomOut'], textContentArr[4], ['animate__zoomIn'])
            span.innerHTML = '03 /'
        } else {
            span.textContent = '01 /'
            controllAnimation(heading, textContentArr[0], ['animate__zoomOut'], textContentArr[0], ['animate__zoomIn'])
            controllAnimation(paragraph, textContentArr[3], ['animate__zoomOut'], textContentArr[2], ['animate__zoomIn'])
            turbinSpin('Up')

        }


    } else if (paragraph.textContent == textContentArr[4]) {
        if (wDelta == 'down') {
            turbinSpin('down')

            heading.remove()
            paragraph.replaceWith(emptyString)
            paragraph.textContent = 'stop'
            spanReplace.style.display = 'none'
            createBackgroundEl(section, 'add');

        } else {
            controllAnimation(heading, textContentArr[0], ['animate__zoomOut'], textContentArr[0], ['animate__zoomIn'])
            controllAnimation(paragraph, textContentArr[4], ['animate__zoomOut'], textContentArr[3], ['animate__zoomIn'])
            turbinSpin('Up')
            span.textContent = '02 /'
        }

    } else if (backgroundImg !== '') {
        if (activeScrollDown) {
            let imgWhenScroll = document.getElementById('backgroundImg')
            if(imgWhenScroll.style.height == '1500px'){
                imgWhenScroll.style.height == '2900px';
                imgWhenScroll.style.bottom = '400px'
                if(imgWhenScroll.style.bottom = '400px'){
                    let h1Tag = document.getElementById('h1Tag');
                    let opacityOverlay = document.getElementById('opacityOverlay');

                    if(opacityOverlay){
                        videoContainer.classList.add('videoCon');

                    }
                    if(h1Tag){
                        if(!opacityOverlay){

                            opacityOverlay = createElement('div',content, 'opacityOverlay','','','','','')
                        }
                    }else{

                        h1Tag = createElement('h1',section,'h1Tag','','',['intreduceVideo'],'','See what the others think about our workshops.');
                    }
                }
            }
            imgWhenScroll.style.height = '1500px';
            windContainerArr.forEach(x => {
                console.log(x);
            })
            console.log(imgWhenScroll.style.height);

            

        }


        if (wDelta == 'down') {
            turbinSpin('down')
            if (rightPosition > 13) {
                backgroundImg.style.right = `-${rightPosition}%`;
                rightPosition = rightPosition - 20;
            }
            if (rightPosition == 20) {
                console.log('Scroll Down');

                activeScrollDown = true;
            }

        } else {
            if (rightPosition == 220) {


            }
            if (rightPosition == 240) {
                createBackgroundEl(section, 'remove');

                emptyString.replaceWith(paragraph)

                textContainer.prepend(heading)
                controllAnimation(heading, '', ['animate__zoomOut'], textContentArr[0], ['animate__zoomIn'])
                controllAnimation(paragraph, '', ['animate__zoomOut'], textContentArr[4], ['animate__zoomIn'])
                console.log(paragraph);
                turbinSpin('Up')
                spanReplace.style.display = 'block'
                span.textContent = '03 /'
            }
            if (rightPosition < 240) {
                backgroundImg.style.right = `-${rightPosition}%`;
                rightPosition = rightPosition + 20;
            }

        }



    }

    function createBackgroundEl(parent, action) {
        if (action == 'add') {
            let container = createElement('div', parent, 'backgroudContainer', '', '', '', '', '');
            createElement('img', container, 'backgroundImg', ['src', '../img/myBackground.png', 'alt', 'backgorund misssign'], '', '', '', '')
            let windContainer = createElement('div', container, '', '', '', ['windContainer'], '', '')
            createElement('img', windContainer, '', ['src', '../img/Artboard3.png', 'alt', 'backgorund misssign'], '', ['windturbin', 'wind3'], '', '')
            createElement('img', windContainer, '', ['src', '../img/Artboard4.png', 'alt', 'backgorund misssign'], '', ['windturbinSpin', 'spin3'], '', '')
            backgroundImg = container

            let windContainer2 = createElement('div', container, '', '', '', ['windContainer', 'container2'], '', '')
            createElement('img', windContainer2, '', ['src', '../img/Artboard3.png', 'alt', 'backgorund misssign'], '', ['windturbin', 'wind4'], '', '')
            createElement('img', windContainer2, '', ['src', '../img/Artboard4.png', 'alt', 'backgorund misssign'], '', ['windturbinSpin', 'spin4'], '', '')
            let windContainer3 = createElement('div', container, '', '', '', ['windContainer', 'container3'], '', '')
            createElement('img', windContainer3, '', ['src', '../img/Artboard3.png', 'alt', 'backgorund misssign'], '', ['windturbin', 'wind5'], '', '')
            createElement('img', windContainer3, '', ['src', '../img/Artboard4.png', 'alt', 'backgorund misssign'], '', ['windturbinSpin', 'spin5'], '', '')

        } else {
            //remove
            let backgroudContainer = document.getElementById('backgroudContainer');
            backgroudContainer.remove();
            backgroundImg = '';

        }

    }

    function turbinSpin(arg) {
        let turbin = document.querySelectorAll('.windturbinSpin');

        if (arg !== 'Up') {

            turbin.forEach(x => {
                x.classList.add('windAnimation')
                x.addEventListener('animationend', () => {
                    x.classList.remove('windAnimation')
                })
            })

        } else {
            turbin.forEach(x => {
                x.classList.add('windAnimationUp')
                x.addEventListener('animationend', () => {
                    x.classList.remove('windAnimationUp')
                })
            })
        }


    }




});
if (screen.width < 800) {
    section.style.display = 'none';
    let verticalDevice = createElement('div', main, 'verticalDevice', '', '', '', '', '')
    createElement('p', verticalDevice, '', '', '', '', '', `Hi.`)
    createElement('p', verticalDevice, '', '', '', '', '', `For a better experience,please, turn your device horizontally.`)
    let imgContainer = createElement('div', verticalDevice, 'imgContainer', '', '', '', '', '')
    createElement('img', imgContainer, '', ['src', '../img/mobile.png', 'alt', 'deviceImg'], '', ['phone', 'phoneX'], '', '')
    createElement('img', imgContainer, '', ['src', '../img/1.png', 'alt', 'deviceImg'], '', ['phone', 'phoneY'], '', '')
}








function controllAnimation(element, contentInput, arrOfClasses, newContent, newClasses) {
    element.textContent = contentInput;

    for (let i = 0; i < arrOfClasses.length; i++) {
        element.classList.add(arrOfClasses[i]);
        element.addEventListener('animationend', () => {
            element.classList.remove(arrOfClasses[i])
        })
    }
    if (newContent !== '') {
        element.addEventListener('animationend', () => {
            for (let k = 0; k < newClasses.length; k++) {
                element.textContent = newContent;
                element.classList.add(newClasses[k])
                element.addEventListener('animationend', () => {
                    element.classList.remove(newClasses[k])
                })
            }
            if (newContent == 'empty') {
                element.textContent = ''
            }

        })
    }


}

function createElement(type, parent, id, attributeArr,
    eventListenerArr, classArr, action, context, ) {
    if (action == 'printOnce') {
        return;
    }

    let container = document.createElement(type);

    if (type == 'button') {
        container.setAttribute('type', 'button')
    }

    if (context !== '') {
        container.textContent = context;
    }
    if (id !== '') {
        container.id = id;
    }
    while (attributeArr.length > 1) {
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