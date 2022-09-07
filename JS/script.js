const navToggler = document.querySelector('.nav-toggler')
const navList = document.querySelector('.nav-list')

navToggler.addEventListener('click', () => {
    navList.classList.toggle('nav-list-down')
    if (navToggler.querySelector('.fa-bars')) {
    navToggler.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>'
    } else {
        navToggler.innerHTML = '<i class="fa-solid fa-bars"></i>'
     
    }
})

const emailInput =document.querySelector('.input-bx')
const goBtn = document.querySelector('.go-btn')

emailInput.querySelector('input').addEventListener('keyup', ()=> {
    let temp = emailInput.querySelector('input').value
    
    if (!temp.includes('@') || temp.slice(-1)==="." || temp.slice(-1)==="@") {
        emailInput.querySelector('input').style.borderColor = 'red'
        document.querySelector('.error-email').style.display = "block"
    }
    else {
        emailInput.querySelector('input').style.borderColor = "#fff"
        document.querySelector('.error-email').style.display = "none"
    }

    if (temp === "") {
        emailInput.querySelector('input').style.borderColor = "#fff"
        document.querySelector('.error-email').style.display = "none"
    }
    
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    // slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
  });
