function todos_los_eventos(data){
    let list=[];
    for(eventos of data.events){
        if(data.currentDate>eventos.date){
            list.push(eventos);
        }
    }
    return list
}
let past_event_cards=todos_los_eventos(data);

let card_p=document.getElementById("card_past");
function card_pa(c,l){
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
    l.innerHTML=template;
}
card_pa(past_event_cards,card_p);

