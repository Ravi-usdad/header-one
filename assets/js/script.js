$(".filter-title").click(function () {
    if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active")
    } else {
        $(this).parent().addClass("active")
    }
});

// $(".show-more-one").click(function(event) {
//     var txt = $(".hide-part").is(':visible') ? 'Show more' : 'Show Less';
//     $(".filter-options .hide-part").toggleClass("show-part");
//     $(this).html(txt);
//     event.preventDefault();
// });



const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");



// Show and Hide Navbar Function
const toggleMenu = () => {
    navbarMenu.classList.toggle("active");
    overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
    navbarMenu
        .querySelector(".menu-dropdown.active .submenu")
        .removeAttribute("style");
    navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
    if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
        e.preventDefault();
        const menuDropdown = e.target.parentElement;

        // If Dropdown is Expanded, then Collapse It
        if (menuDropdown.classList.contains("active")) {
            collapseSubMenu();
        } else {
            // Collapse Existing Expanded Dropdown
            if (navbarMenu.querySelector(".menu-dropdown.active")) {
                collapseSubMenu();
            }

            // Expanded the New Dropdown
            menuDropdown.classList.add("active");
            const subMenu = menuDropdown.querySelector(".submenu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
    }
};

// Fixed Resize Window Function
const resizeWindow = () => {
    if (window.innerWidth > 992) {
        if (navbarMenu.classList.contains("active")) {
            toggleMenu();
        }
        if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
        }
    }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);

$(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
        $('.header').addClass('sticky')
    } else {
        $('.header').removeClass('sticky')
    } if ($(this).scrollTop() > 120) {
        $('.header').addClass('sticky')
    } else {
        $('.header').removeClass('sticky')
    }
});


// filter toggle
// function filterOpen() {
//     var z = document.getElementById("mobile-filter");
//     if (z.className === "category-left") {
//         z.className += " active";
//     } else {
//         z.className = "category-left";
//     }
// };


// function myFunction() {
//     var x = document.getElementById("filter-box-active");
//     if (x.className === "filter-box") {
//         x.className += " active";
//     } else {
//         x.className = "filter-box";
//     }
// };


// list show more
// const list = $(".recently-updated .product-box");
// const numToShow = 6;
// const showMoreButton = $(".view-all-button");
// const numInList = list.length;
// list.hide();
// if (numInList > numToShow) {
//     showMoreButton.show();
// }
// list.slice(0, numToShow).show();

// showMoreButton.click(function () {
//     var showing = list.filter(':visible').length;
//     list.slice(showing - 1, showing + numToShow).fadeIn();
//     var nowShowing = list.filter(':visible').length;
//     if (nowShowing >= numInList) {
//         showMoreButton.hide();
//     }
// });

