function generic<T>(value: T):T {
    console.log(value);
    return value;
}

generic<string>("Hello");
generic<number>(2345);


function isgreater<T>(a:T,b:T){
    return a>b;
}
console.log(isgreater<number>(4,5));

// try to create a function(arr)
function getElement<T>(arr:T[]):T[]|undefined{
    return arr;
}
let arr = [1,2,3,4,5];
console.log(getElement<number>(arr));

const str = ["Prince","Raghuram"];
console.log(getElement<string>(str));
