let questions = [{
    quesion: 'javascript is the best',
    answer: true
}, {
    quesion: 'javascript is fast',
    answer: true
}, {
    quesion: 'javascript is the just for android',
    answer: false
}, ]

let questionBox = document.getElementsByClassName("questions")[0]
let trueElement = document.getElementById('True')
let falseElement = document.getElementById('False')
let nextElement = document.getElementById('Next')
let trueAnswerCount = Number(document.getElementById('trueAnswerCount').textContent)
let allAnswerCount = Number(document.getElementById('allAnswerCount').textContent)

let count = 0
let trueAnswer = 0
let falseAnswer = 0

function next() {
    if (count >= questions.length) {
        count = 0
    }
    questionBox.style.backgroundColor = '#f0f8ff'
    questionBox.textContent = questions[count].quesion
    count++
    console.log("trueAnswer" + " " + trueAnswer)
    console.log("falseAnswer" + " " + falseAnswer)
}

next()

function selectTrue() {
    if (questions[count - 1].answer === true) {
        questionBox.style.backgroundColor = 'green'

        trueAnswer += 1
        trueAnswerCount += 1
        console.log(trueAnswerCount)
    } else {
        questionBox.style.backgroundColor = 'red'
        falseAnswer += 1
    }
}

function selectFalse() {
    if (questions[count - 1].answer === false) {
        questionBox.style.backgroundColor = 'green'
        trueAnswer += 1
    } else {
        questionBox.style.backgroundColor = 'red'
        falseAnswer += 1
    }
}

function disableAttribute() {
    trueElement.addEventListener('click', function() {
        trueElement.setAttribute("disabled", '')
        falseElement.setAttribute("disabled", '')
        nextElement.removeAttribute('disabled')
    })
    falseElement.addEventListener('click', function() {
        falseElement.setAttribute("disabled", '')
        trueElement.setAttribute("disabled", '')
        nextElement.removeAttribute('disabled')
    })
    nextElement.addEventListener('click', function() {
        falseElement.removeAttribute("disabled", '')
        trueElement.removeAttribute("disabled", '')
        nextElement.setAttribute('disabled', '')
    })

}

disableAttribute()