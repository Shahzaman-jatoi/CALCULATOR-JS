let flagBracket = 0;
var char = "*";
const calculatingFun = (myvalue) =>{
    let display = document.getElementById("display");
    
    // starting to set conditions for displaying content
    if(myvalue == "AC")
    {
        display.value = "";
        flagBracket = 0;
    }
    else if(myvalue == "back")
    {
        display.value = display.value.slice(0, -1);
    }
    else if(myvalue == "()")
    {
        if(flagBracket == 0)
        {
            display.value += "(";
            flagBracket = 1;
        }
        else if(flagBracket == 1)
        {
            display.value += ")";
            flagBracket = 0;
        }
    }
    else if(myvalue == "=")
    {
        try{
            display.value = eval(display.value);
        }
        catch{
            display.value = "Invalid Format";
        }
    }

    else{
        display.value += myvalue;
    }
}
