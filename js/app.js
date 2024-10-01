/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Navigation sidebar 
// 
// em size
const emSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
document.addEventListener('DOMContentLoaded', function() {
    // menu button
    document.getElementById('menu-button').addEventListener('click', function() {
        showHideNavBar();
    });

    // section clicking
    
});

// build the nav

// Show and hide navigation side bar
function showHideNavBar() {
    console.log("inside showHideNavBar");
    const navBars = document.getElementsByClassName('navbar__menu');
    const narBar = navBars[0];
    if(window.innerWidth <= 35*emSize) {
        narBar.classList.toggle('visible');
    } else {
        narBar.classList.toggle('hidden');
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
function scrollToSection(sectionId) {
    console.log("called scrollToSection sectionId = ", + sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Element not found: ' + sectionId);
    }
}

// Set sections as active


