let inputDisplay = document.getElementById("input")
let mainDisplay = document.getElementById("main-display")


var num = "0", num1st , num2nd , sign

function zero(){
    num += "0";
    if(num[0] == "0")
 num = num.substr(1,num.length);
    inputDisplay.textContent = num;

}
function one(){
    num += "1";
    if(num[0] == "0")
 num = num.substr(1,num.length);
    inputDisplay.textContent = num;

}
function two(){
    num += "2";
    if(num[0] == "0")
 num = num.substr(1,num.length);
    inputDisplay.textContent = num;
}
function three()
{
    num += "3";
    if(num[0] == "0")
 num = num.substr(1,num.length);
    inputDisplay.textContent = num;
}
function four()
{
    num += "4";
    if(num[0] == "0")
 num = num.substr(1,num.length);
    inputDisplay.textContent = num;
}
function five()
{
    num += "5";
    if(num[0] == "0")
 num = num.substr(1,num.length);
    inputDisplay.textContent = num;
}
function six()
{
    num += "6";
    if(num[0] == "0")
 num = num.substr(1,num.length);
    inputDisplay.textContent = num;
}
function seven()
{
    num += "7";
    if(num[0] == "0")
 num = num.substr(1,num.length);
    inputDisplay.textContent = num;
}
function eight()
{
    num += "8";
    if(num[0] == "0")
 num = num.substr(1,num.length);
    inputDisplay.textContent = num;
}
function nine()
{
    num += "9";
    if(num[0] == "0")
 num = num.substr(1,num.length);
 inputDisplay.textContent = num;
}



function addition()
{
    sign = "+";
    num1st = num;
    num = "0";
}
function multiplication()
{
    sign = "*";
    num1st = num;
    num = "0";
}
function division()
{
    sign = "/";
    num1st = num;
    num = "0";
}
function subtraction()
{
    sign = "-";
    num1st = num;
    num = "0";
}
function exp()
{
    sign = "**";
    num1st = num;
    num = "0";
}

function ac()
{
    num1st = 0;
    num2nd = 0;
    num = 0;
    result = 0;
    mainDisplay.textContent = result;
    inputDisplay.textContent = num;
}

function del()
{
    num = num.substr(0,num.length-1);
    if(num.length == 0)
{
    num = "0";
    inputDisplay.textContent = num;
}
    inputDisplay.textContent = num;
}




function show()
{
    num2nd = num;
    let n1 = parseInt(num1st), n2 = parseInt(num2nd);
    let result;
    if(sign == "+")
    {
       result = n1 + n2;
        
    }
    if(sign == "*")
    {
        result = n1 * n2;
    }
    if(sign == "-")
    {
        result = n1 - n2;
    }
    if(sign == "/")
    {
        result = n1 / n2;    
    } 
    if(sign == "**")
    {
        result = n1 ** n2;
    }
    mainDisplay.textContent = result;
    
}
