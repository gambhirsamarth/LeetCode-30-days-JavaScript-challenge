function memoize(fn) {
    
    let dp = new Map();
    
    return function(...args) {
        
        let key = JSON.stringify(args);
        if(dp.has(key)){
            return dp.get(key);
        }
        let ans = fn(...args);
        dp.set(key, ans);
        
    return ans;
    }
}
    
