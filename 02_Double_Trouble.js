let numbers = [1,2,3,4,5,6,2,3,7];
let seen = [];
let result = [];

for (let index = 0; index < numbers.length; index++) {
    let num = numbers[index];

    if(seen.includes(num)){
        result.push(num);
    }
    else{
        result.push(num * 2);
        seen.push(num);
    }
}

console.log(result);