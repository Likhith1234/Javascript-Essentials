//program to serach for a element in a array of strings

let arr = ["hi", "hello", "world", "javascript"];
let char = "world";

if (char in arr){
    console.log(char + " is in array");
}
else{
    console.log(char + " is not in array");
}