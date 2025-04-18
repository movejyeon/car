$(function () {
  let line = 300;
  let con1 = $(".con1").offset().top;
  let con2 = $(".con2").offset().top;
  let con3 = $(".con3").offset().top;
  let con4 = $(".con4").offset().top;

  function scroll() {
    target = $("#container > section").eq(i).offset().top;

    $("html, body").stop().animate({ scrollTop: target });
  }

  $("header nav ul li").on("click", function () {
    i = $(this).index();
    scroll();
  });

  $(".side ul li").on("click", function () {
    i = $(this).index();
    scroll();
  });

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();

    if (scroll == con1) {
      $(".side ul li span").removeClass("on");
      $(".side ul li").eq(0).find("span").addClass("on");
      $(".side ul li i").removeClass("on");
      $(".side ul li").eq(0).find("i").addClass("on");
    }

    if (scroll >= con2 - line) {
      $("header").addClass("on");

      for (let i = 0; i < $(".con2 ul li").length; i++) {
        setTimeout(function () {
          $(".con2 ul li").eq(i).addClass("on");
        }, i * 100);
      }

      $(".side ul li span").removeClass("on");
      $(".side ul li").eq(1).find("span").addClass("on");
      $(".side ul li i").removeClass("on");
      $(".side ul li").eq(1).find("i").addClass("on");
    }

    if (scroll >= con3 - line) {
      $(".con3 > div").addClass("on");

      $(".side ul li span").removeClass("on");
      $(".side ul li").eq(2).find("span").addClass("on");
      $(".side ul li i").removeClass("on");
      $(".side ul li").eq(2).find("i").addClass("on");
    }

    if (scroll >= con4 - line) {
      $(".side ul li span").removeClass("on");
      $(".side ul li").eq(3).find("span").addClass("on");
      $(".side ul li i").removeClass("on");
      $(".side ul li").eq(3).find("i").addClass("on");
    }
  });
});
