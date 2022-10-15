// // 1.Producer
// const promise = new Promise((resolve, reject) => {
// 	// 무거운 작업이나 시간이 걸리는 작업을 비동기적으로 처리하기 좋음
//     console.log("dogin something..");
//     setTimeout(() => {
//     	resolve("성공!")
//         //reject(new Error("실패!"))
//     }, 2000);
// });

// // 2.Consumers: then, catch, finally
// // then: 프로미스가 정상적으로 수행되어 최종적으로 resolve라는 콜백함수를 통해 전달한 값이 val의 파라미터로 전달
// promise
// .then((val) => {
// 	console.log(val); // "성공!"
// })
// .catch(error => {
//     console.log(error) //reject이 발생하여 에러가 발생한다면 "실패!"
// })
// .finally(() => {
//     console.log('finally'); //성공여부와 상관없이 마지막으로 수행함
// })
    
// // 3.Promise Chaining
// const fetchNumber = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });
    
// fetchNumber
// .then(num => num * 2)
// .then(num => num * 3)
// .then(num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num - 1), 1000)
//     });
// })
// .then(num => console.log(num)); //2초 뒤 5전달





// //----------------------------------------------------------2

// function promisePrac(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function (){
//                 console.log('3번')
//                 resolve('성공')
//                 reject(('에러'))
//         }, 5000)
//     });
// };

// function hi(a){
//     a().then(function(text){
//         console.log(text)
//     }, function(error){
//         console.log(error)
//     })
//     console.log('4번')
// }


// let second = function(){
//     console.log('2번')
// }
// console.log('1번')
// second()

// hi(promisePrac)





// //----------------------------------------------------------3


// //Promise 선언
// var _promise = function (param) {

// 	return new Promise(function (resolve, reject) {

// 		// 비동기를 표현하기 위해 setTimeout 함수를 사용 
// 		setTimeout(function () {

// 			// 파라메터가 참이면, 
// 			if (param) {

// 				// 해결됨 
// 				resolve("해결 완료");
// 			}

// 			// 파라메터가 거짓이면, 
// 			else {

// 				// 실패 
// 				reject(Error("실패!!"));
// 			}
// 		}, 3000);
// 	});
// };

// //Promise 실행
// _promise(true)
// .then(function (text) {
// 	// 성공시
// 	console.log(text);
// }, function (error) {
// 	// 실패시 
// 	console.error(error);
// });




// async function alpha(){
//     let promise = new Promise(function(resolve, reject){
//         setTimeout(function(){
//            resolve('1번')
//         }, 3000)
//         console.log('2번')
//     })
//     let call = await promise
//     console.log(call)
    
// }

// alpha()
// console.log('5번')

