
// let x= 'roy'
// console.log(x);


// let data= "hello"

// data1=data.toUpperCase()
// console.log(`The data in uppercase is ${data1}`)

// data1=data.toLowerCase()
// console.log(`The data in lowercase is ${data1}`)

// data1=data.split("")
// console.log(data.split(""))

// data1=data.indexOf()
// console.log(data.indexOf('gan'))

// data1=data.replace('hello' , 'hi')
// console.log(data.replace('hello', 'hi'))

// data1=data.charAt(1)
// console.log(data.charAt(1))

// data1=data.includes('hello')
// console.log(data.includes('hello'))


// data2="hello everyone good evening"
// data3=data2.slice('e' ,'y')
// console.log(data3)

// data1=data.repeat('hello')
// console.log(data.repeat(3))

// data3=data2.startsWith('hello')
// console.log(data.startsWith('hello'))



// data3=data2.startsWith('hey')
// console.log(data2.startsWith('hey'))


// data3=data2.endsWith('evening')
// console.log(data2.endsWith('evening'))

// data3=data2.endsWith('.')
// console.log(data2.endsWith('.'))


// str1='Good'
// str2='morning'
// str3=str1.concat(str2)
// console.log(str3)

// let text = "5";
// text = text.padStart(4,"0");
// console.log(text)

// let num= "7";
// num=num.padEnd(6,"0")
// console.log(num)

// var msg="          hello everyone have a good day         "
// msg=msg.trimStart()
// console.log(msg)
// msg=msg.trimEnd()
// console.log(msg)

// function sumOfTwo(n1,n2){
//     sum=n1+n2
//     return sum;
// }
// console.log(sumOfTwo(5,6))

// arr=[38,876,75,984]
// function BigNum(a){
//     largest=0;
//     for(i=0;i<arr.length;i++){
//         if(a[i]>largest){
//             largest=a[i]
//         }
//     }
//     return largest
// }

// console.log(BigNum(arr))

// let a='INDIA'
// let rev=''

// for(i=a.length-1;i>=0;i--){
//     rev+=a[i]
// }

// console.log(rev)


// function factorialize(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return num; 
//   }
//   console.log(factorialize(5)) 
// let add=function(x,y){
//     sum=x+y;
//     return sum
// }
// console.log(add(1,3))


// const myfunction=(a,b)=>(a+b)
// console.log(myfunction(3,4))


// let big=(num1,num2,num3)=>{
//     if(num1>=num2 && num1>=num3){
//     console.log('num1 is biggest')
//     }
//     else if(num2>=num1 && num2>=num3){
//         console.log('num1 is biggest')
//         }
//         else{
//             console.log('num3 is biggest')
//             }
// }
// (big(1,7,867))


// function butterfly(color='blue',height){
//     console.log(` ${color} and ${height} `)
// }
// butterfly(33)



// (function(a,b){
//     console.log(a+b)
// })(3,4)

// let sum=(x,...args)=>{
//     console.log(x ,args)
// }
// sum(4,5,8)

// function addAll(){
//     sum=0
//     for(let data of arguments){
//     sum+=data
//     }
//     return sum
// }
// console.log(addAll(732,76,37,836,387))

var a=""
if (a="") {
  console.log("Falsy!"); // This block will NOT be executed
}


let anotherValue = "56";
console.log(isNaN(anotherValue));


// function some(){
//   console.log(x)
//   {
//     let x=9
//     console.log(x)
//   }{
//   console.log(x)
//   }
// }
// let x=10
// some()
let number=-99
if(number<0)
{
  console.log('the number is negative number')
}
else if(number>0){
  console.log('this is positive number')
}
else {
  console.log('this is zero')
}

year=2025

if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0){
  console.log( `${year}, is a Leap Year`);
}
  
else{
  console.log(
    `${year}, is a not Leap Year`
  );
}


let color='red'
switch(color){
  case "red":
  console.log("Stop! The color is red")
  break;
  case "Green":
  console.log("Go! The color is green")
  break;
  case "Yellow":
  console.log("Slow down! The color is yellow")
  break;
}



let Person={
  first_name:'Rohith',
  last_name:'V',
  City:'Mysore',
  phone:8753765289
}
console.log(Person.first_name)
console.log(Person["last_name"])
Person1=Person
console.log(Person1)

console.log(Object.keys(Person))
console.log(Object.values(Person))


let Person2=Object.assign({},Person)
console.log(Person2)
Person2.first_name='gan'
console.log(Person2)
Person1.first_name='roh'
console.log(Person1)

console.log(Person)


// function Sub (num1){
//   console.log('ok')
//   return 100
// }


// Sub(tes1)



// let counter=0
// function test(){
//   counter++
//   console.log(counter)
// }


// function main_function(func1){
//   func1()
// }

// main_function(test)


function sqr(num1){
  console.log(num1**2)
  return 'done!'
}

function func2(){
  return sqr
}


function main_func(){
  return func2()(4)
}

let out=main_func
console.log(main_func())




