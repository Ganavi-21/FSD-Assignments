// // let fruit=['Apple', 'Mango', 'Grapes', 'Strawberry']
// // console.log(fruit[fruit.length-1])
// // console.log(fruit.length)
// // console.log(fruit[0])
// // fruit[1]='pineapple'
// // console.log(fruit)

// // let col='red'.split()
// // console.log(col)

// // let data=Array(1,2,3)
// // console.log(data)

// // let data2=[]
// // console.log(data2)

// // let data3=Array(8).fill('x')
// // console.log(data3)

// // let data4=Array("")
// // console.log(data4)



// // let colors=['red','blue','green'];
// // colors.push("opo");
// // console.log(colors)
// // colors.shift()
// // console.log(colors)
// // colors.unshift('purple')
// // console.log(colors)
// // colors[1].concat('pink')
// // console.log(colors)
// // colors[1]='yellow'
// // console.log(colors)

// // let fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.unshift("Lemon");
// // console.log(fruits)
// // fruits.shift();
// // console.log(fruits)
// // fruits.pop();
// // console.log(fruits)
// // fruits.push("Grapes")
// // console.log(fruits)
// // fruits.splice(2,1)
// // console.log(fruits)
// // fruits.splice(1,0,'Papaya')
// // console.log(fruits)
// // fru=fruits.slice(1,3)
// // console.log(fru)
// // fruits.reverse()
// // console.log(fruits)
// // fruits.sort()
// // console.log(fruits)


// // //to conver array into string
// // let country=['Ind','Pak','Aus']
// // console.log(country.join())

// // //to reverse a string
// // let animal='Lion'
// // reverse_animal=animal.split('').reverse().join('')
// // console.log(reverse_animal)


// // //LOOPS IN ARRAYS
// // let sizes=['small','medium','large']
// // for(let size in sizes){
// //     console.log(`The requires size is ${size}`)
// // }

// // for(let size of sizes){
// //     console.log(`The requires size is ${size}`)
// // }

// // for(let i=0;i<5;i++){
// //     console.log(`Hello${i}`)
// // }

// // let arr=[1,2,3,4,5,6,7,8,9,10]
// // const array=[]
// // for(i=0;i<=10;i++){
// //    if( i%2!=0)
// //     array.push(i) 
// // }
// // console.log(array)

// // function abc(x,y){
// //     let sum=x+y
// //     return sum
// // }
// // let out=abc(3,4)
// // console.log(out);

// // function largest(a,b,c)
// // {
// //     if(a>=b && a>=c)
// //     console.log(`${a} is  largest `)
// //     else if(b>=a && b>=c){
// //     console.log(`${b} is largest`)
// //     }
// //     else{
// //     console.log(`${c} is largest`)
// //     }
// // }
// // largest(1,2,3)


// //LARGEST IN THE ARRAY
// let arr=[33,54,5676,32,245]
// largest=arr[0];
// for(i=1; i<arr.length; i++){
//     if(arr[i]>largest )
//     {
//        largest=arr[i]
    
//     }
// }
// console.log( largest)

// //PALINDROME
// let str='INDIA'
// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }
// if (rev == str) {
   
//     console.log(`true`)
// } else {
   
//     console.log(`false`)
// }


// sum=0
// for(i=1;i<=100;i++){
//     sum+=i
// }
// console.log(`${sum}`)

// i=0
// total=0
// number=[1,2,3,4]
// while(i<=number[i]){
//     total+=number[i]
//     i++
// }
// console.log(`${total}`)

//    n=[1,2,3,4,5,6,7,8,9,]
// for(k=1;k<20;k++){
//     if(!n%k==0){

//     }
// }



let arr=[1,3,4,56,67]
largest=0
// for(i=0;i<a.length;i++){
//     if(a[i]>largest)
//     largest=a[i]
// }
// console.log(largest)

// function bignum(a){
//     largest=0
//     for(i=0;i<a.length;i++){
//         if(a[i]>largest)
//         largest=a[i]
  
//     }
//     return largest
// }
// console.log(bignum(arr))

function sumOfNumbers()
{
  sum=0;
    for(i=1;i<=100;i++){
        sum+=i  
    } 
   
return sum
}
console.log(sumOfNumbers())


