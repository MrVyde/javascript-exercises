const removeFromArraY = function(array, value) {
    return array.filter(item => item !== value);
};
const removeFromArray = function(array, ...valuesToRemove) {
    return array.filter(item => !valuesToRemove.includes(item));
};
const removefromArray = function removeAll(array, ...valuesToRemove) {
    return array.filter(item => item !== valuesToRemove);
};

// Do not edit below this line
module.exports = removeFromArray;
