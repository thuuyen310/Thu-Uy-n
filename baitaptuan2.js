//Dạng 1:Number:
// //Ex1:
// for (let i=1; i<=8;i++){
//     console.log(i)
// }
// let i =1;
// while(i<=4){
//     console.log(i);
//     i++;
// }
// //Ex2:
// function abc(n){
//     let result="";
//     for(let i =n;i>=0;i--){
//         result +=(i +" ");
//     }
//     console.log(result)
// }
// abc(7)
// //Ex3:
// function divide (n){
//     for(let i=n;i>=0;i--){
//         if(i%2===1){
//             console.log(i)
//         }
//     }
// }
// console.log(divide(8))
// //Ex4:
// function chan(n){
//     let space="";
//     for(let i =1;i<n;i++){
//         if(i%2===0){
//           space +=(i +" ")
//         }
//     }
//     console.log(space)
// }
// chan(7)
// //Ex5:
// function arr(a,b){
//     for(let i=a; i<=b;i++){
//         if(i%2===0 && i%3===0 ){
//             console.log(i)
//         }
//     }
// }
// arr(5,20)
// //Ex6:
// let m = 0;
// let n = 0;
// function count(a,b){
//     let min=a;
//     let max =b;
//     if(a>b){
//         min = b;
//         max= a;
//     }
//     for(let i=min; i<=max; i++){
//         if(i%2==0){
//             m++;
//         }
//         else{
//             n++;
//         }
//     }
//     console.log("Số lượng số chẵn là:" + m);
//     console.log("Số lượng số lẻ là:"+ n);
// }
// count(18,3)
// //Ex7:
// function sum(a,b){
//     let m =0;
//     let n = 0;
//     let min = a;
//     let max =b;
//     if(a>b){
//         min =b;
//         max =a;
//     }
//     for( let i=min; i<=max;i++){
//         if(i%2==0){
//             m+=i;
//         }
//         else{
//             n+=i;
//         }
//     }
//     console.log("Tong so chan la:" +m)
//     console.log("Tong so le la:" +n)
// }
// sum(12,19)
// //Ex10:
// function Sum10(n){
//     let sum=0;
//     for(let i=1; i<n;i++){
//         sum+=1/i;
//     }
//     console.log(sum.toFixed(2))
// }
// Sum10(3)
//Dạng 2:
//Dạng 3:
// //Ex1:
// str = 'Hello my friend !';
// let result="";
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
//     let a =str[i];
//     if(a!=" "){
//         result +=a;
//     }
// }
// console.log(result)
//Ex2:
str = 'Hello my  friend !  You look so    pretty';
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    let result="";
}
