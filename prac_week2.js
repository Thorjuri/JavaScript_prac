// const 배열 = [52,273,103,32,57]
// 배열.forEach(function (value, index) {
//   console.log(`${index}번째의 값은 ${value}`)
// })

// console.log (배열.filter((value, index)
//   {return value % 2 === 0} 
// ))

// console.log (배열.filter((value, index) => value % 2 === 0 ))


// let 배열 = [52,273,103,32,57]
// 배열 = 배열.filter(function (value, index) {
//   return value % 2 === 0
// })
// console.log(배열)
// const 배열 = [0,'',32,57]
// console.log (배열.filter(function (value, index){
//   return true
// })) //true와 false를 return 함 
// console.log (배열.filter(function (value, index){
//   return false
// })) 

// let 배열1 = [52,273,103,32,57] //기존의 배열요소를 기반으로 새로운 배열을 만들어서 리턴함
// 배열1 = 배열1.map(function (value, index) {
//   // console.log(`${value}, ${index}`)
//   return value + "!!"
// })

// 배열1 = 배열1.map( (value, index) => value + "!!")
// console.log(배열1)

// function solution2(A,B) {
//   return A.map((a,i) => a.map((b,j) => {
// return b + B[i][j]
//   }));
// }
// console.log(solution2(arr1, arr2))




// const 테스트 = function (배열, 함수) {
//   for (const 값 of 배열) {
//     함수(값)
//   }
// }

// const 함수 = function (값) {
//   console.log(`${값}번째 안녕하세요`)
// }
// 테스트([52,273,103,32], 함수)


// setTimeout(function () {
//   console.log('setTimeout')
// }, 1000)     //특정한 시간 후에 한번
// setInterval(function () {
//   console.log('setInterval')
// }, 1000)    //특정한 시간마다

// const a = setTimeout(function () {
//   console.log('setTimeout')
// }, 1000)
// const b = setInterval(function () {
//   console.log('setInterval')
// }, 1000)

// console.log(a, b)

// clearTimeout(a)
// clearInterval(b)

// callback(post)

// console.log('print1')

// function post(){
// console.log('print2')
// }

// function callback (here) {
//     return here()
// }

// //----------------------------- Date() 메소드 테스트
// const today = new Date()
// const year = today.getFullYear();
// const month =  today.getMonth()+1
// const day = today.getDate().slice(-2)
// const time = today.toLocaleTimeString('ko-kr')

// const postDate = `${year}/${month}/${day} ${today.toLocaleTimeString('ko-kr')}`


// var hours = ('0' + today.getHours()).slice(-2); 
// var minutes = ('0' + today.getMinutes()).slice(-2);
// var seconds = ('0' + today.getSeconds()).slice(-2); 

// console.log(postDate, typeof(postDate))



// const promise_test = function(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function (){
//             resolve('성공');
//             reject(error('실패'));
//         }, 3000 );
//     });
// };

// promise_test().then(function(text){
//     console.log(text)
// }, function(error){
//     console.error(error)
// });




function promisePrac(){
    return new Promise(function(resolve, reject){
        setTimeout(function (){
                console.log('3번')
                resolve('성공')
                reject(('에러'))
        }, 5000)
    });
};

function hi(a){
    a().then(function(text){
        console.log(text)
    }, function(error){
        console.log(error)
    })
    console.log('4번')
}


let second = function(){
    console.log('2번')
}
console.log('1번')
second()

hi(promisePrac)