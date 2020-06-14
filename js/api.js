class API{
    constructor(apikey){
        this.apikey = apikey;
    }
    //Obtener todas las monedas
    async obtenerMonedasAPI(){

       const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

       //Fetch a la API
       const urlObtenerMonedas = await fetch(url);
       //respuesta en Json
       const monedas = await urlObtenerMonedas.json();
       return{
           monedas
       }
    }
}