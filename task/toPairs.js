class CustomLodash{
    toPairs(object) {
        let result = [];
        let i = 0;
        for (let key in object){
            let proto = false;
            for (let omitKey in object.__proto__){
                if (key == omitKey){
                    proto = true;
                }
            if (proto){
                continue;
            } else {
                let piece = [];
                piece[0] = key;
                piece[1] = object[key];
                result[i] = piece;
                i++;
                proto = true;
            }

        }
        
        }
        return result;
    }
};

let _ = new CustomLodash;

module.exports = _