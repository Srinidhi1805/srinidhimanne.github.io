// Define the stages of the story
const storyStages = {
    stage1: {
        text: "You find yourself in a dark cave.",
        choices: ["Enter the cave", "Run away"],
        consequence: ["stage2", "ending1"],
        image: "images/sri2.jpg",
        
    },
    stage2: {
        text: "Going in different  directions",
        
        choices: ["Going in left direction", "Going in right direction"],
        consequence: ["stage3", "ending6"],
        image: "images/sri3.jpg",
    },
    stage3: {
        text: "You found the devil",
        choices: ["Killed the devil", "Devil killed you"],
        consequence: ["stage4", "ending3"],
        image: "images/sri4.jpg",
    },
    stage4: {
        text: "Inside the cave, you discover a hidden treasure chest.",
        choices: ["Open the chest", "Not opened the chest"],
        consequence: ["stage5", "ending7"],
        image: "images/sri5.jpg",
    },
    stage5: {
        text: "Finding the bags",
        choices: ["Found the bags in cave ", "not found the bags in cave"],
        consequence: ["stage6", "ending2"],
        image: "images/sri6.jpg",
    },
    stage6: {
        text: "Opened the box",
        choices: ["Took the gold", "Left the gold there"],
        consequence: ["stage7", "ending5"],
        image: "images/sri7.jpg",
    },
    stage7: {
        text: "Checking for vechile",
        choices: ["Found the vechile", "Not found the vechile"],
        consequence: ["stage8", "ending2"],
        image: "images/sri1.jpg",
    },
    stage8: {
        text: "Loading into the vechile",
        choices: ["loaded into the vechile", "vechile was not working"],
        consequence: [ "stage9","ending8"],
        image: "images/sri8.jpg",
    },
    stage9: {
        text: "Loaded into the vechile",
        choices: ["leave the cave", "Go by walking"],
        consequence: [ "ending8","ending4"],
        image: "images/sri9.jpg",
    },

    ending1: {
        text: "Not intrested in finding the gold",
        image: "images/sri14.jpg",
        
    },
    ending2: {
        text: "Took the gold in hands",
        image: "images/sri17.jpg",
        
        
    },
    ending3: {
        text: "Treasure hunter died in the cave ",
       image: "images/sri11.jpg",
    },
    ending4: {
        text: "Left the cave without the Gold",
        image: "images/sri10.jpg",
        
       
    },
    ending5: {
        text: "Intrested in finding rocks",
        image: "images/sri15.jpg",
        
    },
    ending6: {
        text: "You entered  end of the cave",
        image: "images/sri12.jpg",
        
    },
    ending7: {
        text: "Unable to find the Key",
        image: "images/sri16.jpg",

        
        
    },
    ending8: {
        text: "You successfully found and continued your journey with newly found gold.",
   
        image: "images/sri10.jpg",


















    },
   }

// Initialize game state
let currentStage = "stage1";

// Function to start/restart the game
function startGame() {
    currentStage = "stage1";
    updatePage();
}

// Function to update the page based on the current stage
function updatePage() {
    const storyElement = document.getElementById("story");
    const choicesElement = document.getElementById("choices");
    const imageElement = document.getElementById("story-image");

    // Update story text
    storyElement.innerText = storyStages[currentStage].text;

    // Update choices
    choicesElement.innerHTML = "";
    for (let i = 0; i < storyStages[currentStage].choices.length; i++) {
        const choiceButton = document.createElement("button");
        choiceButton.innerText = storyStages[currentStage].choices[i];
        choiceButton.addEventListener("click", function () {
            makeChoice(i);
        });
        choicesElement.appendChild(choiceButton);
    }

    // Update image
    imageElement.src = storyStages[currentStage].image;
}

// Function to handle user choices and update the game state
function makeChoice(choiceIndex) {
    const nextStage = storyStages[currentStage].consequence[choiceIndex];
    currentStage = nextStage;

    // Check if it's an ending stage
    if (nextStage.startsWith("ending")) {
        endGame();
    } else {
        updatePage();
    }
}

// Function to end the game
function endGame() {
    const storyElement = document.getElementById("story");
    const choicesElement = document.getElementById("choices");
    const imageElement = document.getElementById("story-image");
    const bodytext = document.getElementById("body-text");

    // Display final text and hide choices
    storyElement.innerText = storyStages[currentStage].text;
    choicesElement.innerHTML = "";

    // Display final image
    imageElement.src = storyStages[currentStage].image;
}

// Call the startGame function to initialize the game
startGame();
