(()=>{
const euro=new Intl.NumberFormat('it-IT',{style:'currency',currency:'EUR',maximumFractionDigits:0});
const num=new Intl.NumberFormat('it-IT');
const params=new URLSearchParams(location.search);
const partner=(params.get('partner')||params.get('azienda')||params.get('nome')||'').trim().replace(/[<>]/g,'').slice(0,80);
const set=(selector,text)=>{const el=document.querySelector(selector);if(el)el.textContent=text};
if(partner){
  document.title=`Timeless Puglia × ${partner}`;
  const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=`Una proposta territoriale Timeless Puglia pensata per ${partner}.`;
  set('[data-personal-eyebrow]',`Una proposta territoriale per ${partner}`);
  set('[data-personal-hero]',`Timeless mette a disposizione tecnologia, brand, revenue management e assistenza continua. ${partner} porta presenza, velocità e conoscenza reale del territorio.`);
  set('[data-personal-tag] span',`Timeless Puglia × ${partner}`);
  document.querySelectorAll('[data-partner]').forEach(el=>el.textContent=partner);
  set('[data-personal-closing]',`La bellezza ci ha dato il punto di partenza. ${partner} può aiutarci a darle scala.`);
  set('[data-personal-badge]',`Una visione condivisa con ${partner}`);
  set('[data-extra-sentence]',`Il servizio extra venduto da ${partner} rimane interamente a ${partner}.`);
}
const properties=document.getElementById('properties');
const bookings=document.getElementById('bookings');
const commissions=document.getElementById('commissions');
function calc(){
  const propertyCount=Number(properties.value);
  const bookingsPerProperty=Number(bookings.value);
  const commissionsPerProperty=Number(commissions.value);
  const totalBookings=propertyCount*bookingsPerProperty;
  const totalCommissions=propertyCount*commissionsPerProperty;
  const cleaning=totalBookings*60;
  const maintenance=totalCommissions*.10;
  const operating=(totalCommissions-maintenance)*.30;
  const total=cleaning+maintenance+operating;
  set('#propertiesOut',num.format(propertyCount));
  set('#bookingsOut',num.format(bookingsPerProperty));
  set('#commissionsOut',euro.format(commissionsPerProperty));
  set('#portfolioScale',`${num.format(propertyCount)} ${propertyCount===1?'immobile':'immobili'} · ${num.format(totalBookings)} prenotazioni annuali`);
  set('#portfolioBase',`${euro.format(totalCommissions)} generati dal portafoglio`);
  set('#operatingFee',euro.format(operating));
  set('#cleaningFee',euro.format(cleaning));
  set('#maintenanceFee',euro.format(maintenance));
  set('#partnerTotal',euro.format(total));
  set('#partnerTotalInline',euro.format(total));
  set('#monthlyTotal',euro.format(total/12));
  const subject=partner||'il partner locale';
  set('[data-calc-partner]',`Scenario annuale per ${subject}, su ${num.format(propertyCount)} ${propertyCount===1?'immobile':'immobili'}`);
}
[properties,bookings,commissions].forEach(el=>el&&el.addEventListener('input',calc));
calc();
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const progress=document.querySelector('.progress i');
const hero=document.querySelector('.hero-bg');
addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.width=`${max?scrollY/max*100:0}%`;if(hero&&scrollY<innerHeight*1.1)hero.style.transform=`translate3d(0,${scrollY*.08}px,0) scale(1.02)`;},{passive:true});
})();