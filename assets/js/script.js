// Wait for dom to finish loadingbefore running the game
// Get the button elementsand add event listeners to them

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert(`You have clicked submit!`);
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You have clicked ${gameType}!`)
            }
        })
    }
})




function runGame() {

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}