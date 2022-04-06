// GSAP included in `index.html`
console.log('OK');

gsap.from('.cherry' ,{
  x: -500,
  duration: 4,
  ease: 'bounce'
});

gsap.from('.apple' ,{
  y: -500,
  duration: 4,
  ease: 'bounce'
});

gsap.from('.banana' ,{
  y: 500,
  duration: 4,
  ease: 'bounce'
});

gsap.from('.pineapple' ,{
  x: 500,
  duration: 4,
  ease: 'bounce'
});

gsap.from('.orange' ,{
  y: -500,
  duration: 4,
  ease: 'bounce'
});
