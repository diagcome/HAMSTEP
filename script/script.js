
const ourServices = () => {


    let servisesList = [...document.getElementsByClassName("servises-item")];
    let servisesListItem = [...document.getElementsByClassName("service-content")];
    servisesList.forEach((elemItem) => {
        elemItem.addEventListener('click', (event) => {

            servisesList.forEach(item => {

                if (item.classList.contains(event.target.getAttribute('data-category'))) {
                    item.classList.add('servises-item-active')
                }

                if (!item.classList.contains(event.target.getAttribute('data-category'))) {
                    item.classList.remove('servises-item-active')
                }

                servisesListItem.forEach((listItem) => {

                    if (!listItem.classList.contains(event.target.getAttribute('data-category'))) {
                        listItem.classList.remove('service-content-active')
                    }

                    if (listItem.classList.contains(event.target.getAttribute('data-category'))) {
                        listItem.classList.add('service-content-active')
                    }

                })
            })
        })
    })

}

ourServices()


const filterImages = () => {

    let filterList = [...document.getElementsByClassName("achivment-navbar-item")];

    let fotoList = [...document.getElementsByClassName("achivment-gallery-foto")];

    filterList.forEach((elemItem) => {
        elemItem.addEventListener('click', (event) => {
            // console.log(event.target.getAttribute('data-filter'))
            fotoList.forEach(item => {

                if (item.classList.contains(event.target.getAttribute('data-filter'))) {
                    item.classList.remove('hide')
                }

                if (!item.classList.contains(event.target.getAttribute('data-filter'))) {
                    item.classList.add('hide')
                }

                filterList.forEach((listItem) => {
                    if (!listItem.classList.contains(event.target.getAttribute('data-filter'))) {
                        listItem.classList.remove('achivment-navbar-item-active')
                    } else if (!listItem.classList.contains(event.target.getAttribute('data-line'))) {
                        listItem.classList.remove('achivment-navbar-item-active')
                    }

                    if (listItem.classList.contains(event.target.getAttribute('data-filter'))) {
                        listItem.classList.add('achivment-navbar-item-active')
                    } else if (listItem.classList.contains(event.target.getAttribute('data-line'))) {
                        listItem.classList.add('achivment-navbar-item-active')
                    }
                })
            })
        })
    })
}

filterImages()


let achivmentBtn = document.getElementById('achivment-button')
let fotoList = [...document.getElementsByClassName("achivment-gallery-foto")]

function addFoto() {
    fotoList.forEach((elemItem) => {
        if (elemItem.classList.contains('hidden')) {
            elemItem.classList.remove('hidden')
            achivmentBtn.remove()
        }
    })
}

achivmentBtn.addEventListener("click", addFoto)
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("feedback-content");
    let userfoto = document.getElementsByClassName("user-foto-small");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    for (i = 0; i < userfoto.length; i++) {

        userfoto[i].className = userfoto[i].className.replace("activefoto", "")
        slides[i].style.display = 'none'
    }

    slides[slideIndex - 1].style.display = "block"
    userfoto[slideIndex - 1].classList.add('activefoto')
}
