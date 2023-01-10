const ubi_general=document.getElementById('general_stats');
const ubi_past=document.getElementById('past_stats');
const ubi_upcoming=document.getElementById('upcoming_stats');

fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
    .then(Response=>Response.json())
    .then(res=>{
        list=res;
        general(list,ubi_general);
        let events_past=event_past(list);
        let events_upcomign=upcoming(list);
        upcoming_events(events_upcomign,ubi_upcoming);
        past_events(events_past,ubi_past)
        acumulador_upcoming(events_upcomign)
    })
    .catch(err=>console.log(err))
let list=[];

function upcoming(data){
    let list=[];
    for(eventos of data.events){
        if(data.currentDate<eventos.date&&!list.includes(eventos.category)){
            list.push(eventos);
        }
    }         
    return list;
}
function event_past(data){
    let list=[];
    for(eventos of data.events){
        if(data.currentDate>eventos.date){
            list.push(eventos);
        }
    }
    return list;
}

function general(data,ubi){
    let aux=0;
    let event_may="";
    let aux2=0;
    let aux3=100;
    let event_men="";
    let cap=0;
    let cap_may="";
    let template='';
    for(let lis of data.events){
        if(data.currentDate<lis.date){
            aux2=parseFloat((lis.estimate*100)/lis.capacity);
            if(aux2>aux){
                aux=aux2;
                event_may=lis.name;
            }
            if(aux2<aux3){
                aux3=aux2.toFixed(2);
                event_men=lis.name;
            }
            if(lis.capacity>cap){
                cap=lis.capacity;
                cap_may=lis.name;
            }
        }
        if(data.currentDate>lis.date){
            aux2=parseFloat((lis.assistance*100)/lis.capacity);
            if(aux2>aux){
                aux=aux2;
                event_may=lis.name;
            }
            if(aux2<aux3){
                aux3=aux2.toFixed(2);
                event_men=lis.name;
            }
            if(lis.capacity>cap){
                cap=lis.capacity;
                cap_may=lis.name;
            }
        }
    }
    template+= `<tr>
                    <td>${event_may}:${aux}%</td>
                    <td>${event_men}:${aux3}%</td>
                    <td>${cap_may}:${cap}</td>
                </tr>`;
    ubi.innerHTML=template;
}
function upcoming_events(array,ubi){
    let template='';
    let categorias=[];
    array.filter(e=>{
        if(!categorias.includes(e.category)){
            categorias.push(e.category)
        }
    })
    for(upcom of categorias){
        let ingresos=0;
        let estimado=0;
        let acumulador=0
        let array_fil=array.filter(e=>(e.category.includes(upcom)))
        array_fil.forEach(element => {
            ingresos+=element.price*element.estimate
            estimado+=(element.estimate/element.capacity)*100
            acumulador++
        });
        template+=`<tr>
            <td>${upcom}</td>
            <td>$${ingresos}</td>
            <td>${(estimado/acumulador).toFixed(2)}%</td>
        </tr>`;
        
    }
    console.log(template)
    ubi.innerHTML=template;
}
function past_events(array,ubi){
    let template='';
    let categorias=[];
    array.filter(e=>{
        if(!categorias.includes(e.category)){
            categorias.push(e.category)
        }
    })
    for(upcom of categorias){
        let ingresos=0;
        let asistencia=0;
        let acumulador=0
        let array_fil=array.filter(e=>(e.category.includes(upcom)))
        array_fil.forEach(element => {
            ingresos+=element.price*parseInt(element.assistance)
            asistencia+=(element.assistance/element.capacity)*100
            acumulador++
        });
        template+=`<tr>
            <td>${upcom}</td>
            <td>$${ingresos}</td>
            <td>${(asistencia/acumulador).toFixed(2)}%</td>
        </tr>`;
        
    }
    console.log(template)
    ubi.innerHTML=template;
}