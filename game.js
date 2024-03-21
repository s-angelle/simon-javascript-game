const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let randomChosenColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];

nextSequence = () => {

    // Create a variable that generates a random number from 0- 3.
    const randomNumber = Math.floor(Math.random() * 4);

    // Push the item to the gamePattern array.
    gamePattern.push(randomChosenColor);

    // Make the element containing the randomChosenColor ID flash.
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

    // Make a corresponding sound for the randomly selected color.
    const audioSound = new Audio(`sounds/${randomChosenColor}.mp3`);

    audioSound.play();
}

nextSequence();


//  Select button clicked and save the id in a variable.
$(`.btn`).on('click', function(){
    let userChosenColor = this.id;
})





