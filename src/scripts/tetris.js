const iconoTetris = document.querySelector(".tetrisApp");
const contenedorTetris = document.querySelector(".vistaVentanas");
let ventanaAbiertaTetris=false;



iconoTetris.addEventListener("dblclick", (e) => {
    if(!ventanaAbiertaTetris){
      crearVentanaTetris();
      ventanaAbiertaTetris=true; 
    }
   
  });

  function crearVentanaTetris() {
    
    //cremos ventana principal
    const div = document.createElement("div");
    div.style.width = "auto"; // Ancho de la ventana
    div.style.height = "auto"; // Altura de la ventana
    div.style.backgroundColor = "#333"; // Color de fondo
    div.style.border = "2px solid #ccc"; // Borde
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "space-Between";
    div.style.position = "absolute";
    div.style.zIndex = "100";
    div.style.left="28vw";
    div.style.top="10vh";
    
  
    div.innerHTML = `
              <div class="w-full h-full">
                <div class="w-full flex items-center justify-between">
                    <div class="w-full h-auto text-white">
                       <strong>Puntuacion: <span></span></strong>
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
                <div class="app w-full h-full" style="background-color:#000;">
                    <canvas></canvas>
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
    btnFotter.innerHTML = `<img style="width:24px;height:auto;" src="./src/imagenes/tetris-64.png"><p>Tetris</p>`;
    //hover:shadow-inner2-hover hover:border-b-white hover:border-r-white h-full w-20"
  
    btnCierre.addEventListener("click", (e) => {
      vistaVentanas.removeChild(div);
      visorVetanasFooter.removeChild(btnFotter);
      ventanaAbiertaTetris=false;
      canvas=null;
     //lo eliminamos
      //div.style.display = 'none'; // Oculta la ventana al hacer clic en el botón de cierre
    });
    btnMinimizar.addEventListener("click", (e) => {
      div.style.display = "none";
      pausa=!pausa;
    });
  
    btnFotter.addEventListener("click", (e) => {
        pausa=!pausa;
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
  
    contenedorTetris.appendChild(div);
    //falta agregar la ventana al footer con display none para minimizar
    visorVetanasFooter.appendChild(btnFotter);

    const canvas = div.querySelector("canvas");
    const context = canvas.getContext("2d");
    
    
    //score
    const scoreHtml = div.querySelector("span");
    let score = 0;
    let pausa = false;
    //pausa
    
    //valores del tablero y las piezas
    const BLOCK_SIZE = 20;
    const BOARD_WIDTH = 14;
    const BOARD_HEIGHT = 25;
    
    //dimensionamos el canvas
    canvas.width = BLOCK_SIZE * BOARD_WIDTH;
    canvas.height = BLOCK_SIZE * BOARD_HEIGHT;
    
    //escalamos los pixeles para que cuadre con las dimensiones del canvas
    context.scale(BLOCK_SIZE, BLOCK_SIZE);
    //3. board
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2],
      [2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 3, 3, 3, 2],
    ];
    
    //4. pieza player
    
    const piece = {
      position: { x: 5, y: 5 },
      shape: [
        [1, 1],
        [1, 1],
      ],
    };
    
    //todas las piezas del juego
    const PIECES = [
      [
        [1, 1],
        [1, 1],
      ],
      [[2, 2, 2, 2]],
      [
        [0, 3, 0],
        [3, 3, 3],
      ],
      [
        [4, 4, 0],
        [0, 4, 4],
      ],
      [
        [5, 0],
        [5, 0],
        [5, 5],
      ],
    ];
    const PIECECOLORS = {
      0: "black",
      1: "#e74c3c",
      2: "#9b59b6",
      3: "#2ecc71",
      4: " #f1c40f",
      5: "#3498db",
    };
    
    //2. game loop
    let dropCounter = 0;
    let lastTime = 0;
    
    function update(time = 0) {
      if (!pausa) {
        const deltaTime = time - lastTime;
        lastTime = time;
    
        dropCounter += deltaTime;
        //pausa
    
        if (dropCounter > 1000) {
          piece.position.y++;
          dropCounter = 0;
          if (checkCollision()) {
            piece.position.y--;
            solidifyPiece();
            removeRows();
          }
        }
        draw();
      }
      //le pasa por parametro un valor de time
      window.requestAnimationFrame(update);
    }
    
    //dibujamos el canvas
    function draw() {
      //fondo del canvas
      context.fillStyle = "#000";
      context.fillRect(0, 0, canvas.width, canvas.height);
    
      //borde de piezas
      context.strokeStyle = "#ccc";
      context.lineWidth = 0.1;
      //pintamos el canvas inicial
      board.forEach((row, y) => {
        row.forEach((value, x) => {
          switch (value) {
            case 1: {
              context.fillStyle = PIECECOLORS[value];
              context.fillRect(x, y, 1, 1);
              context.strokeRect(x, y, 1, 1);
              break;
            }
            case 2: {
              context.fillStyle = PIECECOLORS[value];
              context.fillRect(x, y, 1, 1);
              context.strokeRect(x, y, 1, 1);
              break;
            }
            case 3: {
              context.fillStyle = PIECECOLORS[value];
              context.fillRect(x, y, 1, 1);
              context.strokeRect(x, y, 1, 1);
              break;
            }
            case 4: {
              context.fillStyle = PIECECOLORS[value];
              context.fillRect(x, y, 1, 1);
              context.strokeRect(x, y, 1, 1);
              break;
            }
            case 5: {
              context.fillStyle = PIECECOLORS[value];
              context.fillRect(x, y, 1, 1);
              context.strokeRect(x, y, 1, 1);
              break;
            }
          }
        });
      });
      //pintamos la pieza del player
    
      piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            context.fillStyle = PIECECOLORS[value];
            context.fillRect(piece.position.x + x, piece.position.y + y, 1, 1);
            context.strokeRect(piece.position.x + x, piece.position.y + y, 1, 1);
          }
        });
      });
      scoreHtml.innerText = score;
    }
    //eventos de teclas
    document.addEventListener("keydown", (e) => {
      if (e.key == "ArrowLeft") {
        piece.position.x--;
        if (checkCollision()) {
          piece.position.x++;
        }
      }
      if (e.key == "ArrowRight") {
        piece.position.x++;
        if (checkCollision()) {
          piece.position.x--;
        }
      }
      if (e.key == "ArrowDown") {
        piece.position.y++;
        if (checkCollision()) {
          piece.position.y--;
          solidifyPiece();
          removeRows();
        }
      }
      if (e.key == "ArrowUp") {
        //rotamos la pieza. cambiamos las columnas por filas
        const rotate = [];
        for (let i = 0; i < piece.shape[0].length; i++) {
          const row = [];
          for (let j = piece.shape.length - 1; j >= 0; j--) {
            row.push(piece.shape[j][i]);
          }
          rotate.push(row);
        }
        //nos aseguramos que se pueda rotar. si no vuelve a la posicion de rotacion valida anterior
        const previusShape = piece.shape;
        piece.shape = rotate;
        if (checkCollision()) {
          piece.shape = previusShape;
        }
      }
      if (e.key == "Enter") {
        pausa = !pausa;
       
        divPausa.classList.toggle("desactivado")
        
      }
      //console.log(pausa);
    });
    //funcion que chekea colision con el tablero y piezas
    function checkCollision() {
      return piece.shape.find((row, y) => {
        return row.find((value, x) => {
          return (
            //posicion absoluta del tablero a partir de la suma de
            //la posicion relativa dentro la pieza y su punto de origen
            //Si board[y + piece.position.y]? es null o undefined,
            // esto evitará errores de acceso a propiedades y simplemente devolverá undefined.
            //quedaria undefined != 0 --> true
            value != 0 && board[y + piece.position.y]?.[x + piece.position.x] != 0
          );
        });
      });
    }
    
    function solidifyPiece() {
      piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          switch (value) {
            case 1: {
              board[y + piece.position.y][x + piece.position.x] = 1;
              break;
            }
            case 2: {
              board[y + piece.position.y][x + piece.position.x] = 2;
              break;
            }
            case 3: {
              board[y + piece.position.y][x + piece.position.x] = 3;
              break;
            }
            case 4: {
              board[y + piece.position.y][x + piece.position.x] = 4;
              break;
            }
            case 5: {
              board[y + piece.position.y][x + piece.position.x] = 5;
              break;
            }
          }
        });
      });
      //get random piece
      piece.shape = PIECES[Math.floor(Math.random() * PIECES.length)];
      //reset position
      piece.position.x = Math.floor(BOARD_WIDTH / 2 - 2);
      piece.position.y = 0;
      if (checkCollision()) {
        window.alert("GAME OVER!");
        board.forEach((row) => {
          row.fill(0);
        });
      }
    }
    
    function removeRows() {
      const rowsToRemove = [];
    
      board.forEach((row, y) => {
        if (row.every((value) => value != 0)) {
          rowsToRemove.push(y);
        }
      });
      rowsToRemove.forEach((y) => {
        board.splice(y, 1);
        const newRow = Array(BOARD_WIDTH).fill(0);
        board.unshift(newRow);
        score += 10;
      });
    }
    update();
}




