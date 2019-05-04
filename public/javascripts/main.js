$(document).ready(function(){
    
    //Making the navigation bar responsive
    $(window).on("resize load", function(){
        console.log($(window).width());
        if( $(window).width() >= 930 && $(".navs-container").hasClass("bounceOutRight")){
            $(".navs-container").css("display", "block");
            $(".navs-container").removeClass("bounceOutRight").addClass("fadeIn");
        }else if($(window).width() <= 930 && $(".navs-container").hasClass("fadeIn")){
            $(".navs-container").css("display", "none");
            $(".navs-container").removeClass("fadeIn");
        }
        
    });
    
    
    //Making the navigation appear and disappear in smaller screens
    $(".hamburger").on("click", function(){
        var nav = $(".navs-container");
        if( nav.css("display") === "block"){
            nav.removeClass("bounceOutRight").addClass("bounceInRight");
        }else{
            nav.css("display", "block");
        }
        nav.addClass("bounceInRight");
        
    });
    
    $(".close-nav").on("click", function(){
        $(".navs-container").addClass("bounceOutRight").removeClass("bounceInRight");
    });
    
    
    
    
    
    
    
    
    //======================Making SlideShow==========================================
    $(".slides").length
    var slidesPosition = [0, "100%", "200%", "300%", "400%"];
    var ballPosition = ["10px", "36px", "62px", "88px", "114px"];
    var index = 0;
    $(".slide-show").animate({
        right: slidesPosition[index]
    }, 500);
    
    
    
    var slideShowInterval = setTimeout(function(){
        executeSlideShow();
        slideShowInterval;
    }, 5000);
    function executeSlideShow(){
        if( index >= slidesPosition.length - 1){
            index = 0;
        }
        else{
            index++;
        }
        $("#ball").css("left", ballPosition[index]);
        $(".slide-show").animate({
            right: slidesPosition[index]
        }, 500, function(){
            setTimeout(function(){
                executeSlideShow();
            }, 5000);
        });
    }
    //Calling The Interval
    slideShowInterval;
    //Making SlideShow Buttons Functionality
    $("#right").on("click", function(){
        if( index >= slidesPosition.length - 1){
            index = 0;
        }
        else{
            index++;
        }
        $("#ball").css("left", ballPosition[index]);
        $(".slide-show").animate({
            right: slidesPosition[index]
        }, 500);
    });
    $("#left").on("click", function(){
        if( index <= 0 ){
            index = slidesPosition.length - 1;
        }
        else{
            index--;
        }
        $("#ball").css("left", ballPosition[index]);
        $(".slide-show").animate({
            right: slidesPosition[index]
        }, 500);
    });
    
    
    
    
    //Making the about us divs animation
    //vision
    $(".vision").on("mouseenter", function(){
        $(".vision").children(".showing-div").css({"height": "0", "opacity": "0"}).siblings().css("height", "100%");
    });
    $(".vision").on("mouseleave", function(){
        $(".vision").children(".showing-div").css({"height": "100%", "opacity": "1"}).siblings().css("height", "0");
    });
    //gaurantee
    $(".gaurantee").on("mouseenter", function(){
        $(".gaurantee").children(".showing-div").css({"height": "0", "opacity": "0"}).siblings().css("height", "100%");
    });
    $(".gaurantee").on("mouseleave", function(){
        $(".gaurantee").children(".showing-div").css({"height": "100%", "opacity": "1"}).siblings().css("height", "0");
    });
    
    
    //Service Box's Animations
    $(".serv-box").on("mouseenter", function(){
        
        //Making service logo animation
        $(this).children(".card-body").children(".service-logo").animate({
            top: "100%"
        }, 600);
        //Making the animations for the services images
        let image = $(this).children(".image-holder").children();
        image.css("transform", "scale(1.2)");
    });
    $(".serv-box").on("mouseleave", function(){
        $(this).children(".card-body").children(".service-logo").animate({
            top: "20px"
        }, 600);
        //Making the animations for the services images
        let image = $(this).children(".image-holder").children();
        image.css("transform", "scale(1)");
    });
    
    
    
    
    //Making the service image take you to the contact and picks selection for you
    $(".image-holder").children().on("click", function(e){
        e.preventDefault();
        let selectedOption = $(this.hash);
        console.log(selectedOption);
        $("option").siblings().removeAttr("selected");
        $(this.hash).attr("selected", true);
        $("body, html").animate({
            scrollTop: $("form").offset().top - 60
        }, 1000);
    });
    
    
    
    
    
    
    //Adding smooth scrolling
    var scrollLink = $(".nav-link");
    
    scrollLink.on("click", function(e){
      e.preventDefault();
      $("body, html").animate({
        scrollTop: $(this.hash).offset().top -60
      }, 1000);
    });
    $(".view-work").on("click", function(e){
      e.preventDefault();
      $("body, html").animate({
        scrollTop: $(this.hash).offset().top -60
      }, 800);
    });
    $(".back-top").on("click", function(e){
      e.preventDefault();
      $("body, html").animate({
        scrollTop: $(this.hash).offset().top 
      }, 800);
    });
    $(window).on("scroll", function(){
      var scrollBarLocation = $(this).scrollTop();
      scrollLink.each(function(){
        
        var sectionOffset = $(this.hash).offset().top - 120;
        if (sectionOffset <= scrollBarLocation){
          $(this).parent().siblings().removeClass("active");
          $(this).parent().addClass("active");
        }
        var btn = $(".back-top");
        if ( scrollBarLocation >= 500 ){
            if( btn.hasClass("flipInY")){
                return null;
            }else{
                btn.css("display", "block");
                btn.addClass("flipInY");
            }
            if( btn.hasClass("flipOutY")){
                btn.removeClass("flipOutY");
            }else{
                return null;
            }
            
        
        }else{
            if( btn.hasClass("flipInY")){
                btn.removeClass("flipInY");
                btn.addClass("flipOutY");
            }else{
                return null;
            }
        }
      });
    });
    
    
    
    
    
    
    
    
    //================================APPEAR ANIMATIONS==========================
    //Making the back to top button appear and disappear
    
    
    
    
    
    
});