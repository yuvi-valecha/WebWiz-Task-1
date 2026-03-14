const questions = [
    {
        subject: "Maths",
        question: "The number of common terms in the progressions 4,9,14,19,.. upto 25th term and 3,6,9,12,... upto 37th term is:",
        options: ["9","5","7","8"],
        answer: 2
    },
    {
        subject: "Physics",
        question: "In Young's double slit experiment, if slit separation is halved and screen distance doubled, fringe width becomes:",
        options: ["Unchanged","Doubled","4 times","Halved"],
        answer: 2
    },
    {
        subject: "Chemistry",
        question: "Concentrated nitric acid (69% by mass) with density 1.41 g/mL has molarity:",
        options: ["15.4 M","10.5 M","9.4 M","12.2 M"],
        answer: 0
    },
    {
        subject: "Chemistry",
        question: "Which compound undergoes Aldol condensation?",
        options: ["Benzene","Acetone","Methanal","Benzophenone"],
        answer: 1
    },
    {
        subject: "Physics",
        question: "A thin convex lens of focal length 10 cm and a concave lens of focal length 20 cm are placed in contact. The focal length of the combination is:",
        options: ["20 cm","-20 cm","10 cm","30 cm"],
        answer: 0
    },
    {
        subject: "Chemistry",
        question: "Which of the following compounds is most reactive towards electrophilic substitution?",
        options: ["Toluene","Benzene","Nitrobenzene","Chlorobenzene"],
        answer: 0
    },
    {
        subject: "Maths",
        question: "The number of ways in which 5 boys and 3 girls can be seated in a row so that no two girls are together is:",
        options: ["720","14400","2400","86400"],
        answer: 1,
    },
    {
        subject: "Maths",
        question: "The probability of getting a sum of 10 with two dice is:",
        options: ["1/12","1/9","1/6","1/36"],
        answer: 0
    },
    {
        subject: "Physics",
        question: "If the momentum of a body is increased by 50%, its kinetic energy will increase by:",
        options: ["50%","100%","125%","150%"],
        answer: 2
    },
    {
        subject: "Physics",
        question: "A wire of resistance R is stretched to twice its original length. Its new resistance will be:",
        options: ["4R","2R","R/2","R/4"],
        answer: 0
    },
];

let currentQues = 0
let userscore = 0
let userChoice = null

let savedAns = new Array(questions.length).fill(null)

const startBtn = document.getElementById("start-btn")
const landPage = document.getElementById("landing-page")
const quizPage = document.getElementById("quiz-screen")
const quesNum = document.getElementById("ques-num")
const subjectTag = document.getElementById("subject")
const questionName = document.getElementById("question")
const optionA = document.getElementById("option-a")
const optionB = document.getElementById("option-b")
const optionC = document.getElementById("option-c")
const optionD = document.getElementById("option-d")
const optionAA = document.getElementById("option-A")
const optionBB = document.getElementById("option-B")
const optionCC = document.getElementById("option-C")
const optionDD= document.getElementById("option-D")
const nextBtn = document.getElementById("next-btn")
const finishBtn = document.getElementById("finish-btn")
const prevBtn = document.getElementById("prev-btn")
const checkBtn = document.getElementById("check-btn")
const score = document.getElementById("score")
const resultPage = document.getElementById("result-screen")
const finalScore = document.getElementById("final-score")
const message = document.getElementById("message")
const restartBtn = document.getElementById("restart-btn")

function startQuiz(){
    landPage.classList.add('hidden')
    landPage.classList.remove('flex')
    quizPage.classList.remove('hidden')
    quizPage.classList.add('flex')
    startques()
}

function startques(){
    const q = questions[currentQues]
    subjectTag.innerText = q.subject.toUpperCase()
    questionName.innerText = q.question
    optionA.innerText = q.options[0]
    optionB.innerText = q.options[1]
    optionC.innerText = q.options[2]
    optionD.innerText = q.options[3]
    quesNum.innerText = currentQues + 1
    score.innerText = userscore

    userChoice = null
    const allOptions= [optionAA, optionBB, optionCC, optionDD]
    allOptions.forEach(btn => {
        btn.classList.remove("bg-yellow-800", "bg-red-800", "bg-green-800")
        btn.classList.add("bg-gray-800")
        allOptions.forEach(btn => btn.style.pointerEvents = "auto")
        checkBtn.classList.remove("pointer-events-none", "opacity-50")
    })

    if(currentQues === questions.length - 1){
        finishBtn.classList.remove("hidden")
        nextBtn.classList.add("hidden")
        
    } else{
        finishBtn.classList.add("hidden")
        nextBtn.classList.remove("hidden")


    }

    if(savedAns[currentQues] !== null){
        userChoice = savedAns[currentQues]
        const correctIndex = q.answer
        if(userChoice === correctIndex){
            allOptions[userChoice].classList.add("bg-green-800")
        } else{
            allOptions[userChoice].classList.add("bg-red-800")
            allOptions[correctIndex].classList.add("bg-green-800")
        }
        allOptions.forEach(btn => btn.style.pointerEvents = "none")
        checkBtn.classList.add("pointer-events-none", "opacity-50")
    }
}

function nextQues(){
    currentQues++
    startques()
}
function prevQues(){
    currentQues--
    startques()
}
function selectOption(selectedBtn, index){
    userChoice = index
    const allOptions= [optionAA, optionBB, optionCC, optionDD]
    allOptions.forEach(btn => {
        btn.classList.remove("bg-yellow-800")
        btn.classList.add("bg-gray-800")
    })
    selectedBtn.classList.remove("bg-gray-800")
    selectedBtn.classList.add("bg-yellow-800")
}

function checkAns(){
    if (userChoice === null){
        alert("Please select an option first!")
        return
    }
    savedAns[currentQues] = userChoice
    const allOptions= [optionAA, optionBB, optionCC, optionDD]
    const correctIndex = questions[currentQues].answer

    if(userChoice !== correctIndex){
        allOptions[userChoice].classList.remove("bg-yellow-800")
        allOptions[userChoice].classList.add("bg-red-800")
    }
    if(userChoice === correctIndex){
        userscore++
    }
    if(score){
        score.innerText = userscore
    }
    allOptions[correctIndex].classList.remove("bg-gray-800", "bg-yellow-800")
    allOptions[correctIndex].classList.add("bg-green-800")

    allOptions.forEach(btn => btn.style.pointerEvents = "none")
    checkBtn.classList.add("pointer-events-none", "opacity-50")
}

function showResult(){
    quizPage.classList.add("hidden")
    quizPage.classList.remove("flex")
    resultPage.classList.remove("hidden")
    resultPage.classList.add("flex")
    
    finalScore.innerText = userscore
    if(userscore > 6){
        message.innerText = "Well Done! Great Job. Keep it up!"
    } else{
        message.innerText = "Nice Try! Keep Practicing and improve your score."
    }
}

function restartQuiz(){
    resultPage.classList.remove("flex")
    resultPage.classList.add("hidden")
    landPage.classList.remove("hidden")
    landPage.classList.add("flex")
    currentQues = 0
    savedAns = []
    userscore = 0
    userChoice = null  
}


startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", nextQues)
prevBtn.addEventListener("click", prevQues)
optionAA.addEventListener("click", () => selectOption(optionAA,0))
optionBB.addEventListener("click", () => selectOption(optionBB,1))
optionCC.addEventListener("click", () => selectOption(optionCC,2))
optionDD.addEventListener("click", () => selectOption(optionDD,3))
checkBtn.addEventListener("click", checkAns)
finishBtn.addEventListener("click", showResult)
restartBtn.addEventListener("click", restartQuiz)
