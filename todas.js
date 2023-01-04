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
const checkbox = document.querySelectorAll( 'input[type="checkbox"]:checked' );
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
checkbox.addEventListener( 'change', filtrarCategoria(todos_los_eventos_cards))
buscador.addEventListener('input',evento=>{
    let nom=todos_los_eventos_cards.filter(filtrarNombre);
    let template=card_t(nom);
    cardTodas.innerHTML=template;
})
function filtrarNombre(list){
    return list.name.toLowerCase().includes( buscador.value.toLowerCase())
} 
function filtrarCategoria(list){
    let chec_c=Array.from(checkbox).filter(e=>e.checked).map(e_check=>e_check.value)
 /*  return list.category.toLowerCase().includes( categorias.target.value.toLowerCase()) */
    if(chec_c.length){
        let event_fil=list.filter(e=>chec_c.includes(e.category));
        return event_fil;
    }
    else {
        return list;
    }
} 

function chec(c,l){
    let cat_nr=[];
    c.filter(e=>{
        if(!cat_nr.includes(e.category)){
            cat_nr.push(e.category)
        }
    })
    let template="";
    cat_nr.map(e=>{
        template+=`<input type="checkbox" name="category" value="${e}" >${e}`
        }
    )
/*     for(car of  cat_nr){
        template+=`<input type="checkbox" name="" value="${car.category}" >${car.category}`
    } */
    l.innerHTML=template
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
        <a href="./view.html?id=${car._id}" class="btn btn-primary">view more</a></div>
        </div>
        </div>`
    }
    return template
}
card_t(todos_los_eventos_cards)

chec(todos_los_eventos_cards,categorias)