"use strict"

$(".header-search").click( function() {
    $(".header-fake-placeholder, .header-input").css("display", "inline-block");

    $(".header-fake-placeholder, .header-input").css("z-index", 10000);

    $(this).css("z-index", 10000);

    $("#search-header").css("z-index", 10000);

    $(".main-layout").css("z-index", 999);

    if ($("#search-header").val() != "") {
        $(".header-fake-placeholder").css("display", "none");
    }

    $(this).css("color", "#e44a7a");
    $(this).css("background-color", "white");
})

$(".header-fake-placeholder, .header-input").click( function() {
    $(".header-fake-placeholder").css("display", "none");
    $("#search-header").focus();
})

$("#header-x-icon, .main-layout").click( function() {
    $(".header-fake-placeholder, .header-input").css("display", "none");
    $(".header-search").css("color", "white")
    $(".header-search").css("background-color", "transparent");
    $(".main-layout").css("z-index", 0);
})
//HEADER PART ENDS----------------------------------------
//HEADING PART STARTS-------------------------------------
$(".main-nav-bar").children("li").children("ul").css("display", "none");

$(".main-nav-bar").children().hover( function() {
    $(this).addClass("active");
    $(this).children("ul").css("display", "block");
}, function() {
    $(this).removeClass("active");
    $(".main-nav-bar").children("li").children("ul").css("display", "none");
})
//--------------------------------------------------------------------------------
$(".expanded").hover( function() {
    $(".main-nav-bar").children("li").css("display", "block");
}, function() {})
//--------------------------------------------------------------------------------
$(".main-nav-bar").children("li").children("ul").children("li.expandable").children("ul").css("display", "none");

$(".main-nav-bar").children("li").children("ul").children("li.expandable").hover( function() {
    $(this).children("ul").css("display", "block");
}, function() {
    $(this).children("ul").css("display", "none");
})
//--------------------------------------------------------------------------------
$("#features").hover( function() {
    $(this).children(".mega-menu").css("display", "block");
}, function() {
    $(this).children(".mega-menu").css("display", "none");
})
//--------------------------------------------------------------------------------HEADING 3 BUTTONS PART

$(".heading-buttons").children("span").click( function() {
    $(this).removeClass("unactive-button")
    $(this).siblings().addClass("unactive-button");
    $(this).addClass("active-button");
    $(this).css("background-color", "#e44a7a");
    $(this).css("color", "white");
    $(this).children("div").css("display", "block");
    $(this).siblings().removeClass("active-button");
    $(this).siblings().css("background-color", "white");
    $(this).siblings().css("color", "black");
    $(this).siblings().children("div").css("display", "none");
})

$(document).click( function(event) {
    if (!event.target.classList.contains("iconTag")) {
        $(".active-button").css("background-color", "white");
        $(".active-button").css("color", "black");
        $(".active-button").children("div").css("display", "none");
        $(".active-button").addClass("unactive-button");
        $(".active-button").removeClass("active-button");
    }
})

$(".clothes-close").click( function() {
    $(this).parent("div").parent("li").remove();
})

//------------------------------------------------------------------------------------------HEADING 3 BUTTONS PART ENDS

$('.featured-products .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

//----------------------------------------------------------------------------------------FEATURED PRODUCTS

$(".owl-stage > div > div > a").children("img").hover( function() {
    $(this).attr("src", $(this).attr("data-src-2"));
}, function() {
    $(this).attr("src", $(this).attr("data-src-1"));
})

$(".men-button").click( function() {
    $(".owl-stage > div").children("div").filter(".women").parent(".owl-item").css("display", "none");
    $(".owl-stage > div").children("div").filter(".men").parent(".owl-item").css("display", "block");
    $(".owl-carousel").css("display", "block");
})

$(".women-button").click( function() {
    $(".owl-stage > div").children("div").filter(".men").parent(".owl-item").css("display", "none");
    $(".owl-stage > div").children("div").filter(".women").parent(".owl-item").css("display", "block");
    $(".owl-carousel").css("display", "block");
})

$(".all-button").click( function() {
    $(".owl-stage > div").children("div").parent(".owl-item").css("display", "block");
    $(".owl-carousel").css("display", "block");
})

$(".kids-button").click( function() {
    $(".owl-carousel").css("display", "none");
})

//------------------------------------------------------------------------ORDER TAILORING
let i;

$(".order-tailoring").click( function() {
    if ($(".required-name").val() == "") {
        $(".required-name").css("border-color", "#e44a7a");
    }
    else if ($(".required-name").val() != "") {
        $(".required-name").css("border-color", "transparent");
    }
    if ($(".required-email").val() == "") {
        $(".required-email").css("border-color", "#e44a7a");
    }
    else if ($(".required-email").val() != "") {
        $(".required-email").css("border-color", "transparent");
    }
    if ($(".required-message").val() == "") {
        $(".required-message").css("border-color", "#e44a7a");
    }
    else if ($(".required-message").val() != "") {
        $(".required-message").css("border-color", "transparent");
    }
})

$(".required").focusin( function() {
    $(this).siblings("i").css("color", "#e44a7a");
    $(this).css("border-color", "transparent");
})

$(".required").focusout( function() {
    $(this).siblings("i").css("color", "black");
})
//-------------------------------------------------------------------------NEWSLETTER INPUT

$(".newsletter-input").focusin( function() {
    $(this).children("input").attr("placeholder", "");
})

$(".newsletter-input").focusout( function() {
    $(this).children("input").attr("placeholder", "EMAIL ADDRESS");
})

$(".add-email-button").click( function() {
    $(".adding-email-process").css("display", "block");
})
//-------------------------------------------------------------------------BOTTOM CAROUSEL
$('.bottom-carousel .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//-------------------------------------------------------------------------------MODAL

$(".bottom-carousel").children("item").click( function() {
    $(".bottom-inner-carousel-img").attr("src", $(this).attr("src"));
})


$('.nonloop').owlCarousel({
    center: true,
    items:1,
    loop:false,
    nav:true,
    margin:10
});