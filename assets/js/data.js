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
  lede: "交响吧，以你决意演奏出的那段合唱乐音。",
  founded: "2021",
  quote: "音乐不是答案，只是我们说话的方式。"
};

NG.classes = [
  { id:"1-A", grade:1, label:"一年A班", motto:"把每一天都过成副歌", c1:"#D98E2B",
    desc:"气氛最松弛的一班，午休时常有人抱着吉他坐到窗边。" },
  { id:"1-B", grade:1, label:"一年B班", motto:"安静地、准确地、往前", c1:"#3E87A8",
    desc:"自习课纪律最好的班级，也是放学后走得最快的一班。" },
  { id:"2-A", grade:1, label:"二年A班", motto:"先做出来，再谈优不优雅", c1:"#7B62A8",
    desc:"机房隔壁。全校会打鼓的人有一半在这个班。" },
  { id:"2-B", grade:2, label:"二年B班", motto:"这一次，让我们站上台", c1:"#C1546E",
    desc:"去年的文化祭让这个班整体拧成了一股绳。" },
  { id:"3-A", grade:2, label:"三年A班", motto:"各有各的漂亮", c1:"#4A5BA8",
    desc:"走廊上最常听见笑声的教室，也是最常听见争吵的教室。" },
  { id:"3-B", grade:3, label:"三年B班", motto:"在结束之前，把话说完", c1:"#2E8C86",
    desc:"毕业年。窗外的樱花开了三次，她们都记得。" }
];

NG.bands = [
  { id:"b1", idx:"01", name:"reverIA", en:"白日梦织", genre:"情绪摇滚", c1:"#eecc00", c2:"#F0C071",
    tag:"光影罅隙的白日梦境",
    desc:"由月咏真夏带领的情绪系朦胧组合，旨在歌唱谁都曾经抛弃过的、如离群者一般漫游的不切实际梦境。",
    debuted:"2021 春 · 入学式后的第三天", base:"空想同好会教室" },
  { id:"b2", idx:"02", name:"ScOrdAturA", en:"变格定弦", genre:"流行摇滚", c1:"#99dd99", c2:"#8FC2D4",
    tag:"调和交辉的变格定弦",
    desc:"由苍园周带领的个性青春组合，适应性强风格多样，热情明快与优雅凛然共存，正探索着一片晴朗的未来。",
    debuted:"2022 春 · 音乐部新设发表会", base:"名冢神社" },
  { id:"b3", idx:"03", name:"hyacinth", en:"风信童话", genre:"摇摆爵士", c1:"#cc99dd", c2:"#E89AAB",
    tag:"带去笑容的幸福童话",
    desc:"这里是辛团的简介",
    debuted:"2022 秋 · 文化祭主舞台", base:"演剧部部室" },
  { id:"b4", idx:"04", name:"NeoMasque", en:"仮面之隙", genre:"哥特摇滚", c1:"#2288ff", c2:"#8A97D4",
    tag:"真容与假面间的舞会",
    desc: "这里是霓团的简介",
    debuted:"2023 春 · 深夜校内放送", base:"学生会教室" },
  { id:"b5", idx:"05", name:"Zephyrus", en:"西风颂歌", genre:"管弦交响", c1:"#dd3355", c2:"#A3C98F",
    tag:"解放真我的炽热梢风",
    desc: "这里是风团的简介",
    debuted:"2023 夏 · 中庭午休演奏", base:"神秘研究部部室" },
  { id:"b6", idx:"06", name:"LaCuNa", en:"虚无刻痕", genre:"疾走律动", c1:"#884411", c2:"#ADA0D1",
    tag:"填补未满的嘶声呐喊",
    desc: "这里是空团的简介",
    debuted:"2023 秋 · 秋叶祭夜间演出", base:"轻音社部室·美术部部室" },
  { id:"b7", idx:"07", name:"Iridum", en:"虹桥光晕", genre:"王道偶像", c1:"#33ddbb", c2:"#B0B4B8",
    tag:"重拾多彩的霁空虹架",
    desc: "这里是虹团的简介",
    debuted:"2024 春 · 金属研究部创立公演", base:"手工社部室" },
  { id:"b8", idx:"08", name:"Solitudinis", en:"二重孤独", genre:"暗黑慢拍", c1:"#666666", c2:"#85BCB0",
    tag:"分享寂寞的共鸣之塔",
    desc: "这里是空团的简介",
    debuted:"2024 夏 · 屋顶露天演出", base:"渡边宅" }
];

NG.relTypes = {
  partner:   { label:"同组合", symbol:"⌘", color:"#3E87A8", desc:"在同一个组合里，一起排练、一起上台。" },
  classmate: { label:"同班",   symbol:"＝", color:"#9A9FA6", desc:"同一个班级，日常里最先遇到的人。" },
  friend:    { label:"亲友",   symbol:"❀", color:"#C1546E", desc:"会主动去找对方说话的那种关系。" },
  rival:     { label:"竞争",   symbol:"⚔", color:"#B4553C", desc:"互相认可，也互相不肯认输。" },
  childhood: { label:"幼驯染", symbol:"✦", color:"#D98E2B", desc:"认识得比记忆更早。" },
  senior:    { label:"前后辈", symbol:"↑", color:"#6E9E52", desc:"年级不同，但把话递过去了。" },
  bond:      { label:"牵绊",   symbol:"∞", color:"#2E8C86", desc:"瞬间的心灵相交。" },
  sister:    { label:"兄弟",   symbol:"❖", color:"#7B62A8", desc:"血脉相连的存在。" }
};
/* --------------------------------------------------------------------------
   角色 · 24 人（8 支乐队 × 3 人 / 6 个班级 × 4 人）
   -------------------------------------------------------------------------- */
NG.members = [
  {
      id: "manatsu", img: "/projectRE/assets/characters/mnt.png", name: "月咏 真夏", romaji: "Tsukiyomi Manatsu", band: "b1", cls: "2-A",
    roles: ["队长","作词"], instrument: "Fender Telecaster（二手 · 奶油黄）",
    birthday:"6月25日", height:"158cm", blood:"O", origin:"本地",
    look:{ style:"short", hair:"#3A3129", hair2:"#6B5B4A", eye:"#C98A2E", skin:"#F6DCC8", acc:"clip" },
    tagline:"梦与醒间隙的矛盾",
    quote: "除了我以外，我什么也不能成为。",
    ycolor: "#EECC55",
    group: "空想同好社（社长）",
    tags:["沉静内秀","创作者"],
    likes:"文学与哲学书籍",
    dislikes:"人群、视而不见",
    skill:"速读与文学创作",
    bio:[
      "黑色短发长鬓角，金色眼睛。",
      "高二年级，自认为有些不合时宜的学生，经常走神陷入思考，不擅长表达展示。和同学没什么共同话题，半是没朋友半是自我放逐的边缘人物。",
      "想要创办空想同好会，苦于无法招募到社员。哲学文学都有涉猎，创作风格含蓄隽永深刻。"
    ]
  },
  {
      id: "chisato", img: "/projectRE/assets/characters/cst.png", name: "冬木 千里", romaji: "Fuyuki Chisato", band: "b1", cls: "2-A",
    roles:["作曲"], instrument:"Fender Precision Bass（白）",
    birthday:"11月6日", height:"162cm", blood:"O", origin:"本地",
    look:{ style:"twin", hair:"#3A3630", hair2:"#605A50", eye:"#8A7A56", skin:"#F7E0CE", acc:"none" },
    tagline: "光或幻映照的冰河",
    quote: "在构筑起自我的塑像前，让我短暂停留在这里吧。",
    ycolor: "#CCDDDD",
    group: "空想同好社、学生会（书记）",
    tags:["温和"],
    likes:"放松的时刻",
    dislikes:"辜负他人的期望",
    skill:"洞察、速记",
    bio:[
      "浅蓝色短发，棕色眼睛。",
      "高二年级，学生会书记，自认为随波逐流的学生，和谁都能和煦地交谈，但并没有深交的好友。符合社会期望的优等生，来梦之咲偶像科是唯一的叛逆，即使这样也表现为一名优秀的偶像预备役。",
      "升上高二后对前桌月咏真夏有些好奇。"
    ]
  },
  {
      id: "amane", img: "/projectRE/assets/characters/amn.png", name: "苍园 周", romaji: "Aozono Amane", band: "b2", cls: "1-A",
    roles:["队长","编曲"], instrument:"Pearl 五鼓组",
    birthday:"1月12日", height:"162cm", blood:"B", origin:"本地",
    look:{ style:"bob", hair:"#4A3B52", hair2:"#7A6884", eye:"#7C6BA8", skin:"#EFD2BC", acc:"none" },
    tagline: "为你奏响的指挥棒",
    quote: "指挥棒的意义，不是掌控一切，而是将它交给音乐本身。",
    ycolor: "#CCDDCC",
    group: "学生会（会计）",
    tags:["沉稳可靠","帅气"],
    likes:"尽在掌握的游刃有余",
    dislikes:"临时变更",
    skill:"管理、事务处理",
    bio:[
      "浅绿发妹妹头，灰色眼睛。",
      "高一年级。出身名门世家，家教严格，为了证明自己而组建起组合。性格沉稳有责任感，有着游刃有余的腹黑，偶尔会展露出软弱的一面。",
      "表演风格凛然帅气。"
    ]
  },
  {
      id: "yukito", img: "/projectRE/assets/characters/ykt.png", name: "森下 行人", romaji: "Morishita Yukito", band: "b2", cls: "1-B",
    roles:["服化设计"], instrument:"Fender Jazz Bass（日落色）",
    birthday:"5月8日", height:"167cm", blood:"AB", origin:"本地",
    look:{ style:"wavy", hair:"#2E3A46", hair2:"#4E5E70", eye:"#4A7E9E", skin:"#F2D8C4", acc:"none" },
    tagline: "平凡处闪耀的太阳",
    quote: "我就是向日葵，而组合里的大家、台下的你们，都是我追随的光。",
    ycolor: "#BB9988",
    group: "回家部（打工达人的无奈）",
    tags:["打工达人","支援者"],
    likes:"闪耀的事物、相互支撑的感觉",
    dislikes:"冷眼与忽视",
    skill:"与他人交心",
    bio:[
      "棕色短发，红色眼睛。",
      "高一年级。普通家庭的长子，有三个弟弟妹妹，课程和组合活动之余会去打工。待人真诚做事认真，很擅长对付小孩子，是团队的支撑型角色。",
      "表演风格亲切热情。"
    ]
  },
  {
      id: "shuuichi", img: "/projectRE/assets/characters/syc.png", name: "妃 秀一", romaji: "Kisaki Shuuichi", band: "b2", cls: "1-B",
    roles:["舞蹈设计"], instrument:"Fender Jazzmaster",
    birthday:"12月15日", height:"156cm", blood:"O", origin:"本地",
    look:{ style:"ponytail", hair:"#6B4A3A", hair2:"#93684F", eye:"#9E7B4A", skin:"#F6DECB", acc:"none" },
    tagline: "藏于甜蜜笑容的野火",
    quote: "但如果……如果有人愿意选择看到我的‘眼泪’的话，那或许也不错。",
    ycolor: "#FFAABB",
    group: "手工艺部（人台担当）",
    tags:["叛逆","吸睛","女装（"],
    likes:"舞蹈，漂亮的裙子",
    dislikes:"传统，歧视的眼神",
    skill:"视觉展示",
    bio:[
      "粉色齐肩发，紫色眼睛。",
      "高一年级。平时扎侧马尾，以女装出席。小康家庭独子，叛逆期和家中闹矛盾独居在外。性格外热内冷，营造气氛却常旁观，在感情上回避。",
      "表演风格甜美活泼。"
    ]
  },
  {
      id: "yashiro", img: "/projectRE/assets/characters/ysr.png", name: "名冢 社", romaji: "Nazuka Yashiro", band: "b2", cls: "1-A",
    roles:["作曲"], instrument:"Yamaha 定制套鼓",
    birthday:"7月16日", height:"151cm", blood:"A", origin:"本地",
    look:{ style:"twin", hair:"#A8B6C2", hair2:"#7C8B99", eye:"#5E8AA8", skin:"#F8E3D2", acc:"ribbon" },
    tagline: "栖于神社的夜想曲",
    quote: "……不需要语言。我会听见的。",
    ycolor: "#447733",
    group: "园艺部",
    tags:["无口","电波","也可以是巫女"],
    likes:"红茶，自然的声音",
    dislikes:"气氛浮躁的人群",
    skill:"神乐笛演奏",
    bio:[
      "银色短发长鬓角，绿色眼睛。",
      "高一年级。神社家的次子，有一个做巫女的姐姐，对神话传说很有了解。无口而有神秘感，在生人眼中严肃，熟起来是有些电波的性格。",
      "表演风格冷峻犀利。"
    ]
  },
  {
      id: "kisuya", img: "/projectRE/assets/characters/ksy.png", name: "梦野 贵朱弥", romaji: "Yumeno Kisuya", band: "b3", cls: "2-A",
    roles:["队长"], instrument:"Shure SM58（她的武器）",
    birthday:"8月20日", height:"161cm", blood:"B", origin:"本地",
    look:{ style:"long", hair:"#C0526E", hair2:"#E08CA2", eye:"#B04A66", skin:"#F7DFCE", acc:"ribbon" },
    tagline: "白兔细毛尖端的高唱",
    quote: "所以这一次的笑容，是有重量的。",
    ycolor: "#FF6622",
    group: "演剧部",
    tags:["小少爷","活力","随心所欲"],
    likes:"笑容、掌声、童话故事",
    dislikes:"隔阂与隐藏，悲伤",
    skill:"直率的接近与接触",
    bio:[
      "黑色翘毛短发内侧为橙色，橙色眼睛。",
      "高二从国外转到梦之咲，财团末子。性格活泼外向，因家庭宠爱有些过分天真，学习生活中多靠本能做事，行事风格随心所欲。",
      "想要给身边的人带去笑容。与紫是久未再见的青梅竹马。"
    ]
  },
  {
      id: "yukari", img: "/projectRE/assets/characters/ykr.png", name: "立花 紫", romaji: "Tachibana Yukari", band: "b3", cls: "3-A",
    roles:["剧本创作","演技指导"], instrument:"Gretsch White Falcon（复刻）",
    birthday:"3月18日", height:"154cm", blood:"O", origin:"本地",
    look:{ style:"bob", hair:"#E0A0A8", hair2:"#C4787F", eye:"#C98A8E", skin:"#F9E4D4", acc:"flower" },
    tagline: "共时性的剧目与爱",
    quote: "欢迎来到我的剧场，我的……不，是我们的主角们。",
    ycolor: "#9977BB",
    group: "演剧部（部长）",
    tags:["浪漫","温柔"],
    likes:"戏剧观赏，为他人带去罗曼蒂克",
    dislikes:"真心错付",
    skill:"戏剧表演",
    bio:[
      "紫色披肩发半扎，长鬓角，蓝色眼睛。",
      "高三年级。在外人眼中气质神秘，实际上是个温柔浪漫的人，对待所有关系都很认真。热爱戏剧并担任演剧部的部长，因此契机有一个已解散的前组合。",
      "与贵朱弥是久未再见的青梅竹马。"
    ]
  }
];
NG.members.push(
  {
      id: "hibari", img: "/projectRE/assets/characters/hbr.png", name: "入间 云雀", romaji: "Iruma Hibari", band: "b3", cls: "1-B",
    roles:["预备主役"], instrument:"Ibanez SR 系列",
    birthday:"10月5日", height:"161cm", blood:"A", origin:"本地",
    look:{ style:"long", hair:"#8A3A46", hair2:"#B86570", eye:"#B04A5E", skin:"#F6DECC", acc:"flower" },
    tagline: "雏鸟的泥泞行迹",
    quote: "主角……是那个敢于在最暗的夜里，等待天亮的人。",
    ycolor: "#553344",
    group: "演剧部",
    tags:["原石","主角预备役","常识人"],
    likes:"视觉系服装",
    dislikes:"积极思考",
    skill:"演技的源石",
    bio:[
      "棕色头发扎短低马尾，深紫色眼睛。",
      "高一年级。演剧部成员，有些天赋但性格略微内向消极，是珍贵的原石，正探索着将全部魅力带上舞台的方式。",
      "组合中最显常识人的存在，但喜欢帅气的视觉系服饰，为此课余打工挣钱。"
    ]
  },
  {
      id: "ai", img: "/projectRE/assets/characters/ai.png", name: "前川 蓝", romaji: "Maekawa Ai", band: "b4", cls: "3-A",
    roles:["队长"], instrument:"Fender Jaguar（黑）",
    birthday:"9月10日", height:"168cm", blood:"AB", origin:"海外归国",
    look:{ style:"long", hair:"#2A2E3A", hair2:"#4A5064", eye:"#5A6AA8", skin:"#EFD6C4", acc:"none" },
    tagline:"精确刻度下的再生",
    quote: "感情的传达效率。之前，确实没有考虑过这点。",
    ycolor: "#335566",
    group: "学生会（会长）",
    tags:["效率主义","疑似人工智能"],
    likes:"有条不紊",
    dislikes:"创作类活动",
    skill:"文件处理",
    bio:[
      "深蓝色短发，左鬓角较长，浅蓝色眼睛。",
      "高三年级，时任学生会长。优等生，个性冷淡的效率主义者，无论是表演或做事都是一丝不苟的精确风格，创造力则略显欠缺。",
      "与小笠原之前是组合，并称学生会的两大看板。"
    ]
  },
  {
      id: "reo", img: "/projectRE/assets/characters/reo.png", name: "朝凪 怜樱", romaji: "Asanagi Reo", band: "b4", cls: "3-B",
    roles:["作词"], instrument:"Sadowsky 五弦贝斯",
    birthday:"4月3日", height:"170cm", blood:"O", origin:"本地",
    look:{ style:"short", hair:"#3E4854", hair2:"#66748A", eye:"#52628C", skin:"#F0D8C8", acc:"none" },
    tagline:"于生死流转间咏唱永恒",
    quote: "……组合不是计算题。你希望我毕业，但你希望和我一起唱歌吗？",
    ycolor: "#EE9999",
    group: "园艺部",
    tags:["温柔","（前）病弱","乐观"],
    likes:"花卉绿植",
    dislikes:"持久运动",
    skill:"歌唱，治愈他人",
    bio:[
      "深红色长发扎成束起的马尾，粉红色眼睛。",
      "高三年级，二年级时因心脏方面的手术休学一年，实际上比前川大一岁。气质温和，说话慢吞吞但性格坚定。",
      "被前川通知偶像活动时长不足毕业要求后，正在寻找组合。"
    ]
  },
  {
      id: "haruki", img: "/projectRE/assets/characters/hrk.png", name: "琴平 阳希", romaji: "Kotohira Haruki", band: "b4", cls: "2-B",
    roles:["脚本执笔"], instrument:"小型合成器 + 笔记本电脑",
    birthday:"2月5日", height:"160cm", blood:"O", origin:"本地",
    look:{ style:"short", hair:"#3E4A50", hair2:"#6A7C86", eye:"#4A7A8C", skin:"#F5DECC", acc:"headphones" },
    tagline:"假面之后藏着何人真心",
    quote: "我讨厌太沉重的‘爱’。因为这会让面具碎裂后只剩下丑陋。",
    ycolor: "#DDCCAA",
    group: "演剧部（幽灵部员）",
    tags:["两面","优等生"],
    likes:"广阔的场所",
    dislikes:"激烈的情绪表达",
    skill:"剧本创作、演技",
    bio:[
      "铂金色齐肩发部分在侧面扎起，褐色眼睛。",
      "高二年级。高一时与演剧部的立花紫学长组过组合，现已解散，原因没有对外流出。",
      "在同学眼中是温柔的模范学生，实际上性格有着隐藏真我的一面。"
    ]
  },
  {
      id: "shigure", img: "/projectRE/assets/characters/sgr.png", name: "小笠原 时雨", romaji: "Ogasawara Shigure", band: "b4", cls: "2-B",
    roles:["作曲","舞台效果担当"], instrument:"Martin D-28（家中传下来的）",
    birthday:"6月13日", height:"159cm", blood:"O", origin:"本地",
    look:{ style:"long", hair:"#5A4A3A", hair2:"#8A7358", eye:"#7A6A4A", skin:"#F7E0CE", acc:"none" },
    tagline:"为谁而舞的先锋小丑",
    quote: "不是因为跟上了谁。是因为有人告诉我，‘让别人笑’本身就是一种才能。",
    ycolor: "#AAEEFF",
    group: "学生会（副会长）",
    tags:["气氛掌控者","外向"],
    likes:"电影鉴赏，游戏联机",
    dislikes:"数理等自然科学",
    skill:"即兴演讲",
    bio:[
      "灰色短发，挑染蓝色卷长鬓角，蓝色眼睛。",
      "高二年级，时任学生会副会长，与前川之前是组合，并称两大看板，倾慕对方的才华，称其为蓝大人。",
      "外向潇洒的怪杰类人物，存在感很强，有时也愿意担任小丑角色。"
    ]
  },
  {
      id: "hideki", img: "/projectRE/assets/characters/hdk.png", name: "神近 英树", romaji: "Kamichika Hideki", band: "b5", cls: "2-B",
    roles:["队长"], instrument:"一把用了八年的学生琴",
    birthday:"5月25日", height:"157cm", blood:"B", origin:"本地",
    look:{ style:"ponytail", hair:"#6E5A48", hair2:"#9A8068", eye:"#8A7448", skin:"#F7E1D0", acc:"none" },
    tagline: "一事入魂的追风者",
    quote: "但如果，如果你能在为自己唱歌的时候，顺便带上我……那我一定会是世界上最幸运的听众！",
    ycolor: "#99BB33",
    group: "弓道部",
    tags:["聪明伶俐","三分钟热度"],
    likes:"热闹的场景",
    dislikes:"长久的投入与坚持",
    skill:"突击学习",
    bio:[
      "金色短发，绿色眼睛。",
      "高二年级，弓道部成员。曾经因委托与步有交流，因此高二与陆同班后被莫名其妙地针对，还被下了组合对决的战书。",
      "亲和力强的优等生，做事有些三分钟热度，渴望拥有能深入的执着。"
    ]
  },
  {
      id: "ayumu", img: "/projectRE/assets/characters/aym.png", name: "伊庭 步", romaji: "Iba Ayumu", band: "b5", cls: "3-B",
    roles:["作曲","舞台效果设计"], instrument:"借来的旧大提琴「阿绫」",
    birthday:"8月29日", height:"164cm", blood:"A", origin:"本地",
    look:{ style:"wavy", hair:"#4A4038", hair2:"#786A5A", eye:"#7A6A50", skin:"#F6DFCD", acc:"none" },
    tagline: "笼中夜莺的破晓独唱",
    quote: "今天我们打开笼门，是为了以真实的模样归来。",
    ycolor: "#990011",
    group: "神秘研究部（部长）",
    tags:["无瑕的完美","利他主义"],
    likes:"母亲赠予的夜莺项链",
    dislikes:"吐露自我天真的一面",
    skill: "捕捉他人未说出口的愿望",
    bio:[
      "深灰色长发扎成低马尾，红色眼睛。",
      "高三年级，神秘研究部的部长，经常受到校内同学委托且都能完成，兼其神秘的形象被誉为“鸟笼的魔女”。",
      "伊庭家的继承人，从小受到严格的教育，举止优雅大方诸样精通。"
    ]
  },
  {
      id: "naokage", img: "/projectRE/assets/characters/nkg.png", name: "十六夜 直景", romaji: "Izayoi Naokage", band: "b5", cls: "3-A",
    roles:["作词"], instrument:"一台自己攒的合成器机架",
    birthday:"12月24日", height:"160cm", blood:"O", origin:"本地",
    look:{ style:"short", hair:"#5A4A78", hair2:"#8A78A8", eye:"#7C6AA8", skin:"#F4DCC8", acc:"headphones" },
    tagline: "拉满却未放的沉默之矢",
    quote: "我不会再说‘不知道拯救你是不是傲慢’了。保护你，是我自己决定的事。",
    ycolor: "#FF2266",
    group: "弓道部（部长）",
    tags:["器械爱好者","沉默严肃"],
    likes:"弓道",
    dislikes:"直接热烈地表达情感",
    skill:"沉默的守候",
    bio:[
      "黑色短发，粉色眼睛。",
      "高三年级，弓道部部长。性格严肃认真有压迫力，感受却非常细腻。",
      "与步一起长大，深知他为满足他人愿望压抑自己的献奉，为此替他悲伤着。在校内装作和步不熟，只是在远处默默守望。"
    ]
  }
);
NG.members.push(
  {
      id: "atsushi", img: "/projectRE/assets/characters/ats.png", name: "伊庭 陆", romaji: "Iba Atsushi", band: "b6", cls: "2-B",
    roles:["队长","编曲"], instrument:"无线麦克风（她坚持要银色的）",
    birthday:"3月5日", height:"163cm", blood:"AB", origin:"海外归国",
    look:{ style:"long", hair:"#D8D2E8", hair2:"#A89EC8", eye:"#8878B8", skin:"#F8E2D2", acc:"flower" },
    tagline: "撕裂长夜的荆棘之光",
    quote: "所有的无处可去的嘶吼。把它交给我，让它成为聚光灯下最刺眼的荆棘！",
    ycolor: "#885533",
    group: "轻音部（吉他）",
    tags:["反叛","攻击性"],
    likes:"随心所欲的表达，成为焦点",
    dislikes:"被否定和贴标签",
    skill:"抓人眼球的改编",
    bio:[
      "深灰色长发扎成高马尾，棕色眼睛。",
      "高二年级，轻音社的成员。性格直接犀利攻击性强，情绪喜怒不定。",
      "伊庭家不被在意的次子，才华上也不如哥哥步，厌弃着自己的未满状态，想要成为众人的焦点，为之倾尽全力。"
    ]
  },
  {
      id: "rizumu", img: "/projectRE/assets/characters/rzm.png", name: "渡边 理图梦", romaji: "Watanabe Rizumu", band: "b6", cls: "2-A",
    roles:["作曲"], instrument:"Roland 电子鼓 + 打击垫",
    birthday:"4月7日", height:"152cm", blood:"O", origin:"本地",
    look:{ style:"twin", hair:"#3E4450", hair2:"#6A7284", eye:"#6A7EA0", skin:"#F5DDCB", acc:"headphones" },
    tagline: "藏于幕后的无名旋律",
    quote: "但现实中，我们选错的瞬间就逝去了。我想要书写那些没被选中的选项。",
    ycolor: "#FFBB88",
    group: "轻音部（键盘）",
    tags:["腼腆","小众爱好者"],
    likes:"疾走感的乐曲、术力口",
    dislikes:"用语言表达音乐中寄托之物",
    skill:"作曲",
    bio:[
      "浅橘色短发，深蓝眼睛。",
      "高二年级，轻音社的成员，台风自由疾走感强，台下却是个含蓄沉默的人。对欣赏自己作品的陆非常感激。",
      "出身摇滚世家，名字也来自节奏Rizumu，喜欢术力口类型的音乐，私下是p主。"
    ]
  },
  {
      id: "yasukazu", img: "/projectRE/assets/characters/awa.png", name: "宫崎 安和", romaji: "Miyazaki Yasukazu", band: "b6", cls: "3-A",
    roles:["视觉设计"], instrument:"Gibson Les Paul Standard",
    birthday:"4月26日", height:"169cm", blood:"B", origin:"本地",
    look:{ style:"long", hair:"#26282E", hair2:"#4A4E58", eye:"#8C7A5A", skin:"#F2D9C6", acc:"none" },
    tagline: "画不好橘子的绘梦者",
    quote: "如果连我们都无法接纳自己的不完整，我们的歌又如何能打动别人？",
    ycolor: "#CC8855",
    group: "美术部（部长）",
    tags:["凡才"],
    likes:"绘画创作，摄影采风",
    dislikes:"灵感消失的场合",
    skill:"视觉设计",
    bio:[
      "棕色鲻鱼头，金色眼睛。",
      "高三年级，美术部部长，虽然天赋只是凡才但对绘画非常喜爱，明明是偶像科却时常翘课在部室绘画。",
      "平常以温和的态度待人，对绘画之外的事物不甚关心，有些在意他人对画作的评价。"
    ]
  },
  {
      id: "tomohisa", img: "/projectRE/assets/characters/tmhs.png", name: "小系 知久", romaji: "Koito Tomohisa", band: "b7", cls: "3-B",
    roles:["队长"], instrument:"Jackson Rhoads",
    birthday:"1月25日", height:"172cm", blood:"A", origin:"本地",
    look:{ style:"short", hair:"#3A342E", hair2:"#5E564C", eye:"#9A7A52", skin:"#EFD4BE", acc:"none" },
    tagline:"广告位招租",
    quote: "广告位招租",
    ycolor: "#99EEDD",
    group: "回家部",
    tags:["温柔","劣等感"],
    likes: "广告位招租",
    dislikes: "广告位招租",
    skill: "广告位招租",
    bio:[
      "青发妹妹头，侧边扎了一条辫子，橙瞳。",
      "广告位招租",
      "广告位招租"
    ]
  },
  {
      id: "asu", img: "/projectRE/assets/characters/asu.png", name: "有坂 亚明日", romaji: "Arisaka Asu", band: "b7", cls: "1-A",
    roles:["词曲作"], instrument:"Music Man StingRay",
    birthday:"11月23日", height:"155cm", blood:"O", origin:"本地",
    look:{ style:"bob", hair:"#5E4A3E", hair2:"#8E7460", eye:"#8A6E4E", skin:"#F7DFCC", acc:"none" },
    tagline: "广告位招租",
    quote: "广告位招租",
    ycolor: "#AA1144",
    group: "回家部",
    tags:["急性子","自我主义"],
    likes: "广告位招租",
    dislikes: "广告位招租",
    skill: "广告位招租",
    bio:[
      "暗红色短发，金色眼睛。",
      "广告位招租",
      "广告位招租"
    ]
  },
  {
      id: "norio", img: "/projectRE/assets/characters/nro.png", name: "安心院 乃利欧", romaji: "Ajimu Norio", band: "b7", cls: "1-B",
    roles:["视觉效果担当"], instrument:"Fender Mustang（贴着贴纸）",
    birthday:"7月30日", height:"160cm", blood:"B", origin:"本地",
    look:{ style:"short", hair:"#2E4A44", hair2:"#548078", eye:"#2E8C86", skin:"#F4DCC8", acc:"none" },
    tagline: "广告位招租",
    quote: "广告位招租",
    ycolor: "#66BBEE",
    group: "手工艺部",
    tags:["平凡","随遇而安"],
    likes: "广告位招租",
    dislikes: "广告位招租",
    skill: "广告位招租",
    bio:[
      "粉色卷短发，蓝色眼睛。",
      "广告位招租",
      "广告位招租"
    ]
  },
  {
      id: "shigeho", img: "/projectRE/assets/characters/sgh.png", name: "永山 茂穗", romaji: "Nagayama Shigeho", band: "b8", cls: "3-B",
    roles:["队长","作词"], instrument:"Fender Telecaster（红）",
    birthday:"9月23日", height:"158cm", blood:"O", origin:"本地",
    look:{ style:"ponytail", hair:"#A8763E", hair2:"#D0A468", eye:"#C08840", skin:"#F7E0CE", acc:"none" },
    tagline:"投落浓荫的隐忍迭穗",
    quote: "舞台上的你不需要保护我，我也不需要把你捧在手心。我们只是……一起发出声音。",
    ycolor: "#666644",
    group: "回家部",
    tags:["守护者","互为利兹"],
    likes:"芽路的旋律",
    dislikes:"突如其来的改变",
    skill:"照顾人",
    bio:[
      "深绿色披肩发半扎，红色眼睛。",
      "高三年级，在此之前放学后也会去渡边宅与芽路度过夜晚前的时间，但在芽路入学后二人的关系发生了微妙的变化。",
      "父母是渡边家的经纪人，从小就与芽路认识，被委托了照顾他的职责。音乐的启蒙是幼小的芽路带领的，羡慕着并爱着他的旋律。"
    ]
  },
  {
      id: "melody", img: "/projectRE/assets/characters/mld.png", name: "渡边 芽路", romaji: "Watanabe Melody", band: "b8", cls: "1-A",
    roles:["作曲"], instrument:"Gretsch 四鼓组",
    birthday:"10月28日", height:"157cm", blood:"A", origin:"本地",
    look:{ style:"ponytail", hair:"#38404C", hair2:"#5E6878", eye:"#5A7A8A", skin:"#F2DAC8", acc:"ribbon" },
    tagline:"向阳生长的纤弱新芽",
    quote: "因为从今晚开始，我们的孤独就再也不只是‘一个人的’了。",
    ycolor: "#334477",
    group: "回家部",
    tags:["被守护者","互为青鸟"],
    likes:"欣赏交响乐",
    dislikes:"激烈运动，人际交往",
    skill:"钢琴、小提琴演奏，作曲",
    bio:[
      "浅橘色长发在末端束起，深蓝眼睛。",
      "极少与人接触造就了敏感阴郁的性格，本人也为此痛苦，想要改变，于是高中升学时入学了茂穗所在的私立世响学院。" ,
      "出身摇滚世家，名字来自旋律Melody。音乐的天才但幼年身体虚弱，由于父母忙于事业自小接受上门家教，曲风多样而最擅长古典。"
    ]
  }
);
/* --------------------------------------------------------------------------
   关系网络 —— 8 组「同乐队」三角 + 跨队关系
   -------------------------------------------------------------------------- */
NG.relations = [
  /* b1  */
  { a:"manatsu", b:"chisato",type:"bond", note:"他人与自我、幻梦与现实；由你启发的我给出的解答。" },
  /* b2  */
  { a:"amane", b:"yukito",  type:"friend",      note:"可靠的副手与发掘才能的伯乐" },
  { a: "amane", b: "shuuichi", type: "partner", note: "一丘之貉，能够相互看清彼此的黑暗面" },
  { a: "amane", b: "yashiro", type: "bond", note: "神社拜殿的廊檐下，风和雨的声音。" },
  { a: "yukito", b: "shuuichi", type: "bond", note: "你是什么都不懂的笨蛋先生！" },
  { a: "yukito", b: "yashiro", type: "friend", note: "朋友、偶像、舞台；你是这一切的开始。" },
  { a: "shuuichi", b: "yashiro", type: "partner", note: "离群索居的两个怪人，原本的平行线正逐渐相交。" },
  /* b3  */
  { a: "kisuya", b: "yukari", type: "childhood", note: "拯救熟悉又陌生的你，重现儿时的童话" },
  { a: "kisuya", b: "hibari", type: "partner", note: "随心所欲的队长……不过并不讨厌。" },
  { a: "yukari", b: "hibari", type: "senior", note: "温柔但严格的部长与待磨原石的后辈" },
  /* b4  */
  { a:"ai",   b:"reo",    type:"bond",      note:"曾令我倾倒的那歌声，为了再度唱响……" },
  { a: "ai", b: "haruki", type: "partner", note: "意料之外的技术性支援" },
  { a: "ai", b: "shigure", type: "senior", note: "原因不明的仰慕，如同冰上的烈火" },
  { a: "reo", b: "haruki", type: "partner", note: "不可或缺的艺术性代表。" },
  { a: "reo", b: "shigure", type: "partner", note: "从单向嫉妒开始，转变为真实的向往" },
  { a: "haruki", b: "shigure", type: "bond", note: "敢于彼此叫醒的诤友。" },
  /* b5  */
  { a:"hideki",  b:"ayumu",  type:"bond",      note:"吹拂鸟笼的第一阵新风" },
  { a: "naokage", b: "hideki", type: "senior", note: "在那张弓收拢之后" },
  { a: "ayumu", b: "naokage", type: "childhood", note: "笼中夜莺与安静守望的弓兵" },
  /* b6  */
  { a:"atsushi",    b:"rizumu",    type:"friend",      note:"让你的乐声被人听见" },
  { a: "atsushi", b: "yasukazu", type: "partner", note: "把你画中无处可去的嘶吼交给我！" },
  { a: "rizumu", b: "yasukazu", type: "partner", note: "未满而沉默的艺术家们。" },
  /* b7  */
  { a:"tomohisa", b:"asu", type:"partner",      note:"从电视节目开始的一路追逐。" },
  { a: "tomohisa", b: "norio", type: "bond", note: "在模特界中初识，在舞台上再见。" },
  { a:"asu",b:"norio",    type:"friend",    note:"打起精神来，让我们走上center！" },
  /* b8  */
  { a: "shigeho", b: "melody", type: "childhood", note: "你的旋律曾是我的一切。" },

  /* 跨队 · 跨班 */
  { a: "yukito", b: "hibari", type: "friend", note: "同班好友兼打工的同事。" },
  { a: "yukari", b: "haruki", type: "bond", note: "曾璀璨过的Melpomene。帷幕落下的瞬间，悲剧就此开始。" },
  { a: "hideki", b: "shigure", type: "classmate", note: "下一次联机打游戏是什么时候呢……" },
  { a: "manatsu", b: "rizumu", type: "friend", note: "不善言辞创作者间的共鸣与尊重。" },
  { a: "yukari", b: "yasukazu", type: "classmate", note: "你也有那份对艺术的纯粹热爱吧？" },
  { a: "hideki", b: "atsushi", type: "rival", note: "与生俱来的对手，对抗才刚刚开始。" },
  { a: "ayumu", b: "atsushi", type: "sister", note: "不完美的我们用两种方式各自飞翔着。" },
  { a: "rizumu", b: "melody", type: "sister", note: "一直以来都默默怜爱着脆弱的你。" },
  { a: "norio", b: "shuuichi", type: "friend", note: "手工艺部的业余设计家和美丽的人台（。" },
  { a: "melody", b: "amane", type: "classmate", note: "编曲上没自信的老师与谦卑的学生。" }
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