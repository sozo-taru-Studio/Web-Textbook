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
// markuop
var mklists = new Vue({
    el: '#w-MKlist',
    data: {
         titles:[
                {
                    titlename:'ブラウザとHTMLコード',
                    titleen:"browser",
                    url:"20_html_markUp.html"
                },
                {
                    titlename:'HTMLファイルのファイル名の付け方。',
                    titleen:"way of naming file",
                    url:"21_html_markUp.html"
                },
                {
                    titlename:'HTMLファイル形式の構造',
                    titleen:"HTML file",
                    url:"22_html_markUp.html"
                },
                {
                    titlename:'HTMLを間違えずに書く書き方',
                    titleen:"How to HTML tages",
                    url:"23_html_markUp.html"
                },
                {
                    titlename:'W3C（ダブリュ３シー）について',
                    titleen:"about World Wide Web Consortium (W3C)",
                    url:"24_html_markUp.html"
                },
                {
                    titlename:'HTML要素',
                    titleen:"HTML elements",
                    url:"25_html_markUp.html"
                },
                {
                    titlename:'要素辞書の見方',
                    titleen:"How to read Elements dictionary",
                    url:"26_html_markUp.html"
                },
                {
                    titlename:'「<」「>」の中と外',
                    titleen:"<> inside and outside",
                    url:"27_html_markUp.html"
                },
                {
                    titlename:'HTMLのコメントアウト',
                    titleen:"HTMLs comment out",
                    url:"28_html_markUp.html"
                },
                {
                    titlename:'文字コード',
                    titleen:"charset code",
                    url:"29_html_markUp.html"
                },
                {
                    titlename:'画像ファイルの種類',
                    titleen:"images files type",
                    url:"201_html_markUp.html"
                },
                {
                    titlename:'table の属性',
                    titleen:"table attribute",
                    url:"202_html_markUp.html"
                },
                {
                    titlename:'ファイルパス',
                    titleen:"file path",
                    url:"203_html_markUp.html"
                },
                {
                    titlename:'float clearとレイアウト',
                    titleen:"float clear",
                    url:"204_html_markUp.html"
                },{
                    titlename:'HTML コンテンツモデル',
                    titleen:"content model",
                    url:"205_html_markUp.html"
                },
                /*{
                    titlename:'float clearとレイアウト',
                    titleen:"float ",
                    url:"206_html_markUp.html"
                },*/
                {
                    titlename:'メディアクエリ-',
                    titleen:"media query",
                    url:"207_html_markUp.html"
                }
            ]
   }
  });
  var edlists = new Vue({
    el: '#w-EDlist',
    data: {
         titles:[
                {
                    titlename:'Visual Studio Code',
                    titleen:"Visual Studio Code",
                    url:"30_editer_vscord.html"
                }

            ]
   }
  });
  var csslists = new Vue({
    el: '#w-CSSlist',
    data: {
         titles:[
                {
                    titlename:'CSSの基礎知識 ファイル定義',
                    titleen:"base style sheet files",
                    url:"40_css_code.html"
                },
                {
                    titlename:'CSSの基礎知識 ',
                    titleen:"base style sheet ",
                    url:"401_css_code.html"
                },
                {
                    titlename:'フォント ファミリー',
                    titleen:"font-family",
                    url:"42_css_code.html"
                },
                {
                    titlename:'フォント サイズ',
                    titleen:"font-size",
                    url:"43_css_code.html"
                },
                {
                    titlename:'フォントスタイル ウエイト ',
                    titleen:"font-style ",
                    url:"44_css_code.html"
                },
                {
                    titlename:'ラインハイト ',
                    titleen:"line-height ",
                    url:"45_css_code.html"
                },
                {
                    titlename:'テキストアライン',
                    titleen:"text-algin ",
                    url:"46_css_code.html"
                },
                {
                    titlename:'CSS position プロパティ',
                    titleen:"position ",
                    url:"41_css_code.html"
                },{
                    titlename:'HTML CSSのデバッグ',
                    titleen:"debug ",
                    url:"402_css_code.html"
                },{
                    titlename:'flex レイアウト 基礎',
                    titleen:"flex ",
                    url:"403_css_code.html"
                },{
                    titlename:'flex レイアウト 2',
                    titleen:"flex 2",
                    url:"404_css_code.html"
                }
            ]
   }
  });