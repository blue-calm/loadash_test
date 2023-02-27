class CustomLodash{
    includes(collection, value, fromIndex = 0){
        if ((JSON.stringify(collection)[0]) === '['){
            if (fromIndex === 0){
                for (let i=0; i<collection.length; i++){
                    if (collection[i] === value) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            if ((fromIndex > 0) && collection[fromIndex - 1] === value){
                return true
            }
            return false
        }
        if (typeof collection === "object"){
        for (let key in collection){
            if(collection[key] === value){
                return true;
                }
            }
        }
        if ((typeof collection === "string") && (collection.search(value) !== -1)){
            return true;
        }
        return false;
    }
};

let _ = new CustomLodash;

module.exports = _