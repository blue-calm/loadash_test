class CustomLodash{
    merge(collection, sources) {
        let result = {};
        if (typeof sources === "object"){
            for (let i in collection) {
                for (let j in sources){
                    if(i === j){
                        let value = []
                        let k = collection[i].length;
                        var first_obj = {};
                        for (let i in collection){
                            for (let j = 0; j < collection[i].length; j++){
                                for (var attrname in collection[i][j]) { 
                                    first_obj[attrname] = collection[i][j][attrname];
                                }
                            }
                        }
                        var second_obj = {};
                        for (let i in sources){
                            for (let j = 0; j < sources[i].length; j++){
                                for (var attrname in sources[i][j]) { 
                                    second_obj[attrname] = sources[i][j][attrname];
                                }
                            }
                        }
                        value[0] = first_obj;
                        value[1] = second_obj;
                        result[i] = value;
                    }
                }

            }
        } 
        return result;
    }

};

let _ = new CustomLodash;

module.exports = _