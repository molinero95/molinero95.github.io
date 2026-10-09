import { DAY, today, iso, validate, percentage, calendarDuration, percentDate, nextAnniversary, addYears, makeCalendar } from './dates.mjs';
import { startAds } from './ads.mjs';
const $ = id => document.getElementById(id);
const fmt = new Intl.NumberFormat('es-ES');
const pct = value => value < 100 && value >= 99.95 ? '>99,9' : new Intl.NumberFormat('es-ES', {minimumFractionDigits:1, maximumFractionDigits:1}).format(value);
const dateText = day => new Intl.DateTimeFormat('es-ES',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(day * DAY));
const shortDate = day => new Intl.DateTimeFormat('es-ES',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(day * DAY));
const STORE = 'historia-de-dos:v1';
const fields = ['birth','start','partnerBirth','wedding','target','name','partnerName','targetLabel'];
let state = null;
let values = null;
let lastDay = today();
let demoMode = false;
function readValues() { return Object.fromEntries(fields.map(id => [id, $(id).value.trim()])); }
function setText(id, text) { $(id).textContent = text; }
function durationText(d) { return `${d.years} ${d.years === 1 ? 'año' : 'años'}, ${d.months} ${d.months === 1 ? 'mes' : 'meses'} y ${d.days} ${d.days === 1 ? 'día' : 'días'}`; }
function persist() {
  try {
    if ($('remember').checked) { localStorage.setItem(STORE,JSON.stringify(values)); setText('storage-status','Datos guardados en este dispositivo.'); }
    else { localStorage.removeItem(STORE); setText('storage-status',''); }
  } catch { setText('storage-status','Tu navegador no permite guardar datos. Puedes seguir usando la calculadora.'); }
}
function eventNode(title, date, symbol) {
  const el = document.createElement('article'); el.className = 'event';
  const icon = document.createElement('span'); icon.className = 'event-icon'; icon.textContent = symbol; icon.setAttribute('aria-hidden','true');
  const info = document.createElement('div');
  const name = document.createElement('p'); name.className = 'event-title'; name.textContent = title;
  const time = document.createElement('p'); time.className = 'event-date'; time.textContent = dateText(date);
  info.append(name,time);
  const remaining = date - state.at;
  const count = document.createElement('p'); count.className = 'event-count';
  const num = document.createElement('strong'); num.textContent = remaining === 0 ? 'Hoy' : fmt.format(Math.abs(remaining));
  count.append(num,document.createTextNode(remaining === 0 ? '¡A celebrar!' : remaining > 0 ? 'días' : 'días atrás'));
  const button = document.createElement('button'); button.type = 'button'; button.className = 'calendar-button'; button.textContent = '+'; button.setAttribute('aria-label',`Añadir ${title} al calendario`);
  button.addEventListener('click', () => download(new Blob([makeCalendar(date,title)],{type:'text/calendar;charset=utf-8'}),'historia-de-dos.ics'));
  el.append(icon,info,count,button); return el;
}
function render() {
  const {birth,start,partner,wedding,target,at} = state;
  const days = at - start, p = percentage(birth,start,at), d = calendarDuration(start,at);
  $('empty').hidden = true; $('results').hidden = false; $('future').hidden = false;
  setText('as-of',`A ${shortDate(at)}`);
  setText('story-title', values.name ? `${values.name}, este es tu tiempo a su lado.` : 'De tu vida, a su lado.');
  setText('life-percent',pct(p));
  setText('hero-caption',`${fmt.format(days)} días compartidos de tus ${fmt.format(at-birth)} días de vida.`);
  $('bar-before').style.width = `${100-p}%`; $('bar-together').style.width = `${p}%`;
  $('life-bar').setAttribute('aria-label',`${pct(p)} % de tu vida con tu pareja.`);
  setText('duration',`${d.years} ${d.years === 1 ? 'año' : 'años'}`);
  setText('duration-detail',`${d.months} meses y ${d.days} días más`);
  setText('together-days',fmt.format(days));
  setText('weeks',`${fmt.format(Math.floor(days/7))} semanas y ${days%7} días · ${fmt.format(days*24)} horas equivalentes`);
  $('partner-stat').hidden = partner === null;
  if (partner !== null) { setText('partner-title',values.partnerName || 'Tu pareja'); setText('partner-percent',`${pct(percentage(partner,start,at))} %`); }
  const age = calendarDuration(birth,start);
  setText('start-age',`${age.years} ${age.years === 1 ? 'año' : 'años'}`);
  setText('start-age-detail',`Tu edad el ${shortDate(start)}`);
  const anniversary = nextAnniversary(start,at);
  const events = [{title:`Vuestro ${anniversary.years}.º aniversario`,date:anniversary.date,symbol:'♡'}];
  const nextDays = (Math.floor(days/1000)+1)*1000;
  events.push({title:`${fmt.format(nextDays)} días juntos`,date:start+nextDays,symbol:'✦'});
  const nextP = [25,50,75,90].find(n=>n>p+1e-8);
  if(nextP) { const date=percentDate(birth,start,nextP); if(date!==null) events.push({title:`${nextP} % de tu vida juntos`,date,symbol:'∞'}); }
  if(wedding!==null) { const wed = nextAnniversary(wedding,at); events.push({title:`${wed.years} ${wed.years===1?'año':'años'} de casados`,date:wed.date,symbol:'◇'}); }
  if(target!==null) events.push({title:values.targetLabel || 'Vuestra fecha especial',date:target,symbol:'↗'});
  events.sort((a,b)=>(a.date<at)-(b.date<at) || a.date-b.date);
  $('events').replaceChildren(...events.map(e=>eventNode(e.title,e.date,e.symbol)));
  renderFuture(); renderAge();
}
function renderFuture() {
  if(!state) return;
  const p = Number($('percentage-target').value);
  setText('target-output',`${p} %`);
  const day = percentDate(state.birth,state.start,p), out = $('future-result'); out.replaceChildren();
  if(day===null) { const text=document.createElement('p'); text.textContent='Esta fecha está fuera del intervalo calculable (hasta el año 9999).'; out.append(text); return; }
  const heading=document.createElement('h3'); heading.textContent=dateText(day);
  const description=document.createElement('p');
  if(day<=state.at) description.textContent=`¡Ya alcanzaste este hito! Tenías ${durationText(calendarDuration(state.birth,day))}.`;
  else description.textContent=`Lo alcanzarás con ${durationText(calendarDuration(state.birth,day))}. Faltan ${fmt.format(day-state.at)} días.`;
  out.append(heading,description);
  if(state.partner!==null) { const partnerAge=document.createElement('p'); partnerAge.textContent=`${values.partnerName || 'Tu pareja'} tendrá ${durationText(calendarDuration(state.partner,day))}.`; out.append(partnerAge); }
}
function renderAge() {
  if(!state) return;
  const age = Number($('forecast-age').value);
  if(!Number.isInteger(age) || age<1 || age>120) {setText('age-result','Introduce una edad entre 1 y 120 años.'); return;}
  const date = addYears(state.birth,age);
  if(date<state.start) {setText('age-result','A esa edad vuestra relación todavía no había empezado.'); return;}
  setText('age-result',`El ${dateText(date)} ${date<state.at?'llevabas':'llevarás'} ${pct(percentage(state.birth,state.start,date))} % de tu vida con tu pareja: ${durationText(calendarDuration(state.start,date))} juntos.`);
}
$('dates-form').addEventListener('submit',event=>{
  event.preventDefault(); $('form-error').hidden = true;
  try { const candidate=readValues(); const result=validate(candidate); values=candidate; state=result; if(!demoMode)persist(); render(); setText('share-status',''); }
  catch(error) {setText('form-error',error.message); $('form-error').hidden = false;}
});
$('percentage-target').addEventListener('input',renderFuture);
$('forecast-age').addEventListener('input',renderAge);
$('dates-form').addEventListener('input',()=>{demoMode=false;});
$('remember').addEventListener('change',()=>{ if(values) persist(); else if(!$('remember').checked) {try {localStorage.removeItem(STORE);}catch{} } });
$('demo').addEventListener('click',()=>{
  demoMode=true;
  $('remember').checked=false;
  const at=today(), birth=addYears(at,-30), start=addYears(at,-10);
  const demo={birth:iso(birth), start:iso(start),partnerBirth:iso(addYears(at,-32)),name:'Alex',partnerName:'Dani',wedding:'',target:iso(at+100),targetLabel:'Nuestro próximo viaje'};
  fields.forEach(id=>$(id).value=demo[id] || ''); $('extra-inputs').open=true;
  $('dates-form').requestSubmit(); setText('storage-status','Ejemplo con datos ficticios. Sustitúyelos por los vuestros.');
});
$('clear').addEventListener('click',()=>{
  demoMode=false;
  $('dates-form').reset(); $('extra-inputs').open=false; state=null; values=null;
  try{localStorage.removeItem(STORE);setText('storage-status','Datos borrados.');}catch{setText('storage-status','El navegador ha bloqueado el acceso al almacenamiento.');}
  $('results').hidden=true; $('future').hidden=true; $('empty').hidden=false; $('form-error').hidden=true; setText('as-of',''); setText('share-status','');
});
function download(blob,filename) {
  const url=URL.createObjectURL(blob), a=document.createElement('a'); a.href=url; a.download=filename; a.click(); setTimeout(()=>URL.revokeObjectURL(url),10000);
}
function shareText() {
  const names=values.name&&values.partnerName?`${values.name} + ${values.partnerName}\n`:'';
  return `${names}Llevamos ${fmt.format(state.at-state.start)} días juntos: ${pct(percentage(state.birth,state.start,state.at))} % de mi vida. ♡\nDescubre vuestra historia: https://molinero95.github.io/historia-de-dos/`;
}
$('share').addEventListener('click',async()=>{
  if(!state) return;
  try {
    if(navigator.share) {await navigator.share({title:'Nuestra historia de dos',text:shareText()}); setText('share-status','Compartido.');}
    else if(navigator.clipboard && window.isSecureContext) {await navigator.clipboard.writeText(shareText());setText('share-status','Texto copiado. Puedes pegarlo en WhatsApp o donde quieras.');}
    else {download(new Blob([shareText()],{type:'text/plain;charset=utf-8'}),'nuestra-historia.txt');setText('share-status','Texto descargado para compartir.');}
  } catch(error) {if(error.name!=='AbortError') setText('share-status','No se pudo compartir. Puedes guardar la tarjeta.');}
});
$('download').addEventListener('click',()=>{
  if(!state)return;
  const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1080;
  const ctx=canvas.getContext('2d');
  if(!ctx) {setText('share-status','Tu navegador no permite generar la tarjeta. Usa Compartir.'); return;}
  ctx.fillStyle='#fbf8f3';ctx.fillRect(0,0,1080,1080);ctx.strokeStyle='#d8c5bd';ctx.lineWidth=2;ctx.strokeRect(50,50,980,980);
  ctx.textAlign='center';ctx.fillStyle='#722f45';ctx.font='32px Georgia';ctx.fillText('historia de dos.',540,140);
  ctx.font='110px Georgia';ctx.fillText('♡',540,310);
  ctx.fillStyle='#33282a';ctx.font='40px Georgia';ctx.fillText('Una vida. Muchos días juntos.',540,410);
  const name=values.name&&values.partnerName?`${values.name} + ${values.partnerName}`:'Nuestra historia';
  ctx.font='28px sans-serif';ctx.fillStyle='#756b68';ctx.fillText(name,540,475,840);
  ctx.font='170px Georgia';ctx.fillStyle='#722f45';ctx.fillText(`${pct(percentage(state.birth,state.start,state.at))} %`,540,665);
  ctx.font='30px sans-serif';ctx.fillStyle='#756b68';ctx.fillText('de mi vida a tu lado',540,730);
  ctx.fillStyle='#33282a';ctx.font='40px Georgia';ctx.fillText(`${fmt.format(state.at-state.start)} días juntos`,540,840);
  ctx.fillStyle='#756b68';ctx.font='22px sans-serif';ctx.fillText(`A ${dateText(state.at)}`,540,900);
  ctx.font='19px sans-serif';ctx.fillText('molinero95.github.io/historia-de-dos',540,980);
  canvas.toBlob(blob=>{if(blob){download(blob,'nuestra-historia.png');setText('share-status','Tarjeta guardada. Contiene estadísticas y los nombres que hayas añadido.');}else setText('share-status','No se pudo generar la tarjeta.');},'image/png');
});
$('ad-privacy').addEventListener('click',()=>{
  if(window.googlefc?.showRevocationMessage) window.googlefc.showRevocationMessage();
  else setText('share-status','Las preferencias de publicidad aún no están disponibles.');
});
for(const id of ['birth','start','partnerBirth','wedding']) $(id).max=iso(today());
try {
  const saved=localStorage.getItem(STORE);
  if(saved) { const parsed=JSON.parse(saved); if(!parsed || typeof parsed!=='object') throw new Error('Datos inválidos'); fields.forEach(id=>{if(typeof parsed[id]==='string') $(id).value=parsed[id].slice(0,60);}); $('remember').checked=true; $('extra-inputs').open=Boolean(parsed.partnerBirth||parsed.wedding||parsed.target||parsed.name||parsed.partnerName); $('dates-form').requestSubmit(); }
} catch {setText('storage-status','No se pudieron recuperar los datos guardados. Introduce las fechas de nuevo.');}
// Refresh statistics when the civil date changes, including returning to a background tab.
function refreshDay() {
  const at=today(); if(at===lastDay)return; lastDay=at;
  for(const id of ['birth','start','partnerBirth','wedding']) $(id).max=iso(at);
  if(state){state=validate(values,at);render();}
}
setInterval(refreshDay,30000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshDay();});
startAds();
