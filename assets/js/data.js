/* ==========================================================================
   NEXT GENESIS — 数据源
   24 位角色 · 8 支乐队（每支 3 人）· 6 个班级（每班 4 人）· 关系网络 · 纪事
   直接修改本文件即可更新内容，无需构建、无需依赖。
   ========================================================================== */
window.NG = window.NG || {};

NG.meta = {
  title: "RISOLUTO ENSEMBLE",
  titleCn: "私立世响高中 偶像科",
  school: "私立世响高中",
  schoolEn: "PRIVATE HIBIYO HIGH SCHOOL IDOL DEPARTMENT",
  tagline: "八个声音，二十四颗心。\n在同一座礼堂里，写下各自的下一段。",
  lede: "星见丘女高的旧礼堂里，有一台被前任学生会遗弃的立式钢琴。每年春天，总会有人推开那扇门——于是有了第一支乐队，也有了后来的一切。",
  founded: "2021",
  quote: "音乐不是答案，只是我们说话的方式。"
};

NG.classes = [
  { id:"1-A", grade:1, label:"一年A班", motto:"把每一天都过成副歌", c1:"#D98E2B",
    desc:"气氛最松弛的一班，午休时常有人抱着吉他坐到窗边。" },
  { id:"1-B", grade:1, label:"一年B班", motto:"安静地、准确地、往前", c1:"#3E87A8",
    desc:"自习课纪律最好的班级，也是放学后走得最快的一班。" },
  { id:"1-C", grade:1, label:"一年C班", motto:"先做出来，再谈优不优雅", c1:"#7B62A8",
    desc:"机房隔壁。全校会打鼓的人有一半在这个班。" },
  { id:"2-A", grade:2, label:"二年A班", motto:"这一次，让我们站上台", c1:"#C1546E",
    desc:"去年的文化祭让这个班整体拧成了一股绳。" },
  { id:"2-B", grade:2, label:"二年B班", motto:"各有各的漂亮", c1:"#4A5BA8",
    desc:"走廊上最常听见笑声的教室，也是最常听见争吵的教室。" },
  { id:"3-A", grade:3, label:"三年A班", motto:"在结束之前，把话说完", c1:"#2E8C86",
    desc:"毕业年。窗外的樱花开了三次，她们都记得。" }
];

NG.bands = [
  { id:"b1", idx:"01", name:"晨星", en:"MORNING STAR", genre:"Guitar Rock", c1:"#D98E2B", c2:"#F0C071",
    tag:"从零开始的那一支，全校最像「乐队」的乐队。",
    desc:"起点。主唱天野光用一把二手 Telecaster，把同班的野乃和三年级的奏拉进了旧礼堂。她们的音乐直白、明亮，偶尔粗糙，但每一次都把话说完了。",
    debuted:"2021 春 · 入学式后的第三天", base:"旧礼堂 · 西侧小舞台" },
  { id:"b2", idx:"02", name:"潮汐", en:"TIDE", genre:"Alternative / Post-pop", c1:"#3E87A8", c2:"#8FC2D4",
    tag:"冷静、精密、后劲很长。",
    desc:"桐生汐里把自己关在音乐教室写了一整年的曲子，才有了潮汐。她们的和声像涨潮，退下去以后沙滩上留下很多东西。",
    debuted:"2022 春 · 音乐部新设发表会", base:"音乐教室 · 隔音二号室" },
  { id:"b3", idx:"03", name:"绯樱", en:"SCARLET SAKURA", genre:"J-Pop / Idol Rock", c1:"#C1546E", c2:"#E89AAB",
    tag:"舞台感最强的华丽派，也是校内人气第一。",
    desc:"绫濑咲良要的不是「好听」，而是「让人记住」。绯樱的每一场演出都有服装、编舞和灯光——她们认真得像在开真正的演唱会。",
    debuted:"2022 秋 · 文化祭主舞台", base:"特别教室栋 · 舞蹈室" },
  { id:"b4", idx:"04", name:"夜航", en:"NIGHT VOYAGE", genre:"Dark Post-rock", c1:"#4A5BA8", c2:"#8A97D4",
    tag:"把沉默写进编曲里的暗色后摇。",
    desc:"佐仓夜说，她想做出「凌晨四点的海中央」那种声音。夜航的歌大多很长，没有人声的部分比有人声的部分更响。",
    debuted:"2023 春 · 深夜校内放送", base:"旧礼堂 · 地下室" },
  { id:"b5", idx:"05", name:"回声", en:"ECHO", genre:"Acoustic / Folk", c1:"#6E9E52", c2:"#A3C98F",
    tag:"木吉他、小提琴和大提琴，和一间总是很暖的教室。",
    desc:"没有效果器，没有大音量。回声只是把歌轻轻放下来，然后等它自己弹回来——像山谷，也像有人一直在听。",
    debuted:"2023 夏 · 中庭午休演奏", base:"图书室 · 靠窗的位置" },
  { id:"b6", idx:"06", name:"织光", en:"WEAVING LIGHT", genre:"Electro / Synth-pop", c1:"#7B62A8", c2:"#ADA0D1",
    tag:"用电脑和合成器把光织成声音。",
    desc:"星川织习惯先画一条光的曲线，再把它变成音色。织光的演出从不出错，因为每一次出错都在排练时被计算过了。",
    debuted:"2023 秋 · 秋叶祭夜间演出", base:"机房隔壁 · 第三准备室" },
  { id:"b7", idx:"07", name:"铅白", en:"LEAD WHITE", genre:"Hard Rock / Metal", c1:"#6E7278", c2:"#B0B4B8",
    tag:"全校音量最大，也全校最讲礼貌。",
    desc:"铠美冬的嗓音像生锈的铜管，但她们上台前会一起鞠躬。铅白相信一件事：重，是一种温柔。",
    debuted:"2024 春 · 金属研究部创立公演", base:"体育馆 · 舞台后侧" },
  { id:"b8", idx:"08", name:"骤雨", en:"SQUALL", genre:"Punk / Fast Rock", c1:"#2E8C86", c2:"#85BCB0",
    tag:"平均时长两分四十秒，从不返场。",
    desc:"神乐坂迅写歌很快，副歌必须在九十秒内出现。骤雨的现场像一场真的雨——淋湿了，然后晴天。",
    debuted:"2024 夏 · 屋顶露天演出", base:"屋顶 · 水塔下" }
];

NG.relTypes = {
  partner:   { label:"同乐队", symbol:"⌘", color:"#3E87A8", desc:"在同一支乐队里，一起排练、一起上台。" },
  classmate: { label:"同班",   symbol:"＝", color:"#9A9FA6", desc:"同一个班级，日常里最先遇到的人。" },
  friend:    { label:"亲友",   symbol:"❀", color:"#C1546E", desc:"会主动去找对方说话的那种关系。" },
  rival:     { label:"竞争",   symbol:"⚔", color:"#B4553C", desc:"互相认可，也互相不肯认输。" },
  childhood: { label:"幼驯染", symbol:"✦", color:"#D98E2B", desc:"认识得比记忆更早。" },
  senior:    { label:"前后辈", symbol:"↑", color:"#6E9E52", desc:"年级不同，但把话递过去了。" },
  bond:      { label:"牵绊",   symbol:"∞", color:"#2E8C86", desc:"说不太清，但断不掉。" },
  sister:    { label:"姐妹",   symbol:"❖", color:"#7B62A8", desc:"像家人一样的存在。" }
};
/* --------------------------------------------------------------------------
   角色 · 24 人（8 支乐队 × 3 人 / 6 个班级 × 4 人）
   -------------------------------------------------------------------------- */
NG.members = [
  {
    id:"hikari", img:"/projectRE/assets/characters/p1.png", name:"天野 光", romaji:"Amano Hikari", band:"b1", cls:"1-A",
    roles: ["主唱", "吉他"], instrument: "Fender Telecaster（二手 · 奶油黄）",
    birthday:"4月2日", height:"158cm", blood:"O", origin:"本地",
    look:{ style:"short", hair:"#3A3129", hair2:"#6B5B4A", eye:"#C98A2E", skin:"#F6DCC8", acc:"clip" },
    tagline:"先把第一个音弹出来，剩下的之后再想。",
    quote:"害怕的话，就弹得更大声一点。",
    tags:["行动力","直球","怕安静","运动神经好"],
    likes:"咖喱面包、天台、下雨前的风",
    dislikes:"被说「你不行」、写歌词时的空白页",
    skill:"三秒内和任何人搭上话",
    bio:[
      "晨星的起点，也是整个企划的起点。入学式那天她走错了教室，推开旧礼堂的门，看见一台蒙着白布的立式钢琴，于是决定组一支乐队。",
      "光不是天赋型选手。和弦转换曾经卡了整整两个月，主唱的音准靠的是每天早晨在河堤边的练习。但她有一个别人比不上的东西——她从来不觉得「做不到」是一个答案。",
      "写歌时她会先把想说的话喊出来，再回头找词。所以晨星的歌词总是有点笨，但是很准。"
    ]
  },
  {
    id:"nono", name:"小野 野乃", romaji:"Ono Nono", band:"b1", cls:"1-A",
    roles:["贝斯"], instrument:"Fender Precision Bass（白）",
    birthday:"8月28日", height:"162cm", blood:"O", origin:"本地",
    look:{ style:"twin", hair:"#3A3630", hair2:"#605A50", eye:"#8A7A56", skin:"#F7E0CE", acc:"none" },
    tagline:"我把底铺好，你们随便飞。",
    quote:"贝斯手不想被听见。但如果我不在，你们一定会发现。",
    tags:["直爽","话多","爱吃","意外可靠"],
    likes:"炸物、卡啦OK、被信任的感觉",
    dislikes:"饿肚子、扭扭捏捏",
    skill:"吃饭速度全校第一",
    bio:[
      "光的同班同学，晨星的贝斯手。野乃一开始只是想凑热闹，结果一练就练了两年，再没放下。",
      "她话多，是队里调节气氛的人。但她真正厉害的地方在于——无论主唱走多远，她都在那个点上接着。",
      "野乃说贝斯手是「隐形的英雄」，说完自己先笑了起来。"
    ]
  },
  {
    id:"kanade", name:"秋月 奏", romaji:"Akizuki Kanade", band:"b1", cls:"3-A",
    roles:["鼓手","作曲"], instrument:"Pearl 五鼓组",
    birthday:"9月30日", height:"162cm", blood:"B", origin:"本地",
    look:{ style:"bob", hair:"#4A3B52", hair2:"#7A6884", eye:"#7C6BA8", skin:"#EFD2BC", acc:"none" },
    tagline:"节奏是地基。地基不能有别的东西。",
    quote:"鼓一乱，所有人都得跟着慌。所以我不乱。",
    tags:["沉稳","可靠","寡言","隐藏的温柔"],
    likes:"打完鼓后的安静、水、老唱片的底噪",
    dislikes:"临时变更、迟到",
    skill:"在完全听不见人声的情况下跟住整首曲子",
    bio:[
      "晨星里最年长的人。国中时打过管乐团的小鼓，高中本来打算引退，被光在走廊上拦了下来。",
      "她的鼓点极少有多余的东西。她说鼓不是用来炫的，是用来让人敢往前走的——这句话后来成了晨星的排练铁律。",
      "毕业在即。她没有说出口的是，她已经把「最后一场演出」的曲目单写好了，夹在鼓谱本的最后一页。"
    ]
  },
  {
    id:"shiori", name:"桐生 汐里", romaji:"Kiryu Shiori", band:"b2", cls:"2-B",
    roles:["贝斯","主唱","作词作曲"], instrument:"Fender Jazz Bass（日落色）",
    birthday:"6月8日", height:"167cm", blood:"AB", origin:"本地",
    look:{ style:"wavy", hair:"#2E3A46", hair2:"#4E5E70", eye:"#4A7E9E", skin:"#F2D8C4", acc:"none" },
    tagline:"先有潮水，再有岸。",
    quote:"我写的不是歌，是退潮之后剩下的东西。",
    tags:["内向","观察力强","文字感好","慢热"],
    likes:"雨天、图书馆角落、低音的震动",
    dislikes:"被打断、无意义的寒暄",
    skill:"把一个瞬间写成三段歌词",
    bio:[
      "潮汐的发起人。国中三年几乎没在人前唱过歌，却把自己关在音乐教室里写了一整年的曲子——那些曲子的第一听众只有她自己。",
      "她的贝斯线像海流：不抢，但所有东西都浮在上面。她说过一句被许多人记下的话：「主唱是浪，贝斯是海。」",
      "汐里对语言极度敏感。她能听出别人话里没有说出口的那半句，也能把它写进副歌。"
    ]
  },
  {
    id:"haruka", name:"水无濑 遥", romaji:"Minase Haruka", band:"b2", cls:"1-B",
    roles:["吉他","编曲"], instrument:"Fender Jazzmaster",
    birthday:"3月14日", height:"156cm", blood:"O", origin:"本地",
    look:{ style:"ponytail", hair:"#6B4A3A", hair2:"#93684F", eye:"#9E7B4A", skin:"#F6DECB", acc:"none" },
    tagline:"好听是可以算出来的——大概。",
    quote:"我只是在找，哪一个和弦会让人想起某一天。",
    tags:["温和","细致","理论派","偶尔走神"],
    likes:"黑胶、乐理书、铅笔写和弦的声音",
    dislikes:"敷衍的噪音、被说「太认真」",
    skill:"一段旋律能给出五种转调方案",
    bio:[
      "汐里的第一个听众。她在音乐教室门口站了很久，最后只说了一句「你这段副歌，降半音会更好」，然后就留了下来。",
      "遥是潮汐的编曲大脑。她把汐里那些模糊的情绪，拆成具体的小节数、具体的和弦、具体的进入点。",
      "她说话很慢，做决定却很快。乐队里所有重要的时间点，几乎都是她先点头的。"
    ]
  },
  {
    id:"mio", name:"长谷川 澪", romaji:"Hasegawa Mio", band:"b2", cls:"1-C",
    roles:["鼓手"], instrument:"Yamaha 定制套鼓",
    birthday:"7月21日", height:"151cm", blood:"A", origin:"本地",
    look:{ style:"twin", hair:"#A8B6C2", hair2:"#7C8B99", eye:"#5E8AA8", skin:"#F8E3D2", acc:"ribbon" },
    tagline:"我很小，但我的鼓不小。",
    quote:"打错就打错，停下来才是真的错。",
    tags:["元气","认真","易紧张","爆发力强"],
    likes:"甜甜圈、安静的后台、节拍器",
    dislikes:"被小看、突然被点名独奏",
    skill:"一分钟内热身完毕",
    bio:[
      "潮汐里最小的成员，身高是队里最矮的，音量却是最大的。加入乐队前学过三年钢琴，节拍稳得像机器。",
      "澪每次演出前都会紧张到说不出话，但鼓棒一落下来，人就不见了——只剩下节奏。汐里说，那是最像海的时候。",
      "她有一个小本子，记录每次排练的失误。第一页只有一行字：「今天比昨天稳。」"
    ]
  },
  {
      id: "sakura", img: "/projectRE/assets/characters/p2.png", name: "绫濑 咲良", romaji: "Ayase Sakura", band: "b3", cls: "2-A",
    roles:["主唱","队长"], instrument:"Shure SM58（她的武器）",
    birthday:"4月28日", height:"161cm", blood:"B", origin:"本地",
    look:{ style:"long", hair:"#C0526E", hair2:"#E08CA2", eye:"#B04A66", skin:"#F7DFCE", acc:"ribbon" },
    tagline:"舞台是我的，但快乐是所有人的。",
    quote:"记不住我的歌没关系，记住今天就行。",
    tags:["华丽","领导力","要强","舞台人格"],
    likes:"聚光灯、演出后的汽水、被鼓掌",
    dislikes:"半途而废、被人可怜",
    skill:"让一百个人同时喊出同一句歌词",
    bio:[
      "绯樱的队长，也是全校最著名的名字。她在国中时失败过一次——第一次登台，唱到第二段就忘了词。",
      "从那以后她给自己定下规矩：每一次上台，都要让观众带走点什么。绯樱的服装、编舞、灯光，全部是她一笔一笔画出来的。",
      "咲良的强势是真的，温柔也是真的。她会记得每一个帮忙搬音箱的后辈的名字。"
    ]
  },
  {
    id:"momo", name:"藤枝 桃", romaji:"Fujieda Momo", band:"b3", cls:"1-C",
    roles:["吉他","服装设计"], instrument:"Gretsch White Falcon（复刻）",
    birthday:"5月5日", height:"154cm", blood:"O", origin:"本地",
    look:{ style:"bob", hair:"#E0A0A8", hair2:"#C4787F", eye:"#C98A8E", skin:"#F9E4D4", acc:"flower" },
    tagline:"好看的东西，声音也不会差。",
    quote:"先把衣服穿上，再去想音色。",
    tags:["审美控","嘴硬","手巧","怕生"],
    likes:"布料店、老式缝纫机、甜的点心",
    dislikes:"邋遢、被当成小孩",
    skill:"通宵赶出一整套演出服",
    bio:[
      "绯樱的演出服全部出自她手。桃的手比她的嘴快很多：嘴上说着「这方案不行」，手里已经在改腰线了。",
      "她其实很怕生，最初只在后台做衣服。第一次上台，是因为咲良临时失声，她抱着吉他从侧幕冲了出去。",
      "桃的吉他风格干净利落，和她缝纫的针脚一样。"
    ]
  }
];
NG.members.push(
  {
    id:"kurenai", name:"榎 红", romaji:"Enoki Kurenai", band:"b3", cls:"1-B",
    roles:["贝斯","和声"], instrument:"Ibanez SR 系列",
    birthday:"7月14日", height:"161cm", blood:"A", origin:"本地",
    look:{ style:"long", hair:"#8A3A46", hair2:"#B86570", eye:"#B04A5E", skin:"#F6DECC", acc:"flower" },
    tagline:"我在下面，把整座舞台托起来。",
    quote:"粉色不是软弱，粉色是颜色本身。",
    tags:["爽快","审美强","说话直","护短"],
    likes:"亮色的衣服、排练后的拉面、被感谢",
    dislikes:"背后议论、含糊的态度",
    skill:"一眼看出舞台站位不对",
    bio:[
      "绯樱的贝斯手。红是咲良在走廊上堵了三次才请来的人，理由只有一句：「绯樱不能没有低音。」",
      "她的演奏像她的名字：不刺眼，但非常有存在感。绯樱演出的很多舞台调度，都是她提出的。",
      "红说话直，但她从不在别人背后说话——这一点让很多后辈服气。"
    ]
  },
  {
    id:"yoru", name:"佐仓 夜", romaji:"Sakura Yoru", band:"b4", cls:"3-A",
    roles:["吉他","主唱","作曲"], instrument:"Fender Jaguar（黑）",
    birthday:"2月29日", height:"168cm", blood:"AB", origin:"海外归国",
    look:{ style:"long", hair:"#2A2E3A", hair2:"#4A5064", eye:"#5A6AA8", skin:"#EFD6C4", acc:"none" },
    tagline:"最响的地方，其实是最安静的地方。",
    quote:"我不唱的时候，你们要听见别的东西。",
    tags:["深夜型","话少","美学固执","低音控"],
    likes:"凌晨四点、效果器的噪声、没有人的海边",
    dislikes:"嘈杂的白天、被问「为什么这么慢」",
    skill:"让一百个人安静地听完八分钟",
    bio:[
      "四岁到十二岁在海外长大，回国后几乎不说话。夜航是她给自己的一个容器——把说不出口的全部放进去。",
      "她的曲子普遍很长，人声少、留白多。有人觉得闷，有人听完哭了。夜本人对此不发表意见。",
      "夜和秋月奏是旧识。她们小时候住得很近，后来各自搬走，又在星见丘重逢——这件事她谁也没告诉。"
    ]
  },
  {
    id:"nagi", name:"雨宫 凪", romaji:"Amamiya Nagi", band:"b4", cls:"2-B",
    roles:["贝斯"], instrument:"Sadowsky 五弦贝斯",
    birthday:"8月8日", height:"170cm", blood:"O", origin:"本地",
    look:{ style:"short", hair:"#3E4854", hair2:"#66748A", eye:"#52628C", skin:"#F0D8C8", acc:"none" },
    tagline:"贝斯不说话，但贝斯知道所有事。",
    quote:"你们吵，我托着你们。",
    tags:["大姐姐","可靠","爱睡觉","观察者"],
    likes:"吊床、饭团、低音的余韵",
    dislikes:"空腹、被叫醒",
    skill:"听着别人的呼吸找拍子",
    bio:[
      "夜航最高的人，也是全校最高的女生之一。凪说话的语速很慢，做事却从不含糊。",
      "她加入夜航的理由很简单：夜的第一首 demo 让她睡着了，醒来以后她决定要当那个低音。「能让人睡着，是很厉害的事。」",
      "凪其实非常敏锐。乐队里所有的矛盾，她都是第一个察觉到的人，只是她从不主动说出来。"
    ]
  },
  {
    id:"aoyu", name:"深海 青羽", romaji:"Fukami Aoyu", band:"b4", cls:"2-A",
    roles:["键盘","采样"], instrument:"小型合成器 + 笔记本电脑",
    birthday:"3月27日", height:"160cm", blood:"O", origin:"本地",
    look:{ style:"short", hair:"#3E4A50", hair2:"#6A7C86", eye:"#4A7A8C", skin:"#F5DECC", acc:"headphones" },
    tagline:"我把海里的声音捞出来。",
    quote:"夜航的留白里，有我在说话。",
    tags:["安静","好奇心强","随身录音","怕生"],
    likes:"录音笔、海边的风、旧磁带",
    dislikes:"大声喧哗、被点名发言",
    skill:"在任何地方找到可用的声音",
    bio:[
      "夜航的键盘与采样。青羽有随身带录音笔的习惯，她的素材库里有雨、有电车的报站、有旧礼堂的安静。",
      "夜航里那些听起来像潮水的背景音，一大半是青羽录回来的。",
      "她是队里最小的一个，也是唯一敢在排练时开口提问的人。"
    ]
  },
  {
    id:"kanae", name:"春日 佳苗", romaji:"Kasuga Kanae", band:"b5", cls:"1-B",
    roles:["主唱","木吉他"], instrument:"Martin D-28（家中传下来的）",
    birthday:"10月10日", height:"159cm", blood:"O", origin:"本地",
    look:{ style:"long", hair:"#5A4A3A", hair2:"#8A7358", eye:"#7A6A4A", skin:"#F7E0CE", acc:"none" },
    tagline:"我把话唱出来，就当作已经说过了。",
    quote:"不敢说的话，那就唱得慢一点。",
    tags:["温柔","胆小","共情强","爱笑"],
    likes:"阳光、旧书、热可可",
    dislikes:"争吵、被很多人注视",
    skill:"让人放下防备地听完一首歌",
    bio:[
      "回声的主唱。佳苗在国中时因为一次公开演讲失败，变得不太敢在人前说话——但唱歌的时候不会。",
      "她的声线不高不亮，却有一种让人安静下来的质地。图书室靠窗的那个位置，就是回声的固定排练点。",
      "佳苗写的歌大多很短。她说，有些话本来就说不长。"
    ]
  },
  {
    id:"kasumi", name:"秋山 霞", romaji:"Akiyama Kasumi", band:"b5", cls:"1-A",
    roles:["小提琴","和声"], instrument:"一把用了八年的学生琴",
    birthday:"9月3日", height:"157cm", blood:"B", origin:"本地",
    look:{ style:"ponytail", hair:"#6E5A48", hair2:"#9A8068", eye:"#8A7448", skin:"#F7E1D0", acc:"none" },
    tagline:"线要一直连着，声音才不会散。",
    quote:"我拉的不是伴奏，是把大家串起来的那根线。",
    tags:["认真","贴心","容易担心","记性好"],
    likes:"清晨的操场、松香的味道、被信任",
    dislikes:"突然的沉默、来不及准备",
    skill:"在任何调上立刻找到和声",
    bio:[
      "回声的第二把声音。霞从六岁开始学琴，本来走的是古典路线，被佳苗那首三分半的歌留了下来。",
      "她不抢，但少了她整首歌就会塌。佳苗说霞的琴声像「把话说完以后那口气」。",
      "霞是那种记得住所有人练习进度的人。她会在别人忘带谱子时，从自己的夹子里抽出一份备份。"
    ]
  },
  {
    id:"tsumugi", name:"白河 紬", romaji:"Shirakawa Tsumugi", band:"b5", cls:"2-A",
    roles:["大提琴","和声","编曲"], instrument:"借来的旧大提琴「阿绫」",
    birthday:"5月20日", height:"164cm", blood:"A", origin:"本地",
    look:{ style:"wavy", hair:"#4A4038", hair2:"#786A5A", eye:"#7A6A50", skin:"#F6DFCD", acc:"none" },
    tagline:"慢一点，让声音有时间落地。",
    quote:"大提琴会替你把说不出口的地方填满。",
    tags:["沉稳","慢节奏","手很暖","不爱拍照"],
    likes:"晒过的琴木、味噌汤、傍晚的图书室",
    dislikes:"被催促、太吵的午后",
    skill:"给任何旋律配出第三声部",
    bio:[
      "回声里最高的人，也是话最少的人。紬的琴是从学校仓库里翻出来的，修了三个星期才出声。",
      "她把回声的歌重新配过一遍声部，让木吉他、小提琴和大提琴各占一条线——三条线一起走，就成了放学后的那条路。",
      "紬不太拍照。她说声音留下来就够了，不用人留下来。"
    ]
  },
  {
    id:"ori", name:"星川 织", romaji:"Hoshikawa Ori", band:"b6", cls:"2-B",
    roles:["合成器","编程","作曲"], instrument:"一台自己攒的合成器机架",
    birthday:"12月2日", height:"160cm", blood:"O", origin:"本地",
    look:{ style:"short", hair:"#5A4A78", hair2:"#8A78A8", eye:"#7C6AA8", skin:"#F4DCC8", acc:"headphones" },
    tagline:"先把光画出来，再把它变成声音。",
    quote:"我不写歌，我只是把一条曲线翻译成频率。",
    tags:["技术宅","理性","固执","隐藏的浪漫"],
    likes:"示波器的波形、深夜的机房、干净的十进制",
    dislikes:"含糊的描述、被说「不够有人味」",
    skill:"把任何声音拆成参数再拼回去",
    bio:[
      "织光的发起人。织从小写程序，高一时第一次用软件做出一个和弦，就再没停下来。她的编曲本上全是数字和曲线。",
      "她排练的方式是「先算好」。织光的演出几乎不出错，因为每一次可能的失误，她都提前计算并准备了替代路径。",
      "织不太谈感情，但她给瑠奈写的每一首歌都精确到呼吸点。这大概就是她的表达方式。"
    ]
  }
);
NG.members.push(
  {
    id:"luna", name:"月城 瑠奈", romaji:"Tsukishiro Runa", band:"b6", cls:"1-A",
    roles:["主唱","表演"], instrument:"无线麦克风（她坚持要银色的）",
    birthday:"6月25日", height:"163cm", blood:"AB", origin:"海外归国",
    look:{ style:"long", hair:"#D8D2E8", hair2:"#A89EC8", eye:"#8878B8", skin:"#F8E2D2", acc:"flower" },
    tagline:"如果没人看着，那唱歌还有什么意思。",
    quote:"我不是在唱，我是在发光。",
    tags:["耀眼","自恋","真诚","怕黑"],
    likes:"掌声、化妆镜前的灯、被拍好看的照",
    dislikes:"被无视、一个人待太久",
    skill:"让一整个体育馆跟着她抬手",
    bio:[
      "转学生，来星见丘的第一天就上了屋顶唱歌。瑠奈的台风几乎是天生的，她的每一个动作都像被灯照着。",
      "但她也怕。怕安静，怕没有人看，怕自己其实只是一个很吵的人。织写给她的曲子，是她第一次觉得「被接住」的东西。",
      "瑠奈的化妆包里有一半是桃做的。她非常珍惜这件事。"
    ]
  },
  {
    id:"tamaki", name:"音羽 环", romaji:"Otowa Tamaki", band:"b6", cls:"1-C",
    roles:["电子鼓","采样"], instrument:"Roland 电子鼓 + 打击垫",
    birthday:"7月7日", height:"152cm", blood:"O", origin:"本地",
    look:{ style:"twin", hair:"#3E4450", hair2:"#6A7284", eye:"#6A7EA0", skin:"#F5DDCB", acc:"headphones" },
    tagline:"我的鼓是带电的。",
    quote:"机器不会累，但我会——所以我要更聪明。",
    tags:["机灵","少年气","贪吃","反应快"],
    likes:"便利店的新品、节奏游戏、深夜的机房",
    dislikes:"被当成小孩、长时间的等待",
    skill:"在两种节拍之间无缝切换",
    bio:[
      "织光的鼓手，也是全校最会用电子设备打鼓的人。环能把一段采样切成十六份，再按心情拼回去。",
      "她是最早响应星川织的人——那时织只是在机房放了一段 demo，环听完，当天就把自己的鼓搬了过去。",
      "环个子很小，吃得多，笑起来很大声。机房里的三个人，全靠她说话。"
    ]
  },
  {
    id:"mifuyu", name:"铠 美冬", romaji:"Yoroi Mifuyu", band:"b7", cls:"3-A",
    roles:["主唱","吉他"], instrument:"Gibson Les Paul Standard",
    birthday:"1月30日", height:"169cm", blood:"B", origin:"本地",
    look:{ style:"long", hair:"#26282E", hair2:"#4A4E58", eye:"#8C7A5A", skin:"#F2D9C6", acc:"none" },
    tagline:"重，是一种温柔。",
    quote:"我唱得凶，是因为我认真。",
    tags:["强势","讲义气","怕被误解","慢性咽炎"],
    likes:"音量、深夜的体育馆、被信任",
    dislikes:"敷衍、怜悯、别人替她做决定",
    skill:"喉咙哑了也能把副歌顶上去",
    bio:[
      "铅白的主唱。美冬的声音像生锈的铜管：低、粗、有颗粒。国中时曾有人说「女孩子不要唱这种」，从那以后她再没唱过别的东西。",
      "铅白是她一个一个把成员找齐的。她说：「我不需要最厉害的人，我需要不会跑的人。」",
      "美冬有慢性咽喉的问题，医生建议她少唱。这件事全队都知道，全队都不提。"
    ]
  },
  {
    id:"tsukasa", name:"真壁 司", romaji:"Makabe Tsukasa", band:"b7", cls:"2-B",
    roles:["主音吉他"], instrument:"Jackson Rhoads",
    birthday:"8月1日", height:"172cm", blood:"A", origin:"本地",
    look:{ style:"short", hair:"#3A342E", hair2:"#5E564C", eye:"#9A7A52", skin:"#EFD4BE", acc:"none" },
    tagline:"solo 就是我把话说完的地方。",
    quote:"别催，我在找最后一个音。",
    tags:["寡言","技术流","面冷心热","护队友"],
    likes:"效果器板、负重训练、干净的推弦",
    dislikes:"插队、被问私事",
    skill:"用一把吉他制造两种音墙",
    bio:[
      "铅白的吉他手，全校最高的女生。司几乎不主动说话，但排练时她话最多——全都在讲技术。",
      "她的推弦精确到让人起鸡皮疙瘩。美冬说过：「司的吉他替我说话，说得比我好。」",
      "司话少，是因为小时候口吃被笑过。她在舞台上，比在教室里自在得多。"
    ]
  },
  {
    id:"suzu", name:"绫辻 铃音", romaji:"Ayatsuji Suzu", band:"b7", cls:"1-B",
    roles:["贝斯"], instrument:"Music Man StingRay",
    birthday:"3月3日", height:"155cm", blood:"O", origin:"本地",
    look:{ style:"bob", hair:"#5E4A3E", hair2:"#8E7460", eye:"#8A6E4E", skin:"#F7DFCC", acc:"none" },
    tagline:"低音也可以有脾气。",
    quote:"我不是伴奏，我是地基。",
    tags:["沉稳","温柔","力气大","爱照顾人"],
    likes:"低音炮的震动、肉包、帮助新手",
    dislikes:"争吵、突然的高音",
    skill:"一个音让整间教室的玻璃响",
    bio:[
      "铅白的贝斯手，也是队里最会照顾人的一个。铃音会在排练后帮所有人收线，包括脾气最差的对手。",
      "她原本学的是长笛，因为一次偶然听到的低音震动而换了乐器。她说那一刻，身体里有什么东西被打开了。",
      "铃音的贝斯很重，但她本人很软。美冬说，这是铅白最好的地方。"
    ]
  },
  {
    id:"jin", name:"神乐坂 迅", romaji:"Kagurazaka Jin", band:"b8", cls:"2-A",
    roles:["主唱","吉他"], instrument:"Fender Mustang（贴着贴纸）",
    birthday:"5月17日", height:"160cm", blood:"B", origin:"本地",
    look:{ style:"short", hair:"#2E4A44", hair2:"#548078", eye:"#2E8C86", skin:"#F4DCC8", acc:"none" },
    tagline:"两分四十秒，够说一件事了。",
    quote:"下雨了就淋着，雨停了就笑。",
    tags:["直率","急性子","嘴笨","体力怪"],
    likes:"跑楼梯、便宜的面包、很短的歌",
    dislikes:"拖长音、绕圈子说话",
    skill:"三分钟内写完一首副歌",
    bio:[
      "骤雨的发起人。迅做事快得离谱：写歌快、走路快、说话快，唯一慢下来的时候，是上台前的那一分钟沉默。",
      "她相信短。她说长东西容易藏废话，短东西藏不住——所以她的歌从不长，副歌必在九十秒内出现。",
      "迅和咲良争过同一个演出时段，最后两个人在屋顶上各唱了一首。谁也没赢，谁也没输。"
    ]
  },
  {
    id:"kohaku", name:"东云 琥珀", romaji:"Shinonome Kohaku", band:"b8", cls:"1-C",
    roles:["吉他"], instrument:"Fender Telecaster（红）",
    birthday:"10月22日", height:"158cm", blood:"O", origin:"本地",
    look:{ style:"ponytail", hair:"#A8763E", hair2:"#D0A468", eye:"#C08840", skin:"#F7E0CE", acc:"none" },
    tagline:"快一点，再快一点。",
    quote:"我没想那么多，我就是想追上去。",
    tags:["热血","莽","讲义气","越战越强"],
    likes:"冲刺、快歌、被认可的瞬间",
    dislikes:"犹豫、站着不动",
    skill:"追拍一气呵成",
    bio:[
      "骤雨的吉他手。琥珀的技术不算最精细，但她的速度和气势，是全校最凶的那一档。",
      "她是迅在屋顶演出上遇到的——音响坏了，两个人就用两把吉他硬撑完了一首歌。第二天她就进了骤雨。",
      "琥珀说话直，容易得罪人，但从来没有人怀疑过她的真心。"
    ]
  },
  {
    id:"nazuna", name:"八重垣 纱弦", romaji:"Yaezaki Sazuna", band:"b8", cls:"3-A",
    roles:["鼓手"], instrument:"Gretsch 四鼓组",
    birthday:"11月19日", height:"157cm", blood:"A", origin:"本地",
    look:{ style:"ponytail", hair:"#38404C", hair2:"#5E6878", eye:"#5A7A8A", skin:"#F2DAC8", acc:"ribbon" },
    tagline:"我把话钉在拍子上。",
    quote:"你们尽管冲，我给你们兜着。",
    tags:["冷静","精准","少言","偶尔毒舌"],
    likes:"节拍器、豆大福、安静的排练室",
    dislikes:"迟到、混乱的收尾",
    skill:"在任何速度下保持同一个呼吸",
    bio:[
      "骤雨的鼓手。纱弦打的鼓又稳又紧，是把迅那些莽撞的句子钉进拍子里的人。",
      "她是队里唯一会做时间管理的人：排练计划、演出流程、器材清单，全部由她排。她不说话的时候，就是在算时间。",
      "纱弦和迅从国中就认识。她进骤雨的理由只有一句：「你跑太快，得有人接着。」"
    ]
  }
);
/* --------------------------------------------------------------------------
   关系网络 —— 8 组「同乐队」三角 + 跨队关系
   -------------------------------------------------------------------------- */
NG.relations = [
  /* b1 晨星 */
  { a:"hikari", b:"nono",    type:"classmate", note:"同班，也是最早听光 demo 的人。" },
  { a:"hikari", b:"kanade",  type:"bond",      note:"最早的两个人，晨星从两个人的排练开始。" },
  { a:"nono",   b:"kanade",  type:"partner",   note:"低音与鼓，节奏组的地基。" },
  /* b2 潮汐 */
  { a:"shiori", b:"haruka",  type:"bond",      note:"遥是汐里第一个听众，也是唯一没给建议的人。" },
  { a:"shiori", b:"mio",     type:"partner",   note:"海与浪。汐里给方向，澪给推力。" },
  { a:"haruka", b:"mio",     type:"friend",    note:"演出前，遥固定给澪带一瓶温麦茶。" },
  /* b3 绯樱 */
  { a:"sakura", b:"momo",    type:"partner",   note:"一个负责让人看见，一个负责让人记住。" },
  { a:"sakura", b:"kurenai", type:"bond",      note:"堵了三次才请来的贝斯，也是她最信的人之一。" },
  { a:"momo",   b:"kurenai", type:"friend",    note:"服装与舞台调度的双重把关。" },
  /* b4 夜航 */
  { a:"yoru",   b:"nagi",    type:"bond",      note:"凪托着夜所有的留白。" },
  { a:"yoru",   b:"aoyu",    type:"partner",   note:"夜说「可以」，青羽就把另一段录音加进去。" },
  { a:"nagi",   b:"aoyu",    type:"friend",    note:"凪帮青羽搬器材，因为她的东西太多。" },
  /* b5 回声 */
  { a:"kanae",  b:"kasumi",  type:"bond",      note:"一个敢唱，一个敢接，谁都不肯先说散。" },
  { a:"kanae",  b:"tsumugi", type:"friend",    note:"佳苗的歌若没有紬的低音，会显得太轻。" },
  { a:"kasumi", b:"tsumugi", type:"partner",   note:"练习时最常一起留到最后关灯的人。" },
  /* b6 织光 */
  { a:"ori",    b:"luna",    type:"bond",      note:"一个负责光，一个负责让它被人看见。" },
  { a:"ori",    b:"tamaki",  type:"partner",   note:"织给结构，环给它心跳。" },
  { a:"luna",   b:"tamaki",  type:"friend",    note:"露娜的话，环接得最快。" },
  /* b7 铅白 */
  { a:"mifuyu", b:"tsukasa", type:"bond",      note:"美冬给她音量，她给美冬底气。" },
  { a:"mifuyu", b:"suzu",    type:"partner",   note:"铃音把话说得最短，却最让人安心。" },
  { a:"tsukasa",b:"suzu",    type:"friend",    note:"练琴时几乎不说话，却合得极好。" },
  /* b8 骤雨 */
  { a:"jin",    b:"kohaku",  type:"partner",   note:"迅给方向，琥珀给火力。" },
  { a:"jin",    b:"nazuna",  type:"bond",      note:"国中就是老搭档，默契到可以打断对方。" },
  { a:"kohaku", b:"nazuna",  type:"friend",    note:"琥珀是她见过最有勇气、也最常吐槽的人。" },

  /* 跨队 · 跨班 */
  { a:"hikari", b:"luna",    type:"classmate", note:"入学第一天替她指过路，那是露奈留在星见丘的第一个理由。" },
  { a:"kasumi", b:"hikari",  type:"classmate", note:"同班。光会拉她听新 demo。" },
  { a:"tsukasa",b:"mifuyu", type:"friend",    note:"两种沉默。一个把话说在推弦里，一个把话说在吼声里。" },
  { a:"mio",    b:"tamaki",  type:"classmate", note:"同班。两个小个子鼓手，午休一起晒太阳。" },
  { a:"kanade", b:"yoru",    type:"childhood", note:"幼驯染。国中的那件事，两人都还在等对方先开口。" },
  { a:"sakura", b:"jin",     type:"rival",     note:"两种舞台理念的正面冲突，也是互相最清楚的两个人。" },
  { a:"sakura", b:"tsumugi", type:"classmate", note:"同班。张扬与安静，意外地相处得很好。" },
  { a:"shiori", b:"tsumugi", type:"friend",    note:"两种内向的相遇，可以在图书室坐一下午不说话。" },
  { a:"nagi",   b:"kanade",  type:"senior",    note:"校内公认最稳的一对节奏组。" },
  { a:"kanade", b:"mifuyu",  type:"classmate", note:"同为三年级。两人都不太会示弱，相处很轻松。" },
  { a:"kanade", b:"nazuna",  type:"classmate", note:"同班。毕业前一起收拾器材的次数最多。" },
  { a:"mifuyu", b:"nazuna",  type:"classmate", note:"同班。三年A班最安静的一角。" },
  { a:"yoru",   b:"ori",     type:"friend",    note:"机房与地下室的深夜同盟，都对安静有需求。" },
  { a:"suzu",   b:"kanae",   type:"friend",    note:"走廊上认识。铃音总说佳苗的歌声像「妈妈做的味噌汤」。" },
  { a:"tsukasa",b:"kohaku",  type:"friend",    note:"意外合得来的两个人，都靠乐器说话。" },
  { a:"haruka", b:"kanae",   type:"classmate", note:"同班，都属于安静的那一类。" },
  { a:"momo",   b:"luna",    type:"friend",    note:"后台认识。露奈的舞台妆大半是桃化的。" },
  { a:"suzu",   b:"nazuna",  type:"classmate", note:"同班。铃音做的便当，纱弦从来不客气。" },
  { a:"jin",    b:"aoyu",    type:"classmate", note:"同班。一个太吵，一个太静，反而刚好。" },
  { a:"kurenai",b:"nono",    type:"friend",    note:"贝斯手之间的默契，经常互借线材。" },
  { a:"momo",   b:"haruka",  type:"friend",    note:"两个手很巧的人，交换过各自的本子看。" },
  { a:"kohaku", b:"tamaki",  type:"classmate", note:"同班。全校跑得最快的两个人在同一间教室。" },
  { a:"nagi",   b:"suzu",    type:"friend",    note:"低音组。两人说话都慢，聊天像放了 0.75 倍速。" },
  { a:"kasumi", b:"kanae",   type:"bond",      note:"回声的两条弦，从第一首歌起就没断过。" }
];

/* --------------------------------------------------------------------------
   纪事 —— 按学年/学期分组
   -------------------------------------------------------------------------- */
NG.terms = [
  { id:"2021s", label:"2021 春 · 芽", c1:"#D98E2B", note:"企划的起点" },
  { id:"2022",  label:"2022 · 生长",  c1:"#3E87A8", note:"乐队开始变多" },
  { id:"2023",  label:"2023 · 交叠",  c1:"#7B62A8", note:"彼此开始听见对方" },
  { id:"2024",  label:"2024 · 盛夏",  c1:"#2E8C86", note:"屋顶上的那场雨" },
  { id:"2025",  label:"2025 · 毕业之前", c1:"#C1546E", note:"把话说完" }
];

NG.events = [
  { term:"2021s", date:"2021.04.09", title:"旧礼堂的第一次声响", bands:["b1"], flag:"起点",
    body:"入学式第三天，天野光走错教室，推开旧礼堂的门。她看见一台蒙着白布的立式钢琴，和一把靠在墙边的旧吉他。当天下午，她在这里弹了人生第一个完整和弦。",
    tags:["旧礼堂","天野光","晨星"] },
  { term:"2021s", date:"2021.05.16", title:"两个人也能排练", bands:["b1"],
    body:"秋月奏被光在走廊上拦住。她原本打算高中就引退，却在听完光弹的一段旋律后，把鼓棒放回了书包里。「先练三次，」她说，「三次之后我再决定。」",
    tags:["秋月奏","入队","排练"] },
  { term:"2021s", date:"2021.07.01", title:"晨星 · 命名", bands:["b1"],
    body:"三个人在放学后的天台上写下了乐队的名字。野乃提议「晨星」，理由是「早上第一颗亮起来的，是最早的那个」。全票通过。",
    tags:["命名","晨星","天台"] },

  { term:"2022", date:"2022.04.20", title:"音乐教室的隔音二号室", bands:["b2"],
    body:"桐生汐里把自己关在音乐教室里写了一整年的曲子。水无濑遥在门外站了很久，最后推门进去说：「你这段副歌，降半音会更好。」潮汐于是有了第二个人。",
    tags:["桐生汐里","水无濑遥","音乐教室"] },
  { term:"2022", date:"2022.06.11", title:"潮汐 · 首次发表", bands:["b2"], flag:"首演",
    body:"音乐部新设发表会。潮汐只演了两首，第二首结尾处全场安静了整整七秒才响起掌声。汐里下台后说：「原来安静也算掌声。」",
    tags:["发表会","首演","潮汐"] },
  { term:"2022", date:"2022.09.28", title:"走廊上的三次拦截", bands:["b3"],
    body:"绫濑咲良为了请榎红加入绯樱，在走廊上堵了她三次。第三次红问：「你为什么非要我？」咲良说：「因为绯樱不能没有低音。」红第二天就来了。",
    tags:["绫濑咲良","榎红","绯樱"] },
  { term:"2022", date:"2022.11.05", title:"文化祭 · 主舞台的灯", bands:["b3"], flag:"人气",
    body:"绯樱在文化祭主舞台演出了四首歌。藤枝桃连夜赶制的演出服在灯光下像一场小型演唱会。那天之后，星见丘开始有人把「乐队」当成一件正经事。",
    tags:["文化祭","舞台","绯樱"] },

  { term:"2023", date:"2023.03.22", title:"凌晨四点的海中央", bands:["b4"],
    body:"佐仓夜的 demo 让雨宫凪睡着了。凪醒来后说：「能让人睡着，是很厉害的事。」她当场决定加入，做那个托住所有留音的低音。夜航成立。",
    tags:["佐仓夜","雨宫凪","夜航"] },
  { term:"2023", date:"2023.05.09", title:"深夜校内放送", bands:["b4"], flag:"异例",
    body:"夜航第一次出现在人前，是在深夜的校内广播里。八分钟的歌，没有人声的前六分钟，全校有四百多个人听完了。",
    tags:["校内放送","夜航","无人声"] },
  { term:"2023", date:"2023.06.18", title:"图书室靠窗的位置", bands:["b5"],
    body:"春日佳苗在图书室靠窗的位置唱歌，被秋山霞听见。霞抱着琴坐下来拉了一段和声。白河紬后来从仓库里翻出一把旧大提琴，修了三个星期。回声有了三个人。",
    tags:["图书室","回声","大提琴"] },
  { term:"2023", date:"2023.07.12", title:"中庭午休演奏", bands:["b5"], flag:"治愈",
    body:"回声在中庭演了四首木吉他曲。正午的阳光很晒，但没有一个人走。有老师说：「这大概是本校最安静的一次午休。」",
    tags:["中庭","午休","回声"] },
  { term:"2023", date:"2023.10.02", title:"把光织成声音", bands:["b6"],
    body:"星川织在机房放了一段 demo。音羽环听完，当天就把自己的电子鼓搬了过去；月城瑠奈在屋顶唱了它。织光成立，只用了一天。",
    tags:["星川织","音羽环","织光"] },
  { term:"2023", date:"2023.11.18", title:"秋叶祭 · 夜间演出", bands:["b6"], flag:"技术",
    body:"织光的演出精确到每一个呼吸点。演出结束后织说了一句让人意外的话：「机器不会紧张，但瑠奈会。所以我要更准。」",
    tags:["秋叶祭","夜间演出","织光"] },

  { term:"2024", date:"2024.04.13", title:"金属研究部创立公演", bands:["b7"], flag:"最大音量",
    body:"铅白在体育馆完成了校内音量最大的一次演出。美冬的嗓音撑到了最后一首。散场时，她们在台上一起鞠了一躬。",
    tags:["体育馆","铅白","鞠躬"] },
  { term:"2024", date:"2024.06.30", title:"屋顶上的那场雨", bands:["b8"], flag:"名场面",
    body:"骤雨在屋顶演出，中途音响坏了。神乐坂迅和东云琥珀用两把吉他硬撑完整首歌，雨在这时落下来。没有人躲。这场演出后来被叫作「那场雨」。",
    tags:["屋顶","骤雨","那场雨"] },
  { term:"2024", date:"2024.09.15", title:"同一个时段的两种答案", bands:["b3","b8"],
    body:"文化祭节目单上，绯樱与骤雨撞了同一个时段。最后两个人在屋顶各唱了一首：一首四分钟，一首两分四十秒。谁也没赢，谁也没输。",
    tags:["文化祭","绯樱","骤雨","对决"] },
  { term:"2024", date:"2024.12.24", title:"平安夜的排练室", bands:["b1","b2","b4","b5"], flag:"同台",
    body:"四个人数不同的乐队挤在同一间排练室里，临时合奏了一首谁也没排练过的歌。晨星、潮汐、夜航、回声的名字第一次出现在同一张纸上。",
    tags:["排练室","合奏","跨队"] },

  { term:"2025", date:"2025.01.20", title:"鼓谱本最后一页", bands:["b1"],
    body:"秋月奏把「最后一场演出」的曲目单写好了，夹在鼓谱本的最后一页。她没有告诉任何人，包括光。",
    tags:["毕业","秋月奏","曲目单"] },
  { term:"2025", date:"2025.02.14", title:"还没有说出口的编曲", bands:["b2"],
    body:"水无濑遥在毕业前留下一份没做完的编曲，写在一张对折的谱纸里，收件人写着「汐里」。她说等自己写得再好一点，再给出去。",
    tags:["毕业","水无濑遥","编曲"] },
  { term:"2025", date:"2025.03.01", title:"八支乐队，一张节目单", bands:["b1","b2","b3","b4","b5","b6","b7","b8"], flag:"全员",
    body:"毕业典礼前夜，八支乐队第一次同时出现在一张节目单上。名字按成立顺序排下来，从晨星到骤雨，像一条从春天走到夏天的路。",
    tags:["全员","节目单","毕业前夜"] },
  { term:"2025", date:"2025.03.02", title:"旧礼堂的门没有关", bands:["b1"], flag:"尾声",
    body:"毕业典礼结束那天，光最后一个离开旧礼堂。她没有锁门。因为总会有下一个走错教室的人，推开这扇门。",
    tags:["旧礼堂","尾声","天野光"] }
];
/* --------------------------------------------------------------------------
   派生索引（构建一次，供 app.js 使用）
   -------------------------------------------------------------------------- */
(function () {
  var NG = window.NG;

  NG.byId = Object.create(null);
  NG.members.forEach(function (m) {
    m._post = false;
    NG.byId[m.id] = m;
  });

  NG.bandById = Object.create(null);
  NG.bands.forEach(function (b) {
    b.members = [];
    NG.bandById[b.id] = b;
  });

  NG.classById = Object.create(null);
  NG.classes.forEach(function (c) {
    c.members = [];
    c.c1 = c.c1 || "#8A8F97";
    NG.classById[c.id] = c;
  });

  NG.members.forEach(function (m) {
    var b = NG.bandById[m.band];
    if (b) { b.members.push(m); m.bandRef = b; }
    var c = NG.classById[m.cls];
    if (c) { c.members.push(m); m.classRef = c; }
    m.nameEn = m.name.replace(/\s+/g, " ").trim();
  });

  /* 关系：双向挂载到成员上，并生成无向边表 */
  NG.edgeKey = function (a, b) { return a < b ? a + "|" + b : b + "|" + a; };
  NG.memberRelations = function (id) {
    return NG.relations.filter(function (r) { return r.a === id || r.b === id; });
  };
  NG.otherOf = function (r, id) { return r.a === id ? r.b : r.a; };
  NG.relType = function (t) { return NG.relTypes[t] || NG.relTypes.friend; };

  NG.stats = {
    members: NG.members.length,
    bands: NG.bands.length,
    classes: NG.classes.length,
    relations: NG.relations.length,
    events: NG.events.length
  };
})();