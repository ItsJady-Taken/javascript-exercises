const removeFromArray = function(array, ...target) {
    const newArray = [];
    array.forEach((item) => {

        if(!target.includes(item)){
            newArray.push(item)
        }
        
    });
    
  return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
