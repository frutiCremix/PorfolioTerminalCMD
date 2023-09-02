const promtInput = document.getElementById("promtInput");
const terminal = document.getElementById("terminal");
const terminalWindow = document.getElementById("terminalWindow");
const date = document.getElementById("date");
const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const ventana = document.querySelector(".ventana");
const msDos = document.querySelector(".msDos");
const cerrarVentana = document.querySelector(".cerrarVentana");
//colocamos hora y fecha en el footer
fecha.innerText = obtenerFecha();
hora.innerText = obtenerHora();
//ponemos el focus desde el comienzo y agregamos un evenclick para la ventana
promtInput.focus();
date.innerText = obtenerFecha();
terminalWindow.addEventListener("click", () => promtInput.focus());

//ingreso de "comandos"
promtInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    enterCommand(event);
  }
});

msDos.addEventListener("dblclick", () => {
  ventana.classList.remove("hidden");
  terminal.innerHTML = `<div>Successful login - <span id="date"></span></div>
  <div>Mi Portfolio</div>
  Hola! Bienvenidos a mi portfolio, para ver la lista de commandos ingresá --> <span class="text-green-500">help</span>`;
});
cerrarVentana.addEventListener("click", () => {
  ventana.classList.add("hidden");
});

const enterCommand = (event) => {
  const promtElement = document.getElementById("promptClone").cloneNode(true);
  promtElement.classList.remove("hidden");
  promtElement.getElementsByClassName("promtCloneInput")[0].innerHTML =
    event.target.value;
  promtElement.setAttribute("id", null);
  promtElement
    .getElementsByClassName("promtCloneContent")[0]
    .appendChild(selectCommandBlock(event.target.value));

  terminal.appendChild(promtElement);

  promtInput.value = "";
  promtInput.scrollIntoView({ block: "start" });
};

const selectCommandBlock = (command) => {
  const lowerCommand = command.toLowerCase();
  switch (lowerCommand) {
    case "help":
    case "about":
    case "social":
    case "skills":
    case "education":
    case "experience":
    case "projects":
      return getCommandTemplate(lowerCommand);
    case "clear":
      return clearCommand();
    default:
      return notFoundCommand(command);
  }
};

const getCommandTemplate = (command) => {
  const element = document.getElementById(command).cloneNode(true);
  element.classList.remove("hidden");
  element.setAttribute("id", null);
  return element;
};

const clearCommand = () => {
  terminal.innerHTML = "";
  const element = document.createElement("span");
  return element;
};

const notFoundCommand = (command) => {
  const element = document.createElement("span");
  element.innerText = `C:\> ${command}: command not found`;
  element.style.color = "red";
  return element;
};
function obtenerFecha() {
  const date = new Date();
  const fechaDia = date.getDate();
  const mes = date.getMonth() + 1;
  const anio = date.getFullYear();

  return `${fechaDia}/${mes}/${anio}`;
}
function obtenerHora() {
  const data = new Date();
  let hora = data.getHours();
  let  minutos = data.getMinutes();
  
  if(hora<=9){
    hora=`0${hora}`;
  }

  if (minutos <= 9) {
    minutos=`0${minutos}`;
  }
  return `${hora}:${minutos}`
}
