class CustomLodash{
    find(collection, predicate = this.identity, fromIndex = 0){
    for (let i = fromIndex; i < collection.length; i++){
        fromIndex = i;
        if ((typeof predicate === "function") && (predicate (collection[i]))){
            return collection[i]
            
        } else if (typeof predicate === "object"){
            if ((JSON.stringify(predicate)[0]) === '['){
                let currObj = collection[i]
                if (predicate[1] == currObj[predicate[0]]){
                    return collection[i]
                }
            }
            let localPredicate = this.match(predicate);
            if (localPredicate (collection[i], i, collection)){
                return collection[i]
            }   
        } else if (typeof predicate === "string"){
            let currObj = collection[i]
            if (currObj[predicate] === true){
                return collection[i]
            }
        } 
    }
    
}
    
match(predicObj){
    return (obj) => {
        for (let key in predicObj){
            if (obj[key] !== predicObj[key]){
                return false;
            }
        }
        return true;
    };
}
};

let _ = new CustomLodash;

module.exports = _
