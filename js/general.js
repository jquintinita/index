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
    responsiveWidth: 800,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips:['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    afterLoad: function(origin, destination, direction, trigger){
        console.log(destination);
        var currentPage = destination.toString();
        switch (currentPage) { 
            case '1': 
                $(".logo").removeClass("invert");
                //burger-btn
                $(".burger-btn").removeClass("invert");
                break;
            case '2': 
                $(".logo").addClass("invert");
                $(".burger-btn").addClass("invert");
                break;
            case '3': 
                $(".logo").addClass("invert");
                $(".burger-btn").addClass("invert");
                break;
            default:
                $(".logo").removeClass("invert");
                $(".burger-btn").removeClass("invert");
                
        }
    }
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