const cardTodas=document.getElementById("card_up");
const categorias = document.getElementById( 'cat' );

const categoriesCheck = document.querySelector('.categ');
const todos_los_eventos_cards=todos_los_eventos(data);


const buscador = document.getElementById( 'buscar', filtroCruzado );
const form = document.querySelector('.form')

form.addEventListener( 'change', filtroCruzado)
buscador.addEventListener('input', filtroCruzado)





function todos_los_eventos(data){
    let list=[];
    for(eventos of data.events){
        if(data.currentDate>eventos.date){
            list.push(eventos);
        }
    }
    return list
}



function cards(c){
    let template="";
    for(car of c){
        template+=`<div class="card" style="width: 18rem;">
        <img src=${car.image} class="card-img-top" style="height: 10rem;" alt="cinema">
        <div class="card-body">
        <h5 class="card-title">${car.name}</h5>
        <p class="card-text">${car.description}</p>
        <p class="card-text">date: ${car.date}</p>
        <p class="card-text">category: ${car.category}</p>
        <div class="price">       
        <p class="card-text">price: $${car.price}</p>
        <a href="./view.html?id=${car._id}" class="btn btn-primary">view more</a></div>
        </div>
        </div>`
    }

    cardTodas.innerHTML = template;
}





function categories(array){

    const categories=[];
    array.filter(e =>{
        if(!categories.includes(e.category) ){
            categories.push(e.category);
        }
    }) 


    let aux = ''
    categories.map(e =>{
        let cat = `<div class="check-selects">
        <input type="checkbox" class="checks-deks" value="${e}" name="category" id="${e}">
        <label for="${e}">${e}</label>
        </div>
        `
        aux += cat;
    })
    categoriesCheck.innerHTML = aux

}


function categoriasFiltradas(array) {
    let checks =Array.from( form ).filter(e => e.checked).map(elementCheaqueado => elementCheaqueado.value)
    if(checks.length){
        let eventosFiltrados = array.filter(event => checks.includes(event.category))
        return eventosFiltrados
    }else{
        return array
    }
}


function search(array, text){
    if(text){
        eventosFiltrados = array.filter(evento => evento.name.toLowerCase().includes(text.toLowerCase()))
        return eventosFiltrados;
    }

    return array
}


function filtroCruzado(){
    let filtroCheck = categoriasFiltradas(todos_los_eventos_cards)
    let filterSearch = search(filtroCheck, buscador.value)
    cards(filterSearch)
}

cards(todos_los_eventos_cards, cardTodas);
categories(todos_los_eventos_cards)

search(todos_los_eventos_cards, buscador.value)
filtroCruzado()

