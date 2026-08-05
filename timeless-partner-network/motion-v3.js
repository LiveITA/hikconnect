(()=>{
'use strict';
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));

function splitHeading(el){
  if(!el||el.dataset.motionSplit)return;
  el.dataset.motionSplit='true';
  let index=0;
  const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.nodeValue&&n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT});
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const frag=document.createDocumentFragment();
    node.nodeValue.split(/(\s+)/).forEach(part=>{
      if(!part)return;
      if(/^\s+$/.test(part)){frag.appendChild(document.createTextNode(part));return;}
      const span=document.createElement('span');span.className='motion-word';span.style.setProperty('--word-index',index++);span.textContent=part;frag.appendChild(span);
    });
    node.replaceWith(frag);
  });
}

function addHeroMotion(){
  const hero=$('.hero');if(!hero)return;
  for(let i=0;i<7;i++){
    const orb=document.createElement('i');orb.className='motion-orb';orb.style.left=`${8+Math.random()*84}%`;orb.style.top=`${18+Math.random()*62}%`;orb.style.setProperty('--dur',`${7+Math.random()*7}s`);orb.style.setProperty('--delay',`${-Math.random()*7}s`);orb.style.setProperty('--dx',`${-35+Math.random()*70}px`);hero.appendChild(orb);
  }
  const cue=document.createElement('span');cue.className='scroll-cue';cue.innerHTML='<span>Scorri</span><i></i>';hero.appendChild(cue);
}

function setupReveals(){
  const selectors=['.visual-card','.role','.system-card','.step','.booking-card','.promise-card','.eco-card','.tech-side-card','.calculator','.tech-pill','.automation','.value-point','.portfolio-strip'];
  const targets=$$(selectors.join(','));
  targets.forEach((el,i)=>{el.classList.add('motion-target');el.style.setProperty('--motion-delay',`${(i%4)*65}ms`)});
  if(reduce){targets.forEach(el=>el.classList.add('motion-seen'));return;}
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('motion-seen');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -4%'});
  targets.forEach(el=>io.observe(el));
}

function setupHeadingWords(){
  const headings=$$('h1,h2');headings.forEach(splitHeading);
  if(reduce){headings.forEach(h=>h.classList.add('words-in'));return;}
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('words-in');io.unobserve(entry.target)}}),{threshold:.3,rootMargin:'0px 0px -8%'});
  headings.forEach(h=>io.observe(h));
}

function setupBookingFlows(){
  const cards=$$('.booking-card');if(!cards.length)return;
  if(reduce){cards.forEach(c=>c.classList.add('motion-run'));return;}
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('motion-run');io.unobserve(entry.target)}}),{threshold:.22});
  cards.forEach(c=>io.observe(c));
}

function setupTilt(){
  if(!fine||reduce)return;
  const cards=$$('.visual-card,.role,.system-card,.step,.booking-card,.promise-card,.eco-card,.tech-side-card,.calculator');
  cards.forEach(card=>{
    card.classList.add('motion-glow');
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      card.style.setProperty('--rx',`${(0.5-y)*4.5}deg`);card.style.setProperty('--ry',`${(x-0.5)*5.5}deg`);card.style.setProperty('--mx',`${x*100}%`);card.style.setProperty('--my',`${y*100}%`);card.classList.add('motion-tilt');
    },{passive:true});
    card.addEventListener('pointerleave',()=>{card.classList.remove('motion-tilt');card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg')});
  });
}

function setupParallax(){
  if(reduce)return;
  const images=$$('.visual-card img');if(!images.length)return;
  let ticking=false;
  const update=()=>{const vh=innerHeight;images.forEach(img=>{const r=img.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const delta=(r.top+r.height/2-vh/2)/vh;img.style.setProperty('--parallax-y',`${clamp(-delta*28,-22,22)}px`)});ticking=false};
  const request=()=>{if(!ticking){requestAnimationFrame(update);ticking=true}};addEventListener('scroll',request,{passive:true});addEventListener('resize',request,{passive:true});request();
}

function setupTimeline(){
  const timeline=$('.timeline');if(!timeline||reduce)return;
  let ticking=false;const update=()=>{const r=timeline.getBoundingClientRect(),start=innerHeight*.78,end=innerHeight*.25-r.height;const p=clamp((start-r.top)/(start-end),0,1);timeline.style.setProperty('--timeline-progress',p);ticking=false};
  const request=()=>{if(!ticking){requestAnimationFrame(update);ticking=true}};addEventListener('scroll',request,{passive:true});request();
}

function setupNumberMotion(){
  const ids=['propertiesOut','bookingsOut','commissionsOut','operatingFee','cleaningFee','maintenanceFee','partnerTotalInline','partnerTotal','monthlyTotal'];
  const pulse=()=>ids.forEach(id=>{const el=document.getElementById(id);if(!el)return;el.classList.remove('number-bump');void el.offsetWidth;el.classList.add('number-bump')});
  $$('#properties,#bookings,#commissions').forEach(input=>input.addEventListener('input',()=>requestAnimationFrame(pulse)));
  const calc=$('.calculator');if(calc&&!reduce){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){pulse();io.disconnect()}}),{threshold:.3});io.observe(calc)}
}

function setupSmartRipples(){
  $$('[data-smart-control]').forEach(btn=>btn.addEventListener('pointerdown',e=>{const r=btn.getBoundingClientRect();btn.style.setProperty('--ripple-x',`${e.clientX-r.left}px`);btn.style.setProperty('--ripple-y',`${e.clientY-r.top}px`);btn.classList.remove('motion-ripple');void btn.offsetWidth;btn.classList.add('motion-ripple')}));
  $$('.energy-bar').forEach((bar,i)=>bar.style.setProperty('--bar-index',i));
}

function setupSpotlight(){
  if(!fine||reduce)return;
  const light=document.createElement('div');light.className='motion-spotlight';document.body.appendChild(light);
  let x=-999,y=-999,cx=x,cy=y,raf=0;const move=e=>{x=e.clientX-180;y=e.clientY-180;if(!raf)raf=requestAnimationFrame(draw)};const draw=()=>{cx+=(x-cx)*.17;cy+=(y-cy)*.17;light.style.transform=`translate3d(${cx}px,${cy}px,0)`;raf=(Math.abs(x-cx)+Math.abs(y-cy)>.6)?requestAnimationFrame(draw):0};addEventListener('pointermove',move,{passive:true});
}

function setupSectionRail(){
  if(!fine)return;
  const sections=[['top','Inizio'],['modello','Modello'],['tecnologia','Tecnologia'],['prenotazione','Prenotazione'],['valore','Valore'],['insieme','Insieme']].filter(([id])=>document.getElementById(id));
  if(sections.length<3)return;
  const rail=document.createElement('nav');rail.className='motion-rail';rail.setAttribute('aria-label','Avanzamento della storia');sections.forEach(([id,label])=>{const a=document.createElement('a');a.href=`#${id}`;a.title=label;a.setAttribute('aria-label',label);rail.appendChild(a)});document.body.appendChild(rail);
  const links=$$('a',rail);const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${entry.target.id}`));$$('.nav-pill a').forEach(a=>a.classList.toggle('motion-active',a.getAttribute('href')===`#${entry.target.id}`))}}),{rootMargin:'-42% 0px -48%',threshold:0});sections.forEach(([id])=>io.observe(document.getElementById(id)));
}

function setupMobileMenu(){
  const inner=$('.header-inner'),nav=$('.nav-pill');
  if(!inner||!nav||$('.mobile-menu-toggle',inner))return;
  nav.id=nav.id||'partner-site-navigation';
  const style=document.createElement('style');
  style.id='mobile-menu-v4-style';
  style.textContent=`
    .mobile-menu-toggle,.mobile-menu-backdrop{display:none}
    @media(max-width:799px){
      body.mobile-menu-open{overflow:hidden;touch-action:none}
      .mobile-menu-toggle{pointer-events:auto;position:relative;z-index:1004;width:48px;height:48px;border:1px solid rgba(255,255,255,.56);border-radius:999px;background:rgba(255,253,249,.94);box-shadow:0 12px 36px rgba(8,25,41,.18);backdrop-filter:blur(16px);display:grid;place-content:center;gap:4px;color:#263041;cursor:pointer;-webkit-tap-highlight-color:transparent}
      .mobile-menu-toggle span{display:block;width:20px;height:1.5px;border-radius:99px;background:currentColor;transition:transform .28s cubic-bezier(.2,.8,.2,1),opacity .2s}
      .mobile-menu-toggle b{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
      .mobile-menu-toggle[aria-expanded="true"] span:nth-child(1){transform:translateY(5.5px) rotate(45deg)}
      .mobile-menu-toggle[aria-expanded="true"] span:nth-child(2){opacity:0}
      .mobile-menu-toggle[aria-expanded="true"] span:nth-child(3){transform:translateY(-5.5px) rotate(-45deg)}
      .nav-pill{position:fixed!important;z-index:1003!important;top:70px!important;left:14px!important;right:14px!important;width:auto!important;max-height:calc(100svh - 88px);overflow:auto;display:grid!important;gap:5px!important;padding:10px!important;border-radius:24px!important;background:rgba(255,253,249,.98)!important;border:1px solid rgba(38,48,65,.12)!important;box-shadow:0 26px 70px rgba(8,25,41,.25)!important;backdrop-filter:blur(22px)!important;opacity:0;visibility:hidden;pointer-events:none!important;transform:translateY(-12px) scale(.98);transform-origin:top right;transition:opacity .24s ease,transform .3s cubic-bezier(.2,.8,.2,1),visibility .24s}
      .nav-pill.mobile-open{opacity:1;visibility:visible;pointer-events:auto!important;transform:none}
      .nav-pill a,.nav-pill a:not(:last-child){display:flex!important;align-items:center;justify-content:space-between;width:100%;padding:15px 16px!important;border-radius:15px!important;font-size:.9rem!important;line-height:1.2;background:transparent!important;color:#263041!important;text-align:left;border-bottom:1px solid rgba(38,48,65,.09);outline-offset:2px}
      .nav-pill a:last-child{border-bottom:0}
      .nav-pill a:after{content:'↘';font-size:1rem;color:#a07964;transition:transform .22s ease}
      .nav-pill a:active:after{transform:translate(2px,2px)}
      .mobile-menu-backdrop{display:block;position:fixed;z-index:895;inset:0;border:0;padding:0;background:rgba(22,28,38,.42);backdrop-filter:blur(4px);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .24s ease,visibility .24s}
      .mobile-menu-backdrop.mobile-open{opacity:1;visibility:visible;pointer-events:auto}
    }
    @media(min-width:800px){.mobile-menu-toggle,.mobile-menu-backdrop{display:none!important}}
  `;
  document.head.appendChild(style);
  const toggle=document.createElement('button');
  toggle.type='button';toggle.className='mobile-menu-toggle';toggle.setAttribute('aria-controls',nav.id);toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Apri il menu');toggle.innerHTML='<span></span><span></span><span></span><b>Menu</b>';
  inner.appendChild(toggle);
  const backdrop=document.createElement('button');
  backdrop.type='button';backdrop.className='mobile-menu-backdrop';backdrop.setAttribute('aria-label','Chiudi il menu');document.body.appendChild(backdrop);
  let open=false;
  const setOpen=(next,restoreFocus=false)=>{
    open=next;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Chiudi il menu':'Apri il menu');nav.classList.toggle('mobile-open',open);backdrop.classList.toggle('mobile-open',open);document.body.classList.toggle('mobile-menu-open',open);
    if(open){const first=$('a',nav);if(first)setTimeout(()=>first.focus({preventScroll:true}),180)}else if(restoreFocus)toggle.focus({preventScroll:true});
  };
  toggle.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();setOpen(!open)});
  backdrop.addEventListener('click',()=>setOpen(false,true));
  nav.addEventListener('click',event=>{if(event.target.closest('a'))setOpen(false)});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&open)setOpen(false,true)});
  addEventListener('resize',()=>{if(innerWidth>=800&&open)setOpen(false)},{passive:true});
}

function boot(){
  document.documentElement.classList.add('motion-ready');
  addHeroMotion();setupHeadingWords();setupReveals();setupBookingFlows();setupTilt();setupParallax();setupTimeline();setupNumberMotion();setupSmartRipples();setupSpotlight();setupSectionRail();setupMobileMenu();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();