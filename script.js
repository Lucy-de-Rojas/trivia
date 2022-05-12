console.clear();
let allTrivia = '';

let score = {correct: 0, incorrect: 0};

let counter = 0;
let maxQuestions = 10;

let playerAnswer = '';































// main function: 🏀
async function getTrivia() {



    

    updateScore();

    // initial reset:
    let options = document.querySelector('#options');
    let outcome = document.querySelector('#outcome');
    let submit = document.querySelector('#submitAnswer');
    let nextButton = document.querySelector('#next');

    options.innerHTML = '';
    outcome.innerHTML = '';

    submit.disabled = false;
    nextButton.disabled = true;







    let response = await fetch('https://opentdb.com/api.php?amount=10');
    let data = await response.json();

    data = data.results;
    allTrivia = data;
    // console.log(data[counter]);
    // console.log('all trivia from main func: ',allTrivia);
    
    
    
    
    
    
    // first question load:
    displayQuestion(data);

    updateProgress();




    












    
    



}      // end of main func 



getTrivia()
























// displaying question and options: 🏀✅
function displayQuestion(arr) {
    
    let data = arr[counter];
    let questionPara = document.querySelector('#question');
    let options = document.querySelector('#options');
    
    // console.log(data);

    let question = data.question;
    questionPara.innerHTML = question;

    let breakLine = document.createElement('br');



    let correctAnswer = data.correct_answer;
    let incorrectAnswers = data.incorrect_answers;
    let allAswers = [correctAnswer, ...incorrectAnswers];

    let shuffledAnswers = shuffleArray(allAswers);

    
    // create and populate BULLET points:
    shuffledAnswers.forEach((element)=>{
        
        let radio = document.createElement('input');
        radio.setAttribute('type','radio');
        radio.setAttribute('name','option');
        radio.setAttribute('value',element);
        
        
        let label = document.createElement('label');
        label.setAttribute('for',element);
        label.innerHTML = element;
        
        
        
        
 
        
        options.appendChild(radio);
        options.appendChild(label);        
        options.appendChild(breakLine);
        
        
        
        
    });




  




 
  




    

}








// shuffle array:   ✅
function shuffleArray(arr) {
    let result = [];
    
    let randomPick = arr[Math.floor(Math.random()*arr.length)];
    result.push(randomPick);
    
    while(result.length !== arr.length) {
        
        if(!result.includes(randomPick)) {
            
            result.push(randomPick);
        }
        randomPick = arr[Math.floor(Math.random() * arr.length)];
    }
    
    return result;
}









// submit answer:
// getting checked radio button: 🏀 ✅
let submitAnswer = document.querySelector('#submitAnswer');
let nextButton = document.querySelector('#next');
let outcome = document.querySelector('#outcome');
        

function getPlayerAnswer() {





    let correctAnwer = allTrivia[counter].correct_answer;







    
    // console.log('player answer: ', playerAnswer, 'correct answ: ', correctAnswer);
    


    // getting answer if correct or wrong:
    if(document.querySelector('input[name="option"]:checked')) {
        playerAnswer = (document.querySelector('input[name="option"]:checked')).value;
        nextButton.disabled = false;
        if(playerAnswer == correctAnwer) {
            // alert(`Correct!`);
            outcome.innerHTML = 'Correct!';
            score.correct++;
            progressBarDATA.push(correctColor);

        }
        else {

            // alert(`Ouch! Incorrect this time. Correct answer was: ${correctAnswer}.`);
            outcome.innerHTML = `Ouch! Incorrect this time. Correct answer was: ${correctAnwer}.`;
            score.incorrect++;
            progressBarDATA.push(incorrectColor);


        }

        updateProgressBar();


        submitAnswer.disabled = true;

    }
    else {
        alert('We need any answer');
    }


    counter++;
    // game over check:
  setTimeout(()=>{
    if(counter == maxQuestions) {
        counter = 0;
        resetProgressBar();

        alert(`End of game, correct:${score.correct}, incorrect: ${score.incorrect}`);

        let newGame = confirm('fancy playing another round?');
        if(newGame) {

            console.log('lets do another round');
            score = {correct: 0, incorrect: 0};
            

            // initial resets:
            getTrivia();

            resetProgressBar();


      

        }
        else {
            console.log('have a good day');
        }
    }


},0);



updateScore();


 






    


    }



submitAnswer.addEventListener('click', getPlayerAnswer);


































// pressing next button: ✅
nextButton.addEventListener('click',nextQuestion);

function nextQuestion() {
  


// end of game check:



    // resetting radio buttons:
    let options = document.querySelector('#options');
    options.innerHTML = '';

        
            submitAnswer.disabled = false;
            nextButton.disabled = true;
            outcome.innerHTML = '';
            
            displayQuestion(allTrivia);
            updateProgress();



}


















// update progress 1/10 style:   ✅
function updateProgress() {
    let progress = document.querySelector('#progress');

    progress.innerHTML = ` ${counter+1}/${maxQuestions}`;
}












// update score:  ✅ 
function updateScore() {

    console.clear();
    console.log('score from func: ',score);
    
    let correctNumber = document.querySelector('#correct');
    correctNumber.innerHTML = score.correct;

    let incorrNumber = document.querySelector('#incorrect');
    incorrNumber.innerHTML = score.incorrect;


    



}


























































