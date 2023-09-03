const arrVentanas = document.querySelectorAll(".ventanaGenerica");
const vistaVentanas = document.querySelector(".vistaVentanas");

arrVentanas.forEach((e) =>
  e.addEventListener("dblclick", (event) => {
    crearVentana();
    console.log("click en ventana generica");
  })
);

function crearVentana() {
  const div = document.createElement("div");
  div.style.width = "550px"; // Ancho de la ventana
  div.style.height = "350px"; // Altura de la ventana
  div.style.backgroundColor = "white"; // Color de fondo
  div.style.border = "2px solid #ccc"; // Borde
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.justifyContent = "space-Between";
  div.style.position = "absolute";
  div.style.left = "100px";
  div.style.zIndex = "100";
  div.innerHTML = `
            <div class="w-full h-10 bg-blue-600 flex justify-between items-center font-bold">
                <h2 class="text-white">ventana generica</h2>
                <button class="btnCierre bg-gray-200 px-1 text-black border-gray-600 border-2">X</button>
            </div>
            <div class="w-full h-auto bg-gray-300 border-b-2">
            <div class="">    
            <ul class="flex flex-row gap-x-6">
                    <li class="p-1 ">
                        <p class="">Archivo</p>
                    </li>
                    <li class="p-1 ">
                        <p>Edicion</p>
                    </li>
                    <li class="p-1 ">
                        <p>Ver</p>
                    </li>
                    <li class="p-1 ">
                        <p>Ir a</p>
                    </li>
                    <li class="p-1 ">
                        <p>Favoritos</p>
                    </li>
                    <li class="p-1 ">
                        <p>Archivo</p>
                    </li>
                    <li class="p-1 ">
                        <p>Ayuda</p>
                    </li>
                </ul>
                <ul class="flex flex-row" style="justify-content:space-around;">
                    <li>
                        <button style="padding-left:10px;padding-right:10px;">
                        <img style="transform: rotate(180deg);" class="h-10 w-10" src="./src/imagenes/arrow-icon.png">Atras
                        </button>
                    </li>
                    <li>
                        <button style="padding-left:10px;padding-right:10px;">
                        <img class="h-10 w-10" src="./src/imagenes/arrow-icon.png">Atras
                        </button>
                    </li>
                    <li style="border-right:1px solid #C6C0BE; padding-right:10px">
                        <button style="padding-left:10px;padding-right:10px;">
                            <img class="h-10 w-10" src="./src/iconos/directory_closed.ico">Subir
                        </button>
                    </li>
                    <li>
                        <button style="padding-left:10px;padding-right:10px;">
                        <img class="h-10 w-10" src="src/imagenes/cut-icon.png">Cortar
                        </button>
                    </li>
                    <li>
                        <button style="padding-left:10px;padding-right:10px;">
                        <img class="h-10 w-10" src="src/imagenes/paste-icon.png">Pegar
                        </button>
                    </li>
                    <li>
                        <button style="padding-left:10px;padding-right:10px;">
                        <img class="h-10 w-10" src="src/imagenes/copy-icon.png">Copiar
                        </button>
                    </li>
                   
                </ul> 
            </div>  
                   <div class="flex flex-row">
                        <label style="padding:2px">Direccion</label>
                        <select class="w-full h-4">
                            <option value="opcion1">C:/</option>
                            <option value="opcion1">D:/</option>
                            <option value="opcion1">Desktop:/</option>
                                                      
                        </select>
                    </div>
            </div>
            <div class="h-full">
                    <ul>
                    <li class="flex"><img class="h-6"src="./src/imagenes/win98-carpeta-icon.png">item 1</li>
                    <li class="flex"><img class="h-6"src="./src/imagenes/win98-carpeta-icon.png">item 1</li>
                    <li class="flex"><img class="h-6"src="./src/imagenes/win98-carpeta-icon.png">item 1</li>
                    <li class="flex"><img class="h-6"src="./src/imagenes/win98-carpeta-icon.png">item 1</li>
                    
                    </ul>
            </div>
            <div class="w-full h-10 bg-gray-200">
        </div>`;

  const btnCierre = div.querySelector(".btnCierre"); // Selección del botón dentro del div
  btnCierre.addEventListener("click", (e) => {
    vistaVentanas.removeChild(div); //lo eliminamos
    //div.style.display = 'none'; // Oculta la ventana al hacer clic en el botón de cierre
  });

  vistaVentanas.appendChild(div);
}
//temporal para crear los estilos y luego se borra
document.addEventListener("DOMContentLoaded", () => {
  crearVentana(); // Llama a la función crearVentana al cargar la página
});
