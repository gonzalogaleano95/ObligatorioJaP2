async function array(){                                                 //creo función asíncrona llamada array
    let response = await fetch(`${PRODUCTS_URL}/101${EXT_TYPE}`);       //declaro la variable response, la cual va a esperar el fetch
    let data = await response.json();                                   //declaro la variiable data, en la cual se esperará el valor de response en formato .json
    console.log(data.products);                                         //muestro los productos en la consola para llevar un control
    LoadData(data.products)                                      //ejecuta la función cargará los datos de los productos
}
array();                                                                //muestro la función

function LoadData(data){                                         //defino la función que me va a cargar los datos del fetch
    for(const item of data){                                            //recorro cada item dentro de data
        document.getElementById("autos").innerHTML +=                   //encuentro el elemento con el Id autos y le adjunto un grupo de elementos html, en los cuales se encontrarán los datos requeridos en display
        `                                                               
        <img src="${item.image}"/>
        <h2>${item.name}</h2> 
        <h3>${item.currency} ${item.cost}</h3>
        <p>${item.description}</p>
        <p> Vendidos: ${item.soldCount}</p>
        `
    }
}