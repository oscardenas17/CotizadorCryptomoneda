class Interfaz {

    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }


  construirSelect (){
      APIcotizador.obtenerMonedasAPI()
        .then(monedas =>{
            for(const [key,value] of Object.entries(monedas.monedas.Data)){
                
            }
           
        })
  }

  mostrarMensaje(mensaje, clases) {
    const div = document.createElement("div");
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));

    //Seleccionar mensajesen html
    const divMensaje = document.querySelector(".mensajes");
    divMensaje.appendChild(div);

    //Mostrar mensaje
    setTimeout(() => {
      document.querySelector(".mensajes div").remove();
    }, 3000);
  }
}
