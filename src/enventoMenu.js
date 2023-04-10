const menu=document.querySelector(".menuDesplegable");
const btn=document.querySelector(".btnInicio");

btn.addEventListener("click",()=>{
    console.log('click')
   menu.classList.toggle('hidden');
   menu.classList.toggle('flex');
});