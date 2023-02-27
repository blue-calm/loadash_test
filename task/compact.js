class CustomLodash{
    compact(array){
        let result = [];
        let i = 0;
        for (let j = 0; j < array.length; j++){
            if (array[j]) {
                result[i] = array[j];
                i++;
            }
        }
        return result
    }
};

let _ = new CustomLodash;

module.exports = _
