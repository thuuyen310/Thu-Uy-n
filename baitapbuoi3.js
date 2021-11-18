// // Ex1:
// const objects = [45,4,9,16,25,16,24];
// // Sử dụng hàm .map() để được mảng mới có số > 20:
// let result = objects.map(x => x + 20);
// console.log(result);
// //Sử dụng hàm .filter để lọc ra những số nhỏ hơn 20:
// const Expect = objects.filter(object => object < 20);
// console.log(Expect);
// //Sử dụng hàm .reduce để tính tổng các mảng hoặc tổng các mảng với số bất kì:
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(objects.reduce(reducer,103));
// console.log(result.reduce(reducer,310));
// console.log(Expect.reduce(reducer));

// //Ex2:
// //Sử dụng hàm .NumberFormat để định dạng số, quy đổi tiền tệ:
// let a = -20000;
// var convert = new Intl.NumberFormat({
//     style:'currency',
//     currency: 'VND',
//     minimumFractionDigits:3,
// }).format(a);
// if (a<0){
//     convert = 0;
// }
// console.log(convert)

// //Ex3:
//  const arr1 =[ 1,3,10,23];
//  const arr2 =[ 4,7,14,49,98];
//  const arr3 =[ 2,3,11,22,47];
//  //const myFunction=[arr1,arr2,arr3];
// //var find = myFunction.filter(Array => Array.includes(7));
// function check(element, array){
//     return element == 7;
// }

// //Ex4:
// //Reverse words:
// function reverse(str)
// {
//     var i = str.length - 1;
//     var start, end = i + 1;
//     var result = "";
     
//     while (i >= 0)
//     {
//         if (str[i] == " ")
//         {
//             start = i + 1;
//             while (start != end)
//                 result += str[start++];
             
//             result += " ";
//             end = i;
//         }
//         i--;
//     }
//     start = 0;
//     while (start != end)
//         result += str[start++];
     
//     return result;
// }
// var str = "Dog loves Cat!";
// console.log(reverse(str))

//Ex9:
