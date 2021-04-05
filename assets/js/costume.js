// SCROLL NAVBAR
const navbar = document.getElementById('navbar')

const onScroll = () => {

    const scroll = document.documentElement.scrollTop

    if (scroll > 50) {
        navbar.classList.add("navbar-light");
        navbar.classList.add("bg-light");
        navbar.classList.add("shadow-sm");
    } else {
        navbar.classList.remove("navbar-light");
        navbar.classList.remove("bg-light");
        navbar.classList.remove("shadow-sm");
    }
}

const throttledOnScroll = _.throttle(onScroll, 100, {})

window.addEventListener('scroll', onScroll);

// Validasi
(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();