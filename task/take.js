class CustomLodash{
    take(array, n = 1){
        if (array.length > n){
            array.length = n;
        }
        if (n > array.length){
            return array;
        }
        return array;
    }
};

let _ = new CustomLodash;

module.exports = _