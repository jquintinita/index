(function ($) {
    $.fn.mainMenu = function(){
        $(".burger-btn").click(function(){
       
           if ( $(this).hasClass('active')){
               $(this).removeClass('active');
               $(".main-menu").css({right: "-130%"})
           } 
            else{
                 $(this).addClass('active');
                 $(".main-menu").css({right: "0"})
            }
        });
        $("#fullpage").click(function(){
             $(".burger-btn").removeClass('active');
            $(".main-menu").css({right: "-130%"})
        });
    }
    
})(jQuery);



$(document).ready(function() {
         

    
    $('#fullpage').fullpage({
    sectionsColor: ['#000', '#eee', 'whitesmoke', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    scrollingSpeed: 1000,
    responsiveWidth: 800
    });
    $(".burger-btn").mainMenu();
       
       $(".gal-box").click(function(){
          var imgSel = $(this).find("img").attr("src");
           console.log(imgSel);
           $(".img-box").attr("src", imgSel);
       });
       $(window).on('resize', function(){
            var win = $(this); //this = window
            if (win.width() <= 768) {
                $.fn.fullpage.setAllowScrolling(true);
                console.log("here")
             }
        });
    });
    
    // init controller
    var controller = new ScrollMagic.Controller();
   
    // build scene and set duration to window height
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
    .setClassToggle(".featured", "slideUp")
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
    .setClassToggle(".content", "slideDown")
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
    .setClassToggle(".about-container", "slideLeft")
    .addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
    .setClassToggle(".pic-container", "slideRight")
    .addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
    .setClassToggle(".about-wel", "slideRight")
    .addTo(controller);