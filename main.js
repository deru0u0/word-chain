'use strict';
{
    document.addEventListener('DOMContentLoaded', function() {
        const characters = [ 'apple']
        const li = document.createElement('li');
        const ul = document.querySelector('ul');
        ul.appendChild(li);
        li.textContent = characters[0];

        const alertMessage = document.getElementById('alertMessage');   

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
            if ( text.value !== '' ) {
                let listItem = text.value.trim();
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
       
        
    },false);
}