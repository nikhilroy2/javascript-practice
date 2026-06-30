// (function(){
//     let a = 10;
//     console.log(a)
// })()
// let user = "Nikhil"

// ((name)=> {
//     console.log('I am' + name)
// })(user)

function showFunc() {
    return (function factorial(n) {
        if (n <= 1) return 1;
        return n * factorial(n - .3); // recursive call
    })(5)
}

console.log(showFunc().toFixed(101))