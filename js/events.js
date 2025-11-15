// HEADER 

const menuToggle = document.querySelector('#burger-menu__toggle');
const burgerLinks = document.querySelectorAll('.burger-nav__link');
const overlay = document.querySelector('.burger-nav');

// menuToggle.addEventListener('change', () => {
//   menuToggle.checked ?
//   document.body.style.overflow = 'hidden':
//   document.body.style.overflow = '';
//   console.log('clicked')
// })

// burgerLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     menuToggle.checked = false;
//   document.body.style.overflow = '';
//   console.log('clicked')

//   })
// })

overlay.addEventListener('click', () => {
  menuToggle.checked = false;
  document.body.style.overflow = '';

})

// HOW-IT-WOEKS BLOCK 

const bullets = document.querySelectorAll('.step-indicator');

bullets.forEach(bullet => {
  bullet.addEventListener('click', (e)  => {
    bullets.forEach(bullet => {
      bullet.parentNode.classList.add('active')
      bullet.parentNode.classList.remove('active')
    })
    bullet.parentNode.classList.remove('active')
    bullet.parentNode.classList.add('active')
    })
})
