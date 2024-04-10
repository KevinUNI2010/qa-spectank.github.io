console.log("hola");
// aos
AOS.init();

let header__hamburger = document.getElementById("header__hamburger");
let header__espacio = document.getElementById("header__enlaces--cerrar");
header__hamburger.addEventListener("click", (e) => {
    if (header__hamburger.classList.contains("header__hamburger-active")) {
        header__hamburger.classList.remove("header__hamburger-active");
        header__enlaces.classList.remove("header__enlaces-active");
        document.body.style.overflow = "auto";
    } else {
        header__hamburger.classList.add("header__hamburger-active");
        header__enlaces.classList.add("header__enlaces-active");
        document.body.style.overflow = "hidden";
    }
});
header__espacio.addEventListener("click", (e) => {
    if (header__hamburger.classList.contains("header__hamburger-active")) {
        header__hamburger.classList.remove("header__hamburger-active");
        header__enlaces.classList.remove("header__enlaces-active");
        document.body.style.overflow = "auto";
    } else {
        header__hamburger.classList.add("header__hamburger-active");
        header__enlaces.classList.add("header__enlaces-active");
        document.body.style.overflow = "hidden";
    }
});

// card
var swiper__coleccion = new Swiper(".swiper__coleccion", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
    },
    pagination: {
        clickable: true,
        el: ".swiper-pagination__coleccion",
    },
    navigation: {
        nextEl: ".swiper-button-next__coleccion",
        prevEl: ".swiper-button-prev__coleccion",
    },
    breakpoints: {
        600: {
            effect: "none",
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 0,
        },
        900: {
            effect: "none",
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1100: {
            effect: "none",
            centeredSlides: false,
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1360: {
            effect: "none",
            centeredSlides: false,
            slidesPerView: 5,
            spaceBetween: 0,
        },
    },
});

// nuestros clientes
var swiper__clientes = new Swiper(".section__clientes--swiper", {
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        480: {
            slidesPerView: 4,
        },
        600: {
            slidesPerView: 5,
        },
        720: {
            slidesPerView: 6,
        },
        840: {
            slidesPerView: 7,
        },
        960: {
            slidesPerView: 8,
        },
        1050: {
            slidesPerView: 6,
        },
        1225: {
            slidesPerView: 7,
        },
    },
});

// nuestros antesdespues
var swiper__antesdespues = new Swiper(".section__antesdespues--swiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        clickable: true,
        el: ".section__antesdespues--swiper .swiper-pagination__general",
    },
    navigation: {
        nextEl: ".section__antesdespues--swiper .swiper-button-next__general",
        prevEl: ".section__antesdespues--swiper .swiper-button-prev__general",
    },
});

// producto disponibles
var swiper__antesdespues = new Swiper(".section__disponibles--card--swiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        clickable: true,
        el: ".section__disponibles--card--swiper .swiper-pagination__general",
    },
    breakpoints: {
        900: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

// card
var swiper__coleccion = new Swiper(".swiper__coleccion--empresa", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
    },
    pagination: {
        clickable: true,
        el: ".swiper-pagination__coleccion",
    },
    navigation: {
        nextEl: ".swiper-button-next__coleccion",
        prevEl: ".swiper-button-prev__coleccion",
    },
    breakpoints: {
        600: {
            effect: "none",
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 0,
        },
        900: {
            effect: "none",
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
});

// producto ph
// producto disponibles
var swiper__disponibleph = new Swiper(".section__disponibles--ph--swiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
        el: ".section__disponibles--ph--swiper .swiper-pagination__general",
    },
    breakpoints: {
        900: {
            slidesPerView: 2,
        },
    },
});

// preguntas
//accordion tab
function accordionToggle(element) {
    if (document.querySelectorAll(element)) {
        const randomId = function (length = 6) {
            return Math.random()
                .toString(36)
                .substring(2, length + 2);
        };
        let components = document.getElementsByClassName(element);
        if (components) {
            let component;
            for (let a = components.length - 1; a >= 0; a--) {
                component = components[a];
                let tabs = component.getElementsByClassName("accordion__tab");
                let tab;
                for (let b = tabs.length - 1; b >= 0; b--) {
                    tab = tabs[b];
                    tab.id = "accordionTab" + randomId();
                    let button = tab;
                    button.addEventListener("click", toggle);
                    let panel = tab.nextElementSibling;
                    if (panel) {
                        panel.id = "accordionPanel" + randomId();
                        panel.dataset.height = getHeight(tab, panel);
                        tab.setAttribute("aria-controls", panel.id);
                        panel.setAttribute("aria-labelledby", tab.id);
                    }
                }
            }
        }
    }
}
function toggle(e) {
    e.preventDefault();
    let component = this.parentNode.parentNode;
    let tab = this;
    let panel = tab.nextElementSibling;
    if (component.dataset.multiselect == "false") {
        let active = component.getElementsByClassName("accordion__tab--active")[0];
        tab.classList.toggle("accordion__tab--active");
        if (active?.nextElementSibling) {
            active.classList.remove("accordion__tab--active");
            active.nextElementSibling.style.height = 0;
        }
    } else tab.classList.toggle("accordion__tab--active");
    if (tab.classList.contains("accordion__tab--active") && panel) {
        panel.style.height = panel.dataset.height;
    } else if (panel) {
        panel.style.height = 0;
    }
}
function getHeight(tab, panel) {
    tab.classList.add("accordion__tab--active");
    let height = panel.scrollHeight + "px";
    tab.classList.remove("accordion__tab--active");
    return height;
}
accordionToggle("accordion");

// tabs preguntas
let collapseList = document.querySelectorAll(".section__coleccion--item");
collapseList.forEach((collapse) => {
    let botonesTop = collapse.querySelectorAll(".guias-interactivas-vista_right-img");
    let ImagenesTop = collapse.querySelectorAll(".guias-interactivas-vista_principal-img");

    botonesTop.forEach((boton) => {
        boton.addEventListener("click", function (e) {
            botonesTop.forEach((boton) => {
                boton.classList.remove("active");
            });
            this.classList.add("active");
            console.log("antes");
            ImagenesTop.forEach((imagen) => {
                imagen.classList.remove("active");
                console.log("aaaaaaaaa");
            });
            console.log("despues");
            let cadena = ".imagen_padre-" + this.getAttribute("data-botonvista");
            let ImagenPrincipal = document.querySelector(cadena);
            ImagenPrincipal.classList.add("active");
        });
    });
});

//
lightbox.option({
    resizeDuration: 100,
    wrapAround: true,
});
