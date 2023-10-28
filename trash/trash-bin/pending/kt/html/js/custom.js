// Tooltip start
// $(function() {
//     $('[data-toggle="tooltip"]').tooltip()
// })
// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover({
//         trigger: 'hover'
//     });
// });
// Tooltip end


// Back to top start
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});
// Back to top End

// animation
AOS.init();


// $('#HomeSlider').carousel({
//     interval: 3000,
//     cycle: true
// });




$(function() {
    $("#ChangeToggle").click(function() {
        $("#navbar-hamburger").toggleClass("hidden");
        $("#navbar-close").toggleClass("hidden");
    });
});

$(function() {
    $("#ChangeToggle").click(function() {
        $("body").toggleClass("overflow-hidden");
    });
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $("header").addClass("header-fix");
    } else {
        $("header").removeClass("header-fix");
    }
});

$(function() {
    $(".exchange-market-sell-buy-close-btn").click(function() {
        $("#Market-Tab-Buy").removeClass("active");
    });
    $(".exchange-market-sell-buy-close-btn").click(function() {
        $("#Market-Tab-Sell").removeClass("active");
    });
});