let luna= document.getElementById('luna');
let estrellas= document.getElementById('estrellas');
let monta_behind= document.getElementById('monta_behind');
let monta_front= document.getElementById('estrellas');
let texto=document.getElementById('texto');
let boton=document.getElementById('boton');
let header=document.querySelector('header');

window.addEventListener('scroll',function(){
    let valor=this.window.scrollY;
    estrellas.style.left=valor * 0.25 +'px';
    luna.style.top=valor * 1.25+'px';
   monta_behind.style.top=valor*0.5+'px';  
   monta_front.style.top=valor*0+'px'; 
   texto.style.marginRight=valor*4+'px'; 
   texto.style.marginTop=valor*1.5+'px'; 
   boton.style.marginTop=valor*1.5+'px'; 
   header.style.top=valor*0.5+'px';

})