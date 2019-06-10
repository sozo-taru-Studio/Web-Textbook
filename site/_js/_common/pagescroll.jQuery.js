// ページすrクロール用　20190608
(function($){
    $(function(){
      $('a[href^="#"]').on("click",function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    });
    
    }(jQuery));