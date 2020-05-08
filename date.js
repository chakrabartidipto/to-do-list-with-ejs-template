//jshint esversion:6

exports.getDate= function(){

    const today= new Date();
    
    const options={
        weekday:"long",
        day: "numeric",
        month: "long",
    }    
    
    return day= today.toLocaleDateString("bn-BD", options);

}


exports.getDay= function(){

    const today= new Date();
    
    const options={
        weekday:"long",
    }    
    
    return day= today.toLocaleDateString("bn-BD", options);

}


