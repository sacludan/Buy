'use strict';
/* 極速下單：所有商品、商店、評論及付款資訊均為虛構的遊戲資料。 */
const PRODUCTS = [
 {id:'headphones',brand:'聲浪',name:'AirWave Pro 2 無線耳機',spec:'曜石黑',other:'奶油白',cat:'3C數位',base:3290,emoji:'🎧',fake:'聲浪 AirWvae Pro 2 無線耳機',words:'降噪、藍牙5.3、無線耳機'},
 {id:'battery',brand:'VoltGo',name:'10000mAh 磁吸行動電源',spec:'霧白',other:'曜石黑',cat:'3C數位',base:1290,emoji:'🔋',fake:'VoItGo 10000mAh 磁吸行動電源',words:'磁吸、快充、行動電源'},
 {id:'phonecase',brand:'果殼',name:'iPhone 17 透明防摔殼',spec:'透明',other:'煙燻黑',cat:'3C數位',base:790,emoji:'📱',fake:'果殼 iPh0ne 17 透明防摔殼',words:'手機殼、防摔、iPhone'},
 {id:'keyboard',brand:'KeyPop',name:'K75 無線機械鍵盤',spec:'奶茶白',other:'星空黑',cat:'3C數位',base:2390,emoji:'⌨️',fake:'KeyP0p K75 無線機械鍵盤',words:'鍵盤、機械、無線'},
 {id:'mouse',brand:'ClickGo',name:'M3 靜音無線滑鼠',spec:'深灰',other:'米白',cat:'3C數位',base:990,emoji:'🖱️',fake:'C1ickGo M3 靜音無線滑鼠',words:'滑鼠、靜音、無線'},
 {id:'speaker',brand:'BeatBox',name:'Mini 藍牙喇叭',spec:'珊瑚紅',other:'午夜黑',cat:'3C數位',base:1790,emoji:'🔊',fake:'BeatB0x Mini 藍牙喇叭',words:'喇叭、藍牙、音箱'},
 {id:'thermos',brand:'森活',name:'750ml 真空保溫瓶',spec:'鼠尾草綠',other:'米白',cat:'生活家居',base:690,emoji:'🥤',fake:'森话 750ml 真空保溫瓶',words:'保溫瓶、保溫杯、水壺'},
 {id:'lamp',brand:'小日子',name:'LED 護眼桌燈',spec:'奶油白',other:'霧黑',cat:'生活家居',base:1590,emoji:'💡',fake:'小曰子 LED 護眼桌燈',words:'桌燈、檯燈、閱讀'},
 {id:'aroma',brand:'Mori',name:'木質調擴香瓶',spec:'200ml',other:'100ml',cat:'生活家居',base:850,emoji:'🌿',fake:'M0ri 木質調擴香瓶',words:'擴香、香氛、精油'},
 {id:'fan',brand:'小風',name:'Pocket 手持風扇',spec:'薄荷綠',other:'奶油白',cat:'生活家居',base:590,emoji:'🌀',fake:'小凬 Pocket 手持風扇',words:'風扇、手持、隨身'},
 {id:'backpack',brand:'Wander',name:'20L 輕量後背包',spec:'曜石黑',other:'沙色',cat:'穿搭配件',base:1680,emoji:'🎒',fake:'Wandar 20L 輕量後背包',words:'背包、旅行、書包'},
 {id:'hat',brand:'NorthCat',name:'刺繡棒球帽',spec:'卡其色',other:'黑色',cat:'穿搭配件',base:680,emoji:'🧢',fake:'N0rthCat 刺繡棒球帽',words:'帽子、棒球帽、刺繡'},
 {id:'handcream',brand:'Bloom',name:'花香護手霜',spec:'50ml',other:'30ml',cat:'美妝保養',base:390,emoji:'🧴',fake:'Bl00m 花香護手霜',words:'護手霜、保濕、香氛'},
 {id:'sunscreen',brand:'SunnyDay',name:'SPF50+ 防曬乳',spec:'50ml',other:'30ml',cat:'美妝保養',base:650,emoji:'☀️',fake:'SunnyDey SPF50+ 防曬乳',words:'防曬、SPF50、防護'},
 {id:'coffee',brand:'晨間選物',name:'濾掛咖啡禮盒',spec:'10入・中焙',other:'5入・中焙',cat:'食品飲料',base:450,emoji:'☕',fake:'晨間選勿 濾掛咖啡禮盒',words:'咖啡、濾掛、烘焙'},
 {id:'chocolate',brand:'可可星球',name:'70% 黑巧克力',spec:'12片裝',other:'6片裝',cat:'食品飲料',base:520,emoji:'🍫',fake:'可可星求 70% 黑巧克力',words:'巧克力、黑巧、可可'}
];
const DIFF = {
 easy:{label:'簡單模式',short:'簡單',noise:1,popup:0,desc:'廣告少，破綻明顯',tone:'easy'},
 normal:{label:'一般模式',short:'一般',noise:2,popup:30000,desc:'假官方、相似品、彈窗',tone:'normal'},
 hard:{label:'困難模式',short:'困難',noise:3,popup:18000,desc:'廣告轟炸、真假混戰',tone:'hard'}
};
const PEOPLE=[
 {name:'林小米',phone:'0900-000-168',address:'新北市遊戲區快手路18號3樓',card:'9999 2381 7642 5036',expiry:'08/29',cvv:'482'},
 {name:'王樂樂',phone:'0900-000-257',address:'台中市模擬區購物街26號5樓',card:'9999 4560 1378 2054',expiry:'06/30',cvv:'631'},
 {name:'陳果果',phone:'0900-000-386',address:'高雄市虛構區閃購路56號8樓',card:'9999 7132 8460 2159',expiry:'11/29',cvv:'275'},
 {name:'張小宇',phone:'0900-000-429',address:'台北市測試區速度街99號2樓',card:'9999 3109 2478 6502',expiry:'03/31',cvv:'804'},
];
const ICONS={
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
 cart:'<circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M2 3h2l2.5 12h12.8l2.2-9H5"/>',
 back:'<path d="m15 18-6-6 6-6"/>',
 chevron:'<path d="m9 18 6-6-6-6"/>',
 close:'<path d="M18 6 6 18M6 6l12 12"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
 note:'<path d="M5 3h14v18l-4-4-4 4-3-4-3 4z"/>',
 bag:'<path d="M3 8h18l-2 13H5zM8 9V6a4 4 0 0 1 8 0v3"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 alert:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 17h.01"/>',
 star:'<path d="m12 2 3 6.4 7 .9-5.1 5 .9 7-5.8-3.1-5.8 3.1.9-7L2 9.3l7-.9z"/>',
 heart:'<path d="M20.8 9c0 4.5-8.8 10-8.8 10S3.2 13.5 3.2 9A4.5 4.5 0 0 1 12 7.4 4.5 4.5 0 0 1 20.8 9z"/>',
 list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
 home:'<path d="m3 10 9-7 9 7v11h-6v-7H9v7H3z"/>',
 trophy:'<path d="M8 4h8v8a4 4 0 1 1-8 0V4zm0 2H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4M12 16v4M8 21h8"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 minus:'<path d="M5 12h14"/>',
 trash:'<path d="M4 7h16M10 7V4h4v3m-8 0 1 14h10l1-14M10 11v6M14 11v6"/>',
 filter:'<path d="M4 7h16M7 12h10M10 17h4"/>',
 gift:'<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M12 9v12M2 9h20M12 9c-9 0-8-7-4-7 2 0 4 5 4 7zm0 0c9 0 8-7 4-7-2 0-4 5-4 7z"/>',
 shield:'<path d="m12 2 9 4v6c0 6-4 9-9 10-5-1-9-4-9-10V6z"/><path d="m8 12 3 3 5-6"/>',
 card:'<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20M6 15h4"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
 pin:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
 receipt:'<path d="M5 2h14v20l-3-2-4 2-4-2-3 2zM8 7h8M8 11h8M8 15h5"/>',
 reload:'<path d="M20 11a8 8 0 1 0-2 6m2-1v-5h-5"/>',
 comment:'<path d="M21 12a8 8 0 0 1-8 8H4l2.5-4A8 8 0 1 1 21 12z"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>',
 arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 sparkle:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z"/>',
 sale:'<path d="m3 3 9 0 9 9-9 9-9-9z"/><circle cx="8" cy="8" r="1"/>',
 eye:'<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.5"/>',
 camera:'<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>'
};
const I=(name,size=20)=>`<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||ICONS.info}</svg>`;
const $=s=>document.querySelector(s);
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money=n=>'NT$ '+Math.round(n).toLocaleString('zh-TW');
const rnd=n=>Math.floor(Math.random()*n);
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
const digits=s=>String(s||'').replace(/\D/g,'');
const fmtTime=ms=>{let s=Math.floor(ms/1000),m=Math.floor(s/60),cs=Math.floor((ms%1000)/10);return `${String(m).padStart(2,'0')}:${String(s%60).padStart(2,'0')}.${String(cs).padStart(2,'0')}`;};
const PRODUCT_MAP=Object.fromEntries(PRODUCTS.map(p=>[p.id,p]));
const state={view:'home',difficulty:null,tasks:[],profile:null,offers:[],cart:{},activeOffer:null,reviewFilter:'all',search:'',category:'全部',sort:'recommend',taskTab:'goods',taskOpen:false,viewAfterTask:'shop',startedAt:0,elapsed:0,popupAt:0,promoOpen:false,modal:null,result:null,lastToastAt:0};
let ticker=null;
const getOffer=id=>state.offers.find(o=>o.id===id);
const productImage=(id,extra='')=>`<img src="./assets/prod-${id}.svg" alt="商品示意圖" class="${extra}" loading="lazy" />`;
const productTitle=p=>`${p.brand} ${p.name}`;
const goodReviewSnippets=['商品功能都正常，使用起來很順手。','買給家人用的，外觀跟圖片一樣。','到貨速度還不錯，操作很容易上手。','客服回覆很快，產品本身沒有問題。','是正確型號，包裝內容也齊全。'];
const badReviewSnippets=['收到後才發現盒子上有一個字拼錯，怪怪的。','標示說原廠，但是官網查不到商品序號。','跟朋友買的正品比，細節和材質有差。','品牌官方 App 完全辨識不到，客服只說正常。','買過原廠的，這款包裝標籤印刷真的不太一樣。'];
const harmlessNegative=['物流晚了兩天，雖然商品沒問題還是扣星。','外箱稍微凹了，但內容物正常。','顏色比照片暗一點點，不影響功能。','店家贈品忘了附，客服後來有補寄。'];
function reviewsFor(p,kind){
  const fake=kind.startsWith('fake');
  const arr=[
    {user:'買到賺到啦',stars:5,body:fake?'超划算！CP值爆表！五星好評！':'外觀很好看，功能和賣場介紹相符。',photo:false,date:'10/18'},
    {user:'兔兔購物中',stars:5,body:fake?'超讚超快超便宜！五星好評！':'品質不錯，跟原本預期的一樣。',photo:true,date:'10/16'},
    {user:'有話直說',stars:fake?1:3,body:fake?badReviewSnippets[PRODUCTS.indexOf(p)%badReviewSnippets.length]:harmlessNegative[PRODUCTS.indexOf(p)%harmlessNegative.length],photo:true,date:'10/12'},
    {user:'匿名買家',stars:fake?5:4,body:fake?'原廠級品質！超高規格！百分百推薦！':goodReviewSnippets[(PRODUCTS.indexOf(p)+2)%5],photo:false,date:'10/10'},
    {user:'散步的貓',stars:fake?2:5,body:fake?'實品商標和官方網站的圖片不一樣，請大家注意。':'查過規格沒問題，整體滿意。',photo:true,date:'10/07'},
    {user:'省錢小能手',stars:fake?5:5,body:fake?'五顆星，好評抽獎有參加有機會！':'價格實在，產品很實用。',photo:false,date:'10/02'},
  ];
  if(kind==='wrong')arr[2]={user:'拿錯顏色啦',stars:3,body:`這頁出貨的是「${p.other}」，不是我原本要的「${p.spec}」，下單前注意規格。`,photo:true,date:'10/12'};
  return arr;
}
function offersFor(p,level){
 const base=p.base, title=productTitle(p), offset=(PRODUCTS.indexOf(p)%3)*30;
 const mk=(kind,props)=>({id:`${p.id}-${kind}`,pid:p.id,kind,category:p.cat,authentic:!kind.startsWith('fake'),emoji:p.emoji,reviewCount:135+PRODUCTS.indexOf(p)*127+(['fakeTitle','fakeOfficial'].includes(kind)?1658:kind==='official'?420:0),reviews:reviewsFor(p,kind),...props});
 const offers=[
  mk('official',{title:`${title}｜${p.spec} 原廠公司貨`,seller:`${p.brand} 官方旗艦店`,verified:true,price:base+190+offset,spec:p.spec,rating:'4.8',sold:'2.1千',label:'官方正品'}),
  mk('reseller',{title:`【現貨】${title}｜${p.spec}`,seller:'拾光生活選物',verified:false,price:base+30+offset,spec:p.spec,rating:'4.6',sold:'816',label:'熱賣'}),
  mk('deal',{title:`${title} ${p.spec}｜活動優惠`,seller:'滿載好物市集',verified:false,price:Math.max(180,base-120-offset),spec:p.spec,rating:'4.5',sold:'343',label:'限量優惠'}),
 ];
 if(level!=='easy')offers.push(mk('wrong',{title:`${title}｜${p.other} 原廠公司貨`,seller:'鮮物百貨行',verified:false,price:base-180,spec:p.other,rating:'4.8',sold:'589',label:'其他規格'}));
 offers.push(mk('fakeTitle',{title:`${p.fake}｜${p.spec} 超值版`,seller:'人氣數位生活館',verified:false,authentic:false,price:Math.round(base*.76/10)*10,spec:p.spec,rating:'4.9',sold:'9.8千',label:'爆款熱銷'}));
 if(level!=='easy')offers.push(mk('fakeOfficial',{title:`${title}｜${p.spec} 原廠同級`,seller:`${p.brand} 官芳旗艦店`,verified:false,authentic:false,price:Math.round(base*.90/10)*10,spec:p.spec,rating:'4.9',sold:'3.5千',label:'店長推薦'}));
 return offers;
}
function newRound(level){
 const candidates=shuffle(PRODUCTS);state.tasks=candidates.slice(0,5).map(p=>({pid:p.id,spec:p.spec,qty:1}));
 const seen=candidates.slice(0,9),offers=seen.flatMap(p=>offersFor(p,level));
 // 部分商品先露臉，其他藏在滑動與搜尋後方；但所有價差基準都有可購買正版。
 state.offers=shuffle(offers);state.difficulty=level;state.profile=PEOPLE[rnd(PEOPLE.length)];
 state.cart={};state.search='';state.category='全部';state.sort='recommend';state.activeOffer=null;state.reviewFilter='all';state.taskTab='goods';state.taskOpen=false;state.startedAt=0;state.elapsed=0;state.popupAt=0;state.promoOpen=false;state.result=null;
 state.view='task';render();
}
const qtyTotal=()=>Object.values(state.cart).reduce((a,b)=>a+b,0);
const cartTotal=()=>Object.entries(state.cart).reduce((s,[id,q])=>s+(getOffer(id)?.price||0)*q,0);
function minGenuine(task){return Math.min(...state.offers.filter(o=>o.pid===task.pid&&o.authentic&&o.spec===task.spec).map(o=>o.price));}
function startRound(){state.view='shop';state.startedAt=performance.now();state.elapsed=0;state.popupAt=0;render();startTimer();}
function startTimer(){clearInterval(ticker);ticker=setInterval(()=>{
  if(!state.startedAt)return;
  state.elapsed=performance.now()-state.startedAt;
  document.querySelectorAll('.js-timer').forEach(e=>e.textContent=fmtTime(state.elapsed));
  let d=DIFF[state.difficulty];
  if(d?.popup && state.elapsed>(state.popupAt?state.popupAt+d.popup:12000)&&!state.promoOpen&&!state.taskOpen&&!state.modal&&['shop','detail','reviews','cart','checkout'].includes(state.view)){
    state.popupAt=state.elapsed;state.promoOpen=true;renderOverlay();
  }
},80);}
function stopTimer(){if(state.startedAt)state.elapsed=performance.now()-state.startedAt;state.startedAt=0;clearInterval(ticker);ticker=null;}
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2350);}
function view(name){state.view=name;state.promoOpen=false;render();}
function offerCartLabel(){return qtyTotal()||'0';}
function navBar(active){return `<nav class="bottom-nav" aria-label="主要選單">
 <button data-action="go-shop" class="nav-item ${active==='shop'?'active':''}">${I('home',22)}<span>首頁</span></button>
 <button data-action="go-search" class="nav-item">${I('search',22)}<span>搜尋</span></button>
 <button data-action="go-cart" class="nav-item ${active==='cart'?'active':''}">${I('cart',22)}<span>購物車</span><i class="nav-badge">${offerCartLabel()}</i></button>
 <button data-action="open-task" class="nav-item">${I('note',22)}<span>任務單</span></button>
 </nav>`;}
function gameTop({back,heading,sub='',cart=true}={}){return `<header class="game-top">
 <button class="icon-btn nav-back" data-action="${back||'go-shop'}" aria-label="返回">${I('back',23)}</button>
 <div class="game-top-title"><b>${heading||'閃購商城'}</b>${sub?`<small>${sub}</small>`:''}</div>
 <div class="timer-tag">${I('clock',15)} <span class="js-timer">${fmtTime(state.elapsed)}</span></div>
 ${cart?`<button class="icon-btn top-cart" data-action="go-cart" aria-label="查看購物車">${I('cart',21)}<span>${qtyTotal()}</span></button>`:''}
 </header>`;}
function taskSide(){return `<button class="task-edge" data-action="open-task" aria-label="查看任務便利貼"><span>任務</span>${I('note',16)}</button>`;}
function layoutGame(body,active='shop'){return `<div class="game-screen">${body}${taskSide()}${navBar(active)}</div>`;}
function renderHome(){let records=loadScores(),best=records.reduce((b,r)=>Math.min(b,r.ms),Infinity);return `<main class="home-screen screen-enter">
 <div class="home-top"><div class="brand-mini"><span class="brand-mark">${I('bag',19)}</span><span>閃購 <b>SPEEDMART</b></span></div><button class="round-soft" data-action="show-help" aria-label="玩法說明">${I('info',21)}</button></div>
 <div class="home-hero"><span class="hero-eyebrow">SHOPPING SPEEDRUN • 手機挑戰</span><div class="hero-float one">🛒</div><div class="hero-float two">💸</div><div class="hero-float three">⚡</div>
 <h1>極速<br/><em>下單！</em></h1><p>五樣商品，真假混戰。<br/>你的眼力能跟上手速嗎？</p>
 <span class="hero-sticker">BUY FAST<br/>THINK FAST!</span></div>
 <section class="home-action"><div class="tiny-label">準備接受購物挑戰？</div><button class="primary-btn big-btn" data-action="choose-difficulty">開始挑戰 ${I('arrow',22)}</button><div class="mode-row"><span>${I('check',15)} 每局 5 件商品</span><span>${I('clock',15)} 全程計時</span><span>${I('shield',15)} 真偽判斷</span></div></section>
 <section class="home-feature"><div class="section-head"><strong>不只是手速，還要有眼力</strong><span class="mini-pill">NEW GAME</span></div><div class="feature-grid">
 <div class="feature-card"><div>🕵️</div><b>真假商品</b><small>假官方與錯字陷阱</small></div>
 <div class="feature-card"><div>⭐</div><b>評論偵探</b><small>五星不代表一定真</small></div>
 <div class="feature-card"><div>💳</div><b>極速結帳</b><small>送出後才能揭曉</small></div></div></section>
 <div class="home-record"><div><span>我的最佳紀錄</span><strong>${Number.isFinite(best)?fmtTime(best):'尚未挑戰'}</strong><small>只記錄成功結帳的成績</small></div><button data-action="show-records">${I('trophy',20)}<br/><span>紀錄</span></button></div>
 <footer class="home-footer">虛構商店 × 虛構卡號 · 無真實付款</footer>
 </main>`;}
function renderDifficulty(){return `<main class="levels-screen screen-enter"><header class="simple-header"><button data-action="go-home" class="icon-btn">${I('back')}</button><span>選擇難度</span><div class="header-space"></div></header>
 <div class="level-intro"><span class="eyebrow">CHOOSE YOUR LEVEL</span><h1>今天想被<br/>廣告折磨幾分？</h1><p>三種難度都是 <b>5 件商品</b><br/>差別只在干擾有多煩！</p></div>
 <div class="sticky-stack">
 ${[['easy','🍃','簡單難度','輕鬆練手速','廣告少・錯字明顯'],['normal','⚡','一般難度','眼力大考驗','相似品・假官方・偶爾彈窗'],['hard','🔥','困難難度','歡迎來到網購地獄','滿版廣告・盜版混戰・彈窗轟炸']].map(([id,em,title,sub,desc],i)=>`<button class="level-note note-${id}" data-action="select-level" data-level="${id}" style="--rotation:${[ -2,2,-1.2][i]}deg"><span class="tape"></span><span class="level-em">${em}</span><span class="level-words"><b>${title}</b><strong>${sub}</strong><small>${desc}</small></span>${I('chevron',26)}</button>`).join('')}
 </div><p class="level-footnote">※ 商品數量相同；秒數只在挑戰成功後保存。</p></main>`;}
function renderStickyContent(tab,compact=false){const p=state.profile;
 if(tab==='goods')return `<div class="task-list">${state.tasks.map((t,i)=>{let prod=PRODUCT_MAP[t.pid];return `<div class="task-entry"><span class="task-index">${i+1}</span><span><b>${esc(productTitle(prod))}</b><small>規格：${esc(t.spec)}　·　數量：${t.qty}</small></span></div>`;}).join('')}</div><p class="note-hint">⚠️ 找到正確規格的「正版」才算完成</p>`;
 if(tab==='person')return `<dl class="info-list"><div><dt>收件人</dt><dd>${esc(p.name)}</dd></div><div><dt>聯絡電話</dt><dd>${esc(p.phone)}</dd></div><div><dt>配送地址</dt><dd>${esc(p.address)}</dd></div></dl>`;
 return `<dl class="info-list"><div><dt>遊戲卡號</dt><dd class="mono-text">${esc(p.card)}</dd></div><div><dt>有效期限</dt><dd>${esc(p.expiry)}</dd></div><div><dt>安全碼</dt><dd>${esc(p.cvv)}</dd></div></dl><p class="note-hint">僅供遊戲使用。請勿輸入真實信用卡資料。</p>`;
}
function taskTabs(){return `<div class="task-tabs"><button data-action="task-tab" data-tab="goods" class="${state.taskTab==='goods'?'selected':''}">🛍️ 商品清單</button><button data-action="task-tab" data-tab="person" class="${state.taskTab==='person'?'selected':''}">📍 收件資料</button><button data-action="task-tab" data-tab="card" class="${state.taskTab==='card'?'selected':''}">💳 付款卡</button></div>`;}
function renderTask(){return `<main class="task-start screen-enter"><header class="simple-header"><button class="icon-btn" data-action="choose-difficulty">${I('back')}</button><span>購物任務</span><div class="header-space"></div></header>
 <div class="task-intro"><span class="eyebrow">YOUR SHOPPING MISSION</span><h1>任務已送達！📋</h1><p>${DIFF[state.difficulty].label} · 5 件指定商品<br/>先看看清單，準備好再開始計時。</p></div>
 <div class="stacked-notes"><div class="stacked-note behind green"></div><div class="stacked-note behind pink"></div><section class="mission-note"><div class="tape"></div><div class="note-heading"><span>SHOPPING LIST</span><span>NO. 00${rnd(9)+1}</span></div>${taskTabs()}<div class="note-main">${renderStickyContent(state.taskTab)}</div></section></div>
 <div class="task-start-bottom"><p>${I('info',16)} 開始後便利貼會收在畫面邊緣，隨時可拉出。查看時<span>時間照常計算</span>。</p><button class="primary-btn big-btn" data-action="begin">確認，開始計時！ ${I('arrow',20)}</button></div></main>`;}
function offerCard(o){const p=PRODUCT_MAP[o.pid];return `<button class="product-card" data-action="open-offer" data-id="${o.id}" aria-label="查看 ${esc(o.title)}">
 <div class="product-photo">${productImage(p.id)}${o.kind==='deal'?'<span class="photo-tag orange">限時特價</span>':o.kind==='official'?'<span class="photo-tag blue">商城嚴選</span>':(o.kind.startsWith('fake')?'<span class="photo-tag coral">人氣推薦</span>':'')}</div>
 <div class="product-card-info"><div class="product-title">${esc(o.title)}</div><div class="product-price">${money(o.price)}</div><div class="product-rating"><span class="star-char">★</span> ${o.rating} <span>｜已售 ${o.sold}</span></div><div class="seller-line">${esc(o.seller)} ${o.verified?'<span class="mini-verified">✓</span>':''}</div></div>
 </button>`;}
function filteredOffers(){let arr=state.offers.filter(o=>state.category==='全部'||o.category===state.category),q=state.search.trim().toLowerCase();if(q){arr=arr.filter(o=>{let p=PRODUCT_MAP[o.pid];return `${o.title} ${o.seller} ${o.spec} ${p.words} ${p.cat}`.toLowerCase().includes(q);});}
 if(state.sort==='priceLow')arr.sort((a,b)=>a.price-b.price);
 if(state.sort==='rating')arr.sort((a,b)=>Number(b.rating)-Number(a.rating));
 return arr;}
function listingHtml(){let items=filteredOffers();return `<div class="results-head"><div><b>${state.search?'搜尋結果':'今日精選商品'}</b><small>共 ${items.length} 件商品 · 購物前記得查評論</small></div><select id="sort-select" aria-label="商品排序"><option value="recommend" ${state.sort==='recommend'?'selected':''}>推薦排序</option><option value="priceLow" ${state.sort==='priceLow'?'selected':''}>價格最低</option><option value="rating" ${state.sort==='rating'?'selected':''}>評分最高</option></select></div>
 ${items.length?`<div class="product-grid">${items.map(offerCard).join('')}</div>`:`<div class="empty-state">${I('search',36)}<b>找不到相關商品</b><p>試試搜尋商品種類或品牌，例如「耳機」、「鍵盤」。</p><button data-action="clear-search" class="outline-btn">清除搜尋</button></div>`}`;}
function renderShop(){const cats=['全部','3C數位','生活家居','穿搭配件','美妝保養','食品飲料'];return layoutGame(`${gameTop({back:'go-home',heading:'閃購 SPEEDMART',sub:'今日好物限時搶購'})}
 <div class="scroll-view shop-scroll"><div class="search-wrap">${I('search',20)}<input id="shop-search" type="search" enterkeyhint="search" placeholder="搜尋商品、品牌、規格..." autocomplete="off" value="${esc(state.search)}" /><span class="search-key">⌕</span></div>
 <div class="shop-banner"><div><span class="banner-eyebrow">FLASH DEALS • 今日限定</span><h2>買越快，<br/>不一定越划算。</h2><p>高評價也可能有詐 🤫</p></div><span class="banner-emoji">🛍️</span><span class="banner-discount">SALE<br/>UP TO<br/><b>70%</b></span></div>
 ${state.difficulty!=='easy'?`<button class="ad-strip" data-action="ad-click"><span class="ad-chip">贊助</span><span>🎁 恭喜！你有一張 99 元折價券待領取</span>${I('chevron',16)}</button>`:''}
 <div class="cats-scroller" role="group" aria-label="商品類別">${cats.map(c=>`<button data-action="category" data-cat="${c}" class="cat-chip ${state.category===c?'active':''}">${c}</button>`).join('')}</div>
 ${state.difficulty==='hard'?`<div class="deal-ticker"><span>🔥</span> 限時！超便宜不一定是真便宜　・　${I('sparkle',13)} 90 秒內結帳的人都很有勇氣</div>`:''}
 <section id="catalogResults">${listingHtml()}</section><div class="legal-shop">虛構商店與商品。所有評論皆為遊戲劇情設定。</div>
 </div>`,'shop');}
function offerInfo(o){return `<div class="seller-box"><div class="seller-avatar">${esc(o.seller.slice(0,1))}</div><div class="seller-details"><strong>${esc(o.seller)}</strong><small>賣場評價 ${o.rating} ★ · 服務回應率 98%</small></div>${o.verified?`<span class="verified-badge">${I('shield',13)} 平台認證</span>`:'<span class="seller-standard">查看賣場</span>'}</div>`;}
function renderDetail(){let o=getOffer(state.activeOffer);if(!o)return renderShop();let p=PRODUCT_MAP[o.pid];return layoutGame(`${gameTop({back:'go-shop',heading:'商品詳細資訊'})}
 <div class="scroll-view detail-scroll"><div class="hero-product">${productImage(p.id)}<span class="slide-indicator">1 / 3</span></div>
 <section class="detail-main"><div class="detail-price">${money(o.price)} <span>免運券適用</span></div><h2>${esc(o.title)}</h2><div class="detail-stat"><span><b>★ ${o.rating}</b> (${o.reviewCount.toLocaleString()})</span><span>已售 ${o.sold} 件</span><span class="stat-heart">${I('heart',18)}</span></div></section>
 <div class="detail-divider"></div><section class="product-spec-card"><div><span>商品規格</span><b>${esc(o.spec)}</b></div><div><span>預計出貨</span><b>24 小時內</b></div><div><span>購物須知</span><b>${o.kind.startsWith('fake')?'原廠同級規格・安心選購':'商品享有基本保固服務'}</b></div></section>
 <div class="detail-divider"></div>${offerInfo(o)}
 <div class="detail-divider"></div><section class="review-preview"><div class="between"><h3>商品評價 <span>(${o.reviewCount.toLocaleString()})</span></h3><button class="quiet-link" data-action="reviews">查看全部 ${I('chevron',16)}</button></div><div class="review-overview"><b>★ ${o.rating}</b><span>購買心得僅供參考，請仔細辨識</span></div>
 ${o.reviews.slice(0,2).map(rev=>renderReview(rev,p,o.kind)).join('')}<button data-action="reviews" class="show-reviews">查看所有評價與買家照片 ${I('arrow',16)}</button></section>
 <div class="detail-divider"></div><section class="description-card"><h3>商品介紹</h3><p>規格：${esc(o.spec)}<br/>品名：${esc(o.title)}<br/>商店：${esc(o.seller)}</p><p>${esc(p.words)}，日常生活好幫手。詳細規格及商品真偽請自行判斷。</p></section>
 </div><div class="detail-actions"><button class="mini-action" data-action="reviews">${I('comment',21)}<span>評論</span></button><button class="outline-btn" data-action="add-cart" data-id="${o.id}">加入購物車</button><button class="orange-btn" data-action="buy-now" data-id="${o.id}">立即購買</button></div>`,'shop');}
function renderReview(rev,p,kind){return `<div class="review-item"><div class="review-head"><span class="review-avatar">${esc(rev.user.slice(0,1))}</span><div><b>${esc(rev.user)}</b><small><span class="yellow-stars">${'★'.repeat(rev.stars)}<span>${'☆'.repeat(5-rev.stars)}</span></span>　${rev.date}</small></div><span class="purchased">已購買</span></div><p>${esc(rev.body)}</p>${rev.photo?`<div class="review-image"><img src="./assets/review-${p.id}-${kind.startsWith('fake')?'fake':kind==='wrong'?'wrong':'genuine'}.svg" alt="買家商品包裝示意照片" loading="lazy"/><span>${I('camera',14)} 買家實拍</span></div>`:''}</div>`;}
function renderReviews(){const o=getOffer(state.activeOffer);if(!o)return renderShop();let p=PRODUCT_MAP[o.pid];let reviews=o.reviews;if(state.reviewFilter==='low')reviews=reviews.filter(r=>r.stars<=3).sort((a,b)=>a.stars-b.stars);if(state.reviewFilter==='photo')reviews=reviews.filter(r=>r.photo);return layoutGame(`${gameTop({back:'back-detail',heading:'商品評價',sub:`${o.reviewCount.toLocaleString()} 則評價`})}
 <div class="scroll-view reviews-scroll"><div class="reviews-summary"><span class="large-star">★ ${o.rating}</span><div><b>整體評價</b><p>評論可能包含灌水、誤導或無關真偽的抱怨。</p></div></div>
 <div class="review-filter-row">${[['all','全部'],['low','低評分'],['photo','附照片']].map(([id,txt])=>`<button class="review-filter ${state.reviewFilter===id?'selected':''}" data-action="review-filter" data-filter="${id}">${txt}</button>`).join('')}</div>
 <div class="all-reviews">${reviews.length?reviews.map(r=>renderReview(r,p,o.kind)).join(''):'<div class="empty-state">這個篩選條件沒有評論。</div>'}</div></div>`,'shop');}
function cartItem(o,q){let p=PRODUCT_MAP[o.pid];return `<div class="cart-item"><div class="cart-photo">${productImage(p.id)}</div><div class="cart-meta"><div class="cart-seller">${esc(o.seller)}${o.verified?` <span class="mini-verified">✓</span>`:''}</div><strong>${esc(o.title)}</strong><small>規格：${esc(o.spec)}</small><div class="cart-row"><b>${money(o.price)}</b><div class="qty-control"><button data-action="decrease" data-id="${o.id}" aria-label="減少數量">${I('minus',15)}</button><span>${q}</span><button data-action="increase" data-id="${o.id}" aria-label="增加數量">${I('plus',15)}</button></div></div></div></div>`;}
function renderCart(){let entries=Object.entries(state.cart).filter(([,q])=>q>0);return layoutGame(`${gameTop({back:'go-shop',heading:'購物車',sub:`${qtyTotal()} 件商品`,cart:false})}
 <div class="scroll-view cart-scroll">${entries.length?`<div class="cart-message">${I('info',18)} 結帳前可以隨時修改。真正付款前請仔細確認商品。</div><div class="cart-list">${entries.map(([id,q])=>cartItem(getOffer(id),q)).join('')}</div>
 ${state.difficulty!=='easy'?`<button class="cart-upsell" data-action="ad-click"><span>🎁</span><div><b>湊滿免運！要不要再加購神秘好禮？</b><small>限時特惠，手慢就沒了</small></div>${I('chevron',19)}</button>`:''}`:`<div class="cart-empty">${I('cart',52)}<h2>購物車還是空的！</h2><p>快回商城搜尋任務指定的五樣商品。</p><button class="primary-btn" data-action="go-shop">開始逛逛 ${I('arrow')}</button></div>`}
 </div><div class="cart-footer"><div><span>商品總金額（${qtyTotal()} 件）</span><strong>${money(cartTotal())}</strong></div><button class="orange-btn" data-action="go-checkout" ${entries.length?'':'disabled'}>前往結帳 ${I('arrow',18)}</button></div>`,'cart');}
function checkoutInput(key,label,placeholder,type='text',maxlen=120){return `<label class="checkout-field"><span>${label}</span><input data-input="${key}" type="${type}" maxlength="${maxlen}" placeholder="${placeholder}" autocomplete="off" autocapitalize="off" spellcheck="false" /></label>`;}
function renderCheckout(){let entries=Object.entries(state.cart).filter(([,q])=>q>0);if(!entries.length)return renderCart();return layoutGame(`${gameTop({back:'go-cart',heading:'確認訂單',sub:'送出後無法修改',cart:false})}
 <div class="scroll-view checkout-scroll"><div class="checkout-warning">${I('alert',19)} <span>請輸入便利貼上的<strong>虛構資料</strong>。按下結帳後才會公布驗證結果，錯一項就失敗！</span></div>
 <section class="checkout-section"><h3>${I('pin',20)} 收件人資訊</h3>${checkoutInput('name','收件人姓名','請輸入任務指定姓名')}${checkoutInput('phone','聯絡電話','09xx-xxx-xxx','tel',16)}${checkoutInput('address','配送地址','請輸入完整地址')}</section>
 <section class="checkout-section"><h3>${I('card',20)} 模擬付款卡</h3><p class="checkout-sub">僅供遊戲使用，請勿輸入真實卡號。</p>${checkoutInput('card','遊戲卡號','9999 0000 0000 0000','text',19)}<div class="two-fields">${checkoutInput('expiry','有效期限','MM/YY','text',5)}${checkoutInput('cvv','安全碼','3 位數','text',3)}</div></section>
 <section class="checkout-section"><h3>${I('receipt',20)} 訂單內容</h3>${entries.map(([id,q])=>{let o=getOffer(id);return `<div class="checkout-line"><span>${esc(o.title)} × ${q}<small>${esc(o.spec)}</small></span><b>${money(o.price*q)}</b></div>`;}).join('')}<div class="checkout-grand"><span>合計</span><b>${money(cartTotal())}</b></div></section>
 ${state.difficulty==='hard'?`<button class="payment-deception" data-action="ad-click">${I('gift',20)}<span>神秘禮品加購：點我再省 99 元！</span>${I('chevron',16)}</button>`:''}
 <div class="safe-footer">${I('shield',17)} 模擬購物流程，不會連線付款，也不蒐集真實資料</div>
 </div><div class="checkout-bottom"><div class="between"><span>應付金額</span><b>${money(cartTotal())}</b></div><button class="orange-btn submit-order" data-action="submit-order">確認結帳・核對訂單 ${I('arrow',19)}</button><small>最後一步！資料錯誤或買到盜版皆立即失敗。</small></div>`,'cart');}
function verifyOrder(fields){
 let mistakes=[],tasks=state.tasks,cartEntries=Object.entries(state.cart).filter(([,q])=>q>0);
 for(const task of tasks){const p=PRODUCT_MAP[task.pid],found=cartEntries.filter(([id])=>getOffer(id).pid===task.pid),validQty=found.filter(([id])=>{let o=getOffer(id);return o.authentic&&o.spec===task.spec;}).reduce((a,[,q])=>a+q,0);
 if(validQty!==task.qty){
   if(!found.length)mistakes.push(`漏買「${productTitle(p)}」（${task.spec}）`);
   else if(found.some(([id])=>!getOffer(id).authentic))mistakes.push(`「${productTitle(p)}」買到盜版商品`);
   else if(found.some(([id])=>getOffer(id).spec!==task.spec))mistakes.push(`「${productTitle(p)}」商品規格錯誤，指定為 ${task.spec}`);
   else mistakes.push(`「${productTitle(p)}」商品數量錯誤，應為 ${task.qty} 件`);
 }
 }
 for(const [id,q] of cartEntries){let o=getOffer(id),t=tasks.find(t=>t.pid===o.pid);if(!t)mistakes.push(`多買了任務以外的商品：「${o.title}」`);
 else if((!o.authentic||o.spec!==t.spec)&&!mistakes.some(s=>s.includes(productTitle(PRODUCT_MAP[o.pid]))))mistakes.push(`「${o.title}」不是符合任務的正版規格`);
 }
 let p=state.profile;
 if((fields.name||'').trim()!==p.name)mistakes.push('收件人姓名不正確');
 if(digits(fields.phone)!==digits(p.phone))mistakes.push('聯絡電話不正確');
 if((fields.address||'').replace(/\s/g,'')!==p.address.replace(/\s/g,''))mistakes.push('配送地址不正確');
 if(digits(fields.card)!==digits(p.card))mistakes.push('遊戲卡號不正確');
 if((fields.expiry||'').replace(/\s/g,'')!==p.expiry)mistakes.push('有效期限不正確');
 if(digits(fields.cvv)!==digits(p.cvv))mistakes.push('安全碼不正確');
 return [...new Set(mistakes)];
}
function submitOrder(){const fields={};document.querySelectorAll('[data-input]').forEach(el=>fields[el.dataset.input]=el.value);stopTimer();const mistakes=verifyOrder(fields);
 const selectedSum=cartTotal(),minTotal=state.tasks.reduce((sum,t)=>sum+minGenuine(t)*t.qty,0);
 const breakdown=state.tasks.map(t=>{const p=PRODUCT_MAP[t.pid],picked=Object.entries(state.cart).filter(([id,q])=>q>0&&getOffer(id).pid===t.pid).map(([id,q])=>({offer:getOffer(id),qty:q}));return {name:productTitle(p),spec:t.spec,min:minGenuine(t),selected:picked.reduce((s,r)=>s+r.offer.price*r.qty,0),extra:picked.reduce((s,r)=>s+r.offer.price*r.qty,0)-minGenuine(t)*t.qty};});
 state.result={success:!mistakes.length,mistakes,time:state.elapsed,total:selectedSum,minTotal,extra:selectedSum-minTotal,breakdown};
 if(state.result.success)saveScore({difficulty:state.difficulty,ms:state.elapsed,extra:state.result.extra,total:selectedSum,at:new Date().toISOString()});
 view('result');}
function renderResult(){let r=state.result;if(!r)return renderHome();const success=r.success;return `<main class="result-screen screen-enter"><header class="simple-header"><div class="header-space"></div><span>購物成績單</span><div class="header-space"></div></header>
 <div class="result-scroll"><div class="result-banner ${success?'win':'lose'}"><span class="result-emoji">${success?'🎉':'💔'}</span><span class="eyebrow">${success?'ORDER SUCCESS':'ORDER FAILED'}</span><h1>${success?'購物挑戰成功！':'結帳失敗！'}</h1><p>${success?'五件商品正確，聯絡與付款資料都通過！':'送出後才揭曉答案，這局不會留下成績。'}</p></div>
 ${success?`<div class="result-time"><small>本次完成秒數</small><strong>${fmtTime(r.time)}</strong><span>${DIFF[state.difficulty].label} · 已存入此裝置紀錄</span></div>
 <section class="result-money"><div class="between"><h3>💸 你的冤大頭指數</h3><span class="tiny-label">跟最低正版價比</span></div>
 <div class="result-money-row"><span>本次實際花費</span><b>${money(r.total)}</b></div><div class="result-money-row"><span>五樣正版最低總價</span><b>${money(r.minTotal)}</b></div><div class="overpaid"><small>你總共多花了</small><strong>${money(r.extra)}</strong><span>${r.extra===0?'太狠了！你連一塊錢都不肯多花。':r.extra<=300?'手速和省錢都很有一套！':r.extra<=1000?'恭喜結帳成功！但錢包在流淚。':'VIP 冤大頭認證，商家看到你都笑了！'}</span></div>
 <div class="breakdown-header">商品價差明細</div>${r.breakdown.map(a=>`<div class="breakdown-row"><span>${esc(a.name)}<small>${esc(a.spec)} · 最低 ${money(a.min)}</small></span><b class="${a.extra>0?'red':''}">+${money(a.extra)}</b></div>`).join('')}</section>`:
 `<section class="mistakes"><h3>${I('alert',20)} 查驗發現 ${r.mistakes.length} 項錯誤</h3><p>本局已結束，商品真偽現在正式揭曉。</p>${r.mistakes.map(s=>`<div class="mistake-row">${I('close',17)} <span>${esc(s)}</span></div>`).join('')}</section>`}
 <section class="result-hint"><b>${success?'💡 想挑戰更快？':'🔍 下次記得...'}</b><p>${success?'試試比較不同正版賣場的價格，或挑戰干擾更多的難度。':'別只看星級和價格！可以打開「低評分」與「附照片」評論，假官方也可能寫得很像真的。'}</p></section>
 </div><div class="result-bottom"><button class="outline-btn" data-action="go-home">返回首頁</button><button class="primary-btn" data-action="again">再挑戰一次 ${I('reload',19)}</button></div></main>`;}
function loadScores(){try{return JSON.parse(localStorage.getItem('speedmart-scores-v1')||'[]')||[];}catch{return [];}}
function saveScore(r){try{let scores=loadScores();scores.push(r);localStorage.setItem('speedmart-scores-v1',JSON.stringify(scores.slice(-100)));}catch{toast('本機儲存空間不可用，成績未保存');}}
function renderInfoModal(){let m=state.modal;if(!m)return '';if(m==='help')return `<div class="modal-dimmer" data-action="close-modal"><section class="info-modal"><div class="between"><h2>📖 遊戲說明</h2><button class="icon-btn" data-action="close-modal">${I('close')}</button></div><p><b>① 接任務：</b>選擇難度，收到 5 件商品、收件資訊和虛構卡號。</p><p><b>② 開始計時：</b>自行搜尋商品、看評價、選正版及規格，隨時可打開側邊便利貼。</p><p><b>③ 完成結帳：</b>送出後才檢查真假、數量、收件資料與卡號；有錯即失敗。</p><p><b>④ 成功計分：</b>顯示完成秒數，以及跟同規格最低價正版相比多花多少錢。</p><div class="rule-highlight">✅ 官方「平台認證」徽章是真的，但店家名稱寫「官方」不代表有認證。</div><button class="primary-btn" data-action="close-modal">知道了，開始購物！</button></section></div>`;
 if(m==='records'){let scores=loadScores().sort((a,b)=>a.ms-b.ms),best=['easy','normal','hard'].map(k=>({key:k,score:scores.find(s=>s.difficulty===k)}));return `<div class="modal-dimmer" data-action="close-modal"><section class="info-modal"><div class="between"><h2>🏆 個人紀錄</h2><button class="icon-btn" data-action="close-modal">${I('close')}</button></div><p class="modal-note">記錄在這台裝置的瀏覽器，不是全球排行榜。</p>${best.map(({key,score})=>`<div class="score-line"><span>${DIFF[key].label}</span><b>${score?fmtTime(score.ms):'尚無紀錄'}</b></div>`).join('')}<div class="records-caption">共成功完成 ${scores.length} 次挑戰</div><button class="primary-btn" data-action="close-modal">關閉</button></section></div>`;}
 return '';}
function renderTaskDrawer(){if(!state.taskOpen)return '';return `<div class="drawer-dimmer" data-action="close-task"><aside class="task-drawer"><div class="drawer-top"><div><span class="eyebrow">SHOPPING MISSION</span><h2>我的便利貼 📝</h2></div><button class="icon-btn" data-action="close-task">${I('close',22)}</button></div><div class="drawer-timer">${I('clock',17)} 挑戰持續計時 <strong class="js-timer">${fmtTime(state.elapsed)}</strong></div><section class="drawer-note">${taskTabs()}<div class="note-main">${renderStickyContent(state.taskTab,true)}</div></section><button class="primary-btn drawer-close-btn" data-action="close-task">收起便利貼，繼續買 ${I('arrow',17)}</button></aside></div>`;}
function renderPromo(){if(!state.promoOpen)return '';let ads=[{emoji:'🎁',small:'恭喜被選中的購物高手！',title:'你抽中了神祕福袋！',text:'只要點擊領取，就有機會得到超值好禮。'},{emoji:'🎡',small:'限時優惠倒數中',title:'別滑了！先來抽大獎！',text:'你真的不想試試手氣嗎？全場都在等你。'},{emoji:'💎',small:'本週會員尊榮禮',title:'一鍵升級 VIP 購物！',text:'錯過今天，以後可能還是會看到。'}],a=ads[rnd(ads.length)];return `<div class="promo-dimmer"><section class="promo-card"><button class="promo-close" data-action="close-promo" aria-label="關閉廣告">${I('close',19)}</button><span class="promo-head">廣告・贊助內容</span><div class="promo-emoji">${a.emoji}</div><small>${a.small}</small><h2>${a.title}</h2><p>${a.text}</p><button class="promo-cta" data-action="ad-click">立即領取好禮 ${I('arrow',19)}</button><button class="promo-nope" data-action="close-promo">不用，我只想買東西</button></section></div>`;}
function renderOverlay(){let el=$('#overlays');if(el)el.innerHTML=renderTaskDrawer()+renderPromo()+renderInfoModal();}
function render(){let html='';switch(state.view){case 'home':html=renderHome();break;case 'levels':html=renderDifficulty();break;case 'task':html=renderTask();break;case 'shop':html=renderShop();break;case 'detail':html=renderDetail();break;case 'reviews':html=renderReviews();break;case 'cart':html=renderCart();break;case 'checkout':html=renderCheckout();break;case 'result':html=renderResult();break;default:html=renderHome();}
 $('#app').innerHTML=html+'<div id="overlays"></div>';renderOverlay();}
function addCart(id){if(!getOffer(id))return;state.cart[id]=(state.cart[id]||0)+1;toast('已加入購物車！結帳前仍可更改。');}
function goHome(){if(state.startedAt){stopTimer();state.cart={};}state.modal=null;state.taskOpen=false;state.promoOpen=false;state.view='home';render();}
function handleAction(a,btn){const id=btn.dataset.id;
 switch(a){
 case 'choose-difficulty':state.view='levels';render();break;
 case 'select-level':newRound(btn.dataset.level);break;
 case 'begin':startRound();break;
 case 'go-home':goHome();break;
 case 'go-shop':view('shop');break;
 case 'go-search':view('shop');setTimeout(()=>$('#shop-search')?.focus(),30);break;
 case 'go-cart':view('cart');break;
 case 'go-checkout':if(qtyTotal())view('checkout');break;
 case 'open-offer':state.activeOffer=id;state.reviewFilter='all';view('detail');break;
 case 'back-detail':view('detail');break;
 case 'reviews':state.reviewFilter='all';view('reviews');break;
 case 'review-filter':state.reviewFilter=btn.dataset.filter;render();break;
 case 'category':state.category=btn.dataset.cat;render();break;
 case 'clear-search':state.search='';render();break;
 case 'add-cart':addCart(id);render();break;
 case 'buy-now':addCart(id);view('cart');break;
 case 'increase':state.cart[id]=(state.cart[id]||0)+1;render();break;
 case 'decrease':state.cart[id]=Math.max(0,(state.cart[id]||0)-1);if(!state.cart[id])delete state.cart[id];render();break;
 case 'open-task':state.taskOpen=true;state.promoOpen=false;renderOverlay();break;
 case 'close-task':state.taskOpen=false;renderOverlay();break;
 case 'task-tab':state.taskTab=btn.dataset.tab;if(state.view==='task')render();else renderOverlay();break;
 case 'submit-order':submitOrder();break;
 case 'again':newRound(state.difficulty);break;
 case 'show-help':state.modal='help';renderOverlay();break;
 case 'show-records':state.modal='records';renderOverlay();break;
 case 'close-modal':state.modal=null;renderOverlay();break;
 case 'close-promo':state.promoOpen=false;renderOverlay();break;
 case 'ad-click':state.promoOpen=false;renderOverlay();toast('這是廣告陷阱！還好沒有真的付款 😅');break;
 default:break;
 }
}
document.addEventListener('click',event=>{const el=event.target.closest('[data-action]');if(!el||el.disabled)return;if((el.classList.contains('modal-dimmer')||el.classList.contains('drawer-dimmer'))&&event.target!==el)return;handleAction(el.dataset.action,el);});
document.addEventListener('input',event=>{const el=event.target;if(el.id==='shop-search'){state.search=el.value;let result=$('#catalogResults');if(result)result.innerHTML=listingHtml();}});
document.addEventListener('change',event=>{if(event.target.id==='sort-select'){state.sort=event.target.value;let result=$('#catalogResults');if(result)result.innerHTML=listingHtml();}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(state.taskOpen){state.taskOpen=false;renderOverlay();}else if(state.promoOpen){state.promoOpen=false;renderOverlay();}else if(state.modal){state.modal=null;renderOverlay();}}});
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
render();
