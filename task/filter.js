class CustomLodash{
    filter(collection, predicate = this.identity){
        let result = [];
        for (let i = 0; i < collection.length; i++){
            if ((typeof predicate === "function") && (predicate     (collection[i]))){
                this.push(collection[i])(result);
            } else if (typeof predicate === "object"){
                if ((JSON.stringify(predicate)[0]) === '['){
                    let currObj = collection[i]
                    if (predicate[1] == currObj[predicate[0]]){
                        this.push(collection[i])(result);
                    }
                }
                let localPredicate = this.match(predicate);
                if (localPredicate (collection[i], i, collection)){
                    this.push(collection[i])(result);
                }   
            } else if (typeof predicate === "string"){
                let currObj = collection[i]
                if (currObj[predicate] === true){
                    this.push(collection[i])(result);
                }
            } 
            
        }
    return result
    }

push(elem){
    return (array) => {
        array[array.length] = elem;
    };
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