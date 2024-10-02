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

// em size
const emSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
const ACTIVE_POSITION = emSize * 10;

// Nav bar menu
const navBars = document.getElementsByClassName('navbar__menu');
const narBar = navBars[0];

// List of section and its link
const sectionList = document.querySelectorAll("section")
const navbarLinkList = document.getElementById('navbar__list');
let navbarItemList = [];


/**
* End Global Variables
* Start Helper Functions
* 
*/
function getPositionTop(element) {
    return element.getBoundingClientRect().top;
};

/**
* End Helper Functions
* Begin Main Functions
* 
*/

// Loading navigation bar
loadingNavbar();
addListenerToNavbarItem();


// build the nav
function loadingNavbar() {
    for(let i=0; i < sectionList.length; i++) {
        // new li
        const newLi = document.createElement("li");
        newLi.innerHTML = `Section ${i+1}`;
        newLi.dataset.nav = `Section ${i+1}`;
        newLi.classList.add('menu__link');
        
        // add
        navbarItemList.push(newLi);
        navbarLinkList.appendChild(newLi);
    }
}

// Add class 'active_section' to section when near top of viewport
function setActiveSection() {
    for (const section of sectionList) {
        // Get top position
        const topPos = getPositionTop(section);

        // Check status.
        if((topPos >= -ACTIVE_POSITION) && (topPos <= ACTIVE_POSITION)) {
            //apply active_section state on current section 
            section.classList.add("active_section");
            
            // Update active status on navbar
            navbarItemList.forEach((item) => {
                // checks if li and section have the same data-nav value
                if (item.dataset.nav == section.dataset.nav) {
                    if (!item.classList.contains("active")) {
                        // removes class on all li's
                        navbarItemList.map((i) => i.classList.remove("active"));
                        // adds class to el item
                        item.classList.add("active");
                    }
                    
                }
            });
            
        } else {
            //Remove active_section state from other section and corresponding Nav link
            section.classList.remove("active_section");
        }
    }  
}

/**
* End Main Functions
* Begin Events
* 
*/

// Build menu 
// Show and hide navigation side bar
document.getElementById('menu-button').addEventListener('click', function() {
    if(window.innerWidth <= 35*emSize) {
        narBar.classList.toggle('visible');
    } else {
        narBar.classList.toggle('hidden');
    }
});

// Set section as active_section when it scrolled to
document.addEventListener("scroll", function () {
    // Set status for section and navbar
    setActiveSection();
});


// Add event listener to all item of navbar
function addListenerToNavbarItem() {
    navbarItemList.forEach((item, i) => {
        item.addEventListener('click', function(event) {
            // Prevents default action if it's a link
            event.preventDefault(); 
            
            // scroll onclick event 
            if (sectionList[i].dataset.nav == item.dataset.nav) {
                //  Scroll to section on link click
                sectionList[i].scrollIntoView({
                    top: getPositionTop(sectionList[i]),
                    behavior: "smooth",
                });
                
                // Hide nav bar
                if(window.innerWidth <= 35*emSize) {
                    narBar.classList.toggle('visible');
                }
            }
        });
    });
}

// Scroll to section on link click

