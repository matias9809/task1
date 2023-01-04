
let cadenaParametroUrl = location.search
let parametros = new URLSearchParams(cadenaParametroUrl) 
let id = parametros.get("id")

let contenedor = document.getElementById("c_detail")

let CardFiltrada = data.events.filter(cards => {
    return cards
})
let cardEncontrada = CardFiltrada.find(cards => cards._id == id)
console.log(cardEncontrada)
function card_pa(c,l){
    let template="";
    template+=`<div class="card" style="width: 18rem;">
    <img src=${c.image} class="card-img-top" style="height: 10rem;" alt="cinema">
    <div class="card-body">
    <h5 class="card-title">${c.name}</h5>
    <p class="card-text">${c.description}</p>
    <div class="price">       
    <p class="card-text">price: $${c.price}</p>
    </div>
    </div>`
    l.innerHTML=template;
}
card_pa(cardEncontrada,contenedor);
/* function pintarAgente(agente) {
    contenedor.innerHTML = "" 
    let div = document.createElement("div")
    div.className = "card"
    div.innerHTML = `<img src="${agente.fullPortrait}" alt="profile" class="card-img-top">
    <div>
        <h5>${agente.displayName}</h5>
         <p>${agente.role.displayName}</p>
    </div>`

    contenedor.appendChild(div)
}
pintarAgente(agenteEncontrado) */