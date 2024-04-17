/********* create variables here *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let daysSelected = 0;
let totalCost = 0.00;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
let days = document.querySelectorAll('.day-selector li');
days.forEach(day => {
    day.addEventListener('click', function() {
        if (day.classList.contains('clicked')) {
            day.classList.remove('clicked');
            daysSelected--;
            calculateCost();
        } 
        else {
            day.classList.add('clicked');
            daysSelected++;
            calculateCost();
        }
        console.log(daysSelected);
    });
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById("clear-button");
if (clearButton) {
    clearButton.addEventListener('click', function() {
        days.forEach(day => {
            day.classList.remove('clicked');
        });
        daysSelected = 0;
        totalCost = 0;
        calculateCost();
        console.log(daysSelected);
    });
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $25, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfButton = document.getElementById('half');
if (halfButton) {
    halfButton.addEventListener('click', function() {
        costPerDay = 20;
        halfButton.classList.add('clicked');
        fullButton.classList.remove('clicked');
        calculateCost();
    });
}



// when the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let fullButton = document.getElementById('full');
if (fullButton){
    fullButton.addEventListener('click', function() {
        halfButton.classList.remove('clicked');
        fullButton.classList.add('clicked');
        costPerDay = 35;
        calculateCost();
    });

}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
    totalCost = costPerDay * daysSelected;
    document.getElementById('calculated-cost').innerHTML = totalCost;
    console.log(totalCost);
}

