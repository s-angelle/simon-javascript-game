const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

// Create a variable that will select a random item from buttonColors array
let randomChosenColor = buttonColors[Math.floor(Math.random() * buttonColors.length)]


// Create a function that generates a random number from 0 - 3

nextSequence = () => {

    const randomNumber = Math.floor(Math.random() * 4);

    gamePattern.push(randomChosenColor);

    console.log(randomChosenColor);

    // console.log(gamePattern);
}

// nextSequence();


console.log($(`#${randomChosenColor}`));
