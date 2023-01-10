const cardTodas=document.getElementById("card_home");
const categorias = document.getElementById( 'cat' );
const buscador = document.getElementById( 'buscar');
const categoriesCheck = document.querySelector('.categ');
const form = document.querySelector('.form')

fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
    .then(Response=>Response.json())
    .then(res=>{
        list=res.events;
        form.addEventListener( 'change', filtroCruzado)
        buscador.addEventListener('input', filtroCruzado)
        cards(list, cardTodas);
        categories(list)
        function filtroCruzado(){
            let filtroCheck = categoriasFiltradas(list)
            let filterSearch = search(filtroCheck, buscador.value)
            cards(filterSearch)
        }
        filtroCruzado()
    })
    .catch(err=>console.log(err.menssage))
let list=[];

function cards(c){
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
    if(template==""){
        template=`<h3 class="text-center mt-4">no result found<h3>`
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

