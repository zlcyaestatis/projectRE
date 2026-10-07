/* ==========================================================================
   NEXT GENESIS — 站点脚本
   路由 / 首页 / 角色 / 关系 / 纪事
   ========================================================================== */
(function () {
  "use strict";

  var NG = window.NG;
  var app = document.getElementById("main");
  var header = document.getElementById("siteHeader");
  var toTop = document.getElementById("toTop");

  /* ---------- 工具 ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function mix(a, b, t) {
    var ar = parseInt(a.slice(1, 3), 16), ag = parseInt(a.slice(3, 5), 16), ab = parseInt(a.slice(5, 7), 16);
    var br = parseInt(b.slice(1, 3), 16), bg = parseInt(b.slice(3, 5), 16), bb = parseInt(b.slice(5, 7), 16);
    var r = Math.round(ar + (br - ar) * t), g = Math.round(ag + (bg - ag) * t), bl = Math.round(ab + (bb - ab) * t);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + bl).toString(16).slice(1);
  }
  function shade(hex, amt) { return mix(hex, amt > 0 ? "#000000" : "#FFFFFF", Math.abs(amt)); }
  function nl2p(s) { return s.split("\n").map(function (x) { return esc(x); }).join("<br>"); }

  /* ---------- 头像生成 ---------- */
  function shadeHex(hex, amt) { return mix(hex, amt > 0 ? "#000000" : "#FFFFFF", Math.abs(amt)); }

  /* 发型：先画在面部之后（后方轮廓），再画刘海（前方） */
  function hairMass(style, h, s) {
    var cap = '<ellipse cx="150" cy="166" rx="61" ry="79" fill="' + h + '"/>';
    if (style === "long") {
      return '<path d="M150 88c-38 0-66 32-66 74 0 34-3 76-8 116-2 17 5 28 17 28 11 0 18-10 20-25 3-26 5-54 6-78 7 9 18 15 31 15s24-6 31-15c1 24 3 52 6 78 2 15 9 25 20 25 12 0 19-11 17-28-5-40-8-82-8-116 0-42-28-74-66-74z" fill="' + h + '"/>' + cap;
    }
    if (style === "wavy") {
      return '<path d="M150 86c-36 0-62 28-64 64-1 16-5 32-10 46-4 11-7 22-8 33-1 14 7 23 18 22 10-1 16-9 19-21 3-12 5-24 7-35 1-8 2-16 2-24 8 10 21 17 36 17s28-7 36-17c0 8 1 16 2 24 2 11 4 23 7 35 3 12 9 20 19 21 11 1 19-8 18-22-1-11-4-22-8-33-5-14-9-30-10-46-2-36-28-64-64-64z" fill="' + h + '"/>' + cap;
    }
    if (style === "bob") {
      return '<path d="M150 88c-36 0-64 30-64 68 0 24-3 46-7 66-3 15 4 25 16 25 11 0 17-9 19-23 2-16 4-32 4-46 8 9 19 15 32 15s24-6 32-15c0 14 2 30 4 46 2 14 8 23 19 23 12 0 19-10 16-25-4-20-7-42-7-66 0-38-28-68-64-68z" fill="' + h + '"/>' + cap;
    }
    if (style === "ponytail") {
      return '<path d="M150 88c-34 0-60 26-60 60 0 18 5 34 14 44 6-8 9-19 9-31 0-22 16-38 37-38s37 16 37 38c0 12 3 23 9 31 9-10 14-26 14-44 0-34-26-60-60-60z" fill="' + h + '"/>' +
             '<path d="M206 142c17 11 28 32 29 57 1 30-9 58-25 78-5 7-15 3-13-5 3-13 7-25 10-38 6-23 5-46-5-68-4-9-2-17 4-24z" fill="' + s + '"/>';
    }
    if (style === "twin") {
      return '<path d="M150 88c-34 0-60 26-60 60 0 18 5 34 14 44 6-8 9-19 9-31 0-22 16-38 37-38s37 16 37 38c0 12 3 23 9 31 9-10 14-26 14-44 0-34-26-60-60-60z" fill="' + h + '"/>' +
             '<path d="M94 150c-14 10-22 30-22 54 0 24 7 45 18 58 5 7 15 3 13-5-3-13-6-26-7-39-2-23 1-45 7-63z" fill="' + s + '"/>' +
             '<path d="M206 150c14 10 22 30 22 54 0 24-7 45-18 58-5 7-15 3-13-5 3-13 6-26 7-39 2-23-1-45-7-63z" fill="' + s + '"/>';
    }
    return '<path d="M150 88c-34 0-60 26-60 60 0 20 6 37 16 47 5-9 7-21 7-34 0-21 15-36 37-36s37 15 37 36c0 13 2 25 7 34 10-10 16-27 16-47 0-34-26-60-60-60z" fill="' + h + '"/>';
  }

  /* 刘海（画在面部前方） */
  function hairFringe(style, h, s) {
    if (style === "ponytail" || style === "twin") {
      return '<path d="M90 150c0-34 27-60 60-60s60 26 60 60c-4-22-27-36-60-36s-56 14-60 36z" fill="' + h + '"/>' +
             '<path d="M150 92c-3 15-4 32-3 47l3 5 3-5c1-15 0-32-3-47z" fill="' + s + '" opacity=".5"/>';
    }
    if (style === "wavy") {
      return '<path d="M89 154c1-34 27-60 61-60s60 26 61 60c-5-14-13-24-22-24-9 0-15 6-21 13-5 6-11 9-18 9s-13-3-18-9c-6-7-12-13-21-13-9 0-17 10-22 24z" fill="' + h + '"/>';
    }
    if (style === "bob") {
      return '<path d="M90 148c2-32 27-56 60-56s58 24 60 56c-7-16-24-24-42-21-10 2-18 7-25 12-5 4-10 2-13-3-4-7-12-11-19-10-8 1-14 8-21 22z" fill="' + h + '"/>';
    }
    if (style === "long") {
      return '<path d="M90 152c1-33 27-58 60-58s59 25 60 58c-6-18-28-28-60-28s-54 10-60 28z" fill="' + h + '"/>';
    }
    return '<path d="M92 154c2-32 27-56 58-56s56 23 58 54c-8-18-29-30-58-30s-50 13-58 32z" fill="' + h + '"/>';
  }

  function accessory(look) {
    var a = look.acc;
    if (a === "ribbon") {
      return '<g transform="translate(207,105) rotate(16)"><path d="M0 0l-22-13v26z" fill="#C1546E"/><path d="M0 0l22-13v26z" fill="#C1546E"/><circle cx="0" cy="0" r="5.5" fill="#A83E58"/></g>';
    }
    if (a === "flower") {
      return '<g transform="translate(209,109)"><circle cx="0" cy="-7" r="6.4" fill="#E8A33D"/><circle cx="7" cy="0" r="6.4" fill="#E8A33D"/><circle cx="0" cy="7" r="6.4" fill="#E8A33D"/><circle cx="-7" cy="0" r="6.4" fill="#E8A33D"/><circle cx="0" cy="0" r="4.6" fill="#C8791E"/></g>';
    }
    if (a === "clip") {
      return '<g transform="translate(103,118) rotate(-14)"><rect x="-17" y="-4.5" width="34" height="9" rx="4.5" fill="#E0A063"/><rect x="-17" y="-4.5" width="13" height="9" rx="4.5" fill="#C8791E"/></g>';
    }
    if (a === "headphones") {
      return '<g fill="none" stroke="#2E3238" stroke-width="7" stroke-linecap="round"><path d="M79 144c0-39 32-66 71-66s71 27 71 66"/></g>' +
             '<rect x="69" y="136" width="26" height="48" rx="13" fill="#2E3238"/><rect x="205" y="136" width="26" height="48" rx="13" fill="#2E3238"/>';
    }
    return "";
  }

  /* 头像主体（不含外层 <svg>，便于在关系图中内联复用） */
  NG.portraitBody = function (m) {
    var look = m.look;
    var c1 = m.bandRef ? m.bandRef.c1 : "#8A8F97";
    var h = look.hair, s = look.hair2 || shadeHex(h, .22);
    var skin = look.skin, skinS = shadeHex(skin, .13);
    var eye = look.eye, eyeD = shadeHex(eye, .28), eyeL = shadeHex(eye, -.3);
    var shirt = mix(c1, "#FFFFFF", .16), shirtD = shadeHex(shirt, .16);
    var line = shadeHex(h, .08);

    function eyeAt(cx) {
      return '<g>' +
        '<path d="M' + (cx - 13) + ' 167c7-9 19-9 26 0" fill="none" stroke="' + line + '" stroke-width="5" stroke-linecap="round"/>' +
        '<ellipse cx="' + cx + '" cy="178" rx="10" ry="12" fill="#FFFFFF"/>' +
        '<ellipse cx="' + cx + '" cy="179" rx="8.2" ry="10.6" fill="' + eye + '"/>' +
        '<ellipse cx="' + cx + '" cy="181.5" rx="4.2" ry="6.2" fill="' + eyeD + '" opacity=".7"/>' +
        '<ellipse cx="' + cx + '" cy="185" rx="3.4" ry="4" fill="' + eyeL + '" opacity=".5"/>' +
        '<circle cx="' + (cx - 4) + '" cy="172.5" r="3.2" fill="#FFFFFF"/>' +
        '<circle cx="' + (cx + 3.4) + '" cy="184" r="1.7" fill="#FFFFFF" opacity=".8"/>' +
      '</g>';
    }

    return (
      '<defs>' +
        '<linearGradient id="ngs-' + m.id + '" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="' + shirt + '"/><stop offset="1" stop-color="' + shirtD + '"/>' +
        '</linearGradient>' +
      '</defs>' +
      hairMass(look.style, h, s) +
      '<path d="M132 224h36v30c0 10-8 18-18 18s-18-8-18-18z" fill="' + skinS + '"/>' +
      '<path d="M22 350C30 300 62 268 106 257l28-6 16 20 16-20 28 6c44 11 76 43 84 93z" fill="url(#ngs-' + m.id + ')"/>' +
      '<path d="M134 251l16 20 16-20-8-2h-16z" fill="' + shirtD + '" opacity=".85"/>' +
      '<ellipse cx="100" cy="172" rx="9" ry="13" fill="' + skin + '"/>' +
      '<ellipse cx="200" cy="172" rx="9" ry="13" fill="' + skin + '"/>' +
      '<path d="M150 96c-30 0-52 22-52 52v30c0 16 6 30 16 40l14 12c6 5 14 8 22 8s16-3 22-8l14-12c10-10 16-24 16-40v-30c0-30-22-52-52-52z" fill="' + skin + '"/>' +
      '<path d="M118 161c9-6 21-6 29-2" fill="none" stroke="' + line + '" stroke-width="4.4" stroke-linecap="round"/>' +
      '<path d="M153 159c8-4 20-4 29 2" fill="none" stroke="' + line + '" stroke-width="4.4" stroke-linecap="round"/>' +
      eyeAt(131) + eyeAt(169) +
      '<ellipse cx="119" cy="194" rx="11" ry="6" fill="#E88A8A" opacity=".2"/>' +
      '<ellipse cx="181" cy="194" rx="11" ry="6" fill="#E88A8A" opacity=".2"/>' +
      '<path d="M150 189v6" fill="none" stroke="' + skinS + '" stroke-width="3.2" stroke-linecap="round" opacity=".75"/>' +
      '<path d="M144 206c3.5 4.5 8.5 4.5 12 0" fill="none" stroke="#B4635F" stroke-width="3.2" stroke-linecap="round"/>' +
      hairFringe(look.style, h, s) +
      (look.style === "long" || look.style === "wavy"
        ? '<path d="M98 152c-5 24-9 56-11 86-1 13 4 21 13 21 8 0 12-7 13-18 3-28 5-60 7-88z" fill="' + h + '"/>' +
          '<path d="M202 152c5 24 9 56 11 86 1 13-4 21-13 21-8 0-12-7-13-18-3-28-5-60-7-88z" fill="' + h + '"/>'
        : "") +
      accessory(look)
    );
  };

  /* 若角色数据里写了 img（本地图片路径），优先用图片；否则用内置 SVG 头像。
     这样在收集到立绘之前，网站表现完全不变。 */
  NG.hasImg = function (m) { return !!(m && typeof m.img === "string" && m.img.length); };

  NG.portrait = function (m) {
    if (NG.hasImg(m)) {
      return '<img class="ng-photo" src="' + esc(m.img) + '" alt="' + esc(m.name) + '" loading="lazy" decoding="async">';
    }
    return '<svg viewBox="0 0 300 350" role="img" aria-label="' + esc(m.name) + ' 的形象" preserveAspectRatio="xMidYMid meet">' +
      NG.portraitBody(m) + '</svg>';
  };

  NG.portraitOf = function (id) { var m = NG.byId[id]; return m ? NG.portrait(m) : ""; };
  /* ---------- 通用组件 ---------- */
  function bandPill(band) {
    return '<span class="mc-band" style="--c1:' + band.c1 + '">' + esc(band.name) + '</span>';
  }

  function memberCard(m) {
    var b = m.bandRef, cls = m.classRef;
    return '<a class="member-card" href="#/member/' + m.id + '" style="--c1:' + (b ? b.c1 : "#8A8F97") + '">' +
      '<span class="mc-portrait">' + NG.portrait(m) + '</span>' +
      (cls ? '<span class="mc-class">' + esc(cls.label) + '</span>' : '') +
      '<span class="mc-body">' +
        '<span class="mc-band-text" style="color:' + (b ? b.c1 : "inherit") + '">' + esc(b ? b.name : "—") + '</span>' +
        '<span class="mc-name">' + esc(m.name) + '</span>' +
        '<span class="mc-romaji">' + esc(m.romaji) + '</span>' +
        '<span class="mc-roles">' + m.roles.map(function (r) { return '<span class="mc-role">' + esc(r) + '</span>'; }).join("") + '</span>' +
      '</span>' +
    '</a>';
  }

  function bandCard(b) {
    return '<a class="band-card" href="#/members?band=' + b.id + '" style="--c1:' + b.c1 + ';--c2:' + b.c2 + '">' +
      '<span class="band-card-top">' +
        '<span class="band-card-en">' + esc(b.en) + '</span>' +
        '<span class="band-card-idx">' + esc(b.idx) + '</span>' +
      '</span>' +
      '<span class="band-card-name">' + esc(b.name) + '</span>' +
      '<span class="band-card-tag">' + esc(b.tag) + '</span>' +
      '<span class="band-card-foot">' +
        '<span class="band-avatars">' + b.members.map(function (m) { return '<span title="' + esc(m.name) + '">' + NG.portrait(m) + '</span>'; }).join("") + '</span>' +
        '<span class="band-card-genre">' + esc(b.genre) + '</span>' +
      '</span>' +
    '</a>';
  }

  function avatarChip(id, extra) {
    var m = NG.byId[id]; if (!m) return "";
    var b = m.bandRef;
    return '<a class="chip-link" href="#/member/' + m.id + '" style="--c1:' + (b ? b.c1 : "#8A8F97") + '">' +
      '<i>' + NG.portrait(m) + '</i><b>' + esc(m.name) + '</b>' +
      (extra ? '<em>' + esc(extra) + '</em>' : '') + '</a>';
  }

  function emptyState(title, desc) {
    return '<div class="empty">' +
      '<svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke-linecap="round"/></svg>' +
      '<p class="empty-title">' + esc(title) + '</p>' +
      '<p class="empty-desc">' + esc(desc || "") + '</p></div>';
  }

  /* ---------- 首页 ---------- */
  function viewHome() {
    var M = NG.meta;
    return '<div class="page">' +
      '<section class="hero">' +
        '<div class="hero-canvas" aria-hidden="true"><div class="hero-grid"></div><div class="hero-glow"></div><div class="hero-glow hero-glow--2"></div></div>' +
        '<div class="wrap hero-inner">' +
          '<p class="hero-eyebrow">' + esc(M.schoolEn) + '</p>' +
          '<h1 class="hero-title"><span class="en">' + esc(M.title) + '</span><span class="cn">' + esc(M.titleCn) + '</span></h1>' +
          '<p class="hero-lede">' + nl2p(M.lede) + '</p>' +
          '<div class="hero-actions">' +
            '<a class="btn btn--primary" href="#/members">认识二十四位成员<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h13M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
            '<a class="btn btn--ghost" href="#/relations">看看他们的关系</a>' +
          '</div>' +
          '<div class="hero-stats">' +
            '<div><p class="hero-stat-num">' + NG.stats.bands + '</p><p class="hero-stat-label">支乐队</p></div>' +
            '<div><p class="hero-stat-num">' + NG.stats.members + '</p><p class="hero-stat-label">位成员</p></div>' +
            '<div><p class="hero-stat-num">' + NG.stats.classes + '</p><p class="hero-stat-label">个班级</p></div>' +
            '<div><p class="hero-stat-num">' + NG.stats.events + '</p><p class="hero-stat-label">条纪事</p></div>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<div class="marquee" aria-hidden="true"><div class="marquee-track">' +
        (function () {
          var one = NG.bands.map(function (b) { return '<span class="marquee-item">' + esc(b.name) + ' · ' + esc(b.en) + '</span>'; }).join("");
          return one + one;
        })() +
      '</div></div>' +

      '<section class="section"><div class="wrap">' +
        '<div class="sec-head"><div><p class="sec-label">Bands</p><h2 class="sec-title">八支乐队</h2>' +
        '<p class="sec-desc">她们从同一座旧礼堂出发，散落到屋顶、地下室、机房和图书室。每一种声音，都是她们说话的方式。</p></div>' +
        '<a class="sec-link" href="#/members">全部角色<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h13M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>' +
        '<div class="band-grid">' + NG.bands.map(bandCard).join("") + '</div>' +
      '</div></section>' +

      '<section class="section"><div class="wrap">' +
        '<div class="sec-head"><div><p class="sec-label">Chronicle</p><h2 class="sec-title">最近纪事</h2>' +
        '<p class="sec-desc">从 2021 年春天那扇被推开的门开始。</p></div>' +
        '<a class="sec-link" href="#/chronicle">完整纪事<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h13M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>' +
        '<div class="events">' + NG.events.slice(-3).reverse().map(function (e) { return eventCard(e); }).join("") + '</div>' +
      '</div></section>' +
    '</div>';
  }

  /* ---------- 纪事卡片 ---------- */
  function eventCard(e) {
    var bands = (e.bands || []).map(function (id) { return NG.bandById[id]; }).filter(Boolean);
    var c1 = bands.length ? bands[0].c1 : "#B8BCC2";
    return '<article class="event" style="--c1:' + c1 + '">' +
      '<div class="event-head">' +
        '<span class="event-date">' + esc(e.date) + '</span>' +
        '<h3 class="event-title">' + esc(e.title) + '</h3>' +
        (e.flag ? '<span class="event-flag">' + esc(e.flag) + '</span>' : '') +
      '</div>' +
      '<p class="event-body">' + esc(e.body) + '</p>' +
      '<div class="event-foot">' +
        bands.map(function (b) { return '<a class="event-tag event-tag--band" href="#/members?band=' + b.id + '" style="--c1:' + b.c1 + '">' + esc(b.name) + '</a>'; }).join("") +
        (e.tags || []).map(function (t) { return '<span class="event-tag">' + esc(t) + '</span>'; }).join("") +
      '</div>' +
    '</article>';
  }
  /* ---------- 角色页 ---------- */
  function membersState() {
    var q = new URLSearchParams(location.hash.split("?")[1] || "");
    return {
      mode: q.get("mode") === "class" ? "class" : "band",
      filter: q.get("band") || q.get("cls") || "all",
      kw: q.get("q") || ""
    };
  }

  function viewMembers() {
    var st = membersState();
    var list = NG.members.slice();
    if (st.filter !== "all") {
      list = list.filter(function (m) { return st.mode === "class" ? m.cls === st.filter : m.band === st.filter; });
    }
    if (st.kw) {
      var kw = st.kw.toLowerCase();
      list = list.filter(function (m) {
        return (m.name + m.romaji + m.roles.join("") + (m.bandRef ? m.bandRef.name : "") + m.cls).toLowerCase().indexOf(kw) >= 0;
      });
    }

    /* 工具栏 */
    var gross = st.mode === "band" ? NG.bands : NG.classes;
    var chips = '<button class="chip' + (st.filter === "all" ? " is-active" : "") + '" data-filter="all">全部 ' + gross.length + ' ' + (st.mode === "band" ? "支" : "个") + '</button>' +
      gross.map(function (g) {
        return '<button class="chip chip--band' + (st.filter === g.id ? " is-active" : "") + '" data-filter="' + g.id + '" style="--c1:' + g.c1 + '"><span class="chip-dot"></span>' + esc(g.name || g.label) + '</button>';
      }).join("");

    var toolbar = '<div class="toolbar">' +
      '<div class="toolbar-group"><div class="seg" role="tablist">' +
        '<button data-mode="band" class="' + (st.mode === "band" ? "is-active" : "") + '">按八支组合</button>' +
        '<button data-mode="class" class="' + (st.mode === "class" ? "is-active" : "") + '">按六个班级</button>' +
      '</div></div>' +
      '<div class="toolbar-group"><div class="search">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5" stroke-linecap="round"/></svg>' +
        '<input type="search" id="kw" placeholder="搜索姓名 / 位置 / 班级" value="' + esc(st.kw) + '">' +
      '</div></div>' +
    '</div>';

    var chipsRow = '<div class="toolbar-group" style="margin-bottom:26px">' + chips + '</div>';

    /* 内容 */
    var body;
    if (st.filter !== "all") {
      var g = st.mode === "class" ? NG.classById[st.filter] : NG.bandById[st.filter];
      body = list.length ? groupBlock(g, st.mode, list) : emptyState("没有匹配的成员", "试试别的筛选条件或清空搜索关键词。");
    } else {
      body = gross.map(function (g) {
        var sub = st.mode === "class"
          ? list.filter(function (m) { return m.cls === g.id; })
          : list.filter(function (m) { return m.band === g.id; });
        return sub.length ? groupBlock(g, st.mode, sub) : "";
      }).join("");
      if (!body) body = emptyState("没有匹配的成员", "试试清空搜索关键词。");
    }

    return '<div class="page"><section class="section section--tight"><div class="wrap">' +
      '<div class="sec-head"><div><p class="sec-label">Characters</p><h2 class="sec-title">角色</h2>' +
      '<p class="sec-desc">二十四个人，八支组合，六个班级。<br>同一群人在不同的分组方式里，会呈现出完全不同的故事。</p></div>' +
      '<p class="count-note">当前显示 <b>' + list.length + '</b> / ' + NG.stats.members + ' 位</p></div>' +
      toolbar + chipsRow + '<div id="memberArea">' + body + '</div>' +
    '</div></section></div>';
  }

  function groupBlock(g, mode, subs) {
    var isBand = mode === "band";
    var title = isBand ? g.name : g.label;
    var meta = isBand ? g.idx + " · " + g.en : g.id + " · " + (g.grade ? g.grade + " 年级" : "");
    var desc = isBand ? g.tag : g.motto;
    return '<section class="group" style="--c1:' + g.c1 + ';--c2:' + (g.c2 || g.c1) + '">' +
      '<div class="group-head">' +
        '<span class="group-bar"></span>' +
        '<div><h3 class="group-title">' + esc(title) + '</h3><p class="group-meta">' + esc(meta) + '</p></div>' +
        '<p class="group-desc">' + esc(desc) + '</p>' +
        '<span class="group-count">' + subs.length + ' 人</span>' +
      '</div>' +
      '<div class="member-grid">' + subs.map(memberCard).join("") + '</div>' +
    '</section>';
  }

  /* ---------- 角色详情 ---------- */
  function viewMember(id) {
    var m = NG.byId[id];
    if (!m) return '<div class="page">' + emptyState("找不到这位成员", "她可能已经毕业，或者链接有误。") + '</div>';
    var b = m.bandRef, c = m.classRef;
    var rel = NG.memberRelations(m.id);

    var relList = rel.length ? rel.map(function (r) {
      var other = NG.byId[NG.otherOf(r, m.id)];
      if (!other) return "";
      var t = NG.relType(r.type);
      return '<a class="chip-link" href="#/member/' + other.id + '" style="--c1:' + (other.bandRef ? other.bandRef.c1 : "#8A8F97") + '">' +
        '<i>' + NG.portrait(other) + '</i><b>' + esc(other.name) + '</b><em>' + esc(t.label) + '</em></a>';
    }).join("") : '<p class="count-note">暂无记录。</p>';

    var teammates = (b ? b.members.filter(function (x) { return x.id !== m.id; }) : []);
    var classmates = (c ? c.members.filter(function (x) { return x.id !== m.id; }) : []);

    return '<div class="page"><section class="profile"><div class="wrap">' +
      '<nav class="crumb"><a href="#/members">角色</a><span>/</span>' +
        (b ? '<a href="#/members?band=' + b.id + '" style="color:' + b.c1 + '">' + esc(b.name) + '</a><span>/</span>' : '') +
        '<span style="color:var(--ink)">' + esc(m.name) + '</span></nav>' +

      '<div class="profile-hero" style="--c1:' + (b ? b.c1 : "#8A8F97") + ';--c2:' + (b ? b.c2 : "#B8BCC2") + '">' +
        '<div class="profile-portrait">' + NG.portrait(m) + '</div>' +
        '<div>' +
          (b ? '<span class="profile-bandtag">' + esc(b.name) + ' · ' + esc(b.en) + '</span>' : '') +
          '<h1 class="profile-name">' + esc(m.name) + '</h1>' +
          '<p class="profile-romaji">' + esc(m.romaji) + '</p>' +
          '<p class="profile-tagline">' + esc(m.tagline) + '</p>' +
          '<p class="profile-quote">' + esc(m.quote) + '</p>' +
          '<div class="profile-roles">' +
            m.roles.map(function (r) { return '<span class="profile-role">' + esc(r) + '</span>'; }).join("") +
            (c ? '<a class="profile-role" href="#/members?mode=class&cls=' + c.id + '" style="border-color:' + c.c1 + ';color:' + c.c1 + '">' + esc(c.label) + '</a>' : '') +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="profile-body">' +
        '<div class="prose"><h3>人物</h3>' +
          m.bio.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("") +
          '<h3>乐队</h3>' +
          (b ? '<p><b style="color:' + b.c1 + '">' + esc(b.name) + '</b> —— ' + esc(b.desc) + '</p>' +
               '<p class="count-note">成立 · ' + esc(b.debuted) + '　｜　据点 · ' + esc(b.base) + '　｜　风格 · ' + esc(b.genre) + '</p>' : '') +
          '<h3>关系</h3><div class="link-row" style="margin-top:6px">' + relList + '</div>' +
        '</div>' +
        '<aside class="facts">' +
          '<p class="facts-head">PROFILE</p>' +
          '<dl>' +
            '<div class="row"><dt>乐器</dt><dd>' + esc(m.instrument) + '</dd></div>' +
            '<div class="row"><dt>生日</dt><dd>' + esc(m.birthday) + '</dd></div>' +
            '<div class="row"><dt>身高</dt><dd>' + esc(m.height) + '</dd></div>' +
            '<div class="row"><dt>血型</dt><dd>' + esc(m.blood) + ' 型</dd></div>' +
            '<div class="row"><dt>出身</dt><dd>' + esc(m.origin) + '</dd></div>' +
            '<div class="row"><dt>特长</dt><dd>' + esc(m.skill) + '</dd></div>' +
            '<div class="row"><dt>喜欢</dt><dd>' + esc(m.likes) + '</dd></div>' +
            '<div class="row"><dt>不擅长</dt><dd>' + esc(m.dislikes) + '</dd></div>' +
            '<div class="row"><dt>标签</dt><dd><span class="tag-cloud">' + m.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</span></dd></div>' +
          '</dl>' +
          (teammates.length || classmates.length ?
            '<div style="padding:0 20px 18px">' +
              (teammates.length ? '<p class="count-note" style="margin-bottom:9px">同乐队</p><div class="link-row" style="margin-bottom:16px">' + teammates.map(function (x) { return avatarChip(x.id, x.roles[0]); }).join("") + '</div>' : '') +
              (classmates.length ? '<p class="count-note" style="margin-bottom:9px">同班</p><div class="link-row">' + classmates.map(function (x) { return avatarChip(x.id, x.cls); }).join("") + '</div>' : '') +
            '</div>' : '') +
        '</aside>' +
      '</div>' +
    '</div></section></div>';
  }
  /* ---------- 关系页 ---------- */
  function relState() {
    var q = new URLSearchParams(location.hash.split("?")[1] || "");
    return { focus: q.get("id") || "", type: q.get("type") || "all" };
  }

  function viewRelations() {
    var st = relState();
    var types = Object.keys(NG.relTypes);
    var typeChips = '<button class="chip' + (st.type === "all" ? " is-active" : "") + '" data-rtype="all">全部 ' + NG.relations.length + ' 条</button>' +
      types.map(function (t) {
        var n = NG.relations.filter(function (r) { return r.type === t; }).length;
        var meta = NG.relTypes[t];
        return '<button class="chip' + (st.type === t ? " is-active" : "") + '" data-rtype="' + t + '" style="--c1:' + meta.color + '">' +
          '<span style="color:' + meta.color + ';margin-right:6px">' + meta.symbol + '</span>' + esc(meta.label) + ' ' + n + '</button>';
      }).join("");

    var legend = '<div class="graph-legend">' + types.map(function (t) {
      var meta = NG.relTypes[t];
      return '<span class="legend-item" style="color:' + meta.color + '"><span class="legend-line"></span>' + esc(meta.label) + '</span>';
    }).join("") + '</div>';

    return '<div class="page"><section class="section section--tight"><div class="wrap">' +
      '<div class="sec-head"><div><p class="sec-label">Relations</p><h2 class="sec-title">关系</h2>' +
      '<p class="sec-desc">把二十四个人放在同一张网里。<br>拖动节点、点击查看某一组关系，悬停可以看清她们之间的那句话。</p></div>' +
      '<p class="count-note">共 <b>' + NG.relations.length + '</b> 条关系</p></div>' +
      '<div class="toolbar-group" style="margin-bottom:24px">' + typeChips + '</div>' +
      '<div class="rel-layout">' +
        '<div id="graphArea">' + renderGraph(st) + legend + '</div>' +
        '<div><p class="count-note" style="margin-bottom:14px">关系清单</p><div id="relList" class="rel-list">' + renderRelList(st) + '</div></div>' +
      '</div>' +
    '</div></section></div>';
  }

  function renderRelList(st) {
    var rows = NG.relations.filter(function (r) { return st.type === "all" || r.type === st.type; });
    if (!rows.length) return '<p class="count-note">这一类还没有记录。</p>';
    return rows.map(function (r) {
      var a = NG.byId[r.a], b = NG.byId[r.b];
      if (!a || !b) return "";
      var meta = NG.relType(r.type);
      return '<article class="rel-item" style="--rc:' + meta.color + '">' +
        '<span class="rel-icon">' + meta.symbol + '</span>' +
        '<div class="rel-main">' +
          '<p class="rel-pair"><a href="#/member/' + a.id + '">' + esc(a.name) + '</a><span>×</span><a href="#/member/' + b.id + '">' + esc(b.name) + '</a></p>' +
          '<p class="rel-note">' + esc(r.note) + '</p>' +
        '</div>' +
        '<span class="rel-type">' + esc(meta.label) + '</span>' +
      '</article>';
    }).join("");
  }

  /* 圆形布局的力导向图（手写，无依赖） */
  function renderGraph(st) {
    var W = 760, H = 660, cx = W / 2, cy = H / 2, R = 250;
    var nodes = NG.members.map(function (m) {
      var b = m.bandRef;
      return { id: m.id, m: m, band: b ? b.id : "", c1: b ? b.c1 : "#8A8F97", name: m.name, x: 0, y: 0 };
    });
    var byBand = {};
    NG.bands.forEach(function (b, i) { byBand[b.id] = i; });
    /* 按乐队分组落点：先分配角度扇区，再在扇区内排开 */
    var order = NG.members.slice().sort(function (p, q) {
      var bp = byBand[p.band] - byBand[q.band];
      return bp !== 0 ? bp : (p.band === q.band ? 0 : 0);
    });
    order.forEach(function (m, i) {
      var t = (i / order.length) * Math.PI * 2 - Math.PI / 2;
      var node = nodes.filter(function (n) { return n.id === m.id; })[0];
      node.x = cx + Math.cos(t) * R;
      node.y = cy + Math.sin(t) * R;
    });

    var edges = NG.relations.map(function (r, i) {
      var a = nodes.filter(function (n) { return n.id === r.a; })[0];
      var b = nodes.filter(function (n) { return n.id === r.b; })[0];
      var meta = NG.relType(r.type);
      return { i: i, r: r, a: a, b: b, color: meta.color, type: r.type, label: meta.label, note: r.note };
    }).filter(function (e) { return e.a && e.b; });

    var svgEdges = edges.map(function (e) {
      var dx = e.b.x - e.a.x, dy = e.b.y - e.a.y;
      var mx = (e.a.x + e.b.x) / 2 - dy * .10, my = (e.a.y + e.b.y) / 2 + dx * .10;
      var dim = st.type !== "all" && e.type !== st.type;
      return '<g class="g-edge' + (dim ? " is-dim" : "") + '" data-edge="' + e.i + '" data-type="' + e.type + '" data-a="' + e.a.id + '" data-b="' + e.b.id + '" data-note="' + esc(e.note) + '" data-label="' + esc(e.label) + '">' +
        '<path d="M' + e.a.x.toFixed(1) + ' ' + e.a.y.toFixed(1) + ' Q' + mx.toFixed(1) + ' ' + my.toFixed(1) + ' ' + e.b.x.toFixed(1) + ' ' + e.b.y.toFixed(1) + '" fill="none" stroke="' + e.color + '" stroke-width="1.5" opacity=".42" stroke-linecap="round"/>' +
      '</g>';
    }).join("");

    var svgLabels = edges.map(function (e) {
      var dx = e.b.x - e.a.x, dy = e.b.y - e.a.y;
      var mx = (e.a.x + e.b.x) / 2 - dy * .10, my = (e.a.y + e.b.y) / 2 + dx * .10;
      return '<text class="g-label" data-label-edge="' + e.i + '" x="' + mx.toFixed(1) + '" y="' + my.toFixed(1) + '" text-anchor="middle" dy="-2">' + esc(e.label) + '</text>';
    }).join("");

    var svgNodes = nodes.map(function (n) {
      var r = 20, k = 0.088;
      return '<g class="g-node" data-node="' + n.id + '" transform="translate(' + n.x.toFixed(1) + ',' + n.y.toFixed(1) + ')">' +
        '<circle r="' + (r + 6) + '" fill="' + n.c1 + '" opacity=".13"/>' +
        '<circle r="' + r + '" fill="' + n.c1 + '"/>' +
        '<clipPath id="cp-' + n.id + '"><circle r="' + r + '" cx="0" cy="0"/></clipPath>' +
        '<g clip-path="url(#cp-' + n.id + ')">' + (
          NG.hasImg(n.m)
            ? '<image href="' + esc(n.m.img) + '" x="' + (-150 * k).toFixed(2) + '" y="' + (-208 * k).toFixed(2) + '" width="' + (300 * k).toFixed(2) + '" height="' + (350 * k).toFixed(2) + '" preserveAspectRatio="xMidYMid slice"/>'
            : '<g transform="translate(' + (-150 * k).toFixed(2) + ',' + (-208 * k).toFixed(2) + ') scale(' + k + ')">' + NG.portraitBody(n.m) + '</g>'
        ) + '</g>' +
        '<circle r="' + r + '" fill="none" stroke="#FFFFFF" stroke-width="2.6"/>' +
        '<text y="' + (r + 15) + '" text-anchor="middle">' + esc(n.name.replace(/\s+/g, "")) + '</text>' +
      '</g>';
    }).join("");

    return '<div class="graph-wrap">' +
      '<svg id="relGraph" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="成员关系网络图">' +
        '<g id="gEdges">' + svgEdges + '</g>' +
        '<g id="gLabels">' + svgLabels + '</g>' +
        '<g id="gNodes">' + svgNodes + '</g>' +
      '</svg>' +
      '<div class="graph-tools">' +
        '<button type="button" id="gReset" title="重新布局" aria-label="重新布局"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20 11a8 8 0 1 0-2 5.5M20 5v6h-6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
        '<button type="button" id="gZoomIn" title="放大" aria-label="放大"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 6v12M6 12h12" stroke-linecap="round"/></svg></button>' +
        '<button type="button" id="gZoomOut" title="缩小" aria-label="缩小"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 12h12" stroke-linecap="round"/></svg></button>' +
      '</div>' +
      '<div class="graph-tip" id="gTip" role="status"></div>' +
    '</div>';
  }
  /* ---------- 纪事页 ---------- */
  function chronState() {
    var q = new URLSearchParams(location.hash.split("?")[1] || "");
    return { band: q.get("band") || "all" };
  }

  function viewChronicle() {
    var st = chronState();
    var bandChips = '<button class="chip' + (st.band === "all" ? " is-active" : "") + '" data-cband="all">全部组合</button>' +
      NG.bands.map(function (b) {
        return '<button class="chip chip--band' + (st.band === b.id ? " is-active" : "") + '" data-cband="' + b.id + '" style="--c1:' + b.c1 + '">' +
          '<span class="chip-dot"></span>' + esc(b.name) + '</button>';
      }).join("");

    var terms = NG.terms.map(function (t) {
      var evs = NG.events.filter(function (e) { return e.term === t.id; });
      if (st.band !== "all") evs = evs.filter(function (e) { return (e.bands || []).indexOf(st.band) >= 0; });
      if (!evs.length) return "";
      return '<section class="tl-term" style="--c1:' + t.c1 + '">' +
        '<div class="tl-term-head"><h3 class="tl-term-name">' + esc(t.label) + '</h3>' +
        '<span class="tl-term-rule"></span><span class="tl-term-count">' + evs.length + ' 条</span></div>' +
        '<div class="events">' + evs.map(function (e) { return eventCard(e); }).join("") + '</div>' +
      '</section>';
    }).join("");

    if (!terms) terms = emptyState("这一段还没有记录", "换个组合看看，也许有别的故事。");

    return '<div class="page"><section class="section section--tight"><div class="wrap">' +
      '<div class="sec-head"><div><p class="sec-label">Chronicle</p><h2 class="sec-title">纪事</h2>' +
      '<p class="sec-desc">全部 ' + NG.events.length + ' 条记录，按时间排列。<br>选择一支乐队，只看属于她们的那一段。</p></div>' +
      '<p class="count-note">' + NG.terms.length + ' 个时期</p></div>' +
      '<div class="toolbar-group" style="margin-bottom:36px">' + bandChips + '</div>' +
      '<div class="timeline">' + terms + '</div>' +
    '</div></section></div>';
  }

  /* ---------- 渲染 & 事件绑定 ---------- */
  function setActiveNav(key) {
    $$(".site-nav a").forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("data-nav") === key);
    });
  }

  var lastRoute = "";

  function parseHash() {
    var raw = (location.hash || "#/").replace(/^#/, "");
    var parts = raw.split("?");
    var path = parts[0] || "/";
    var segs = path.split("/").filter(Boolean);
    return { path: path, segs: segs, query: parts[1] || "" };
  }

  function render() {
    var r = parseHash();
    var head = r.segs[0] || "home";
    var html, nav = "home";

    if (head === "members" || head === "member") {
      nav = "members";
      html = head === "member" ? viewMember(r.segs[1]) : viewMembers();
    } else if (head === "relations") {
      nav = "relations"; html = viewRelations();
    } else if (head === "chronicle") {
      nav = "chronicle"; html = viewChronicle();
    } else {
      nav = "home"; html = viewHome();
    }

    app.innerHTML = html;
    setActiveNav(nav);
    /* 仅在路由变化时回到顶部；筛选/搜索重绘保持滚动位置 */
    var routeKey = r.path;
    if (routeKey !== lastRoute) { window.scrollTo({ top: 0, behavior: "auto" }); lastRoute = routeKey; }

    document.title = ({
      home: "NEXT GENESIS │ 首页",
      members: "角色 │ NEXT GENESIS",
      member: "角色 │ NEXT GENESIS",
      relations: "关系 │ NEXT GENESIS",
      chronicle: "纪事 │ NEXT GENESIS"
    })[nav] || "NEXT GENESIS";

    afterRender(r, nav);
  }

  function afterRender(r, nav) {
      observeReveal();
      if (nav === "members") {
          bindMembers();
      }
      if (nav === "relations") {
          bindGraph();
          bindRelationsFilter(); // 【新增】绑定关系筛选按钮
      }
      if (nav === "chronicle") {
          bindChronicleFilter(); //【新增】绑定纪事筛选按钮
      }
  }

  /* 成员页交互：模式 / 筛选 / 搜索（无刷新，直接改 hash） */
  function bindMembers() {
    var st = membersState();
    function go(next) {
      var q = new URLSearchParams();
      if (next.mode && next.mode !== "band") q.set("mode", next.mode);
      if (next.filter && next.filter !== "all") q.set(next.mode === "class" ? "cls" : "band", next.filter);
      if (next.kw) q.set("q", next.kw);
      var qs = q.toString();
      location.hash = "#/members" + (qs ? "?" + qs : "");
    }

    $$("[data-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-mode");
        if (mode === st.mode) return;
        go({ mode: mode, filter: "all", kw: st.kw });
      });
    });
    $$("[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        go({ mode: st.mode, filter: btn.getAttribute("data-filter"), kw: st.kw });
      });
    });
    var kw = $("#kw");
    if (kw) {
      var timer = null;
      kw.addEventListener("input", function () {
        clearTimeout(timer);
        timer = setTimeout(function () { go({ mode: st.mode, filter: st.filter, kw: kw.value.trim() }); }, 260);
      });
      if (st.kw) { kw.focus(); kw.setSelectionRange(kw.value.length, kw.value.length); }
    }
  }

  /* 关系图交互：拖动 / 缩放 / 高亮 / 提示 */
  function bindGraph() {
    var svg = $("#relGraph"); if (!svg) return;
    var wrap = svg.closest(".graph-wrap");
    var tip = $("#gTip");
    var nodesG = $("#gNodes"), edgesG = $("#gEdges"), labelsG = $("#gLabels");
    var nodeEls = $$(".g-node", svg);
    var edgeEls = $$(".g-edge", svg);
    var vb = { x: 0, y: 0, w: 760, h: 660 };
    var full = { x: 0, y: 0, w: 760, h: 660 };

    var adj = {};
    NG.relations.forEach(function (r) {
      (adj[r.a] = adj[r.a] || []).push(r);
      (adj[r.b] = adj[r.b] || []).push(r);
    });

    function applyVB() { svg.setAttribute("viewBox", vb.x + " " + vb.y + " " + vb.w + " " + vb.h); }
    function zoom(k) {
      var nw = Math.min(full.w * 1.6, Math.max(full.w * .45, vb.w * k));
      var nh = nw * (full.h / full.w);
      var ccx = vb.x + vb.w / 2, ccy = vb.y + vb.h / 2;
      vb.w = nw; vb.h = nh; vb.x = ccx - nw / 2; vb.y = ccy - nh / 2;
      applyVB();
    }
    $("#gZoomIn") && $("#gZoomIn").addEventListener("click", function () { zoom(.82); });
    $("#gZoomOut") && $("#gZoomOut").addEventListener("click", function () { zoom(1.22); });
    $("#gReset") && $("#gReset").addEventListener("click", function () { vb = { x: full.x, y: full.y, w: full.w, h: full.h }; applyVB(); focusNode(""); });

    function focusNode(id) {
      nodeEls.forEach(function (n) { n.classList.toggle("is-dim", !!id && n.getAttribute("data-node") !== id); n.classList.toggle("is-focus", !!id && n.getAttribute("data-node") === id); });
      edgeEls.forEach(function (e) {
        var on = !id || e.getAttribute("data-a") === id || e.getAttribute("data-b") === id;
        e.classList.toggle("is-dim", !on);
        e.classList.toggle("is-hi", !!id && on);
        var lb = labelsG.querySelector('[data-label-edge="' + e.getAttribute("data-edge") + '"]');
        if (lb) lb.classList.toggle("is-on", !!id && on);
      });
      if (id) {
        var extra = (adj[id] || []).map(function (r) {
          var o = NG.byId[NG.otherOf(r, id)], t = NG.relType(r.type);
          return o ? (esc(o.name) + " · " + esc(t.label)) : "";
        }).filter(Boolean).join("<br>");
        var m = NG.byId[id];
        tip.innerHTML = "<b>" + esc(m.name) + "</b><em>" + extra + "</em>";
        tip.classList.add("is-on");
        var n = nodeEls.filter(function (x) { return x.getAttribute("data-node") === id; })[0];
        var tr = n.getAttribute("transform").match(/translate\(([-\d.]+),([-\d.]+)\)/);
        var rect = wrap.getBoundingClientRect();
        var px = (parseFloat(tr[1]) - vb.x) / vb.w * rect.width;
        var py = (parseFloat(tr[2]) - vb.y) / vb.h * rect.height;
        tip.style.left = Math.max(90, Math.min(rect.width - 90, px)) + "px";
        tip.style.top = Math.max(60, py) + "px";
      } else {
        tip.classList.remove("is-on");
      }
    }

    nodeEls.forEach(function (n) {
      n.addEventListener("mouseenter", function () { focusNode(n.getAttribute("data-node")); });
      n.addEventListener("click", function (ev) { ev.stopPropagation(); location.hash = "#/member/" + n.getAttribute("data-node"); });
    });
    edgeEls.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        tip.innerHTML = "<b>" + esc(NG.byId[e.getAttribute("data-a")].name) + " × " + esc(NG.byId[e.getAttribute("data-b")].name) + "</b><em>" + esc(e.getAttribute("data-label")) + "　" + esc(e.getAttribute("data-note")) + "</em>";
        tip.classList.add("is-on");
        var box = e.querySelector("path").getBBox();
        var rect = wrap.getBoundingClientRect();
        var px = (box.x + box.width / 2 - vb.x) / vb.w * rect.width;
        var py = (box.y + box.height / 2 - vb.y) / vb.h * rect.height;
        tip.style.left = Math.max(100, Math.min(rect.width - 100, px)) + "px";
        tip.style.top = Math.max(70, py) + "px";
      });
      e.addEventListener("mouseleave", function () { tip.classList.remove("is-on"); });
    });
    svg.addEventListener("mouseleave", function () { tip.classList.remove("is-on"); });
    svg.addEventListener("click", function () { focusNode(""); });

    /* 平移 */
    var drag = null;
    svg.addEventListener("pointerdown", function (ev) {
      if (ev.target.closest(".g-node")) return;
      drag = { x: ev.clientX, y: ev.clientY, vx: vb.x, vy: vb.y };
      svg.classList.add("is-grabbing");
      svg.setPointerCapture(ev.pointerId);
    });
    svg.addEventListener("pointermove", function (ev) {
      if (!drag) return;
      var rect = svg.getBoundingClientRect();
      vb.x = drag.vx - (ev.clientX - drag.x) * (vb.w / rect.width);
      vb.y = drag.vy - (ev.clientY - drag.y) * (vb.h / rect.height);
      applyVB();
    });
    function endDrag(ev) { drag = null; svg.classList.remove("is-grabbing"); }
    svg.addEventListener("pointerup", endDrag);
    svg.addEventListener("pointercancel", endDrag);
    svg.addEventListener("wheel", function (ev) { ev.preventDefault(); zoom(ev.deltaY < 0 ? .88 : 1.14); }, { passive: false });
  }

    /* ======================新增：关系页面筛选按钮绑定====================== */
    /**
     * bindRelationsFilter：关系页筛选类型按钮点击
     * 按钮属性 data‑rtype ，修改hash ?type=xxx
     */
  function bindRelationsFilter() {
      var st = relState();
      $$("[data-rtype]").forEach(function (btn) {
          btn.addEventListener("click", function () {
              var rtype = btn.getAttribute("data-rtype");
              var q = new URLSearchParams();
              if (rtype !== "all") {
                  q.set("type", rtype);
              }
              location.hash = "#/relations" + (q.toString() ? "?" + q.toString() : "");
          });
      });
  }

    /* ======================新增：纪事页面筛选乐队按钮绑定====================== */
    /**
     * bindChronicleFilter：纪事页筛选乐队按钮点击
     * 按钮属性 data‑cband，修改hash ?band=xxx
     */
  function bindChronicleFilter() {
      var st = chronState();
      $$("[data-cband]").forEach(function (btn) {
          btn.addEventListener("click", function () {
              var cband = btn.getAttribute("data-cband");
              var q = new URLSearchParams();
              if (cband !== "all") {
                  q.set("band", cband);
              }
              location.hash = "#/chronicle" + (q.toString() ? "?" + q.toString() : "");
          });
      });
  }

  /* 滚动显现 */
  var io = null;
  function observeReveal() {
    var items = $$(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) { items.forEach(function (el) { el.classList.add("is-in"); }); return; }
    if (io) io.disconnect();
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .06 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 全局 ---------- */
  function initTheme() {
    var KEY = "ng-theme";
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    var theme = saved || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
    $("#themeToggle").addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  function initChrome() {
    var onScroll = function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      header.classList.toggle("is-stuck", y > 8);
      toTop.classList.toggle("is-on", y > 620);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    toTop.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } });
  }

  function boot() {
    initTheme();
    initChrome();
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
    window.addEventListener("hashchange", render);
    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();