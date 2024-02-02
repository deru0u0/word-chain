'use strict';
{
    document.addEventListener('DOMContentLoaded', function() {
        const characters = [ 'apple']
        const li = document.createElement('li');
        const ul = document.querySelector('ul');
        ul.appendChild(li);
            li.textContent = characters[0];
        

        const alertMessage = document.getElementById('alertMessage');   
        const h2Element = document.querySelector('h2');
        h2Element.textContent = 'word chain';

        function characterCount() {
            let text = document.getElementById('text').value.length;
            displayCount.textContent = text;
        }

        let displayCount = document.getElementById('displayCount');
        displayCount.textContent = 0;
        document.getElementById('text').addEventListener('keyup', function() {
           characterCount();
        },false);

      
        let button = document.getElementById('button');
        button.addEventListener('click', function() {
            
            let text = document.getElementById('text');
            if ( text.value === '' ) {
                alertMessage.textContent = 'it is not entered';
                return;
            }
            if ( text.value !== '' ) {
                let listItem = text.value.trim().toLowerCase();
                let firstLetter = listItem.charAt(listItem -1 );
                let lastLetter = characters[0].slice(-1);
                if ( firstLetter !== lastLetter ) {
                    alertMessage.textContent = 'Invalid string';
                    return;
                }
                characters.unshift(listItem);
                ul.textContent = '';
                
                
            for ( let i = 0; i < characters.length; i++ ) {
                const li = document.createElement('li');
            
                li.textContent = characters[i];

                ul.appendChild(li);
            }
            if ( characters.length >= 5 ) {
                characters.pop();
            }
            text.value = '';
            alertMessage.textContent = '';
            displayCount.textContent = 0;
            text.focus();
        }
        },false);
       
        
        const explanationTitle = document.getElementById('explanationTitle');
        explanationTitle.textContent = 'word chain';
        const explanationContainer = document.getElementById('explanationContainer');
        let isSwitch = true;
        const explanation = document.getElementById('explanationButton');
        explanation.addEventListener('click', function() {
            if ( isSwitch ) {
                explanationContainer.style.display = 'block';
                console.log('ON');
            } else {
                console.log('OFF');
                explanationContainer.style.display = 'none';
            }
            isSwitch = !isSwitch;
        },false);
    },false);
}