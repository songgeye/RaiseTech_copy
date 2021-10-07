$(function(){
    $('.menu_second').hide();
    $('.sub_menu').hover(
        function(){
            $(this).children('.menu_second').slideDown(200);
        },
        function(){
            $(this).children('.menu_second').hide();
        });
});

$(function() {
    $(".menuButton").click(function() {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
});

$(function() {
    $(".open_drpdwnmenu").click(function() {
        $(this).toggleClass("active");
    });
});

// document.addEventListener("DOMContentLoaded",function() {
//     document.getElementById("menuButton").addEventListener("click", function() {
//         this.classList.toggle("active");
//         document.getElementsByClassName("menu").classList.toggle("active");
//     })
// });