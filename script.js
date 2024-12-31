// Get the total number of drum buttons
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button and add a click event listener
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML; // Get the inner text of the button
    makeSound(buttonInnerHTML);          // Call the function to play the sound
    animateButton(buttonInnerHTML);      // Call the function to apply animation
  });
}

// Add a keydown event listener to handle keyboard inputs
document.addEventListener("keydown", function (event) {
  makeSound(event.key);                 // Play sound based on the pressed key
  animateButton(event.key);             // Animate the corresponding button
});

/**
 * Function to play sound based on the key or button pressed
 * @param {string} key - The key/button identifier ('w', 'a', 's', etc.)
 */
function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play(); // Play crash sound
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play(); // Play kick-bass sound
      break;
    case "s":
      new Audio("sounds/snare.mp3").play(); // Play snare sound
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play(); // Play tom-1 sound
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play(); // Play tom-2 sound
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play(); // Play tom-3 sound
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play(); // Play tom-4 sound
      break;
    default:
      console.log(`Unmapped key: ${key}`); // Log a warning if the key is not mapped
  }
}

/**
 * Function to add animation to the button when pressed
 * @param {string} currentKey - The key/button identifier ('w', 'a', 's', etc.)
 */
function animateButton(currentKey) {
  // Select the button associated with the key
  let activeButton = document.querySelector(`.${currentKey}`);
  
  if (activeButton) { // Ensure the button exists to avoid errors
    activeButton.classList.add("pressed"); // Add the pressed class for animation
    
    // Remove the animation class after 200ms to reset the button style
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 200);
  }
}
