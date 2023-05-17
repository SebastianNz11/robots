const typed = new Typed('#element', {
    strings: ['¡Hola!', 'bienvenido a', 'Blue Wolf Robotics'],
    typeSpeed: 70,
  });

  window.sr = ScrollReveal();
  sr.reveal('#headline', {
    duration: 3000,
    origin: 'top',
    distance:'55px'
  })

  window.sr = ScrollReveal();
  sr.reveal('.catalogo', {
    duration: 3000,
    origin: 'right',
    distance:'55px'
  })

  window.sr = ScrollReveal();
  sr.reveal('#headlineB', {
    duration: 3000,
    origin: 'bottom',
    distance:'55px'
  })

 