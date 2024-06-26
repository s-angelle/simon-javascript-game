const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;


// Create an event listener that starts the game upon the first keyboard key being pressed.

$(document).one('keypress', function(){

    if(!started) {

        // Start game.
        started = true;

        // Activate sequence.
        nextSequence();

    }

});


// Add an event listener to the buttons.

$('.btn').on('click', function(){

    // Store selected object in variable.
    let userChosenColor = this.id;

    // Add to the userClickedPattern array.
    userClickedPattern.push(userChosenColor);

    // Call playSound function.
    playSound(userChosenColor);

    // Animate element selected by user.
    animatePress(userChosenColor);

    // Call function to analyze user's selection
    checkAnswer(userClickedPattern.length - 1);


})

// Create a function that checks the user's answers against the computer's sequence.

checkAnswer = currentLevel => {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        console.log('Sucess');

        // Check if user has completed sequence. Resume game if so.
        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function(){ nextSequence();
            }, 1000);
        }

    } else {

        // Play audio if user guessed incorrectly.
        let wrongAudio = new Audio('sounds/wrong.mp3');

        wrongAudio.play();

        // Activate CSS if user fails.
        $('body').addClass('game-over');

        setTimeout(function(){

        $('body').removeClass('game-over');
        },200);

        $('h1').text('Game Over, Press Any Key to Restart');

        // Restart the game
        startOver();

    }

}


// Create a function that will determine the pattern sequence user must follow.

nextSequence = () => {

    // Once function is called, generate an empty user array.
    userClickedPattern = [];

    // Increase the level by 1 every time function is called.
    level++;

    // Update h1 element to reflect current game level.
    $('h1').text(`Level ${level} `);

    // Create a variable that generates a random number from 0- 3.
    const randomNumber = Math.floor(Math.random() * 4);

    // Pick random index from buttonColors array.     
    let randomChosenColor = buttonColors[randomNumber];
 
    // Push the item to the gamePattern array.
    gamePattern.push(randomChosenColor);

    // Make the element containing the randomChosenColor ID flash.
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

    // Call playSound function.
    playSound(randomChosenColor);

}


// Create a function to restart the game

startOver = () => {

    $(document).one('keypress', function(){

        // Reset levels.
        level = 0;

        // Reset game pattern.
        gamePattern = [];

        // Reset game status
        started = false;
    
        // Start game.
        nextSequence();
    
        }
    
    )};



// Create a function that will play a sound corresponding to the color selected.

playSound = (name) => {

    switch (name) {

        case 'red':
            name = new Audio(`sounds/${name}.mp3`);
            name.play();

        case 'blue':
            name = new Audio(`sounds/${name}.mp3`);
            name.play();

        case 'green':
            name = new Audio(`sounds/${name}.mp3`);
            name.play();

        case 'yellow':
            name = new Audio(`sounds/${name}.mp3`);
            name.play();

        default:
            name.play();
    }

    name.play();
}


// Create a function that will animate when a color is chosen.

animatePress = (currentColor) => {

    // Add 'pressed' class to buttons that are clicked.
    $(`#${currentColor}`).addClass("pressed");

    // Remove 'pressed' class 100 miliseconds after button is clicked.
    setTimeout(function() {

    $(`#${currentColor}`).removeClass("pressed");    
    }, 100);

    }

