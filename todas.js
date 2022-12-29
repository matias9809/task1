function todos_los_eventos(data){
    let list=[];
    for(eventos of data.events){
        list.push(eventos);
    }
    return list
}

let todos_los_eventos_cards=todos_los_eventos(data);

let cardTodas=document.getElementById("card_home");
function card_t(c,lugar){
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
    lugar.innerHTML=template;
}
card_t(todos_los_eventos_cards,cardTodas)