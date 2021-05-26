const btn = document.querySelector('#btn')
const img = document.getElementById('img')
const btn_api = document.querySelector('#btn_api')
const ap_api = document.getElementById('affiche_data')
const usID = document.getElementById('userID')


let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

document.
getElementById('carousel_button--next').
addEventListener("click", function() {
    moveToNextSlide();
});

document.
getElementById('carousel_button--prev').
addEventListener("click", function() {
    moveToPreviousSlide();
});


function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');

    }

    slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide() {


    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();

}

function moveToPreviousSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();

}

console.log("le nombre de slides est de : " + totalSlides)





btn.addEventListener('click', () => {
    img.classList.toggle('show')
})

btn_api.addEventListener('click', (e) => {


    usID.classList.toggle('infor')
})

const mouseEvent = document.querySelector('.mouseEvent');
const horizontale = document.querySelector('.horizontale');
const verticale = document.querySelector('.verticale');
const element = document.querySelector('.userID')

mouseEvent.addEventListener('mousemove', (e) => {
    horizontale.innerHTML = e.x;
    verticale.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
})

var callBackGetSuccess = function(data) {
    console.log(data)
    var element = document.getElementById('userID');

    element.innerHTML = ""; //vider l'affichage
    var liste = data; //recuperation des donnees dans une liste

    liste.forEach(function(item, index, array) { // boucle de lecture et affichage des donnees
        console.log(item.id, item.title);
        const cons = "infor";
        element.innerHTML += " userId :" + item.id + "   title : " + item.title + "<br>"
    });
}

function getAPI() {
    var url = "http://my-json-server.typicode.com/rtavenar/fake_api/tasks";

    $.get(url, callBackGetSuccess).done(function() {

    })

    .fail(function() {
            alert("ereure");
        })
        /*.always(function() {
            alert("termine")
        })*/
}