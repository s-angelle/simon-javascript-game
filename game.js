const buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];
const gamePattern = [];
const userClickedPattern = [];



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
            console.log('Error');
    }

    name.play();
}


// Create a function that will determine the pattern sequence user must follow.

nextSequence = () => {

    // Create a variable that generates a random number from 0- 3.
    const randomNumber = Math.floor(Math.random() * 4);

    // Push the item to the gamePattern array.
    gamePattern.push(randomChosenColor);

    // Make the element containing the randomChosenColor ID flash.
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

    // Call playSound function.
    playSound(randomChosenColor);

}

nextSequence();



// Add an event listener to the buttons.

$('.btn').on('click', function(){

    // store selected object in variable.
    let userChosenColor = this.id;

    // add to the userClickedPattern array.
    userClickedPattern.push(userChosenColor);

    // Call playSound function.
    playSound(userChosenColor);
})






