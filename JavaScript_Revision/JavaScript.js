// let x = 10;
// let y = 90;

// y=x;
// console.log(y);

// let Students = {
//     name: "AJ",
//     Course: "MA",
//     Rollno: 120
// };

// console.log(Students);

// let p = {name: "Keerti"};
// q = p;

// p.name = "djfh";

// console.log(p);
// console.log(q);

// createCourse(dsa);

// function createCourse(name){
//     console.log('creatting course: ' + name);
// }

// function Sum (a, b){
//     return a + b;
// }

// console.log(Sum(20, 30));

// function fetchData(callback) {
//     setTimeout(() => {
//         let data = "Hello";
//         callback(data, 'server error');
//     }, 1000);
// }

// function handleData(data, error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// }

// console.log('Start');
// fetchData(handleData);

const nums = [1,2,3,4,5];
console.log(nums);

const doubleNums = nums.map((num) => 
    2*num);
console.log(doubleNums);