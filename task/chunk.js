class CustomLodash{
    chunk(array, size){
        let result = [];
        let pieces = array.length / size
        for (let i = 0; i < pieces; i++){
            result[i] = [];
            for (let j = 0; j < size; j++) {
                let iterator = i * size + j
                if (iterator >= array.length){
                    break;
                }
                result[i][j] = array[iterator];
            }
        }
        return result;
    }
};

let _ = new CustomLodash;

module.exports = _
