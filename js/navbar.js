const header = document.querySelector("#header");
const buton = document.querySelector("#button-toggle");
const overlay = document.querySelector('.overlay');
const elements = document.querySelectorAll('.got-fade');
buton.addEventListener('click',() => {
    if(!header.classList.contains('open')) {
        header.classList.add('open');
        elements.forEach(element => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in');
        });

    }else {
        header.classList.remove('open')
        elements.forEach(element => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out');
        })
    }
})
