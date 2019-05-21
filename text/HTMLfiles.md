#htmlファイル形式の構造

１、文書型宣言文  
２、HTML要素

大きく２つの構造になります。


たまごでいううところの黄身と白身みたいなことを解ってほしい。

## 文書型宣言文
Document Type Definition
文書定義型宣言


[DTD](https://developer.mozilla.org/ja/docs/Glossary/DTD)


>HTML において、 doctype はすべての文書の先頭に見られる "<!DOCTYPE html>" という必須の前置きです。その唯一の目的は、ブラウザーが文書をレンダリングするときにいわゆる「後方互換モード (quirks mode)」に切り替わるのを防ぐことです。つまり、 "<!DOCTYPE html>" という doctype は、ブラウザーがいくつかの仕様で互換性のない別のレンダリングモードを使用するのではなく、関連する仕様に従って最大限の努力を試みるようにします。


レンダリング：とはデバイスがユーザーにむけて表現することです。

### html5以降の宣言は以下に統一されました。

`<!DOCTYPE html>`

#### 過去のバージョンのHTMLのDTD宣言
[wikipedia](https://ja.wikipedia.org/wiki/%E6%96%87%E6%9B%B8%E5%9E%8B%E5%AE%A3%E8%A8%80)


html5の記述ルールはXHTML1.0のルールを有る程度継承しています。SGML系とXML系の記述の矛盾などに少し戸惑うとおもいますが、こつをつかむころにはきにならないでしょう。

## html要素

[HTML を始めよう](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
htmlの本文です。編集はすべてこのHTML要素内でおこなわれます。

'<html> この部分を編集する。</html>'

##
文章を正しく表記させる記述文書がた宣言と
表示内容であるHTML要素、
この２つがhtmlファイルの大枠です。
