const icono = document.querySelector(".pokedex");
const contenedor = document.querySelector(".vistaVentanas");
let ventanaAbierta=false;
const coloresTipos = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  fairy:'#d58bdf',
  default: '#2A1A1F',
};

icono.addEventListener("dblclick", (e) => {
  if(!ventanaAbierta){
    crearVentanaPokedex();
    setEventBuscar();
    ventanaAbierta=true;
  }
 
});

function crearVentanaPokedex() {
  let r = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

  //cremos ventana principal
  const div = document.createElement("div");
  div.style.width = "300px"; // Ancho de la ventana
  div.style.height = "420px"; // Altura de la ventana
  div.style.backgroundColor = "#ca4242"; // Color de fondo
  div.style.border = "2px solid #ccc"; // Borde
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.justifyContent = "space-Between";
  div.style.position = "absolute";
  div.style.left = `${r}px`;
  div.style.top = `${r}px`;
  div.style.zIndex = "100";
  div.style.overflow = "hidden";

  div.innerHTML = `
          
            <div style="display:flex;align-items:start;justify-content: space-between;background-color:#ff0000;padding:4px;clip-path: polygon(0 0, 100% 0, 100% 60%, 37% 60%, 22% 100%, 0 100%);"
              class= w-full h-14 shadow-lg">
              <div class="w-12 h-10">
                <button style="background-color:#08f;" class="w-10 h-10 border-2 border-black rounded-full"></button>
              </div>
              <div class="w-10 h-2 flex items-start justify-start">
                <button style="background-color:#ECDC5C;margin-right:4px" class="btnMinimizar w-4 h-2 border-2 border-white text-xs text-white rounded-full">
                  -
                </button>
                <button style="background-color:#EC801E;" class="btnCierre w-4 h-2 border-2 border-white text-xs text-white rounded-full">
                  X
                </button>
              </div>
            </div> 
            <div style="background-color:#ff0000;"class="w-full h-full border-t-2 border-t-white">
              <div style="height:40%"class="pokeVisor w-full flex items-center justify-center bg-black">

              </div>
              <div style="width:100%; height:205px;" class="flex flex-col">
                <div style="width:100%;"class="h-10 flex flex-row">
                  <div style="width:70%;">
                    <input style="width:75%;"class="inputBuscador"type="text" placeholder="pokemon name or ID"/>
                    <button style="border-radius:10px;"class="btnBuscador w-10 h-10 bg-black text-white font-bold text-xs">Buscar</button>
                  </div>  
                  <div style="width:30%;" class="pokeTipos items-center justify-center flex">
                    tipos
                  </div>
                </div>
                <div style="width:100%; height:100%; padding:4px;" class="flex flex-row items-center justify-between">
                  <div style="width:60%;border-radius:10px;margin-right:4px;padding:2px;"class="bg-gray-300 text-center h-full flex flex-col items-center justify-between">
                   <p class="pokeName font-bold"></p>
                   <p class="pokeDescription text-sm"></p>
                  </div>
                  <div style="width:40%;border-radius:10px;"class="pokeStats bg-gray-200 h-full flex flex-col items-center justify-center">
                    
                  </div>
                </div>
              </div>
            
            </div>      
          `;

  const btnCierre = div.querySelector(".btnCierre"); // Selección del botón dentro del div
  const btnMinimizar = div.querySelector(".btnMinimizar");
  
  const btnFotter = document.createElement("btn");
  btnFotter.style.display = "flex";
  btnFotter.style.flexDirection = "row";
  btnFotter.style.alignItems = "center";
  btnFotter.style.justifyContent = "center";
  btnFotter.style.border = "2px solid #fff";
  btnFotter.style.borderTop = "1px solid #000";
  btnFotter.style.borderLeft = "1px solid #000";
  btnFotter.style.minWidth = "60px";
  btnFotter.style.height = "100%";
  btnFotter.style.padding = "4px";
  btnFotter.style.paddingLeft = "1px";
  btnFotter.innerHTML = `<img style="width:24px;height:auto;" src="./src/imagenes/pokedex-ico.png"><p>Pokedex</p>`;
  //hover:shadow-inner2-hover hover:border-b-white hover:border-r-white h-full w-20"

  btnCierre.addEventListener("click", (e) => {
    vistaVentanas.removeChild(div);
    visorVetanasFooter.removeChild(btnFotter);
    ventanaAbierta=false; //lo eliminamos
    //div.style.display = 'none'; // Oculta la ventana al hacer clic en el botón de cierre
  });
  btnMinimizar.addEventListener("click", (e) => {
    div.style.display = "none";
  });

  btnFotter.addEventListener("click", (e) => {
    if (div.style.display == "none") {
      div.style.display = "flex";
      btnFotter.style.border = "1px solid #fff"; // Cambia el color de fondo al pasar el mouse
      btnFotter.style.borderLeft = "2px solid #000";
      btnFotter.style.borderTop = "2px solid #000";
    } else {
      div.style.display = "none";
      btnFotter.style.border = "2px solid #fff"; // Cambia el color de fondo al pasar el mouse
      btnFotter.style.borderRight = "2px solid #000";
      btnFotter.style.borderBottom = "2px solid #000";
    }
  });

  contenedor.appendChild(div);
  //falta agregar la ventana al footer con display none para minimizar
  visorVetanasFooter.appendChild(btnFotter);

  consulta("pikachu");
}




function consulta(nombre){
  
  const url='https://pokeapi.co/api/v2/pokemon/';
  
fetch(url+nombre)
.then(response=>response.json())
.then(data=>{
    //console.log(data);
    gestionInfo(data);
}).catch(err =>error());
    
}

function gestionInfo(data){
  //console.log(data.name);
      getName(data);
      getSprite(data.sprites.front_default);
      getStats(data.stats);
      getType(data.types);
      getDescription(data);
  }



function error(){
 
  console.log("ups algo paso")
}

function getName(data){
  
  document.querySelector(".pokeName").textContent=`${data.name.toUpperCase()}   ID: ${data.id}`;
 
}
function getSprite(data){
  
  document.querySelector(".pokeVisor").innerHTML=`<img style="width:150px;height:150px;" src="${data}">`;
}
function getStats(data){
  document.querySelector(".pokeStats").innerHTML=`<div class="hp">Hp= ${data[0].base_stat}</div>
                      <div class="atk">Atk=${data[1].base_stat}</div>
                      <div class="def">Def=${data[2].base_stat}</div>
                      <div class="satk">S.Atk=${data[3].base_stat}</div>
                      <div class="sdef">S.Def=${data[4].base_stat}</div>
                      <div class="speed">Speed=${data[5].base_stat}</div>`;
}
function getType(data){
  let tipos=data.map(item => item.type.name);
  
  let color1=coloresTipos[tipos[0]];
  let color2 = tipos[1] ? coloresTipos[tipos[1]] : coloresTipos.default;
  
  
  if(tipos.length>=2){
      document.querySelector(".pokeTipos").innerHTML=`<div style="min-width:40px;border-radius:10px;padding:4px;"class="text-white text-center text-xs flex items-center justify-center"id='div1'>${tipos[0]}</div><div style="min-width:40px;border-radius:10px;padding:4px;"class="text-white text-xs  flex items-center justify-center" id='div2'>${tipos[1]}</div>`;
      const div1=document.getElementById('div1');
      const div2=document.getElementById('div2');
      div1.style.background=color1;
      div2.style.background=color2;
  }else{ document.querySelector(".pokeTipos").innerHTML=`<div style="min-width:40px;border-radius:10px;padding:4px;" class="text-white text-center text-xs  flex items-center justify-center" id='div1'>${tipos[0]}</div>`;
      const div1=document.getElementById('div1');
      div1.style.background=color1;
  }

  
  
}
function getDescription(data){
  
  const url =`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`;
  const pokeDescription=document.querySelector(".pokeDescription");
  let text='';
  fetch(url)
  .then(response=>response.json())
  .then(data=>{
    //console.log(data.flavor_text_entries[26].flavor_text);
    pokeDescription.innerText=data.flavor_text_entries[26].flavor_text
  }).catch(err =>error());
  
}

//eventos del buscador
function setEventBuscar(){
  const btnBuscador=document.querySelector(".btnBuscador");
  const  inputBuscador=document.querySelector(".inputBuscador");
  btnBuscador.addEventListener('click',function(e){
   
    e.preventDefault();
    nombre=inputBuscador.value.toLowerCase();
  //impedimos que busquen sin ingresar valores
    if(nombre==""){console.log("cadena vacia");
    }else{consulta(nombre);}
    
  });

  inputBuscador.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita que el formulario se envíe si está en un formulario
      const nombre = inputBuscador.value.toLowerCase();
      if (nombre === "") {
        console.log("Cadena vacía");
      } else {
        consulta(nombre);
      }
    }
  });
}

