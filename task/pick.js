class CustomLodash{
    pick(object, paths) {
        let result = {};
        for (let key in object){
            let isPicked = false;
            for (let i in paths){
                let omitKey = paths[i];
                if (key == omitKey){
                    isPicked = true;
                    break;
                }
            }
            if (isPicked){
                result[key] = object[key]
            }
        }
        return result;
    }

};

let _ = new CustomLodash;

module.exports = _