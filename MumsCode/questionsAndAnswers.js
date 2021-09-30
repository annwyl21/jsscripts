//my questions and answers program

//array of questions and answer objects
const qandaArray = [
    {question: 'What does I mean in roman numerals?', answer: 1},
    {question: 'What does II mean in roman numerals?', answer: 2},
    {question: 'What does III mean in roman numerals?', answer: 3},
    {question: 'What does IV mean in roman numerals?', answer: 4},
    {question: 'What does V mean in roman numerals?', answer: 5},
    {question: 'What does VI mean in roman numerals?', answer: 6},
    {question: 'What does VII mean in roman numerals?', answer: 7},
    {question: 'What does VIII mean in roman numerals?', answer: 8},
    {question: 'What does IX mean in roman numerals?', answer: 9},
    {question: 'What does XI mean in roman numerals?', answer: 11},
    {question: 'What does XII mean in roman numerals?', answer: 12},
    {question: 'What does XIII mean in roman numerals?', answer: 13},
    {question: 'What does IXX mean in roman numerals?', answer: 19},
    {question: 'What does XX mean in roman numerals?', answer: 20},
    {question: 'What does M mean in roman numerals?', answer: 1000},
    {question: 'What does IM mean in roman numerals?', answer: 999},
    {question: 'What does MI mean in roman numerals?', answer: 1001},
    {question: 'What does L mean in roman numerals?', answer: 50},
    {question: 'What does C mean in roman numerals?', answer: 100},
    {question: 'What does D mean in roman numerals?', answer: 500},
]
let answerArray = [];
function selectQuestion() {
    //randomly select a question to ask
    let numQuestions = qandaArray.length;
    //console.log(`length = ${numQuestions}`);
    let randomNumber1 = Math.floor(Math.random()*numQuestions);
    let findQuestion = qandaArray[randomNumber1];
    console.log(findQuestion.question);
    
    //create answer selection
    answerArray.push(findQuestion.answer);
    let alt1Answer = qandaArray[Math.floor(Math.random()*numQuestions)];
    answerArray.push(alt1Answer.answer);
    let alt2Answer = qandaArray[Math.floor(Math.random()*numQuestions)];
    answerArray.push(alt2Answer.answer);
    shuffle();
    return answerArray;
}

function shuffle() {
    //repeat 100 times
    let count = 0;
    while (count!=10) {
        count++;

        //pick 2 random rules
        let leftIndex = Math.floor(Math.random() * answerArray.length);
        let rightIndex = Math.floor(Math.random() * answerArray.length);

        //swap rules over
        let leftRule = answerArray[leftIndex];
        let rightRule = answerArray[rightIndex];
        // console.log(String(leftIndex) + leftRule);
        // console.log(String(rightIndex) + rightRule);
        // console.log();
        answerArray[leftIndex] = rightRule;
        answerArray[rightIndex] = leftRule;
    }
}

console.log(selectQuestion());