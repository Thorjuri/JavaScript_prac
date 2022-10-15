//6-3 객체와 배열 고급


//1. 속성 존재여부 확인
const basket =  {
    apple: 5,
    carrot: 2,
    milk: 11,
    orange: "없습니다",
    juice: [1,2,3,4,5],
    sugar: 0
}


// // (1) 기본적인 존재여부 확인
// console.log(basket.apple)  // 5
// console.log(basket.orange)  // "없습니다"
// console.log(basket.juice)  // [1,2,3,4,5]
// console.log(basket.juice[1])  // 2
// console.log(basket.sugar)  //0
// console.log(basket.ggobukchip) //undefined



// // (2) OR 연산자를 이용한 확인
// // OR 연산자는 왼쪽에서부터 가장 먼저 만나는 True 를 반환한다 --> true 반환 즉시 뒤는 읽지않고 중지
// let a = basket.apple || false  // 5
// let b = false || basket.carrot  // 2
// let c = basket.ggobukchip || "속성이 없습니다"  //속성이 없습니다 (ggobukchip은 undefined므로)
// let d = basket.sugar || "속성이 없습니다"  //속성이 없습니다 (0은 false므로)

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)




// // 2. 삼항 연산자(조건부 연산자)를 이용한 기본 속성 지정 
// //속성이 있으면 그대로 유지, 없으면 새로 지정
// basket.apple = basket.apple !== undefined ? basket.apple : "사과가 금값이야"
// basket.ggobukchip = basket.ggobukchip !==undefined ? basket.ggobukchip : 100

// console.log(basket)




// // 3. 다중 할당 - 배열
// let [a,b,c,d,e] = [1,2,3,4,5]
// console.log(a,b,c,d,e)

// // 부분 다중 할당
// let arr = [1,2,3,4,5]
// let [a,b,c] = arr
// console.log(a,b,c)

// // 부분 다중 할당(2)
// let arr = [1,2,3]
// let [a,b,c,d,e] = arr
// console.log(a,b,c,d,e)


// // 4. 다중 할당 - 객체
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// }

// const {a, b, e} = obj  //원래는 obj[a], obj[b], obj[e] 건건이 꺼내서 출력해야함
// console.log(a,b,e)

// const {first = a, second =b, fifth=e} = obj  //속성을 특정 변수에 할당해서 변수를 출력할 수 잇음
// console.log(first, second, fifth)





// // 5. 배열의 얕은 복사 = 데이터 주소가 가리키는 변수만 달라진다(메모리상 데이터는 한 곳)
// let snack = ["치토스", "꼬북칩", "오레오", "프레첼"]
// let snack_dup = snack
// snack_dup.push("맛동산", "조청유과")

// console.log(snack)
// console.log(snack_dup)




// //6. 전개연산자를 이용한 깊은 복사 = 실제로 복제본(clone)을 만들어 별개의 독립적인 배열이 된다
// let snack = ["치토스", "꼬북칩", "오레오", "프레첼"]
// let snack_dup = [...snack, "롯데샌드"]
// snack_dup.push("맛동산", "조청유과")

// console.log(snack)
// console.log(snack_dup)



// // 7. 객체의 얕은 복사
// const snack = {
//     name: "oreo",
//     price: 2000,
//     star: 2
// }

// const food = snack
// food.name = "chocopie"
// food.price = 5000

// console.log(snack)
// console.log(food)




// //8. 전개연산자를 통한 깊은 복사
// const snack = {
//     name: "oreo",
//     price: 2000,
//     star: 2
// }

// const snack22 = {...snack, star:5, type:4}  //복사할때 원하는 속성 추가해서 복사 (덮어씀)
// snack22.name = "ggobukchip" //복사 후 원하는 속성 추가하기

// console.log(snack)
// console.log(snack22)