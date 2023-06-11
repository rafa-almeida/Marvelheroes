var swiper = new Swiper('.swiper', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    keyboard: true,
});
    
$("#imagem").bind('mouseover',function(){
    
    $(this).animate({height:"200px",width:"200px"});

});
$("#imagem").bind('mouseout',function(){
 
    $(this).animate({height:"76px",width:"75px"});
   
});





