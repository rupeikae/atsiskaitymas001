"use strict";
// Tabs section
let tabNavigationBlocks = document.querySelectorAll('.tab-section nav ul li');
let tabContentBlocks = document.querySelectorAll('.tab-section .tab-content');

function removeActiveNavigation() {
  for (let tab of tabNavigationBlocks) {
    tab.classList.remove('active');
  }
}

function removeActiveTabs() {
  for (let tab of tabContentBlocks) {
    tab.classList.remove('active');
  }
}

for (let tab of tabNavigationBlocks) {
  tab.addEventListener('click', function() {
    removeActiveNavigation();
    removeActiveTabs();

    this.classList.add('active');

    let index = this.dataset.slide;

    document.querySelector('.tab-section .tab-content[data-slide="'+index+'"]').classList.add('active');
  })
}


const swiper = new Swiper('.reviews-swiper', {
  slidesPerGroup: 1,
  autoHeight: true,

  breakpoints: {
    650: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

});


// Mobile menu
document.getElementById('mobile-menu-trigger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('navigation').classList.toggle('active');
});

document.getElementById('menu-item').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('navigation').classList.remove('active');
});


// Form 
let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let phoneNumber = document.getElementById('phone');
let submitBtn = document.getElementById('submitBtn');
let allGood = document.getElementById('fill');
let noFill = document.getElementById('no-fill');

submitBtn.addEventListener('click', function() {
    if (fName.value && lName.value && phoneNumber.value) {
      noFill.classList.add("hidden");
      allGood.classList.remove("good-hidden");
      }
      if (!fName.value) {
        noFill.classList.remove("hidden"); }
      if (!lName.value) {
        noFill.classList.remove("hidden");
      }
      if (!phoneNumber.value) {
        noFill.classList.remove("hidden");
      }
 });

let fNameC = document.getElementById('fname-c');
let lNameC = document.getElementById('lname-c');
let phoneNumberC = document.getElementById('phone-c');
let submitButton = document.getElementById('submit-button');
let allGoodC = document.getElementById('fill-c');
let noFillC = document.getElementById('no-fill-c');

submitButton.addEventListener('click', function() {
  if (fNameC.value && lNameC.value && Number(phoneNumberC.value)) {
    noFillC.classList.add("hidden");
    allGoodC.classList.remove("good-hidden");
    }
    if (!fNameC.value) {
      noFillC.classList.remove("hidden"); }
    if (!lNameC.value) {
      noFillC.classList.remove("hidden");
    }
    if (!phoneNumberC.value) {
      noFillC.classList.remove("hidden");
    }
});