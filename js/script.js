'use strict';
var mainNav = document.getElementById("js-menu");
var navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
mainNav.classList.remove("navMenu");

mainNav.classList.toggle("active");
});