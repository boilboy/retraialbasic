//alert("Hello My Web Page");

/*Quiz1 
数字と文字の足し算の違い*/

const apple  = 3
const pen    = 5
const goukei = apple + pen

console.log (goukei)

/*Quiz2
配列の中の番号について*/

const array = ["サッカー", "バトミントン" , "野球", "テニス", "水泳"]
console.log (array.length)

/*If条件分岐1
*/

const superApple = "ブド"
let color = "???"

if (superApple == "りんご") {
    color = "赤"
} else if (superApple == "みかん") {
    color = "オレンジ"
} else if (superApple == "ブドウ") {
    color = "紫"
} else {
    color ="なし"
}

console.log (color)

/*If条件分岐2
*/

const student_score = 78
const student_social_score = 28

if (student_score >= 90 && student_social_score >= 95) {
    console.log("S")
}else if (student_score >= 80 || student_social_score >= 80) {
    console.log("A")
}else if (student_score >= 50) {
    console.log("B")
}else   {
    console.log("C")
}

/* for 繰り返し処理
*/
// for (a in array) {
//     console.log(array[a])
// }

// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])

for (let i = 0 ; array.length > i; i++ ) {
        console.log(array[i])
    }

/* じゃんけんゲーム
*/

function janken (myAnswer) {
    const enemyAnswers = ["グー", "チョキ", "パー"]
    const enemyAnswer = enemyAnswers[Math.floor(Math.random()*enemyAnswers.length)]
    console.log(`自分:${myAnswer} 相手:${enemyAnswer}`)

    let thisResult
    if (myAnswer == enemyAnswer) {
        thisResult = `<p id ="jankenResult"> 自分:${myAnswer} 相手:${enemyAnswer} <br />あいこ! </p>`
    } else if ((myAnswer == "グー" && enemyAnswer == "チョキ") || (myAnswer == "チョキ" && enemyAnswer == "パー") || (myAnswer == "パー" && enemyAnswer == "グー")) {
        thisResult = `<p id ="jankenResult"> 自分:${myAnswer} 相手:${enemyAnswer} <br />勝ち! </p>`
    } else { 
        thisResult = `<p id ="jankenResult"> 自分:${myAnswer} 相手:${enemyAnswer} <br />負け! </p>`
    }

    let result = document.getElementById("jankenResult")
    result.remove()
    result = document.getElementById("janken")
    result.insertAdjacentHTML("afterend", thisResult)
}
