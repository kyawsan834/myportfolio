// console.log('hay');

$(document).ready(function(){

    // console.log('hi');

    // Start Typed Js

        var typed = new Typed("#banner-h2",{
            strings :[
                "Kyaw San.",
                "Professional Web Developer.",
                "Professional Software Engineer.",
                "CEO at CodeFlash."
            ],
            typeSpeed: 150,
            backSpeed: 45,
            loop: true,
        });

    // End Typed Js
    
    // Start ScrollTop

    $(window).scroll(function(){
        let getScrollTop = $(this).scrollTop();
        // console.log(getScrollTop);

        if(getScrollTop >= 200){
            $(".navbar").removeClass("hidenavs");
        }else{
            $(".navbar").addClass("hidenavs navs");
        }
    });

    // End ScrollTop




});