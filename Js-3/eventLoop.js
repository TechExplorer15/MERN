function first(){
    console.log("a");
    
}

function second(){
    console.log("b");
    
}

function third(){
    setTimeout(()=>{
        console.log("c");
    },100);
}

function fourth(){
    Promise.resolve().then(() => 
        console.log("d")
    );
}

function fifth(){
    Promise.resolve().then(() => 
        console.log("e")
    );
}

function sixth(){
    setTimeout(()=>{
        console.log("f");
    },0);
}


third();
sixth();
fifth();
fourth();
second();
first();


/* Order of execution -->
1. all syncronus code
2. microtask queue(First in first out)
3. task queue  */


/* function infiniteFn(){
    console.log("function called");
    Promise.resolve().then(infiniteFn);
    
}

//microtask starvation
function timer(){

    setTimeout(()=>{

        //this function will never called since microtask queue 
        console.log("will never be executed");
        
    },0)
} */