const distanciaLatLongEmKm = (position1, position2)=> {
    var deg2rad = function (deg) { return deg * (Math.PI / 180); },
        R = 6371,
        dLat = deg2rad(position2.latitude - position1.latitude),
        dLng = deg2rad(position2.longitude - position1.longitude),
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(deg2rad(position1.latitude))
            * Math.cos(deg2rad(position1.latitude))
            * Math.sin(dLng / 2) * Math.sin(dLng / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 1000);
}

const calcularHorasEmPoi = (dataString1, dataString2)=>{
    var d, ms, t1, t2;

    t1 = new Date(dataString1).toISOString();
    t2 = new Date(dataString2).toISOString();
    ms = moment(t2,"YYYY/MM/DD HH:mm:ss").diff(moment(t1,"YYYY/MM/DD HH:mm:ss"));
    d = moment.duration(ms);
    return Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
}

const objectsAreSame = (x, y) => {

    var objectsAreSame = true;
    for(var propertyName in x) {
       if(x[propertyName] !== y[propertyName]) {
          objectsAreSame = false;
          break;
       }
    }
    return objectsAreSame;
 }

 const isDataIgual = (dataInicio, dataFimString) =>{
    
    var dataInicioT = new Date(dataInicio);
    var dataNova = new Date(dataFimString);
    
    var dia = moment(dataInicioT).isSame(dataNova, 'day');
    var mes = moment(dataInicioT).isSame(dataNova, 'month');
    var ano = moment(dataInicioT).isSame(dataNova, 'year');

    if(dia && mes && ano){
        return true
    };
    return false;
}

module.exports ={
    distanciaLatLongEmKm,
    calcularHorasEmPoi,
    objectsAreSame,
    isDataIgual
}