$('.side-right').hover(function(){
    $('.side-right').animate({width: '100%'}, 500)
}, function(){
    $('.side-right').animate({width: '45%'}, 500)
});

$('.side-left').hover(function(){
    $('.side-left').animate({width: '100%'}, 500)
}, function(){
    $('.side-left').animate({width: '55%'}, 500)
});

$('.side-left').hover(function(){
    $('.side-right').animate({'z-index': '1'}, 1)
}, function(){
    $('.side-right').animate({'z-index': '101'}, 500)
});
