const toggleButton = document.querySelector('.burger-menu');
const sideDrawer = document.querySelector('.sidedrawer');
const overlay = document.querySelector('.overlay');
const heroSectionImage = document.getElementById('hero-section-img');
const leadQuestion = document.querySelector('.lead-question-after');
const valueProposition = document.querySelector('.value-proposition');
const contactButton = document.querySelector('.contact-button');
const callButton = document.querySelector('.contact-apprearance-call');

let scrolldelay = null;

const toggleSideDrawer = () => {
  overlay.classList.toggle('showHideOverlay');
  sideDrawer.classList.toggle('showHideSideDrawer');
  setTimeout(callToAction, 0);
  // if (sideDrawer.classList.contains('showHideSideDrawer')) {
  //   pageScroll();
  // }
};

const switchImage = () => {
  heroSectionImage.src = './assets/img/web-developer-2.png';
  leadQuestion.classList.toggle('show');
  valueProposition.classList.add('hide');
};
const switchImageBack = () => {
  heroSectionImage.src = './assets/img/web-developer-1.png';
  leadQuestion.classList.toggle('show');
  valueProposition.classList.remove('hide');
};

// const pageScroll = () => {
//   sideDrawer.scrollBy(0, 300);
//   scrolldelay = setTimeout(pageScroll, 10);
//   setTimeout(callToAction, 6000);
// };

const callToAction = () => {
  callButton.classList.add('contact-apprearance-switch');
};

toggleButton.addEventListener('click', toggleSideDrawer);

overlay.addEventListener('click', toggleSideDrawer);

contactButton.addEventListener('click', switchImage);
leadQuestion.addEventListener('mouseleave', switchImageBack);

sideDrawer.addEventListener('mouseenter', () => {
  clearInterval(scrolldelay);
});




