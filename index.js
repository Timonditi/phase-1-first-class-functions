function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function namedFunction() {
      console.log("Hello from namedFunction!");
    }
}
 function returnsAnAnonymousFunction(){
    return function (){
        console.log('Hello from anonymousFunction!');
    }
 } 