$(function () {
  $(".item-list.gall1").click(function () {
    $(".item-img").removeClass("active-slid");

    $(".item-list.gall1").removeClass("active-slid");

    $(this).addClass("active-slid");

    var index = $(this).index() + 1;

    var index2 = $(".item-img:nth-child(" + index + ")").addClass(
      "active-slid"
    );

    $(".main-img").animate(
      {
        left: 0 - index2.position().left,
      },
      500
    );

    //Slide thumbnails img nhỏ

    // var test = $(".item-img.active-slid").index() + 1;

    // var a = $(".item-list.gall1.gall1:nth-child(" + test + ")");

    // $(".img-thumbnail").animate(
    //   {
    //     left: 0 - a.position().left / 2,
    //   },
    //   300
    // );
  });

  //click prev

  function next() {
    var sau = $(".active-slid").next();

    $(".item-img").removeClass("active-slid");
    $(".item-list.gall1").removeClass("active-slid");

    sau.addClass("active-slid");

    if (sau.length == 0) {
      $(".main-img").animate(
        {
          left: 0 - $(".item-img:first-child").position().left,
        },
        500
      );

      $(".item-img:first-child").addClass("active-slid");
      $(".item-list.gall1:first-child").addClass("active-slid");
    } else {
      var hay = $(".item-img.active-slid").attr("data-slide");

      var index5 = $(".item-img:nth-child(" + hay + ")").addClass(
        "active-slid"
      );

      $(".main-img").animate(
        {
          left: 0 - index5.position().left,
        },
        500
      );
    }
  }

  //Click prev

  function prev() {
    var sau = $(".active-slid").prev();

    $(".item-img").removeClass("active-slid");
    $(".item-list.gall1.").removeClass("active-slid");

    sau.addClass("active-slid");

    if (sau.length == 0) {
      $(".main-img").animate(
        {
          left: 0 - $(".item-img:last-child").position().left,
        },
        500
      );

      $(".item-img:last-child").addClass("active-slid");
      $(".item-list.gall1:last-child").addClass("active-slid");
    }

    var hay = $(".item-img.active-slid").attr("data-slide");

    var index5 = $(".item-img:nth-child(" + hay + ")").addClass("active-slid");

    $(".main-img").animate(
      {
        left: 0 - index5.position().left,
      },
      500
    );
  }

  //auto run slide
  action = setInterval(function () {
    $(".next").trigger("click");
  }, 2500);

  //hover stop auto run slide

  $(".gallery-new").mouseover(function () {
    clearTimeout(action);
  });

  //rê chuột khuột khỏi slider sẽ tự động chạy trở lại

  $(".gallery-new").mouseout(function () {
    action = setInterval(function () {
      $(".next").trigger("click");
    }, 2000);
  });

  //click next

  $(".next").click(function () {
    next(); //gọi hàm next vừa tạo ở trên

    // var test = $(".item-img.active-slid").index() + 1;

    // var a = $(".item-list.gall1:nth-child(" + test + ")");

    // $(".img-thumbnail").animate(
    //   {
    //     left: 0 - a.position().left / 2,
    //   },
    //   500
    // );
  });

  //click prev
  $(".prev").click(function () {
    prev(); //gọi hàm prev vừa tạo ở trên

    // var test = $(".item-img.active-slid").index() + 1;

    // var a = $(".item-list.gall1:nth-child(" + test + ")");

    // $(".img-thumbnail").animate(
    //   {
    //     left: 0 - a.position().left / 2,
    //   },
    //   500
    // );
  });
});
