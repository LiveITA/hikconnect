(()=>{
const techCss=document.createElement('link');techCss.rel='stylesheet';techCss.href='technology-v2.css';document.head.appendChild(techCss);
const systemSection=document.querySelector('.section.system');
if(systemSection){
  const techSection=document.createElement('section');
  techSection.className='section tech-platform';
  techSection.id='tecnologia';
  techSection.innerHTML=`<div class="shell tech-layout"><div class="tech-copy"><p class="eyebrow">La tecnologia Timeless</p><h2>Un soggiorno intero dentro una webapp. Una proprietà intera sotto controllo.</h2><p class="lead">L'ospite non deve scaricare nulla: dalla webapp Timeless gestisce check-in, accessi, guida della casa, assistenza e servizi. Il proprietario ottiene una struttura più efficiente, controllabile e protetta, anche quando si trova lontano.</p><div class="tech-pills"><div class="tech-pill"><strong>1 webapp</strong><span>Check-in, soggiorno, smart home, assistenza ed esperienze nello stesso percorso.</span></div><div class="tech-pill"><strong>24/7</strong><span>Controllo operativo, notifiche e customer care senza interrompere il partner locale.</span></div><div class="tech-pill"><strong>&gt;50%</strong><span>Riduzione possibile dei consumi evitabili grazie a sensori, regole e spegnimenti automatici.</span></div></div><div class="tech-guest-owner"><article class="tech-side-card"><span>Per gli ospiti</span><h3>Tutto il soggiorno nel telefono</h3><p>Documenti e check-in prima dell'arrivo; porte, luci e climatizzazione durante il soggiorno; guide, extra, supporto e checkout fino alla partenza.</p><div class="tech-flow"><i>Check-in</i><i>Smart access</i><i>Luci</i><i>Clima</i><i>Guide</i><i>Assistenza</i></div></article><article class="tech-side-card"><span>Per i proprietari</span><h3>Più controllo, meno sprechi</h3><p>Prenotazioni, ricavi, interventi e stato dell'immobile sono visibili da remoto. Le automazioni limitano luci e climatizzazione quando la casa è vuota o le finestre sono aperte.</p><div class="tech-flow"><i>Consumi</i><i>Automazioni</i><i>Alert</i><i>Manutenzioni</i><i>Report</i></div></article></div><div class="tech-promise"><b>Il risultato:</b> un'esperienza più semplice per l'ospite e, negli immobili idonei e correttamente configurati, una riduzione di oltre il 50% dei consumi evitabili legati soprattutto a climatizzazione, luci e periodi di assenza.</div></div><div class="tech-lab"><div class="tech-lab-label"><span>Timeless connected stay</span><span class="tech-live-dot">sistemi online</span></div><div class="tech-devices"><div class="guest-phone"><div class="guest-screen"><div class="guest-hero"><small>Il tuo soggiorno</small><h3>Casa sul mare</h3><p>Polignano a Mare · 4 notti</p><div class="stay-progress"><i></i></div></div><div class="guest-body"><div class="guest-status"><b>Check-in completato</b><span>Casa pronta</span></div><div class="smart-grid"><button type="button" class="smart-control" data-smart-control data-on="Porta aperta" data-off="Tocca per aprire"><span class="smart-icon">↗</span><b>Porta d'ingresso</b><small>Tocca per aprire</small></button><button type="button" class="smart-control active" data-smart-control data-on="Luci accese" data-off="Luci spente"><span class="smart-icon">☼</span><b>Luci</b><small>Luci accese</small></button><button type="button" class="smart-control active" data-smart-control data-on="24 °C · Comfort" data-off="Eco · 20 °C"><span class="smart-icon">❄</span><b>Climatizzazione</b><small>24 °C · Comfort</small></button><button type="button" class="smart-control" data-smart-control data-on="Chat aperta" data-off="Disponibile 24/7"><span class="smart-icon">24</span><b>Assistenza</b><small>Disponibile 24/7</small></button></div><div class="guest-assistance"><i>TP</i><div><b>Serve qualcosa?</b><small>Il team Timeless risponde in chat, 24 ore su 24.</small></div></div></div></div></div><div class="owner-console"><div class="owner-head"><div><small>Dashboard proprietario</small><h3>Controllo proprietà</h3></div><span class="owner-badge">Automazioni attive</span></div><div class="energy-card"><div class="energy-number"><strong>&gt;50%</strong><span>riduzione dei consumi evitabili in configurazioni idonee</span></div><div class="energy-chart" aria-label="Riduzione indicativa dei consumi"><i class="energy-bar"></i><i class="energy-bar"></i><i class="energy-bar"></i><i class="energy-bar saved"></i><i class="energy-bar saved"></i><i class="energy-bar saved"></i></div></div><div class="automation-list"><div class="automation"><i>01</i><div><b>Ospite fuori casa</b><small>Climatizzazione portata automaticamente in modalità eco</small></div><em></em></div><div class="automation"><i>02</i><div><b>Finestra aperta</b><small>Condizionatore sospeso per evitare dispersioni</small></div><em></em></div><div class="automation"><i>03</i><div><b>Checkout rilevato</b><small>Luci e clima spenti, accessi aggiornati</small></div><em></em></div><div class="automation"><i>04</i><div><b>Consumo anomalo</b><small>Alert immediato a Timeless e al team operativo</small></div><em></em></div></div><p class="tech-footnote"><b>Nota:</b> il risparmio dipende da impianti, isolamento, configurazione, stagione e comportamento degli ospiti; il dato evidenzia il potenziale sui consumi evitabili, non una garanzia uniforme per ogni immobile.</p></div></div></div></div>`;
  systemSection.insertAdjacentElement('afterend',techSection);
  const nav=document.querySelector('.nav-pill');
  const bookingLink=nav&&nav.querySelector('a[href="#prenotazione"]');
  if(nav&&bookingLink&&!nav.querySelector('a[href="#tecnologia"]')){const techLink=document.createElement('a');techLink.href='#tecnologia';techLink.textContent='La tecnologia';nav.insertBefore(techLink,bookingLink);}
  techSection.querySelectorAll('[data-smart-control]').forEach(button=>button.addEventListener('click',()=>{const active=button.classList.toggle('active');const status=button.querySelector('small');if(status)status.textContent=active?button.dataset.on:button.dataset.off;}));
}

function setupMobileMenu(){
  const inner=document.querySelector('.header-inner');
  const nav=document.querySelector('.nav-pill');
  if(!inner||!nav||inner.querySelector('.mobile-menu-toggle'))return;
  nav.id=nav.id||'primary-navigation';
  const toggle=document.createElement('button');
  toggle.type='button';
  toggle.className='mobile-menu-toggle';
  toggle.setAttribute('aria-controls',nav.id);
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','Apri il menu');
  toggle.innerHTML='<span></span><span></span><span></span><b>Menu</b>';
  inner.appendChild(toggle);
  const backdrop=document.createElement('button');
  backdrop.type='button';
  backdrop.className='mobile-menu-backdrop';
  backdrop.setAttribute('aria-label','Chiudi il menu');
  document.body.appendChild(backdrop);
  let open=false;
  const setOpen=(next,restoreFocus=false)=>{
    open=next;
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Chiudi il menu':'Apri il menu');
    nav.classList.toggle('mobile-open',open);
    backdrop.classList.toggle('mobile-open',open);
    document.body.classList.toggle('mobile-menu-open',open);
    if(open){const first=nav.querySelector('a');if(first)first.focus({preventScroll:true});}
    else if(restoreFocus)toggle.focus({preventScroll:true});
  };
  toggle.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();setOpen(!open);});
  backdrop.addEventListener('click',()=>setOpen(false,true));
  nav.addEventListener('click',event=>{if(event.target.closest('a'))setOpen(false);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&open)setOpen(false,true);});
  addEventListener('resize',()=>{if(innerWidth>=800&&open)setOpen(false);},{passive:true});
}
setupMobileMenu();

const euro=new Intl.NumberFormat('it-IT',{style:'currency',currency:'EUR',maximumFractionDigits:0});
const num=new Intl.NumberFormat('it-IT');
const params=new URLSearchParams(location.search);
const partner=(params.get('partner')||params.get('azienda')||params.get('nome')||'').trim().replace(/[<>]/g,'').slice(0,80);
const set=(selector,text)=>{const el=document.querySelector(selector);if(el)el.textContent=text};

function personalizeVisibleCopy(name){
  const roleLabel=document.querySelector('.role.partner .role-label');
  if(roleLabel)roleLabel.textContent=`${name} · team territoriale`;
  document.querySelectorAll('.timeline .step small').forEach(el=>{if(el.textContent.trim()==='Partner locale')el.textContent=name;});
  const calcTitle=document.querySelector('.calculator .calc-top b');
  if(calcTitle)calcTitle.textContent=`Simulazione annuale · portafoglio ${name}`;
  const footerLabels=document.querySelectorAll('footer .footer-inner span');
  if(footerLabels[0])footerLabels[0].textContent=`${name} · partner territoriale in Puglia`;

  const replacements=[
    ['Il partner viene coinvolto',`Il team di ${name} viene coinvolto`],
    ['Il partner territoriale esegue',`${name} esegue`],
    ['Il partner non deve',`${name} non deve`],
    ['Il partner coordina',`${name} coordina`],
    ['Il partner entra',`${name} entra`],
    ['Il partner vede',`${name} vede`],
    ['Il partner prepara',`${name} prepara`],
    ['Il partner concorda',`${name} concorda`],
    ['il partner concorda',`${name} concorda`],
    ['il partner resta',`${name} resta`],
    ['il partner concentra',`${name} concentra`],
    ['il partner non anticipa',`${name} non anticipa`],
    ['senza interrompere il partner locale',`senza interrompere ${name}`],
    ['pagata direttamente al partner territoriale',`pagata direttamente a ${name}`],
    ['pagati al partner',`pagati a ${name}`],
    ['venduti dal partner',`venduti da ${name}`],
    ['del partner territoriale',`di ${name}`],
    ['al partner territoriale',`a ${name}`],
    ['per il partner territoriale',`per ${name}`],
    ['dal partner territoriale',`da ${name}`],
    ['del partner locale',`di ${name}`],
    ['al partner locale',`a ${name}`],
    ['per il partner locale',`per ${name}`],
    ['dal partner locale',`da ${name}`],
    ['del partner',`di ${name}`],
    ['al partner',`a ${name}`],
    ['per il partner',`per ${name}`],
    ['dal partner',`da ${name}`],
    ['Il partner locale',name],
    ['il partner locale',name],
    ['Il partner territoriale',name],
    ['il partner territoriale',name]
  ];

  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
    const parent=node.parentElement;
    if(!parent||parent.closest('script,style,noscript'))return NodeFilter.FILTER_REJECT;
    return node.nodeValue&&node.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
  }});
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    let text=node.nodeValue;
    replacements.forEach(([from,to])=>{if(text.includes(from))text=text.split(from).join(to);});
    if(text!==node.nodeValue)node.nodeValue=text;
  });
}

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
  personalizeVisibleCopy(partner);
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
})();