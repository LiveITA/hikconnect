(()=>{
const techCss=document.createElement('link');techCss.rel='stylesheet';techCss.href='technology-v2.css';document.head.appendChild(techCss);
const motionCss=document.createElement('link');motionCss.rel='stylesheet';motionCss.href='motion-v3.css';document.head.appendChild(motionCss);
const systemSection=document.querySelector('.section.system');
if(systemSection){
  const techSection=document.createElement('section');
  techSection.className='section tech-platform';
  techSection.id='tecnologia';
  techSection.innerHTML=`<div class="shell tech-layout"><div class="tech-copy reveal"><p class="eyebrow">La tecnologia Timeless</p><h2>Un soggiorno intero dentro una webapp. Una proprietà intera sotto controllo.</h2><p class="lead">L'ospite non deve scaricare nulla: dalla webapp Timeless gestisce check-in, accessi, guida della casa, assistenza e servizi. Il proprietario ottiene una struttura più efficiente, controllabile e protetta, anche quando si trova lontano.</p><div class="tech-pills"><div class="tech-pill"><strong>1 webapp</strong><span>Check-in, soggiorno, smart home, assistenza ed esperienze nello stesso percorso.</span></div><div class="tech-pill"><strong>24/7</strong><span>Controllo operativo, notifiche e customer care senza interrompere il partner locale.</span></div><div class="tech-pill"><strong>&gt;50%</strong><span>Riduzione possibile dei consumi evitabili grazie a sensori, regole e spegnimenti automatici.</span></div></div><div class="tech-guest-owner"><article class="tech-side-card"><span>Per gli ospiti</span><h3>Tutto il soggiorno nel telefono</h3><p>Documenti e check-in prima dell'arrivo; porte, luci e climatizzazione durante il soggiorno; guide, extra, supporto e checkout fino alla partenza.</p><div class="tech-flow"><i>Check-in</i><i>Smart access</i><i>Luci</i><i>Clima</i><i>Guide</i><i>Assistenza</i></div></article><article class="tech-side-card"><span>Per i proprietari</span><h3>Più controllo, meno sprechi</h3><p>Prenotazioni, ricavi, interventi e stato dell'immobile sono visibili da remoto. Le automazioni limitano luci e climatizzazione quando la casa è vuota o le finestre sono aperte.</p><div class="tech-flow"><i>Consumi</i><i>Automazioni</i><i>Alert</i><i>Manutenzioni</i><i>Report</i></div></article></div><div class="tech-promise"><b>Il risultato:</b> un'esperienza più semplice per l'ospite e, negli immobili idonei e correttamente configurati, una riduzione di oltre il 50% dei consumi evitabili legati soprattutto a climatizzazione, luci e periodi di assenza.</div></div><div class="tech-lab reveal"><div class="tech-lab-label"><span>Timeless connected stay</span><span class="tech-live-dot">sistemi online</span></div><div class="tech-devices"><div class="guest-phone"><div class="guest-screen"><div class="guest-hero"><small>Il tuo soggiorno</small><h3>Casa sul mare</h3><p>Polignano a Mare · 4 notti</p><div class="stay-progress"><i></i></div></div><div class="guest-body"><div class="guest-status"><b>Check-in completato</b><span>Casa pronta</span></div><div class="smart-grid"><button type="button" class="smart-control" data-smart-control data-on="Porta aperta" data-off="Tocca per aprire"><span class="smart-icon">↗</span><b>Porta d'ingresso</b><small>Tocca per aprire</small></button><button type="button" class="smart-control active" data-smart-control data-on="Luci accese" data-off="Luci spente"><span class="smart-icon">☼</span><b>Luci</b><small>Luci accese</small></button><button type="button" class="smart-control active" data-smart-control data-on="24 °C · Comfort" data-off="Eco · 20 °C"><span class="smart-icon">❄</span><b>Climatizzazione</b><small>24 °C · Comfort</small></button><button type="button" class="smart-control" data-smart-control data-on="Chat aperta" data-off="Disponibile 24/7"><span class="smart-icon">24</span><b>Assistenza</b><small>Disponibile 24/7</small></button></div><div class="guest-assistance"><i>TP</i><div><b>Serve qualcosa?</b><small>Il team Timeless risponde in chat, 24 ore su 24.</small></div></div></div></div></div><div class="owner-console"><div class="owner-head"><div><small>Dashboard proprietario</small><h3>Controllo proprietà</h3></div><span class="owner-badge">Automazioni attive</span></div><div class="energy-card"><div class="energy-number"><strong>&gt;50%</strong><span>riduzione dei consumi evitabili in configurazioni idonee</span></div><div class="energy-chart" aria-label="Riduzione indicativa dei consumi"><i class="energy-bar"></i><i class="energy-bar"></i><i class="energy-bar"></i><i class="energy-bar saved"></i><i class="energy-bar saved"></i><i class="energy-bar saved"></i></div></div><div class="automation-list"><div class="automation"><i>01</i><div><b>Ospite fuori casa</b><small>Climatizzazione portata automaticamente in modalità eco</small></div><em></em></div><div class="automation"><i>02</i><div><b>Finestra aperta</b><small>Condizionatore sospeso per evitare dispersioni</small></div><em></em></div><div class="automation"><i>03</i><div><b>Checkout rilevato</b><small>Luci e clima spenti, accessi aggiornati</small></div><em></em></div><div class="automation"><i>04</i><div><b>Consumo anomalo</b><small>Alert immediato a Timeless e al team operativo</small></div><em></em></div></div><p class="tech-footnote"><b>Nota:</b> il risparmio dipende da impianti, isolamento, configurazione, stagione e comportamento degli ospiti; il dato evidenzia il potenziale sui consumi evitabili, non una garanzia uniforme per ogni immobile.</p></div></div></div></div>`;
  systemSection.insertAdjacentElement('afterend',techSection);
  const nav=document.querySelector('.nav-pill');
  const bookingLink=nav&&nav.querySelector('a[href="#prenotazione"]');
  if(nav&&bookingLink){const techLink=document.createElement('a');techLink.href='#tecnologia';techLink.textContent='La tecnologia';nav.insertBefore(techLink,bookingLink);}
  techSection.querySelectorAll('[data-smart-control]').forEach(button=>button.addEventListener('click',()=>{const active=button.classList.toggle('active');const status=button.querySelector('small');if(status)status.textContent=active?button.dataset.on:button.dataset.off;}));
}
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
const motionScript=document.createElement('script');motionScript.src='motion-v3.js';motionScript.defer=true;document.body.appendChild(motionScript);
})();