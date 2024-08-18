let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let expression = "";
let buttonArray = Array.from(buttons);

buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        
        if (value === '=') {
            try {
                expression = eval(expression);
                inputBox.value = expression;
                expression = expression; // Update the expression to the evaluated result
            } catch (error) {
                inputBox.value = 'error';
                expression = '';
            }
        } else if (value === 'AC') {
            expression = '';
            inputBox.value = expression;
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            inputBox.value = expression;
        } else {
            expression += value;
            inputBox.value = expression;
        }
    });
});
