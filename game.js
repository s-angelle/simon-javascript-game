const buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];
const gamePattern = [];
const userClickedPattern = [];
let level = 0;
let started = false;




// Create a function that will determine the pattern sequence user must follow.

nextSequence = () => {

    // Increase the level by 1 every time function is called.
    level++;

    // Update h1 element to reflect current game level.
    $('h1').text(`Level ${level} `);

    // Create a variable that generates a random number from 0- 3.
    const randomNumber = Math.floor(Math.random() * 4);

    // Push the item to the gamePattern array.
    gamePattern.push(randomChosenColor);

    // Make the element containing the randomChosenColor ID flash.
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

    // Call playSound function.
    playSound(randomChosenColor);

}


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

    currentColor.addClass('pressed');
}

// Add an event listener to the buttons.

$('.btn').on('click', function(){

    // store selected object in variable.
    let userChosenColor = this.id;

    // add to the userClickedPattern array.
    userClickedPattern.push(userChosenColor);

    // Call playSound function.
    playSound(userChosenColor);

    animatePress(userChosenColor);

})


// Create a function that adds class list to clicked button.

animatePress = (currentColor) => {

    // Add 'pressed' class to buttons that are clicked.
    $(`#${currentColor}`).addClass("pressed");

    // Remove 'pressed' class 100 miliseconds after button is clicked.
    setTimeout(function() {
    $(`#${currentColor}`).removeClass("pressed");    
    }, 100);

    }

// Create an event listener that starts the game upon the first keyboard key being pressed.

$(document).one('keypress', function(){

    if(!started) {

         // Change the main heading to reveal the current game level.
         $('h1').text(`Level ${level} `);


        // Activate sequence.
        nextSequence();

        // Start game.
        started = true;

    }

});