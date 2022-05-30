//template_zp97t3d
//service_vh5yaoj
//PXZE4adXorkostX6U
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(e) {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX * scaleFactor;
    const y = e.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    } else {
        document.body.classList.remove("dark-theme")
    }
    
}

function contact(e) {
    e.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
        .sendForm(
            'service_vh5yaoj',
            'template_zp97t3d',
            e.target,
            'PXZE4adXorkostX6U'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                "The email service is temporarily unavailable. Please contact me directly on adensmithy13@gmail.com"
            )
        })
}

function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}