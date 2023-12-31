$(function(){
  $('.modal__open').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      console.log(modal)
      $(modal).fadeIn();
    });
  });
  $('.modal__close').on('click', function () {
    $('.modal').fadeOut();
    return false;
  });
  
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position 
    }, 600);
  });
  $('footer a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position 
    }, 600);
  });
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $('.hamburger').on('click', function() {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });
  // メニューのリンクをクリックした時
  $('#navi a').on('click', function() {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });

  let pagetop = $('#to-top');
  pagetop.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
    pagetop.fadeIn();

    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function() {
  $('body,html').animate({scrollTop: 0}, 500);

  return false;
  });
});

/*=================================================
ハンバーガ―メニュー共通処理
===================================================*/
// ハンバーガーメニューをクリックした時とメニュー内のリンクをクリックした時の
// 処理が同じなので処理を共通化する
function hamburger() {
  // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    $('#navi').addClass('active');
  } else {
    // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    $('#navi').removeClass('active');
  }
}