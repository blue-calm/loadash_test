class CustomLodash{
    drop(array, n=1){
        let result = [];
        if (n >= array.length){
            return result;
        }
        let i = 0;
        for (let j = n; j < array.length; j++){
            result[i] = array[j];
            i++;
        }
        return result;
    }
};

let _ = new CustomLodash;

module.exports = _