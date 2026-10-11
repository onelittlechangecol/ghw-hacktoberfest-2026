const $=id=>document.getElementById(id),f=n=>n.toFixed(2);
function calc(){const b=Math.max(0,+$('bill').value||0),t=Math.max(0,+$('tip').value||0),p=Math.max(1,Math.floor(+$('people').value||1));
const tip=b*t/100;$('tipAmt').textContent=f(tip);$('total').textContent=f(b+tip);$('each').textContent=f((b+tip)/p);}
['bill','tip','people'].forEach(i=>$(i).addEventListener('input',calc));
function setTheme(d){document.body.classList.toggle('dark',d);$('theme').textContent=d?'☀️ Light':'🌙 Dark';try{localStorage.setItem('dark',d?'1':'0')}catch(e){}}
$('theme').onclick=()=>setTheme(!document.body.classList.contains('dark'));
let s=null;try{s=localStorage.getItem('dark')}catch(e){}setTheme(s?s==='1':matchMedia('(prefers-color-scheme: dark)').matches);calc();
