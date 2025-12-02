//Javascript for the counter functionality
document.addEventListener("DOMContenLoader", function(){
    //initialize the count variable
    let count = 0;

    //get reference to the display and button elements
    const counterDisplay = document.getElementById("counter-display");
    const counterButton = document.getElementById("counter-button");

    //add event listner to the button
    counterButton.addEventListener("click", function(){
        //increment the count variable 
        count++;

        //update the display text with new count value
        counterDisplay.textContent = 'you clicked ${count} times';
    });

});