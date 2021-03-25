$(function(){

    $('.capsule:not(.selected)').on('click', function(){
        $(this).addClass('selected');
        $('.capsule:not(.selected)').animate({opacity: '0%'}, 500);
        $('.title-box').animate({opacity: '0%'}, 500);
        setTimeout(function(){
            $('.capsule.selected').removeClass('selected');
            $('.capsule').animate({opacity: '100%'}, 500);
            $('.title-box').animate({opacity: '100%'}, 500);
        },3000)
    })

    $('a[href]').on('click',function(e){
        e.preventDefault();
        let id = $(this).attr('href').substring(1);
        $('html, body').animate({
                scrollTop: $('#' + id).offset().top 
        }, 1000);
    })

    $('.to-top').on('click',function(){
        $(window).scrollTop(0);
    })

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    })
    
})