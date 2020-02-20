(function ($) {
    $.fn.mainMenu = function(){
        $(".burger-btn").click(function(){
           if ( $(this).hasClass('active')){
               $(this).removeClass('active');
               $(".main-menu").css({right: "-100%"})
           } 
            else{
                 $(this).addClass('active');
                 $(".main-menu").css({right: "0"})
            }
        });
        $("#fullpage").click(function(){
             $(".burger-btn").removeClass('active');
            $(".main-menu").css({right: "-100%"})
        });
    }
    
})(jQuery);

