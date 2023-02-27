class CustomLodash{
    pickBy(object, predicate) {
        let result = {};
        for (let i in object){
            if (predicate(object[i])){
                result[i] = object[i]
            }
        }
        return result;
    }
    isNumber(val){
        return (typeof val === 'number');
    }

};

let _ = new CustomLodash;

module.exports = _