class CustomLodash{
    zip(...arrays){
        let result = [];
        let pieces = arrays[0].length;
        for (let i = 0; i < pieces; i++){
            result[i] = [];
            let k = 0;
            for (let j = 0; j < arrays.length; j++){
                result[i][k] = arrays[j][i];
                k++;
            }
        }
        return result;
    }

};

let _ = new CustomLodash;

module.exports = _