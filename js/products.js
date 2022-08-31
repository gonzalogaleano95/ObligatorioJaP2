async function arrayAutos(){
    let response = await fetch(`${PRODUCTS_URL}/101${EXT_TYPE}`);
    let data = await response.json();
    console.log(data.products);
    LoadDescription(data.products)
}
arrayAutos();

function LoadDescription(data){
    for(const item of data){
        document.getElementById("autos").innerHTML += 
        `
        <img src="${item.image}"/>
        <h2>${item.name}</h2> 
        <h3>${item.currency} ${item.cost}</h3>
        <p>${item.description}</p>
        <p> Vendidos: ${item.soldCount}</p>
        `
    }
}