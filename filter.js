var list = [5,8,9,2,7,6,3,1,4];

function callback(list){
    var newL = [];

    for(var i=0; i<list.length; i++){
        if(list[i] > 5) newL.push(list[i])
    }

    return newL
}

function filter(list, callback){
    return callback(list);

}

var filtered = filter(list, callback);
console.log(filtered);