const promtInput = document.getElementById('promtInput');
const terminal = document.getElementById('terminal');
const terminalWindow = document.getElementById('terminalWindow');
const date = document.getElementById('date');

const ventana=document.querySelector(".ventana");
const msDos=document.querySelector(".msDos");
const cerrarVentana=document.querySelector(".cerrarVentana");
//ponemos el focus desde el comienzo y agregamos un evenclick para la ventana
promtInput.focus();
date.innerText = new Date().toDateString();
terminalWindow.addEventListener('click', () => promtInput.focus());

//ingreso de "comandos"
promtInput.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    enterCommand(event);
  }
})

msDos.addEventListener("dblclick",()=>{
  ventana.classList.remove("hidden");
  terminal.innerHTML=`<div>Successful login - <span id="date"></span></div>
  <div>Mi Portfolio</div>
  Hola! Bienvenidos a mi portfolio, para ver la lista de commandos ingresá --> <span class="text-green-500">help</span>`;

});
cerrarVentana.addEventListener("click",()=>{
  ventana.classList.add("hidden");
});

const enterCommand = (event) => {
  const promtElement = document.getElementById('promptClone').cloneNode(true);
  promtElement.classList.remove('hidden');
  promtElement.getElementsByClassName('promtCloneInput')[0].innerHTML = event.target.value;
  promtElement.setAttribute('id', null);
  promtElement.getElementsByClassName('promtCloneContent')[0].appendChild(selectCommandBlock(event.target.value));

  terminal.appendChild(promtElement);

  promtInput.value = '';
  promtInput.scrollIntoView({block: 'start'});
}


const selectCommandBlock = (command) => {
  const lowerCommand = command.toLowerCase()
  switch (lowerCommand) {
    case 'help':
    case 'about':
    case 'social':
    case 'skills':
    case 'education':
    case 'experience':
    case 'projects':
      return getCommandTemplate(lowerCommand);
    case 'clear':
      return clearCommand();
    default:
      return notFoundCommand(command);
  }
}

const getCommandTemplate = (command) => {
  const element = document.getElementById(command).cloneNode(true);
  element.classList.remove('hidden');
  element.setAttribute('id', null);
  return element;
}

const clearCommand = () => {
  terminal.innerHTML = '';
  const element = document.createElement('span');
  return element;
}

const notFoundCommand = (command) => {
  const element = document.createElement('span');
  element.innerText = `C:\> ${command}: command not found`;
  element.style.color="red";
  return element;
}