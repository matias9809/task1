
let cadenaParametroUrl = location.search
let parametros = new URLSearchParams(cadenaParametroUrl) 
let id = parametros.get("id")

let contenedor = document.getElementById("c_detail")
fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
    .then(Response=>Response.json())
    .then(res=>{
        list=res;
        let cardEncontrada = list.events.find(cards => cards._id == id);
        card_pa(cardEncontrada,contenedor);
    })
    .catch(err=>console.log(err.menssage))
let list


function card_pa(c,l){
    let template="";
    template+=`<div class="card" style="width: 24rem;">
    <img src=${c.image} class="card-img-top" style="height: 10rem;" alt="cinema">
    <div class="card-body">
    <h5 class="card-title">${c.name}</h5>
    <p class="card-text">description: ${c.description}</p>
    <p class="card-text">date: ${c.date}</p>
    <p class="card-text">category: ${c.category}</p>
    <p class="card-text">place: ${c.place}</p>
    <p class="card-text">capacity: ${c.capacity}</p>
    <p class="card-text">${(()=>{if(c.assistance){
        return `assistance: ${c.assistance}`
    }
else if(c.estimate){
    return `estimate: ${c.estimate}`
}})()
}</p>
    <div class="price">       
    <p class="card-text">price: $${c.price}</p>
    </div>
    </div>`
    l.innerHTML=template;
}