import React from 'react';

const MARQUEE_TEXT =
  'こんにちは。デベロッパーツールを開いたんですね。センスあります。 ✦ ' +
  'このサイトはReact + Create React Appで作られています。テンプレートなし、全部手作りです。 ✦ ' +
  '背景の星はJavaScript Canvas APIで描画していて、一つひとつが自分のペースで動いています。 ✦ ' +
  'ダークテーマは「Warm Galaxy（温かな銀河）」。銀河系とサイバーパンクの中間みたいな配色です。 ✦ ' +
  'ライトテーマはNieR: Automataへのオマージュです。ゲームオタクなので。後悔はしていません。 ✦ ' +
  '上部バーはWindows 95スタイル。レトロとモダンの組み合わせ、好きなんです。 ✦ ' +
  '画面を追いかけてくる猫は「Oneko」。90年代の日本製スクリプトで、かわいいので復活させました。 ✦ ' +
  'CSSはすべて手書き。スタイルフレームワークは一切使っていません。ええ、好きでやっています。 ✦ ' +
  'バグを見つけたら…知ってます。リストに入っています。そのうち直します。たぶん。 ✦ ' +
  'フルスタックはゴールではなく通過点です。もっと大きなことを計画しています。 ✦ ' +
  'ここまで覗いてくれてありがとう。このサイトが、将来のプロジェクトへの扉になりますように。 ✦ ' +
  '— astt3r ✦ ';

const MarqueeBand = () => {
  return (
    <div className="marquee-band">
      {/* ── 70% — scrolling text ── */}
      <div className="marquee-band__text-section">
        <div className="marquee-band__track" aria-hidden="true">
          <span className="marquee-band__content">{MARQUEE_TEXT}</span>
          <span className="marquee-band__content" aria-hidden="true">{MARQUEE_TEXT}</span>
        </div>
      </div>

      {/* ── 30% — music player── */}
      <div className="marquee-band__player-section">
        <div className="marquee-band__player">
          <span className="marquee-band__player-btn">▶</span>
          <span className="marquee-band__player-track">
            <em>♪</em> no track selected
          </span>
          <span className="marquee-band__player-bars" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBand;
