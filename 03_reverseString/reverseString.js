const reverseString = function(string) {
    const splitString = string.split("")
    
    const reversesString = splitString.reverse()

    const joinString = reversesString.join("")

    return joinString;
};

// Do not edit below this line
module.exports = reverseString;
