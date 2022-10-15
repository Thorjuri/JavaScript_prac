// const prac = {
//     key1: 2,
//     key2: 8,
//     add : function(){
//         return this.key1 + this.key2
//     },
//     sub : function(){
//         return this.key2 - this.key1
//     },
//     mul : function(a,b){
//         return a * b
//     },
//     div : function(a,b){
//         return a / b
//     }
// }

// console.log(prac.add())
// console.log(prac.sub())
// console.log(prac.mul(2, 10))
// console.log(prac.div(10, 2))

class Unit {
    constructor(name, hp){
        this.name = name
        this.hp = hp
    }

    healing(){
        return this.hp > 100 ? this.hp : this.hp +1
    }
    damage(){
        return this.hp > 0 ? this.hp -1 : this.hp

}
}

const user1 = new Unit('jun', 50)

let heal1 = user1.healing()

let heal2 = user1.healing()

let dmg1 = user1.damage()

console.log(heal1)
console.log(heal2)
console.log(dmg1)