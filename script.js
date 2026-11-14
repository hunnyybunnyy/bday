// Edit the messages in things.html and moments.html (data-modal-title and data-modal-body).
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.site-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const modal=document.getElementById('message-modal');if(modal){const title=document.getElementById('modal-title'),body=document.getElementById('modal-body'),close=modal.querySelector('.modal-close');let previousFocus=null;function hide(){modal.hidden=true;document.body.style.overflow='';previousFocus?.focus();}document.querySelectorAll('[data-modal-title]').forEach(card=>card.addEventListener('click',()=>{previousFocus=document.activeElement;title.textContent=card.dataset.modalTitle;body.textContent=card.dataset.modalBody;modal.hidden=false;document.body.style.overflow='hidden';close.focus();}));close.addEventListener('click',hide);modal.addEventListener('click',e=>{if(e.target===modal)hide()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)hide();if(e.key==='Tab'&&!modal.hidden){e.preventDefault();close.focus();}});}


/* === VISITS ===
 * Netlify Forms submissions appear in Netlify Dashboard > Forms > visit-events.
 * Only page name and event type are sent. No IP, device fingerprint, or password.
 * Form events require deployment on Netlify with form detection enabled.
 * 0810 is a friendly shared unlock code, NOT secure authentication.
 */
(function(){
 const KEY='honeyBirthdayUnlocked';
 const page=location.pathname.split('/').pop()||'index.html';
 function track(event,pageName){
   if(location.protocol==='file:'||!location.hostname||location.hostname==='localhost')return;
   const data=new URLSearchParams({'form-name':'visit-events',event,page:pageName||page});
   fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:data.toString(),keepalive:true}).catch(()=>{});
 }
 const gate=document.getElementById('birthdayGate');
 if(gate){
   if(sessionStorage.getItem(KEY)==='yes'){gate.remove();track('page-open',page);}
   else{
     document.body.style.overflow='hidden';
     const form=document.getElementById('unlockForm');
     form.addEventListener('submit',function(e){
       e.preventDefault();const code=document.getElementById('birthdayCode').value;
       const msg=document.getElementById('unlockFeedback');
       if(code!=='0810'){msg.textContent='Not quite! Try the little secret again. ♡';return;}
       sessionStorage.setItem(KEY,'yes');track('unlocked','birthday-envelope');
       msg.textContent='A little letter is opening for you…';gate.classList.add('opening');
       setTimeout(()=>{gate.classList.add('gate-hidden');document.body.style.overflow='';track('page-open',page);setTimeout(()=>gate.remove(),850)},1250);
     });
   }
 }else if(page!=='privacy.html'){
   if(sessionStorage.getItem(KEY)!=='yes'){location.replace('index.html');return;}
   track('page-open',page);
 }else{track('page-open',page)}
 const bloom=document.getElementById('bloomButton');
 if(bloom)bloom.addEventListener('click',()=>{
   const art=document.getElementById('bouquetArt');const note=document.getElementById('bouquetNote');
   art.classList.remove('blooming');void art.offsetWidth;art.classList.add('blooming');
   note.textContent='A bouquet of roses for you, baby. Because, of course, we love flowers, and you deserve all the love!♡';
   track('bouquet-opened','birthday-roses');
 });
})();
