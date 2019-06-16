// basic Operation - Web-Textbook リスト生成
var BOlists = new Vue({
    el: '#w-BOlist',
    data: {
         titles:[
                { titlename:'電源とアプリケーション',
                    titleen:"power on off",
                    url:"00_basic_operation.html"
                },
                {
                    titlename:"マウス操作",
                    titleen:"mouse",
                    url:"01_basic_operation.html" 
                },
                {
                    titlename:"キーボード操作",
                    titleen:"keybord",
                    url:"02_basic_operation.html"
                },
                {
                    titlename:"USBメモリーデバイスの使い方",
                    titleen:"mobileDrive",
                    url:"03_basic_operation.html" 
                },
                {
                    titlename:"基本的なキーボードショートカット",
                    titleen:"keybord-Shortcut",
                    url:"04_basic_operation.html" 
                },
                {
                    titlename:"ファイルとフォルダの操作",
                    titleen:"directory-opelation",
                    url:"05_basic_operation.html" 
                }
                ]
                
             
   }
  });
 // web概論
  var OLlists = new Vue({
    el: '#w-OLlist',
    data: {
         titles:[
                { titlename:'メディア研究',
                    titleen:"Whats Media!",
                    url:"10_outline_media.html"
                },
                {
                    titlename:'メディアの特徴を理解し分類してみる',
                    titleen:"Media type",
                    url:"11_outline_media.html"
                },
                {
                    titlename:'webの役割',
                    titleen:"web rol",
                    url:"12_outline_media.html"
                },
                {
                    titlename:'見積もりの作成',
                    titleen:"How much is",
                    url:"13_outline_media.html"
                },
                {
                    titlename:'著作権',
                    titleen:"Copyright",
                    url:"14_outline_media.html"
                },
                {
                    titlename:'商取引',
                    titleen:"Commerce",
                    url:"15_outline_media.html"
                },
                {
                    titlename:'webマーケティング',
                    titleen:"web marketing",
                    url:"16_outline_media.html"
                },
                {
                    titlename:'webページ制作の工程',
                    titleen:"Production process",
                    url:"17_outline_media.html"
                },
                {
                    titlename:'肩書や役職',
                    titleen:"staff",
                    url:"18_outline_media.html"
                }

            ]
   }
  });