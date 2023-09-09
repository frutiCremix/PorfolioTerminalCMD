const proyectos = [
  {
    id: "pokedex",
    url: "./",
    icon: "src/imagenes/011-html-5.png",
    texto: "Demo",
  },
  {
    id: "Web Simulador Ferroviario",
    url: "https://simuladorferroviario.netlify.app/",
    icon: "src/imagenes/icons8-tailwind-css-48.png",
    texto: "Demo",
  },
];
const profolio = [
  {
    id: "porfolio general",
    url: "https://github.com/frutiCremix",
    icon: "src/imagenes/008-github.png",
    texto: "gitHub",
  },
  {
    id: "mvc",
    url: "https://github.com/frutiCremix/gestorBiblioteca",
    icon: "src/imagenes/008-github.png",
    texto: "gitHub",
  },
  {
    id: "Web Simulador Ferroviario",
    url: "https://github.com/frutiCremix/webSimulador",
    icon: "src/imagenes/008-github.png",
    texto: "gitHub",
  },
  {
    id: "pokedex",
    url: "https://github.com/frutiCremix/Pokedex",
    icon: "src/imagenes/008-github.png",
    texto: "gitHub",
  },
  {
    id: "CodeWise",
    url: "https://github.com/frutiCremix/CodeWise",
    icon: "src/imagenes/008-github.png",
    texto: "gitHub",
  },
  {
    id: "traductor",
    url: "https://github.com/frutiCremix/traductor",
    icon: "src/imagenes/008-github.png",
    texto: "gitHub",
  },
  {
    id: "frutiPaint",
    url: "https://github.com/frutiCremix/frutiPaint",
    icon: "src/imagenes/008-github.png",
    texto: "gitHub",
  },
 
  
];
const tecnologias = [
  {
    id: "javascript",
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    icon: "src/imagenes/009-js.png",
    texto: "MDN web Docs",
  },
  {
    id: "nodeJs",
    url: "https://nodejs.org",
    icon: "src/imagenes/012-nodejs.png",
    texto: "NodeJS",
  },
  {
    id: "express",
    url: "https://expressjs.com/es/",
    icon: "src/imagenes/icons8-express-js-50.png",
    texto: "Express",
  },
  {
    id: "React",
    url: "https://es.react.dev/",
    icon: "src/imagenes/icons8-reaccionar-40.png",
    texto: "React",
  },
  {
    id: "Vite",
    url: "https://vitejs.dev/",
    icon: "src/imagenes/vite.png",
    texto: "Vite",
  },

  {
    id: "tailwindCss",
    url: "https://tailwindcss.com/",
    icon: "src/imagenes/icons8-tailwind-css-48.png",
    texto: "tailwindCss",
  },
  {
    id: "html",
    url: "https://developer.mozilla.org/es/docs/Web/HTML",
    icon: "src/imagenes/011-html-5.png",
    texto: "MDN web Docs",
  },
  {
    id: "css",
    url: "https://developer.mozilla.org/es/docs/Web/CSS",
    icon: "src/imagenes/010-css-3.png",
    texto: "MDN web Docs",
  },
  {
    id: "MySQL",
    url: "https://www.mysql.com",
    icon: "src/imagenes/013-mysql.png",
    texto: "MySQL",
  },
  {
    id: "Java",
    url: "https://www.java.com/es/",
    icon: "src/imagenes/icons8-java-48.png",
    texto: "Java",
  },
  {
    id: "GIT",
    url: "https://git-scm.com/",
    icon: "src/imagenes/icons8-git-48.png",
    texto: "GIT",
  },
  {
    id: "GitHub",
    url: "https://github.com/frutiCremix",
    icon: "src/imagenes/008-github.png",
    texto: "GitHub",
  },
  {
    id: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: "src/imagenes/icons8-typescript-48.png",
    texto: "TypeScript",
  },
  {
    id: "NPM",
    url: "https://www.npmjs.com/",
    icon: "src/imagenes/icons8-npm-48.png",
    texto: "NPM",
  },
];
const cv=[
  {
    id: "Curriculum vitae",
    url: "src/CV.pdf",
    icon: "src/imagenes/icons8-pdf-48.png",
    texto: "CV.pdf",
  },
]
//iconos
const arrVentanas = document.querySelectorAll(".ventanaGenerica");
const vistaVentanas = document.querySelector(".vistaVentanas");
const visorVetanasFooter=document.querySelector("#visorVentanasFooter");

arrVentanas.forEach((e) =>
  e.addEventListener("dblclick", (event) => {
    //console.log(event.target.name);
    switch (event.target.name) {
      //crear un json y pasarlo como parametro
      case "proyectos":
        crearVentana(proyectos,"proyectos","src/imagenes/011-html-5.png");
        break;
      case "gitHub":
        crearVentana(profolio,"gitHub","src/imagenes/008-github.png");
        break;
      case "tecnologias":
        crearVentana(tecnologias,"tecnologias","src/imagenes/009-js.png");
        break;
      case "CV":
        crearVentana(cv,"Curriculum","src/imagenes/icons8-pdf-48.png");
        break;
    }
  })
);

function crearVentana(obj,titulo,icono) {
  let r = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

  //cremos ventana principal
  const div = document.createElement("div");
  div.style.width = "550px"; // Ancho de la ventana
  div.style.height = "350px"; // Altura de la ventana
  div.style.backgroundColor = "white"; // Color de fondo
  div.style.border = "2px solid #ccc"; // Borde
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.justifyContent = "space-Between";
  div.style.position = "absolute";
  div.style.left = `${r}px`;
  div.style.top = `${r}px`;
  div.style.zIndex = "100";
  div.style.overflow="hidden";
  div.innerHTML = `
            <div class="w-full h-10 bg-blue-600 flex justify-between items-center font-bold">
              <h2 class="text-white">${titulo}</h2>
              <div class="flex flex-end h-full">
                <button class="btnMinimizar bg-gray-200 px-1 text-black border-gray-600 border-2">-</button>
                <button class="btnCierre bg-gray-200 px-1 text-black border-gray-600 border-2">X</button>
              </div>
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
                        <img style="transform: rotate(180deg); width:24px;height:auto;" src="./src/imagenes/arrow-icon.png">Atras
                        </button>
                    </li>
                    <li>
                        <button style="padding-left:10px;padding-right:10px;">
                        <img style="width:24px;height:auto;" src="./src/imagenes/arrow-icon.png">Atras
                        </button>
                    </li>
                    <li style="border-right:1px solid #C6C0BE; padding-right:10px">
                        <button style="padding-left:10px;padding-right:10px;">
                            <img style="width:24px;height:auto;" src="./src/iconos/directory_closed.ico">Subir
                        </button>
                    </li>
                    <li>
                        <button style="padding-left:10px;padding-right:10px;">
                        <img style="width:24px;height:auto;" src="src/imagenes/cut-icon.png">Cortar
                        </button>
                    </li>
                    <li>
                        <button style="padding-left:10px;padding-right:10px;">
                        <img style="width:24px;height:auto;" src="src/imagenes/paste-icon.png">Pegar
                        </button>
                    </li>
                    <li>
                        <button style="padding-left:10px;padding-right:10px;">
                        <img style="width:24px;height:auto;" src="src/imagenes/copy-icon.png">Copiar
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
            <div style="height:300px; overflow-y: scroll;">
              ${crearlista(obj).outerHTML}
            </div>
            <div class="w-full h-6 bg-gray-200">
        </div>`;

  const btnCierre = div.querySelector(".btnCierre"); // Selección del botón dentro del div
  const btnMinimizar=div.querySelector(".btnMinimizar");

  
  const btnFotter = document.createElement("btn");
  btnFotter.style.display="flex";
  btnFotter.style.flexDirection="row";
  btnFotter.style.alignItems="center";
  btnFotter.style.justifyContent="center";
  btnFotter.style.border="2px solid #fff";
  btnFotter.style.borderTop="1px solid #000";
  btnFotter.style.borderLeft="1px solid #000";
  btnFotter.style.minWidth="60px";
  btnFotter.style.height="100%";
  btnFotter.classList.add("hover:bg-blue-700");
  btnFotter.innerHTML=`<img style="width:25%;height:auto;" src=${icono}><p>${titulo}</p>`;
  //hover:shadow-inner2-hover hover:border-b-white hover:border-r-white h-full w-20"

  btnCierre.addEventListener("click", (e) => {
    vistaVentanas.removeChild(div);
    visorVetanasFooter.removeChild(btnFotter); //lo eliminamos
    //div.style.display = 'none'; // Oculta la ventana al hacer clic en el botón de cierre
  });
  btnMinimizar.addEventListener("click",(e)=>{
    div.style.display="none";
  });
  
  btnFotter.addEventListener("click",(e)=>{
 
    if(div.style.display=="none"){
      div.style.display="flex";
      btnFotter.style.border = "1px solid #fff"; // Cambia el color de fondo al pasar el mouse
    btnFotter.style.borderLeft = "2px solid #000";
    btnFotter.style.borderTop = "2px solid #000";  
    }else{
      div.style.display="none";
      btnFotter.style.border = "2px solid #fff"; // Cambia el color de fondo al pasar el mouse
    btnFotter.style.borderRight = "2px solid #000";
    btnFotter.style.borderBottom = "2px solid #000";
    }
  });

  vistaVentanas.appendChild(div);
  //falta agregar la ventana al footer con display none para minimizar
  visorVetanasFooter.appendChild(btnFotter);

}
//temporal para crear los estilos y luego se borra
/*document.addEventListener("DOMContentLoaded", () => {
  crearVentana(); // Llama a la función crearVentana al cargar la página
});*/
function crearlista(obj) {
  let arr = [];
  obj.forEach((e) => {
    arr.push(e);
  });

  let lista = document.createElement("ul");
    lista.style.paddingLeft="2px";
  for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement("li");
    listItem.style.display = "flex";
    listItem.style.gap="10px"; // Crear un elemento <li>
    let elem = `<img class="h-6" src="${obj[i].icon}">${obj[i].id}<a href="${obj[i].url}" target="_blank"><span class="text-blue-500">${obj[i].texto}</span></a>`;
    listItem.innerHTML = elem; // Establecer el contenido del elemento <li>
    lista.appendChild(listItem); // Agregar el elemento <li> a la lista
  }
  return lista;
}
