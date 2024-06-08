// set initial count to 0
let count = 0

//select value and buttons using querySelector on id and class
const value =document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//console logging during development to see what is being selected
//console.log(btns);
// NodeList(3) [button.btn.decrease, button.btn.reset, button.btn.increase]

//select all buttons and loop through them using forEach method
btns.forEach(function (btn) {

    //add event listener to each button. The event is click (e is the event object)
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList; //currentTarget is the button that is clicked. classList is the class of the button

        //if else statement to check which button is clicked and update the count accordingly
        if (styles.contains ('decrease')) {
            count--; 
        }
        else if (styles.contains ('increase')) {
            count++; 
        }
        else { //reset
            count = 0;
        }
        
        //if statement to change the color of the count based on the value of the count
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = '#222';
        }
        value.textContent = count;
    });
});
