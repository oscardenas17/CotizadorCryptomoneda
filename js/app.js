const APIcotizador = new API('b400ac0098115d68b3c072ddd62399edca43a2b31c548cb0a6cb7b8c8b58d027');
const ui = new Interfaz();
//ui.mostrarMensaje();


APIcotizador.obtenerMonedasAPI();



//LEER EL FORMULARIO
const formulario = document.querySelector('#formulario');

//eventListener
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

  //Leer la moneda
  const monedaSelect = document.querySelector('#moneda');

  const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
  
  //Leer la cryptomoneda
  const criptomonedaSelect = document.querySelector('#criptomoneda');
  const criptomonedaSeleccionada = criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value;

  //Comprobar  que no estem vacios los campos
    if(monedaSeleccionada === "" || criptomonedaSeleccionada === ""){
        //alerta de error
        ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
    }else{
        //consultar api, todo ok
        APIcotizador.obtenerValores(monedaSeleccionada, criptomonedaSeleccionada)
            .then(data =>{
                console.log(data);
            })
        }


});