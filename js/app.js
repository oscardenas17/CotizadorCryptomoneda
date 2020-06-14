const ui = new Interfaz();
//ui.mostrarMensaje();

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
    }


});