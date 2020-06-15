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
            //crear select de opciones
            const select = document.querySelector('#criptomoneda');

            //iterar en los resultados de la api
            for(const [key,value] of Object.entries(monedas.monedas.Data)){
                //añadir el Symbol y el nombre como opciones
                const opcion = document.createElement('option');
                opcion.value = value.Symbol;
                opcion.appendChild(document.createTextNode(value.CoinName));
                select.appendChild(opcion);
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

  //Imprime el resultado de la cotización

  mostrarResultado(resultado, moneda, crypto){

    //En caso de un resultado anterior ocultarlo
    const resultadoAnterior = document.querySelector('#resultado > div');
    if(resultadoAnterior){
      resultadoAnterior.remove();
    }

 
    const datosMoneda = resultado[crypto][moneda];

    //recortar digitos de precio
    let precio = datosMoneda.PRICE.toFixed(2),
        porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
        actualizado = new Date(datosMoneda.LASTUPDATE*1000).toLocaleDateString('es-CL');
    

   //contruir el template
    let templateHTML = `
      <div class="card bg-warning"> 
        <div class="card-body text-light">
          <h2 class="card-title"> Resul1tado: </h2>
          <p>  El Precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de $: ${precio}</p>
          <p> Variación último día: ${porcentaje}</p>
          <p> última actualñización: ${actualizado}</p>
        </div>
      </div>
    `;
    this.mostrarOcultarSpinner('block');

   //insertar el resultado
   setTimeout(() => {
    document.querySelector('#resultado').innerHTML = templateHTML;
    //Ocultar el spinner
    this.mostrarOcultarSpinner('none');

   }, 3000);
  }


  mostrarOcultarSpinner(vista){
    const spinner = document.querySelector('.contenido-spinner');
    spinner.style.display = vista;
  }
  
}
