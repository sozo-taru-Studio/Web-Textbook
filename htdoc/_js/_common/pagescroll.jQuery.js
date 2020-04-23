// ページすrクロール用 20190608
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


/*  cloapse サイドバー */
var c = $("body").attr('class');
//console.log(c);
switch(c){
case "コンピューターの基本操作":
$("#w-BOlist-collapse").addClass("show");
break;

case "web総合概論":
$("#w-OLlist-collapse").addClass("show");
break;

case "HTML":
$("#w-MKlist-collapse").addClass("show");
break;

case "Editer":
$("#w-EDlist-collapse").addClass("show");
break;

case "CSS":
$("#w-CSSlist-collapse").addClass("show");
break;

case "Javascript":
$("#w-JSlist-collapse").addClass("show");
break;

default:
  break;
}
});

    }(jQuery));