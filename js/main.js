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
var swiper__coleccion = new Swiper(".swiper__coleccion__home", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
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
    // grabCursor: true,
    // slidesPerView: 3,
    // spaceBetween: 0,
    // loop: true,
    // autoplay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    // },

    // breakpoints: {
    //     480: {
    //         slidesPerView: 4,
    //     },
    //     600: {
    //         slidesPerView: 5,
    //     },
    //     720: {
    //         slidesPerView: 6,
    //     },
    //     840: {
    //         slidesPerView: 7,
    //     },
    //     960: {
    //         slidesPerView: 8,
    //     },
    //     1050: {
    //         slidesPerView: 6,
    //     },
    //     1225: {
    //         slidesPerView: 7,
    //     },
    // },

    spaceBetween: 0,
    centeredSlides: true,
    speed: 1300,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    // slidesPerView: "auto",
    slidesPerView: 2.5,
    allowTouchMove: true,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
    breakpoints: {
        600: {
            slidesPerView: 3,
        },
        720: {
            slidesPerView: 4,
        },
        840: {
            slidesPerView: 5,
        },
        960: {
            slidesPerView: 6,
        },
        1100: {
            slidesPerView: 7,
        },

        1280: {
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
var swiper__coleccion__empresa = new Swiper(".swiper__coleccion--empresa", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    // loop: true,
    spaceBetween: 0,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
    },

    pagination: {
        clickable: true,
        el: ".swiper__coleccion--empresa .swiper-pagination__coleccion",
    },
    navigation: {
        nextEl: ".swiper__coleccion--empresa .swiper-button-next__coleccion",
        prevEl: ".swiper__coleccion--empresa .swiper-button-prev__coleccion",
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

//
$(".gallery a").on("click", function (e) {
    e.preventDefault();
    console.log("click galeria");
    document.body.classList.add("open-galeria");
});

setTimeout(() => {
    console.log("Retrasado por 1 segundo.");
    $(".lightboxOverlay").on("click", function (e) {
        // e.preventDefault();
        console.log("click lightbox");
        document.body.classList.remove("open-galeria");
    });

    $(".lb-close").on("click", function (e) {
        // e.preventDefault();
        console.log("click lightbox");
        document.body.classList.remove("open-galeria");
    });
}, "1000");

// contador
addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll(".contador_cantidad");
    const velocidad = 1000;

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = cantidad_maxima / velocidad;
                if (valor_actual < cantidad_maxima) {
                    contador.innerText = Math.ceil(valor_actual + incremento);
                    setTimeout(actualizar_contador, 40);
                } else {
                    contador.innerText = cantidad_maxima;
                }
            };
            actualizar_contador();
        }
    };

    const mostrarContadores = (elementos) => {
        elementos.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add("animar");
                element.target.classList.remove("ocultar");
                setTimeout(animarContadores, 400);
            }
        });
    };

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75, //0 - 1
    });

    const elementosHTML = document.querySelectorAll(".contador");
    elementosHTML.forEach((elementoHTML) => {
        observer.observe(elementoHTML);
    });
});
