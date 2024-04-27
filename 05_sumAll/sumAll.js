const sumAll = function(minNum, maxNum) {
    if(!Number.isInteger(minNum) || !Number.isInteger(maxNum)) {
        return 'ERROR'
    }
    if(minNum < 0 || maxNum < 0) {
        return 'ERROR'
    }
    if(minNum > maxNum) {
        const swap = minNum;
        minNum = maxNum;
        maxNum = swap;
    }

    let sum = 0;
    for(let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
