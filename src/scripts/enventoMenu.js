const menu=document.querySelector(".menuDesplegable");
const btn=document.querySelector(".btnInicio");
const btnApagar=document.querySelector(".btnApagar");
const audioApagado=document.getElementById('audioApagado');
const btnEncender=document.querySelector(".btnEncender");

const escritorio=document.querySelector(".escritorio");
const pantallaInicio=document.querySelector(".pantallaInicio");
const pantallaNegra=document.querySelector(".pantallaNegra");

btn.addEventListener("click",()=>{
    
   menu.classList.toggle('hidden');
   menu.classList.toggle('flex');
});

btnApagar.addEventListener("click",()=>{
    
    escritorio.classList.toggle('hidden');
    pantallaInicio.classList.toggle('hidden');
    audioApagado.currentTime = 8;
    audioApagado.play();
    setTimeout(cierreWin98, 5000);
});
btnEncender.addEventListener('click',()=>{
    location.reload();
});
function cierreWin98(){
    audioApagado.pause();
  audioApagado.currentTime = 8;
    pantallaInicio.classList.toggle('hidden');
    pantallaNegra.classList.toggle('hidden');
    pantallaNegra.classList.add('flex');
}