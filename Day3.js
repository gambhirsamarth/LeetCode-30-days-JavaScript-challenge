/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    // variable to store value of init,  used to avoid changing the original value of init
    let currentCount = init;

    // increment function
    function increment(){
        currentCount++;
        return currentCount;
    }

    // decrement function
    function decrement(){
        currentCount--;
        return currentCount;
    }

    // reset function
    function reset(){
        currentCount = init;
        return currentCount;
    }

    // return all the functions as an object
    return {increment, decrement, reset};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
