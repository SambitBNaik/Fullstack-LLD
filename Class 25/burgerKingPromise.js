function prepareIngredients(){
   return new Promise(function(resolve, reject){
    try{
        setTimeout(function(){
            console.log("Ingridents prepared");
            resolve();
        },2000)
    } catch(error){
        reject(error);
    }
   });
}

function cookPatty(){
    return new Promise(function(resolve,reject){
        try{
            setTimeout(function(){
                console.log("patty is cooked");
                resolve();
            },2000)
        }catch(error){
            reject(error);
        }
    });
}

function assembledBurger(){
    return new Promise(function(resolve, reject){
        try{
            setTimeout(function(){
                console.log("Burger is assembled");
                resolve();
            },1500);
        }catch(error){
            reject(error);
        }
    });
}

function addCondiments(){
    return new Promise(function(resolve,reject){
        try{
            setTimeout(function(){
                console.log("Condinments added");
                resolve();
            },1500);
        }catch(error){
            reject(error);
        }

    });
}
function serveBurger(){
    console.log("Burger is served");
}

prepareIngredients()
  .then(cookPatty)
  .then(assembledBurger)
  .then(addCondiments)
  .then(serveBurger)
  .catch((error) =>{
    console.log(error);
  });