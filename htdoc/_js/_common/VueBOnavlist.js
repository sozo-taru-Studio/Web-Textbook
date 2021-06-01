// basic Operation - Web-Textbook リスト生成
var BO = {
    el: '#w-BOlist',
    data: {
         titles:[
                {
                    titlename:'電源とアプリケーション',
                    titleen:"power on off",
                    url:"00_basic_operation.html",
                    dis:"電源の入れ方と切り方",
                    img: '_images/_BO/power_640.jpg'
                },
                {
                    titlename:"マウス操作",
                    titleen:"mouse",
                    url:"01_basic_operation.html",
                    dis:"ドラック&ドロップできますか？",
                    img: "_images/_BO/mouse_640.jpg"
                },
                {
                    titlename:"キーボード操作",
                    titleen:"keybord",
                    url:"02_basic_operation.html",
                    dis:"キーボードの複合キーを覚えて操作を簡略化しましょう。",
                    img: "_images/_BO/KeyBord_600.jpg"
                },
                {
                    titlename:"USBメモリーデバイスの使い方",
                    titleen:"mobileDrive",
                    url:"03_basic_operation.html",
                    dis:"デバイスの接続と接続の解除を覚えましょう",
                    img: "_images/_BO/flash-memory-_640.jpg"
                },
                {
                    titlename:"基本的なキーボードショートカット",
                    titleen:"keybord-Shortcut",
                    url:"04_basic_operation.html",
                    dis:"基本的なキーボードショートカットを使って作業を省略化しましょう",
                    img: "_images/_BO/shortcut_640.jpg"
                },
                {
                    titlename:"ファイルとフォルダの操作",
                    titleen:"directory-opelation",
                    url:"05_basic_operation.html",
                    dis:"ファイルの役割フォルダの役割を知りましょう",
                    img: "_images/_BO/file-folda.jpg"
                }
                ]
   }
  };
var BOlists = new Vue(BO);
// ページモジュールへコピー
BO.el = '#w-BOpages';
var BOpages = new Vue(BO);


 // web概論
  var OL = {
    el: '#w-OLlist',
    data: {
         titles:[
                { titlename:'メディア研究',
                    titleen:"Whats Media!",
                    url:"10_outline_media.html",
                     dis:"メディアってあれだろ　そう　あれ・・・",
                    img: "_images/_OL/media_640.jpg"
                },
                {
                    titlename:'メディアの特徴を理解し分類してみる',
                    titleen:"Media type",
                    url:"11_outline_media.html",
                     dis:"媒体の種類はさまざまさて分類してみる",
                    img: "_images/_OL/media_2_640.jpg"
                },
                {
                    titlename:'webの役割',
                    titleen:"web rol",
                    url:"12_outline_media.html",
                     dis:"webの役割ん-　なにそれ？",
                    img: "_images/_OL/webIcon_640.jpg"
                },
                {
                    titlename:'見積もりの作成',
                    titleen:"How much is",
                    url:"13_outline_media.html",
                     dis:"自分の労働単価に関して無関心や無知であることだけは避けましょう",
                    img: "_images/_OL/accountant-.jpg"
                },
                {
                    titlename:'著作権',
                    titleen:"Copyright",
                    url:"14_outline_media.html",
                     dis:"お　おれがそれさきに　いったんだからな！",
                    img: "_images/_OL/flag_640.jpg"
                },
                {
                    titlename:'商取引',
                    titleen:"Commerce",
                    url:"15_outline_media.html",
                     dis:"サービスとお金の交換会",
                    img: "_images/_OL/deal_640.jpg"
                },
                {
                    titlename:'webマーケティング',
                    titleen:"web marketing",
                    url:"16_outline_media.html",
                    dis:"マーケティングって言葉、わかったふりして使っている勢です。",
                    img: "_images/_OL/paper_640.jpg"
                },
                {
                    titlename:'webページ制作の工程',
                    titleen:"Production process",
                    url:"17_outline_media.html",
                    dis:"滝ツボ方式 アジャイル方式",
                    img: "_images/_OL/falls_640.jpg"
                },
                {
                    titlename:'肩書や役職',
                    titleen:"staff",
                    url:"18_outline_media.html",
                    dis:"肩書でなにができるかわかるのかはわからない。",
                    img: "_images/_OL/programming_640.jpg"
                },

                {
                    titlename:'情報リテラシー',
                    titleen:"staff",
                    url:"191_outline_media.html",
                    dis:"情報リテラシーについてリテラシーが低いんです。",
                    img: "_images/_OL/open-book_640.jpg"
                },
                {
                    titlename:'個人情報保護について',
                    titleen:"personal information",
                    url:"192_outline_media.html",
                    dis:"おれのなにをしってるっていうんだよー",
                    img: "_images/_OL/paint_640.jpg"
                },
                {
                    titlename:'SEOの基本',
                    titleen:"Search Engine Optimization",
                    url:"194_outline_media.html",
                    dis:"検索エンジン最適化の基本",
                    img: "_images/_OL/seo_640.jpg"
                },
                {
                    titlename:'コピーライティングについて',
                    titleen:"staff",
                    url:"193_outline_media.html",
                    dis:"おまえを就職させてやる リカレントスクール",
                    img: "_images/_OL/yogurt_640.jpg"
                },
                {
                    titlename:'サーバーの知識',
                    titleen:"server",
                    url:"19_outline_media.html",
                    dis:"脂ののったサーバー",
                    img: "_images/_OL/cyberspace_640.jpg"
                },
                {
                    titlename:'UI/UXの考え方',
                    titleen:"UIUX",
                    url:"195_outline_media.html",
                    dis:"ユーザーインターフェイスとユーザーエクスペリエンス",
                    img: "_images/_OL/ux-640.jpg"
                },
                {
                    titlename:'webアプり開発における技術範囲と言語/用語',
                    titleen:"web word",
                    url:"196_outline_media.html",
                    dis:"webアプリケーション制作での技術俯瞰図解説",
                    img: "_images/_OL/business_640.jpg"
                }
                 {
                    titlename:'webデザイナーとかIT企業とかざっくり説明するよ',
                    titleen:"IT Webデザイナー",
                    url:"197_outline_media.html",
                    dis:"web制作でのやくわり分担や仕事の内容をざっくりと説明するよ",
                    img: "_images/_OL/business_640.jpg"
                }
            ]
   }
  };

var OLlists = new Vue(OL);
OL.el = '#w-OLpages';
var OLpages = new Vue(OL);

// markuop
var MK = {
    el: '#w-MKlist',
    data: {
         titles:[
                {
                    titlename:'ブラウザとHTMLコード',
                    titleen:"browser",
                    url:"20_html_markUp.html",
                    dis:"インターネットの情報を閲覧するブラウザと情報のデータ形式HTMLについて",
                    img: "_images/_MK/computer_640.jpg"
                },
                {
                    titlename:'HTMLファイルのファイル名の付け方。',
                    titleen:"way of naming file",
                    url:"21_html_markUp.html",
                    dis: "Linax形式のファイル命名のルールを解説します。",
                    img: "_images/_MK/name.jpg"
                },
                {
                    titlename:'HTMLファイル形式の構造',
                    titleen:"HTML file",
                    url:"22_html_markUp.html",
                    dis: "ドキュメント宣言とHTML要素",
                    img: "_images/_MK/dtd.jpg"

                },
                {
                    titlename:'HTMLを間違えずに書く方法',
                    titleen:"How to HTML tages",
                    url:"23_html_markUp.html",
                    dis: "初心者にありがちのタイピングミス打ち忘れをなくす習慣をつけましょう。",
                    img:"_images/_MK/write.PNG"
                },
                {
                    titlename:'W3C（ダブリュ３シー）について',
                    titleen:"about World Wide Web Consortium (W3C)",
                    url:"24_html_markUp.html",
                    dis: "HTMLとCSSのルールを標準化する団体について知りましょう。",
                    img:"_images/_MK/W3C_page.jpg"
                },
                {
                    titlename:'HTML要素',
                    titleen:"HTML elements",
                    url:"25_html_markUp.html",
                    dis: "要素の解説",
                    img:"_images/_MK/elm.jpg"
                },
                {
                    titlename:'要素辞書の見方',
                    titleen:"How to read Elements dictionary",
                    url:"26_html_markUp.html",
                    dis:"HTML要素を効率よく調べてる方法を知りましょう。",
                    img:"_images/_MK/MDN_site.jpg"

                },
                {
                    titlename:'「<」「>」の中と外',
                    titleen:"<> inside and outside",
                    url:"27_html_markUp.html",
                    dis:"プラグラムへの指示情報と人にお知らせする情報を見分けれるようになりましょう",
                    img:"_images/_MK/CDATA.jpg"
                },
                {
                    titlename:'HTMLのコメントアウト',
                    titleen:"HTMLs comment out",
                    url:"28_html_markUp.html",
                    dis:"htmlコードのコメントアウトは制作者の目印などに使い閲覧者には見えないコードです。",
                    img:"_images/_MK/commentOut.jpg"

                },
                {
                    titlename:'文字コード',
                    titleen:"charset code",
                    url:"29_html_markUp.html",
                    dis:"文字化けを回避するため文字コードを知る",
                    img:"_images/_MK/char.jpg"
                },
                {
                    titlename:'画像ファイルの種類',
                    titleen:"images files type",
                    url:"201_html_markUp.html",
                    dis:"インターネットで使う画像の形式",
                    img:"_images/_MK/50 File Type Vector Icons.svg"
                },
                {
                    titlename:'table の属性',
                    titleen:"table attribute",
                    url:"202_html_markUp.html",
                    dis:"表を構成するにあたっての知っておくべき属性",
                    img:"_images/_MK/timetable_640.jpg"
                },
                {
                    titlename:'ファイルパス',
                    titleen:"file path",
                    url:"203_html_markUp.html",
                    dis:"ファイルをリンクさせて関連づける方式について学びます",
                    img:"_images/_MK/pipe_640.jpg"
                },
                {
                    titlename:'float clearとレイアウト',
                    titleen:"float clear",
                    url:"204_html_markUp.html",
                    dis:"フロートレイアウトの実装と抑えるポイント",
                    img:"_images/_MK/float_640.png"
                },
                {
                    titlename:'HTML コンテンツモデル',
                    titleen:"content model",
                    url:"205_html_markUp.html",
                    dis:"HTMLのタグの種類と役割を解説",
                    img:"_images/_MK/contents.jpg"
                },
                /*{
                    titlename:'float clearとレイアウト',
                    titleen:"float ",
                    url:"206_html_markUp.html"
                },*/
                {
                    titlename:'メディアクエリー',
                    titleen:"media query",
                    url:"207_html_markUp.html",
                    dis:"レスポンシブルレイアウトの知識",
                    img:"_images/_MK/responsive_640.jpg"
                }
            ]
   }
  };

var mklists = new Vue(MK)
MK.el = "#w-MKpages";
var MKpages = new Vue(MK)
// HTML

var ED = {
    el: '#w-EDlist',
    data: {
         titles:[
                {
                    titlename:'Visual Studio Code',
                    titleen:"Visual Studio Code",
                    url:"30_editer_vscord.html",
                    dis:"無料で使えるVisual Studio Codeでプログラミングしましょう。",
                    img:"_images/_MK/vscode.jpg"
                }
            ]
   }
  };

var edlists = new Vue(ED);
ED.el= "#w-EDpages";
var EDpages = new Vue(ED);
// vsediter

  var ST = {
    el: '#w-CSSlist',
    data: {
         titles:[
                {
                    titlename:'CSSの基礎知識 ファイル定義',
                    titleen:"base style sheet files",
                    url:"40_css_code.html",
                    dis:"HTMLファイルにスタイルシートを適応する方法",
                    img:"_images/_ST/css.jpg"
                },
                {
                    titlename:'CSSの基礎知識 ',
                    titleen:"base style sheet ",
                    url:"401_css_code.html",
                    dis:"スタイルシートの書式",
                    img:"_images/_ST/block.jpg"
                },
                {
                    titlename:'フォント ファミリー',
                    titleen:"font-family",
                    url:"42_css_code.html",
                    dis:"書体を設定するプロパティと値を学びます",
                    img:"_images/_ST/fontF.jpg"
                },
                {
                    titlename:'フォント サイズ',
                    titleen:"font-size",
                    url:"43_css_code.html",
                    dis:"文字の大きさを設定するプロパティと値を学びます",
                    img:"_images/_ST/fontSize.jpg"
                },
                {
                    titlename:'フォントのスタイル と ウエイト ',
                    titleen:"font-style ",
                    url:"44_css_code.html",
                    dis:"斜体と太さを設定するプロパティと値を学びます",
                    img:"_images/_ST/fontWeight.jpg"
                },
                {
                    titlename:'ラインハイト ',
                    titleen:"line-height ",
                    url:"45_css_code.html",
                    dis:"行と行の間の隙間を行間といいます。",
                    img:"_images/_ST/line-hight.jpg"
                },
                {
                    titlename:'テキストアライン',
                    titleen:"text-algin ",
                    url:"46_css_code.html",
                    dis:"段落ボックスのなかの文字の出現位置の設定",
                    img:"_images/_ST/align.jpg"
                },
                {
                    titlename:'バーティカルアライン',
                    titleen:"vertical-align ",
                    url:"47_css_code.html",
                    dis:"垂直方向の文字の出現位置の設定",
                    img:"_images/_ST/ver.jpg"
                },
                {
                    titlename:'詳細度',
                    titleen:" Specificity",
                    url:"48_css_code.html",
                    dis:"セレクタの書き方でCSSの適応をコントロールする",
                    img:"_images/_ST/detail.jpg"
                },
                {
                    titlename:'CSS position プロパティ',
                    titleen:"position ",
                    url:"41_css_code.html",
                    dis:"要素を重ねるレイアウト",
                    img:"_images/_ST/positon.jpg"
                },{
                    titlename:'HTML CSSのデバッグ',
                    titleen:"debug ",
                    url:"402_css_code.html",
                    dis:"ブラウザの検証モードでCSSの間違いを探す",
                    img:"_images/_ST/debug.jpg"

                },{
                    titlename:'flex レイアウト 基礎',
                    titleen:"flex ",
                    url:"403_css_code.html",
                    dis:"flexプロパティでレイアウトをします。フレックスレイアウトに設定された要素の子要素は横に並びます。",
                    img:"_images/_ST/flex.jpg"
                },{
                    titlename:'flex レイアウト 2',
                    titleen:"flex 2",
                    url:"404_css_code.html",
                    dis:"flexプロパティでレイアウトをします。子要素に各々にプロパティを設定してレイアウトを調整する方法",
                    img:"_images/_ST/flex2.jpg"

                }
            ]
   }
  };

  var csslists = new Vue(ST);
ST.el = "#w-STpages";
var cssPages = new Vue(ST);
 // CSS

  var JS = {
    el: '#w-JSlist',
    data: {
         titles:[
                {
                    titlename:'HTML CSS javascript 関係性',
                    titleen:"javascript base",
                    url:"500_js_code.html",
                    dis:"Webページにおけるjavascriptの役割",
                    img:"_images/_JS/javascript.jpg"
                },
                {
                    titlename:'javascriptを書く準備',
                    titleen:"javascript writing",
                    url:"501_js_code.html",
                    dis:"javascriptをWebページに適応させる方法",
                    img:"_images/_JS/chain_640.jpg"
                },
                {
                    titlename:'デバックモードでデバッグ',
                    titleen:"javascript debug",
                    url:"502_js_code.html",
                    dis:"検証モードでデバックする。",
                    img:"_images/_JS/chremconsole.PNG"
                },
                {

                    titlename:'書式 と コメント',
                    titleen:"javascript Format statement",
                    url:"503_js_code.html",
                    dis:"書式とコメントアウトです。書き方のルールを習得しましょう。",
                    img:"_images/_JS/state.jpg"
                },
                {
                    titlename:'変数',
                    titleen:"variable",
                    url:"504_js_code.html",
                    dis:"javascriptの変数の書き方のルールや仕組みを知りましょう",
                    img:"_images/_JS/memo-640.jpg"
                },
                {
                    titlename:'データ',
                    titleen:"data",
                    url:"505_js_code.html",
                    dis:"javascriptのデータの種類を知りましょう",
                    img:"_images/_JS/statistic-1606951_640.png"
                },
                {
                    titlename:'演算子',
                    titleen:"javascript operator",
                    url:"506_js_code.html",
                    dis:"足算や引き算などの演算のお話し",
                    img:"_images/_JS/operation.jpg"
                },
                 {
                    titlename:'制御フロー(条件文)',
                    titleen:"javascript Control flow",
                    url:"507_js_code.html",
                    dis:"条件に応じて処理を切り替える方法です。",
                    img:"_images/_JS/coffee-beans.jpg"
                },
                {
                    titlename:'関数',
                    titleen:"javascript Function",
                    url:"508_js_code.html",
                    dis:"様々な処理をまとめ、呼び出します",
                    img:"_images/_JS/spices-2419055_640.jpg"
                },
                {
                    titlename:'反復処理',
                    titleen:"javascript repetition",
                    url:"509_js_code.html",
                    dis:"様々な処理を条件がみたされるまでくりかえします。",
                    img:"_images/_JS/lithuania_640.jpg"
                },
                {
                    titlename:'documentインターフェイス',
                    titleen:"document API",
                    url:"510_js_code.html",
                    dis:"html要素（DOM）にアクセスし操作する。",
                    img:"_images/_JS/doc_640.jpg"
                },
                {
                    titlename:'関数と変数の範囲',
                    titleen:"scope",
                    url:"511_js_code.html",
                    dis:"変数の有効範囲（スコープ）について。",
                    img:"_images/_JS/scope_640.jpg"
                },
                {
                    titlename:'jQueryとHTMLへの読み込み',
                    titleen:"jQuery",
                    url:"512_js_code.html",
                    dis:"jQueryのライブラリーについて。",
                    img:"_images/_JS/technology-1283624_640.jpg"
                },
                {
                    titlename:'jQuery の 動作確認',
                    titleen:"jQuery ",
                    url:"513_js_code.html",
                    dis:"jQueryは動いてんの？ うごいてないの？",
                    img:"_images/_JS/matrix_640.jpg"
                },
                {
                    titlename:'入力フォームのvalue="値"をとる',
                    titleen:"form value",
                    url:"514_js_code.html",
                    dis:"入力フォームの値をとってJQueryの便利さを実感しよう。",
                    img:"_images/_JS/african-woman_640.jpg"
                },
                 {
                    titlename:'オブジェクトを定義してみる',
                    titleen:"object",
                    url:"515_js_code.html",
                    dis:"オブジェクトを定義する",
                    img:"_images/_JS/plexiglas_640.jpg"
                },
                {
                    titlename:'jqueryプラグインを作ってみる',
                    titleen:"jQuery plugin 2",
                    url:"516_js_code.html",
                    dis:"オブジェクトがつくれるようになったらプラグインつくってみましょう",
                    img:"_images/_JS/bulb-_640.jpg"
                },
                 {
                    titlename:'jqueryプラグインを作ってみる 拡張編 session Extend',
                    titleen:"jQuery plugin 2",
                    url:"517_js_code.html",
                    dis:"オプションを持つプラグインつくってみましょう",
                    img:"_images/_JS/cable-541068_640.jpg"
                }

         ]
    }
};

var JSlist = new Vue(JS);
JS.el = "#w-JSpages";
var JSpages = new Vue(JS);
//JSJquery