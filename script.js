'use strict'
document.addEventListener('DOMContentLoaded', function(){
  const menu = document.querySelector('.menu')
  const burger = document.querySelector('.menu-burger')
  const links = document.querySelectorAll('.menu-link')

  burger.addEventListener('click', () => {
  menu.classList.toggle('menu-open')
  burger.classList.toggle('open')
  })

  // links.forEach(link => {
  //   link.addEventListener('click', function(e){
  //     e.preventDefault
  //     const id = link.getAttribute('href')
  //     document.querySelector(id).scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     })
  //   })
  // })

  menu.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('menu-link')){
      const href = e.target.getAttribute('href');
      document.querySelector(href).scrollIntoView({behavior: 'smooth'});
    };
  });
})
