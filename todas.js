function todos_los_eventos(data){
    let list=[];
    for(eventos of data.events){
        list.push(eventos);
    }
    return list
}
let todos_los_eventos_cards=todos_los_eventos(data);
const cardTodas=document.getElementById("card_home");
const categorias = document.getElementById( 'cat' );
const buscador = document.getElementById( 'buscar' );
cardTodas.innerHTML=card_t(todos_los_eventos_cards);
/* 
categorias.addEventListener( 'change', evento => {
    const checkbox = document.querySelectorAll( 'input[type="checkbox"]:checked' )
    console.log(checkbox)
})
buscador.addEventListener( 'input', evento => {
    let categ= todos_los_eventos_cards.filter( filtrarCategoria ) 
    let template = card_t( categ)
    cardTodas.innerHTML = template
})
function filtrarCategoria(list){
    return list.c.toLowerCase().includes( buscador.value.toLowerCase() )
} */
categorias.addEventListener( 'change', evento => {
    const checkbox = document.querySelectorAll( 'input[type="checkbox"]:checked' );
    console.log(checkbox);
    let categ=todos_los_eventos_cards.filter(filtrarCategoria);
    let template=card_t(categ);
    cardTodas.innerHTML=template;
})
buscador.addEventListener('input',evento=>{
    let nom=todos_los_eventos_cards.filter(filtrarNombre);
    let template=card_t(nom);
    cardTodas.innerHTML=template;
})
function filtrarNombre(list){
    return list.name.toLowerCase().includes( buscador.value.toLowerCase())
} 
function filtrarCategoria(list){

        return list.category.toLowerCase().includes( categorias.target.value.toLowerCase())

} 

function card_t(c){
    let template="";
    for(car of c){
        template+=`<div class="card" style="width: 18rem;">
        <img src=${car.image} class="card-img-top" style="height: 10rem;" alt="cinema">
        <div class="card-body">
        <h5 class="card-title">${car.name}</h5>
        <p class="card-text">${car.description}</p>
        <div class="price">       
        <p class="card-text">price: $${car.price}</p>
        <a href="./view.html" class="btn btn-primary">view more</a></div>
        </div>
        </div>`
    }
    return template
}
card_t(todos_los_eventos_cards)