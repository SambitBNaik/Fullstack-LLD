const a=[1,2,3,4,5,6,7];
console.log(a);

//Size of array
// console.log(a.length);

// for(let i=0;i<a.length;i++){
//     // console.log(a[i]);

//     if(i%2===0){
//         console.log(a[i]);
//     }
// }
//  a.forEach((element,i) => {
//     if(i%2===0){
//         console.log(element);
//     }
// });

//push add item into the array to the last position
// a.push(11);
// console.log(a);
//pop remove the item from the last  positon
// a.pop();
// console.log(a);

//Shift is used to remove the item from the start of arrya
// a.shift();
// console.log(a);
//unshift is used to add the item from the start of array
// a.unshift(12);
// console.log(a);


//divides  an array  into  2 pices  and returns as new array
//slice (starting index,ending index)
// const  b=a.slice(3);
// console.log(b);
// console.log(a);


//start and end index
// const  c=a.slice(0,3);
// console.log(c);

// //splice -> add ,remove  and replace  items in an array
// //start index , delete   no of items , [all  the items]
// //adding items into array
a.splice(1,0,5,5,5);
console.log(a);
// //delete item from an index ,
a.splice(1,3); //it will delete from start index to end index
console.log(a);
// //replacing item  in an  array
a.splice(0,2,12,13);
console.log(a);

a.splice(6,2,15,16);
console.log(a);