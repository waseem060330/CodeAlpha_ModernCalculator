let display = document.getElementById("display");
let calculated = false;
let openBrackets = 0;

function appendToDisplay(value){

    let operators = ['+', '-', '*', '/', '%'];

    // ===== BRACKET LOGIC =====
    if(value === "()"){

        let lastChar = display.value.slice(-1);

        // Open bracket
        if(
            display.value === "" ||
            operators.includes(lastChar) ||
            lastChar === "("
        ){
            display.value += "(";
            openBrackets++;
        }

        // Close bracket
        else if(openBrackets > 0){
            display.value += ")";
            openBrackets--;
        }

        // Otherwise open
        else{
            display.value += "(";
            openBrackets++;
        }

        autoScroll();
        return;
    }

    // ===== AFTER CALCULATION =====
    if(calculated){

        if(operators.includes(value)){
            calculated = false;
            display.value += value;
        }
        else{
            display.value = value;
            calculated = false;
        }
    }
    else{
        display.value += value;
    }

    autoScroll();
}

function calculate(){

    try{

        // Auto close remaining brackets
        while(openBrackets > 0){
            display.value += ")";
            openBrackets--;
        }

        display.value = eval(display.value);
        calculated = true;

        autoScroll();
    }
    catch(error){
        display.value = "Error";
        calculated = true;
    }
}

function clearDisplay(){

    display.value = "";
    calculated = false;
    openBrackets = 0;
}

function autoScroll(){

    display.scrollLeft = display.scrollWidth;
}

function backspace(){

    let lastChar = display.value.slice(-1);

    if(lastChar === "("){
        openBrackets--;
    }
    else if(lastChar === ")"){
        openBrackets++;
    }

    display.value = display.value.slice(0, -1);
}

// KEYBOARD SUPPORT 

document.addEventListener("keydown", function(event){

    if(event.key >= '0' && event.key <= '9'){
        appendToDisplay(event.key);
    }

    else if(['+', '-', '*', '/', '%'].includes(event.key)){
        appendToDisplay(event.key);
    }

    else if(event.key === '.'){
        appendToDisplay(event.key);
    }

    else if(event.key === '(' || event.key === ')'){
        appendToDisplay("()");
    }

    else if(event.key === 'Enter'){
        calculate();
    }

    else if(event.key === 'Backspace'){
        backspace();
    }

    else if(event.key === 'Escape'){
        clearDisplay();
    }

});