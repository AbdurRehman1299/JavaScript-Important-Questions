let students = ["Abdur Rehman", "John", "Hamza", "Abdullah", "Haris", "Muhammad Reyan", "Syed Ali Hamza", "Talha Fiaz"];
let houses = [];

for (const student of students) {
    if(student.length < 6){
        houses.push("Gryffindor");
    }
    else if(student.length < 8){
        houses.push("Ravenclaw");
    }
    else if(student.length < 12){
        houses.push("Hufflepuff");
    }
    else{
        houses.push("Slytherin");
    }
}

console.log(houses);