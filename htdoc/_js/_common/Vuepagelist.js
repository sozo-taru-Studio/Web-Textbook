// basic Operation - Web-Textbook リスト生成
var Headerlist = {
    el:"#w-indexlists",
    data:{
        items:[
        ]
    }
};

((function($,Obj){
$(function(){
    var linkelm = $("#w-aside2 .page-item");
    if($("body").hasClass("toppage")){
    var Art = $("#w-article [id^=s] h3");
    } else {
    var Art = $("#w-article [id^=s] h2");
}
//console.log(Art);
//console.log(Obj);
for(let i=0 ;i < Art.length;i++){
    let item = Art[i].textContent;
//console.log(item);
Obj.data.items[i]={"id":"#s"+(i+1),"text" : item};
//console.log(Obj.data.items[i]);
}

//console.log(Obj);

var indexlist = new Vue(Obj);
Obj.el="#w-indexlistBox";
var indexlistBox = new Vue(Obj);
// pageNavigetion
//console.log(linkelm);

var h,st;
linkelm.each(function(i,elm){
 h = linkelm[i].children[0].href;
//console.log(i + ":" + h);
st=h.slice( -1 );
if(st=== "#"){
        $(this).addClass("disabled");
        $(this).find("a.page-link").attr('aria-disabled','true');
    }
});

});
})(jQuery,Headerlist));
