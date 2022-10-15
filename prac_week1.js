
/*
const persons = [
    {'name': 'addy', 'age': 20},
    {'name': 'jane', 'age': 18},
    {'name': 'juila', 'age': 30},
]
console.log(typeof(persons))

function isAdult(person) {
    for(person in persons) {
        let personAge = persons[person]['age']
        return personAge
    }
}



function orderBeer(person) {
    if(isAdult(person)>19){
        console.log('맥주 나왔습니다!!'+ person+'님')
    }else {
        console.log(`나이 더 먹고 오세요!! ${person}님`)
    }
}

orderBeer('julia')
*/

/*
1. 화살표 함수1
const helloA = (a,b) => {
    console.log(`안녕 ${a}, ${b}!!`)
}

2. 화살표 함수2
const helloB = (a,b) => console.log(`안녕 ${a}, ${b}!!`)

3. 화살표 함수3
const helloC = a => console.log(`안녕 ${a}}!!`)

helloA('jane', 'tom')
helloB('jane', 'tom')
helloC('jane')
*/


/*-- 일반 함수는 Hoisting 적용됨
foo('a')

console.log('b')

function foo(word) {
    console.log(word);
  }
-------*/


/* ---- 익명함수는 Hoisting 적용 안 됨!!
foo('a')

console.log('b')

let foo = function(word){
    console.log(word)
} 
----- */

// const student = {
//     name: "Sparta",
//     age: 18,
//     onlineClass: "Node JS",
//   };

  /* 객체의 '구조 분해 할당'
const { name, age, onlineClass } = student
console.log(name); // "Sparta"
console.log(age); // 18
console.log(onlineClass); // "Node JS"
//아래는 원래 방법
console.log(student.name) 
console.log(student.age)
console.log(student.onlineClass)
*/

/*
function foo(word){
    console.log(word)
} 

foo('bear')
*/



/*---------- Promise 객체 예제
const timerPromise = new Promise((resolve, reject) => { // 이곳에 정의된 함수가 executor
    setTimeout(() => {
        console.log('First');
          resolve();
      }, 1000);
  });
  
  // 이 시점에서 timerPromise는 Fulfilled Promise라고 부를 수 있다.
  
  timerPromise.then(() => {
      console.log('Middle');
      console.log('Last');
  });
  
  // Print: First
  // Middle
  // Last
  -----------------------------*/

 /* -------------------------- 객체 만들기 테스트(속성 = 함수/메소드, 객체형 포함)
const func1 = {
    name: 'func',
    team: 2,
    roll: function(a,b){
        console.log(a[b])
    },
    func2: {
        one: 1,
        two: 2,
        thr: 3,
        fou: 4,
        fiv: 5
    }
}
const arr1 = ['LG', 'SS', 'KIA', 'NX']

func1.roll(arr1, 2)
const double_obj = func1.func2.two
const double_obj2 = func1.func2['two']
console.log(double_obj, double_obj2)
---------------------------- 객체 테스트 완료*/


/*--------------------------나머지 매개변수 연습
const arr2 = [3,5,2,6,2,4]

function prac1(arr2){
    console.log(arr2)
}
prac1(arr2)
prac1(...arr2)

function prac2(...arr2){
    console.log(...arr2)
}
prac2(arr2)
prac2(...arr2)
---------------------------나머지 매개변수 연습 (차이점을 모르겟음**) */

/*---------------------------------------for 반복문으로 최솟값 최댓값 구하기
const arr3 = [3,5,2,6,2,4,1,11,8]

let min = arr3[0]
let max = arr3[0]

for(let i = 1; i<arr3.length; i++){
    if(min > arr3[i]){
        min = arr3[i]
    }
    
}
for(let i = 1; i<arr3.length; i++){
    if(max < arr3[i]){
        max = arr3[i]
    }
}

console.log(min, max) 
------------------------------------------------*/


/*----------------------------------매개변수에 전개 연산자 사용 유무 비교
const arr4 = [3,5,2,6,2,4,1,11,8]

function items (...a){
    console.log(a)
}

items(arr4)
items(...arr4)
------------------------------*/

/*------------------------------------------- 매개변수의 기본값(고정값) 활용------
function defalt1(name, wage=20000, hour=8) {
    console.log(`${name}님의 시급은 ${wage}이며 총 근무시간은 ${hour}입니다`)
    console.log(`총 일급은 ${wage*hour}원 입니다`)
}
   
defalt1('jane')
defalt1('tom', 50000)
defalt1('kyle', 70000, 7)
defalt1('melisa',  , 7)
//------------------------------------------단, 3개 이상의 파라미터 중 하나만 기본값하는것 모르겠음** */

/*----------------------------------------각 배열의 같은 인덱스값끼리 곱해서 새로운 배열 만들기 
let double = function(a,b){
    let output = [];
    for(let i = 0; i<a.length; i++){
        output.push(a[i]*b[i])
    }
    return output
}
const a = [1,2,3,4,5,6,7]
const b = [1,2,3,4,5,7,6]
console.log(double(a,b))
----------------------------------------*/

/*-------------------------------------------- 콜백 함수1 (선언적 함수 썼을때)
function shell(name){
    let output = ''
    for(let i = 0; i<6; i++){
        output = name(i)
    }
    return output
}

function inner(num) {
    console.log(`${num}번째 프린트 입니다`)
}

shell(inner)
------------------------------------------------*/

/*---------------------------------------------- 콜백 함수2 (익명 함수 썼을때. 선언적함수랑 결과 똑같음)
let shell = function(name){
    let output = ''
    for(let i = 0; i<6; i++){
        output = name(i)
    }
    return output
}

let inner = function(num) {
    console.log(`${num}번째 프린트 입니다`)
}

shell(inner)
---------------------------------------*/

/*--------------------------------------------forEach 메소드를 활용한 배열 반복문 
const numList = [2,4,5,1,6,7,11]
numList.forEach(function(val,idx,arr){
        console.log(`${idx}번째 값은 ${val}입니다`)
    })  


    const numList2 = [2,4,5,1,6,7,11]
numList.forEach(function(val,idx='',arr){
        console.log(` ${val}는 배열 ${arr}의 요소 입니다`)
    })  
  --------------------------------------------*/



/*----------------------------------.map() 메소드를 이용한 배열 반복문1: console.log 로 바로 출력    
const arr5 = [3,5,6,1,8,11,3,5]
arr5.map(function(a,b,c){
        console.log( c[b]**2)
})
------------------------------- 배열 없이 그냥 낱개의 숫자들만 반환*/



/*----------------------------------.map() 메소드를 이용한 배열 반복문2: 새로운 빈 배열에 직접 push로 넣은 후 해당배열 출력
const arr5 = [3,5,6,1,8,11,3,5]
const arr6 = []
let emt
arr5.map(function(a,b,c){
    emt = c[b]**2
    arr6.push(emt)
})

console.log(arr6)
------------------------------- 일반적인 한 겹(!차) 배열로 출력됨*/


/*------------------------------------------.map() 메소드를 이용한 배열 반복문3: 원래의 배열을, map()의 조건을 적용한 요소들로 바꿔서 재배열
let arr5 = [3,5,6,1,8,11,3,5]
arr5 =  arr5.map(function(a,b,c){
    return c[b]**2
})

console.log(arr5)
-----------------------------------*/


/*---------------------------------------.filter() 메소드를 이용한 배열 반복문() = 콜백함수의 리턴값이 '참'인 요소들만 골라서 새로 배열을 만든다
let arr7 = [5,6,7,8,9]
arr7 = arr7.filter(function(val='', idx, arr){
    return (arr[idx]>=7) === true
  
})

console.log(arr7)


--------------------------------------------------------.filter() 메소드와 화살표 함수를 이용한 반복문() = 콜백함수의 리턴값이 '참'인 요소들만 골라 새 배열 만든다.
let arr8 = [5,6,7,8,9,10,11]
arr9 = arr8.filter((val,idx,arr)=>arr[idx]>=8)

console.log(arr9)
----------------------------------------------------*/

/*------------------------------------- 객체 응용: this 이용, 속성 추가하기, 객체 내 속성으로써 객체 삽입 등
const obj1 = {
    name: 'firstObj',
    team: 2,
    roll: function(a,b){
        console.log(`${a[b]}의 ${b}번째 선수는 ${this.team}팀 소속입니다`)
    },
    obj2: {
        one: 1,
        two: 2,
        thr: 3,
        fou: 4,
        fiv: 5
    },
    arr2: [2,4,6,8,10]
}
const arr1 = ['LG', 'SS', 'KIA', 'NX']

obj1.roll(arr1,3)
obj1.roll(arr1, obj1.team)
obj1.obj2.six = 6
obj1.teamPay =obj1.team * 20000
console.log(obj1.name)
console.log(obj1)
-------------------------------------------------*/


/*------------------------------------------------ 객체 응용2: 객체에서 메소드 간단히 선언한기, 메소드에 this 이용)
const obj3 = {
    name: 'tasool',
    age: 38,
    job: 'basketball player',
    position: 'point guard',
    team_change: ['sk', 'samsung', 'db', 'kcc'],
    profile(name=this.name, age, job, position=obj3.position){
        console.log(`이름은 ${name}, 나이는 ${age}, 직업은 ${job}, 지난 팀은 ${this.team_change[2]}였으며 포지션은 ${position}입니다`)
    }
}

obj3.profile(undefined,38,obj3.job)
-----------------------------------------*/

/*--------------------------------------기본자료형을 객체로 선언하는 법
const change = new String('jane')
change.test1 = 10
console.log(change)


const num = new Number(25)
num.test2 = 31
console.log(num.test2 + num)
-----------------------------------------*/


/*--------------------------------------기본자료형(숫자형)에 함수형 메소드 추가하기 
Number.prototype.prop1 = function(a,b){console.log(a+b)}
const num = 13
num.prop1(2,3)
console.log(num)
--------------------------------------------*/

/*
let words = "france seoul gapyeong seolak sokcho busan"
let splitWords = words.split(" ")
console.log(splitWords, typeof(splitWords))  //split으로 쪼개면 배열, 자료형은 객체(배열) 
let joinWords = splitWords.join(",")
console.log(joinWords, typeof(joinWords)) //join으로 붙이면 문자열, 자료형도 문자열(string)
*/

/* ------------push() 추가, pop() 삭제 === 맨 끝에 요소만 가능!!
let capital = ["paris", "washington", "seoul", "london", "verlin", "dokyo"]
let remove_cap = capital.pop()
console.log(capital)
console.log(remove_cap)
let add_cap = capital.push("rome")
console.log(capital)
capital[0] = "ottawa"
console.log(capital)
*/

/* ------------unshift() 추가, shift() 삭제 : '제일 첫' 요소만 가능!! (기능은 push, pop과 동일)
let capital = ["paris", "washington", "seoul", "london", "verlin", "dokyo"]
let remove_cap = capital.shift()
console.log(capital)
console.log(remove_cap)
let add_cap = capital.unshift("rome")
console.log(capital)
capital[0] = "ottawa"
console.log(capital)
*/

/* -------------------- 전개연산자: 쓴것과 안쓴것은 서로 다른 독립된 객체
const myArray1 = ['Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort'];
const myArray2 = [...myArray1]; // ...myArray1 : 'Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort'
 
console.log(myArray1, typeof(myArray1)); // ["Canna", "Cuzz", "Faker", "Teddy", "Effort"], object
console.log(myArray2, typeof(myArray2)); // ["Canna", "Cuzz", "Faker", "Teddy", "Effort"], object
console.log(myArray1===myArray2) //false
*/
/*
const myArray1 = ['Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort'];
const myObject = {...myArray1}
console.log(myObject)

//   '0': 'Canna',
//   '1': 'Cuzz',
//   '2': 'Faker',
//   '3': 'Teddy',
//   '4': 'Effort'
  */

/* -------------------------------- 기본 매개변수(=선택적 인수) 다양하게 응용 (undefined 활용 깨달음)
function num(num1, num2=100, num3){
    console.log(num1, num2, num3)
}

num(100, undefined, 200) //100 100 200
num(undefined, undefined, 200) //undefined 100 200
num(200) //200 100 undefined
*/

let arr = [2,3,4,'',0,null,undefined]
let result = arr.filter((val,ind)=>{
    return false
})

console.log(result)