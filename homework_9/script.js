const fibonacci = function makeFibonacciFunction() {
    let previousNumber = 0;
    let nextNumber = 1;
    

    return function () {
        let result = previousNumber + nextNumber;
        console.log(previousNumber);
        previousNumber = nextNumber;
        nextNumber = result;
    };
 }();


fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();