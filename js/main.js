$(function(){

    var duration = 300;

    $('.inner button').each(function(index){
        var pos = index * 40 - 40;
        $(this).css('top', pos);
    })
    .on('mouseover', function(){
        $(this).stop(true).animate({
            backgroundColor: '#faee00',
            color: '#000'
        }, duration);
    })
    .on('mouseout', function(){
        $(this).stop(true).animate({
            backgroundColor: '#fff',
            color: '#01b169',
        }, duration);
    });
});

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
$(function(){
    //
    var duration = 300;

    // images ----------------------------------------
    var $images = $('#images p');

    // images 1つ目の画像
    $images.filter(':nth-child(1)')
        .on('mouseover', function(){
            $(this).find('strong, span').stop(true).animate({opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $(this).find('strong, span').stop(true).animate({opacity: 0}, duration);
        });

    // images 2つ目の画像
    $images.filter(':nth-child(2)')
        .on('mouseover', function(){
            $(this).find('strong').stop(true).animate({opacity: 1, left: '0%'}, duration);
            $(this).find('span').stop(true).animate({opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $(this).find('strong').stop(true).animate({opacity: 0, left: '-200%'}, duration);
            $(this).find('span').stop(true).animate({opacity: 0}, duration);
        });

    // images 3つ目の画像
    $images.filter(':nth-child(3)')
        .on('mouseover', function(){
            $(this).find('strong').stop(true).animate({bottom: '0px'}, duration);
            $(this).find('span').stop(true).animate({opacity: 1}, duration);
            $(this).find('img').stop(true).animate({top: '-20px'}, duration * 1.3);
        })
        .on('mouseout', function(){
            $(this).find('strong').stop(true).animate({bottom: '-80px'}, duration);
            $(this).find('span').stop(true).animate({opacity: 0}, duration);
            $(this).find('img').stop(true).animate({top: '0px'}, duration);
        });

});
