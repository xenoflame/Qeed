$(function () {
    
    $('.button').click(function () {
        $('.info').toggleClass('hide')
    })




    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
           
        }
    })

})()