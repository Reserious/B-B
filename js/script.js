$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.nav').toggleClass('active');
      $('body').toggleClass('lock');

   });
});

const alLangs = ['it','en'];
let currentLang = 'it'
const langButtons = document.querySelectorAll(".lingua");