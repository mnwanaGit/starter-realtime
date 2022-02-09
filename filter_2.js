var list = [5,8,9,2,7,6,3,1,4];

function callback(item){
    return item > 5;
}

var filtered = list.filter(callback);
console.log(filtered);