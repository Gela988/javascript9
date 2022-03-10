let data = [
    {
        id: 1,
        imageUrl: 'https://media.ed.edmunds-media.com/dodge/challenger/2022/oem/2022_dodge_challenger_coupe_gt_fq_oem_1_1280.jpg',
        title: 'DODGE ',
        url: 'https://google.com'
    },
    {
        id: 2,
        imageUrl: 'https://www.motortrend.com/uploads/sites/25/2020/04/2013-Mitsubishi-Lancer-Evolution-GSR-Varis-Front-Bumper-02.jpg',
        title: 'EVO',
        url: 'https://google.com'
    },
    {
        id: 3,
        imageUrl: 'https://www.tuningblog.eu/wp-content/uploads/2019/03/2016-Widebody-Ford-Mustang-GT-Ferrada-FR3-Airride-Tuning-1.jpg',
        title: 'MUSTANG GT',
        url: 'https://google.com'
    },
    {
        id: 4,
        imageUrl: 'https://i.redd.it/40kdjandi7b41.jpg',
        title: 'SUPRA MK 5',
        url: 'https://google.com'
    }

]

let arrowLeft = document.getElementById('arrow-left-button');
let arrowRight = document.getElementById('arrow-right-button');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');


let sliderIndex = 0;

function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2tag(item) {
    let tagtitle = document.createElement('h2');
    tagtitle.setAttribute('class', 'title');
    tagtitle.append(item.title);

    return tagtitle;
}

function createImgtag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src',  item.imageUrl);
    tagImage.setAttribute('alt', item.title);

    return tagImage;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (element) => {
        let dotElement = document.createElement('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);

        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dotElement);
    });

    console.log(dots);

    return dots;
}

function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);

    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActive();

    console.log(slideItem);
}

function arrowleftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }

    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }

    sliderIndex++;
    setSlide();
}

arrowLeft.addEventListener('click', arrowleftClick)
arrowRight.addEventListener('click', arrowRightClick);


setSlide();