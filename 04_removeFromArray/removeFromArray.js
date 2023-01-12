const removeFromArray = function(...args) {
    let arr = args[0];
    let result=[];
    arr.forEach((item)=>{
        if (!args.includes(item)) {
            result.push(item);
        }
    });
    return result; 

};

// Do not edit below this line
module.exports = removeFromArray;
