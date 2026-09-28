const btn=document.getElementById('menuBtn'),nav=document.getElementById('nav'),theme=document.getElementById('theme');
btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}));
theme.addEventListener('click',()=>{document.body.classList.toggle('light');theme.textContent=document.body.classList.contains('light')?'☾':'☼'});
document.getElementById('year').textContent=new Date().getFullYear();
const links=[...nav.querySelectorAll('a')];const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}),{rootMargin:'-25% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(s=>obs.observe(s));
