// ! Calculator

function calculator() {
    var a = +prompt("Enter a number");
    var b = +prompt("Enter second number");
    var c = prompt("Enter desired operator");
    
    if(c=="+"){
            document.write(a+b);
        }
        else if (c=="-"){
            document.write(a-b);
        }
        else if (c=="*"){
            document.write(a*b);
        }
        else if (c=="/"){
            document.write(a / b);
        }
        else if (c=="%"){
            document.write(a % b);
        }else if(c!="+","-","*","/","%"){
            alert("please enter opreator between theese (+, -, *, /, %)")
        }
}
calculator();


