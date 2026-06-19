export function add(a,b){
    if (typeof a !== 'number'|| typeof b !== 'number'){
        throw new Error('Inputs must be numbers!!') //Error Handling
    }
    return a + b;
}

 export function substract(a,b){
    return a-b;
}


//This is used for exporting objects
// module.exports= {add, substract};