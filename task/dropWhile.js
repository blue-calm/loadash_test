class CustomLodash{
    

    dropWhile(collection, predicate = this.identity, fromIndex = 0){
        
        let drop;
        for (let i = fromIndex; i < collection.length; i++){
            fromIndex = i;
            if ((typeof predicate === "function") && (!predicate     (collection[i]))){
                    drop = i;
                    break;
                
            } else if (typeof predicate === "object"){
                if ((JSON.stringify(predicate)[0]) === '['){
                    
                    let currObj = collection[i]
                    if (predicate[1] === currObj[predicate[0]]){
                        drop = i;
                        continue;
                    }
                    
                }
                let localPredicate = this.match(predicate);
                if (!localPredicate (collection[i], i, collection)){
                    drop = i;
                    break;
                }   
            } else if (typeof predicate === "string"){
                let currObj = collection[i]
                if (currObj[predicate] !== true){
                    drop = i;
                    break;
                }
            }
        }
        
        return this.drop(collection, drop);

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

drop(array, n=1){
    let result = [];
    if (n >= array.length){
        return result;
    }
    let i = 0;
    for (let j = n; j < array.length; j++){
        result[i] = array[j];
        i++;
    }
    return result;
}

};

let _ = new CustomLodash;

module.exports = _