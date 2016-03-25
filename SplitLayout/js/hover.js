$('.side-right-hover').hover(function(){
    $('.side-right').animate({width: '90%'}, 500)
}, function(){
    $('.side-right').animate({width: '50%'}, 500)
});

$('.side-left-hover').hover(function(){
    $('.side-left').animate({width: '90%'}, 500)
}, function(){
    $('.side-left').animate({width: '50%'}, 500)
});

$('.side-left-hover').hover(function(){
    $('.side-right').animate({'z-index': '1'}, 1)
}, function(){
    $('.side-right').animate({'z-index': '101'}, 500)
});
