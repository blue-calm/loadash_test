class CustomLodash{
    omit(object, paths) {
        let result = {};
        for (let key in object){
            let isRedundant = false;
            for (let i in paths){
                let omitKey = paths[i];
                if (key == omitKey){
                    isRedundant = true;
                    break;
                }
            }
            if (!isRedundant){
                result[key] = object[key]
            }
        }
        return result;
    }

};

let _ = new CustomLodash;

module.exports = _