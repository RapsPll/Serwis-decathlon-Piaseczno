const serviceTypes = document.querySelector('.navigation__itemLink--special');
const listServiceTypes = document.querySelector('.navigation__subcategories');
const main = document.querySelector('main');
const descriptionBox = document.querySelector('.description');
const iconServiceBikes = document.querySelector('.service__bikes');
const iconServiceWinter = document.querySelector('.service__winter');
const iconServiceRollers = document.querySelector('.service__rollers');
const iconServiceTrophy = document.querySelector('.service__trophy');
const iconServiceRackets = document.querySelector('.service__rackets');
const iconServiceCamping = document.querySelector('.service__camping');

const showSubMenu = () => {
    listServiceTypes.classList.toggle("navigation__subcategories--show")
}
serviceTypes.addEventListener('click', showSubMenu )


let scrollPosition = 0;
let ticking = false;

const showDescription = (scrollPosition) => {
    if (scrollPosition >= 400) {
        descriptionBox.classList.add('description__show')
      }
}

const showServiceIcons = (scrollPosition) => {
    if(scrollPosition >= 1300) {
        iconServiceBikes.classList.add('service__bikes--animation')
        iconServiceWinter.classList.add('service__winter--animation')
        iconServiceRollers.classList.add('service__rollers--animation')
        iconServiceTrophy.classList.add('service__trophy--animation')
        iconServiceRackets.classList.add('service__rackets--animation')
        iconServiceCamping.classList.add('service__camping--animation')

    }
}

document.addEventListener('scroll', function(e) {
  scrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
        showDescription(scrollPosition);
        showServiceIcons(scrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});