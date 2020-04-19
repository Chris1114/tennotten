'use strict';
var picker = document.getElementById('player');
var form = document.getElementById('input-form');

function numSelect() {
    var selector = document.getElementById('player');
    var value = selector[selector.selectedIndex].value;
}

picker.addEventListener('click', numSelect);

function handleSubmit() {
    event.preventDefault();
var num = parseInt(event.target.player.value);
console.log(num);
    if (event.target.player.value == 10) {
       alert('You can\'t pick 10')
    } else if (event.target.player.value === 'Pick') {

    alert('You must choose'); 
    
    } else {
        document.getElementById('result').textContent = `You chose: ${num} The Computer chose: 9`;  
    }
    if (num < 9) {
        document.getElementById('srsly').textContent = `Seriously??? You Lose...try again`
    } else if (num === 9) {
        document.getElementById('srsly').textContent = `Tie...try again`;

    }

}


form.addEventListener('submit', handleSubmit);