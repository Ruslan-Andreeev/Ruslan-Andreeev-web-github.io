$(document).ready(function () {
  
  $('.works-content-block img').click(function(e){  
      $(this).next('.popup-wrap-img').show();       
        $('body').addClass('body-modal');
        $('.overlay').fadeIn();
        e.preventDefault();
    });
    // $('.popup-wrap-img').click(function(){
    //     $(this).hide();
    //         $('.overlay').hide();
    //         $('body').removeClass('body-modal');
    //      });
     $('.overlay').click(function(){
            $(this).fadeOut(400);
            $('body').removeClass('body-modal');
            $('.popup-wrap-img').hide(400);
            $('.popup-sent').hide(300);
        });
  $('.overlay-close').click(function(){
    $('.popup-sent').hide(300);
    $('.overlay').hide(300);
    $('body').removeClass('body-modal');
    $('.popup-order').hide(300);
    $('.popup-corporate').hide(300);
    
  });      
  $('.hero-btn').click(function(e){
    $('.overlay').show(300); 
    $('.popup-sent').show(300);
    $('body').addClass('body-modal');
    e.preventDefault();
  });
  //заказы
  $('.service-btn1').click(function(e){
    $('.popup-order').show(300);
    $('.overlay').show(300); 
    e.preventDefault();
  });
  //корпоротивный
  $('.service-btn2').click(function(e){
    $('.popup-corporate').fadeIn(300);
    $('.overlay').show(300); 
    e.preventDefault();
  });

//якоря плавные
   $('a[href^="#"]').click(function(){ // #1
    var anchor = $(this).attr('href');  // #2
    $('html, body').animate({           // #3
    scrollTop:  $(anchor).offset().top  // #4
    }, 300);                            // #5
});

    /**burger */
  
    
    $( '.burger' ).click( function() {
        $( '.nav' ).slideToggle(300);
        $(this).toggleClass('burger-active');
    });
    


    /**burger */
 
});




