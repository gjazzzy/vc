$(document).ready(function () {
   $('.pay, .adress__edit, .user, .card, .reg, .relogin, .adress, .login').css('display', 'none');

   var $button1 = $('.header__btn-login')
   var $button2 = $('.header__btn-reg');
   var $button3 = $('.right__btn-pay');
   var $button4 = $('.relogin__btn');
   var $button5 = $('.main__item,.right__sidebar-item');
   var $button6 = $('.user__item-adress');
   var $button7 = $('.adress__edit-btn, .adress__edit-name ,.right__sidebar-adress');
   var $button8 = $('.header__btn-cart');


   //user
   $button1.click(function () {
      $('.user').show();
   })
   $('.user__btn-close').click(function () {
      $('.user').hide();
   })

   // login
   $button1.click(function () {
      $('.login').show();
   })
   $('.login__btn-close').click(function () {
      $('.login').hide();
   })


   //relogin
   $button4.click(function () {
      $('.relogin').show();
      $('.login').hide();
   })
   $('.relogin__btn-close').click(function () {
      $('.relogin').hide();
   })

   $('.relogin__btn-back').click(function () {
      $('.relogin').hide();
      $('.login').show();

   })

   // reg
   $button2.click(function () {
      $('.reg').show();
   })
   $('.reg__btn-close').click(function () {
      $('.reg').hide();
   })


   //pay
   $button3.click(function () {
      $('.pay').show();
   })
   $('.pay__btn-close').click(function () {
      $('.pay').hide();
   })

   //item
   $button5.click(function () {
      $('.card').show();
   })
   $('.card__btn-close').click(function () {
      $('.card').hide();
   })

   //adress
   $button6.click(function () {
      $('.adress__edit').show();
      $('.user').hide();

   })
   $('.adress__edit-btn-close').click(function () {
      $('.adress__edit').hide();


   })
   $('.adress__edit-btn-back').click(function () {
      $('.adress__edit').hide();
      $('.user').show();

   })

   //adress__edit-btn
   $button7.click(function () {
      $('.adress').show();
      $('.adress__edit').hide();

   })
   $('.adress__btn-close').click(function () {
      $('.adress').hide();


   })
   $('.adress__btn-back').click(function () {
      $('.adress').hide();
      $('.adress__edit').show();

   })
   // //cart
   // $button8.click(function () {
   //    $('.right').show();

   // })
   // $('.right__edit-btn-close').click(function () {
   //    $('.right').hide();
   // })

   //
   $(".header__btn-cart").on("click", function () {
      $(".left__sidebar-item").toggle();
   });

   $(".header__btn-cart").click(function () {
      var currentImage = $("#button-image").attr("src");
      if (currentImage === "..images/icons/icon-shopping-cart.svg") {
         $('.right').show();
         $("#button-image").attr("src", "..images/icons/NextArrow.svg");
      } else {
         $("#button-image").attr("src", "..images/icons/icon-shopping-cart.svg");
         $('.right').hide();
      }
   });
});
