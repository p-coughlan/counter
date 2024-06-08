// set initial count
let count = 0

//select value and buttons
const value =document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//console.log(btns);
// NodeList(3) [button.btn.decrease, button.btn.reset, button.btn.increase]

//select all buttons
btns.forEach(function (btn) {
    console.log(btn);
    //add event listener to each button, the event is click (e is the event object)
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList; 
        if (styles.contains ('decrease')) {
            count--; 
        }
        else if (styles.contains ('increase')) {
            count++; 
        }
        else { //reset
            count = 0;
        }
        value.textContent = count;
    });
});
