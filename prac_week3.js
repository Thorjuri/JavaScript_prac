//예외처리 및 클래스 연습



// // 1. try catch finally 예외처리

// function unchaught (num){
//     try{
//        hello(num)
//        hi(num)
//        console.log("1번째 줄")
//     } catch {
//         console.log("2번째 줄")
//     }
// }

// const hi = 0;
// const hello = function(a){
//     console.log(a)
// }

// unchaught(2) 
// // hello() 함수는 문제없음 = 함수 실행해서 '2' 출력
// // hi() 함수는 선언이 안되어 참조 불가 = catch로 빠짐 = 출력 "2번째 줄" 

//-------------------------------------

// // 2. catch의 매개변수(exception)의 기본 속성인 name, message 출력
// function unchaught (num){
//     try{
//        hi(num)
//        console.log("1번째 줄")
//     } catch (exception){
//         console.log("2번째 줄")
//         console.log(exception.name)  //예외의 오류 이름
//         console.log(exception.message) //예외의 오류 메세지
//     }
// }

// const hi = 0;

// unchaught(2)
//-------------------------------------------

// // 3. 예외 강제발생 'throw' - 사용자가 함수를 잘못 이용하고 있을때 활용할 수 있다.
// function onlyNum(num){
//     if(typeof(num)!=='number'){
//         throw "해당 함수의 매개변수는 반드시 숫자여야 합니다."  
//     } else {
//         return num/2
//     }
// }

// console.log(onlyNum("14"))



// ------------------------------------------- "클래스" 첫 연습 ----------------------------

// // 4. 클래스 생성하기

// class People {  //클래스 선언
//     constructor(eyes, mouth, ears, language, nation){  //생성자 선언
//         this.eyes = eyes
//         this.mouth = mouth
//         this.ears = ears
//         this.language = language
//         this.nation = nation
//     }
//         desc() {    //메서드
//             console.log(this.language)
//         }
        
//         test(a) {  //매서드
//             console.log(`그의 국가는 ${a}이며 언어는 ${this.language}입니다`)
//         }     
// }

// const tom = new People(2,1,2,"english", "usa")  //클래스 People로 만든 tom이란 새 인스턴스(=객체)

// console.log(tom) //객체
// tom.desc() //tom이란 객체의 desc란 메소드 사용
// tom.test(tom.nation)  //tom이란 객체의 test란 메소드 사용

//--------------------------------------------

// 5. 클래스와 객체와 배열 혼합사용

// class Customer {    //클래스 선언
//     constructor(name, adress, favorite, coupon, point) {
//         this.name = name
//         this.adress = adress
//         this. favorite = favorite
//         this.coupon = coupon
//         this.point = point
//     }
//         order(){   //클래스 내 함수(메소드) 선언
//             return `${this.name}님 \n 주문: ${this.favorite} \n 주소: ${this.adress}\n`
//         }

//         membership(){  //클래스 내 함수(메소드) 선언
//             return this.coupon*5000 + this.point
//         }
// }

// const baedal = [] // 객체 넣을 배열 초기화


// const james = new Customer("james", "104-201", "ramen", 5, 10000)  //새 인스턴스 생성
// const sil = new Customer("sil", "sol gil 83", "curry", 0, 20000)   //새 인스턴스 생성
// const dong = new Customer("dongdong", "hae gil 11", "pasta", 2, 50000)  //새 인스턴스 생성

// baedal.push(james, sil, dong)  //배열에 인스턴스(객체) push

// for(order of baedal){    //객체가 원소인 배열의 for of 반복문
//     console.log(order.order(), order.membership())   //클래스에 선언된 함수, 즉 메소드 적용
// }
//---------------------------------------------


//6. 클래스의 상속

// class Customer {    //부모 클래스 선언
//     constructor(name, adress, favorite, coupon, point) {
//         this.name = name
//         this.adress = adress
//         this. favorite = favorite
//         this.coupon = coupon
//         this.point = point
//     }
//         order(){   //클래스 내 함수(메소드) 선언
//             return `${this.name}님 \n 주문: ${this.favorite} \n 주소: ${this.adress}\n`
//         }

//         membership(){  //클래스 내 함수(메소드) 선언
//             return this.coupon*5000 + this.point
//         }
// }

// class Blacklist extends Customer {  //부모클래스: Customer, 자식클래스: Blacklist
    
//     constructor(name, adress, favorite, coupon, point, discount){  //생성자 (부모클래스 매개변수5개 + 자식클래스 매개변수1)
//         super(name, adress, favorite, coupon, point) //부모클래스 속성 물려받기 **항상 가장 위에 먼저 super 부터 선언
//         this.discount = discount  //자식클래스 자체 속성 (부모클래스엔 해당x)
//     }
//         discounts(){ // 자식클래스 자체 메소드 (부모클래스는 해당x)
//             return this.point - this.discount
//         }
    
// }

// const jackson = new Blacklist("jackson", "sae gil", "chicken", 2, 15000, 5000)

// console.log(jackson)
// console.log(jackson.discounts()) //자식클래스 자체 메소드 
// console.log(jackson.order(), jackson.membership()) //부모클래스의 메소드를 물려받아 이용할 수 있음

//----------------------------------

// // 7. static 속성과 메소드 

// class Avg {
//     constructor(meat, carrot, tomato, egg, milk){
//         this.meat = meat
//         this.carrot = carrot
//         this.tomato = tomato
//         this.egg = egg
//         this.milk = milk
//     }
//      sum(){
//         return 5000/2
//     }
// }

// // const pay = new Avg(2000, 1000, 1500, 5000, 3000)

// console.log(Avg.sum())

//8. 삼항 연산자 (=조건부 연산자 )

// let age = 7
// let result = age > 19 ? "성인입니다" : "청소년입니다"

// let result2 = age < 8 ? "어린이입니다" :
//                 age > 20 ? "성인입니다" : "청소년입니다"

// let length = 32
// let result3 = length < 5 ? "너무 짧습니다" :
//                 length > 30 ? "너무 깁니다" :
//                     length > 20 ? "그래도 깁니다" :
//                         length > 15 ? "적당합니다" : "조금 짧습니다."

// console.log(result)
// console.log(result2)
// console.log(result3)


//9. 논리연산자 ||

// let candy = false;
// let caramel = true;
// let chocolate = false;

// let result = 0 || 1 || 0 ;

// console.log(result)

//10. While 반복문

// let i = 10  
// while(i) console.log(--i)
// let j = 10
// while(j) console.log(j--)
//---------------------------------------

// //11. 콜백함수 활용법 (여러개의 매개변수)

// function agree(){
//     console.log("동의하셨습니다.")
// }

// function reject(){
//     console.log("거절하셨습니다.")
// }

// let answer = 1
// isOk(answer, agree, reject)


// function isOk (question, yes, no) {
//     if(question) yes()
//     else no()
// }

//------------------------------------------------

//12. 함수 표현식 vs 함수 선언문 (Hoisting 가능여부 차이가 있다!!)

// sum(2,3) // 5 출력됨 = 함수 선언문 = Hoisting 가능 

// sum2(3,5) // 에러 = 함수 표현식 = Hoisting 불가능


// function sum (a,b){
//     console.log(a+b)
// }

// let sum2 = function(a,b){
//     console.log(a+b)
// }

//-------------------------------

// //13. 화살표 함수 


// let print1 = a => console.log(a)
// let print2 = (a,b) => console.log(a+b)
// let print3 = a => {console.log(a), console.log(a+2)}
// let print4 = (a, b) => {a=a+2; b=b+2; return a+b+2}
// let print5 = a => {
//     if(a>5) return a-2
//     else return a
// }

// print1(1)  //1
// print2(2,3) //5
// print3(3) //3
// console.log(print4(4,5))  //15
// console.log(print5(7))  //5


// function a (){}
// a.test = "hi"

// console.log(a.test)


// const f = new String("str")
// f.test = "str2"

// // console.log(f.test)


//  Number.prototype.power = function(n=2){   //자료형에 prototype과 원하는 메소드명을 붙여서 함수를 할당하면 x
//     return this.valueOf() **2              //console.log(print5(7))  //5
//  }

//  const str = 11;
//  console.log(str.power())

// let arr = [1, 2];

// let asArray = {
//   0: "zero",
//   length: 1
// };

// console.log(Array.isArray(arr.concat(asArray))); 




