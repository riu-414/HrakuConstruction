`use strict`

// tab
{
  $(function () {
    tabify('#staff__tab');
  });
}


// swiper
{
  const swiper = new Swiper('.swiper', {
    // direction: 'vertical',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
}

// accordion
{
  $(document).ready(function(){
    $("#accordion").accordion({
      tabClick: ".click",
      tabContent: ".open",
      accordAnimation: "300",
      // bodyAnimation: "2000",
      spaceTop: "0",
      closeOther : true
    });
  });
}