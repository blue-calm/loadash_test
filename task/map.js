class CustomLodash{
    map(collection, iteratee = this.identity) {
        let result = [];
        if ((JSON.stringify(collection)[0]) === '['){
            if (typeof iteratee === "function"){
                for (let i = 0; i < collection.length; i++){
                    result[i] = iteratee(collection[i])
                }
            } else if (typeof iteratee === "string"){
                let j = 0;
                for (let i = 0; i < collection.length; i++){
                    if (collection[i][iteratee]) {
                        result[j] = collection[i][iteratee];
                        j++;
                    }
                }
            }
            
        } else if (typeof collection === "object"){
            let i = 0;
            for (let key in collection) {
                result[i] = iteratee(collection[key])
                i++;
            }
        } 
        return result;
    }

};

let _ = new CustomLodash;

module.exports = _