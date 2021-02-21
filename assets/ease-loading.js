//ease loading picture.
window.addEventListener('load', function() {
	"use strict";
	let images = document.querySelectorAll('.c-gallery-img');
	images.forEach(img => img.setAttribute('src', img.getAttribute('data-src')));             
  }, false);