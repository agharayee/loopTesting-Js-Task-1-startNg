let _arrayObject = [ 
    { principal : 2500 , time : 1.8  },
    { principal : 1000 , time : 5 },
    { principal : 3000 , time : 1  },
    { principal : 2000 , time : 3  }
]

// This basically generate rate
function validation(pricipal , time ) {
    if (pricipal >= 2500 && ( time > 1 && time < 3 ) )  {
        return 3 ;
    }else if (pricipal >= 2500 && ( time >=3 ) )  {
        return 4 ;
    }else if (pricipal < 2500 || ( time <= 1 ) )  {
        return 2 ;
    }else {
        return 1 ;
    }
}

/**
 * 
 *     The Array of objects that calcualate simple interest
 */
function interestData(__ar) {
    let rate = 1 ; 
    let simpleInterest = [] ;
    __ar.forEach(object => {
        rate = validation(object.principal , object.time);
        let interest = ( object.principal * object.time * rate ) / 100
        simpleInterest.push({principal : object.principal , time : object.time , rate : rate  , interest : interest});
    });
    return simpleInterest ; // return the final answer to array simpleInterest
}

console.log ( interestData(_arrayObject) );


let arrayOfobject =  [
       {pricipal: 2500, time: 1.8} ,
       {principal:1000, time: 5} ,
       {principal: 3000, time: 1} ,
       {principal: 2000, time: 3}
]

  function check(principal, time){
    if (pricipal >= 2500 && time > 1 && time < 3){
        rate = 3
    }
  }