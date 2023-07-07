
var begin =confirm("who am i game ");
if(begin){
var num =confirm("DO you fly ?");
if(num){
    var num2 = confirm("are you wild ?");
    if(num2){
        document.writeln("you are a Eagle <br>")
        document.writeln("<img src='images/1.jpg'>")
    }
    else{
        document.writeln("you are a parrot <br>")
        document.writeln("<img src='images/2.jpg'>")
    }

}
else{
    var num3 = confirm("Do You Live Undersea ?");
    if(num3){
        var num2 = confirm("Are you wild ?");
        if(num2){
            document.writeln("you are a shark <br>")
            document.writeln("<img src='images/3.jpg'>")
        }
        else{
            document.writeln("you are a Dolphan <br>")
            document.writeln("<img src='images/4.jpg'>")

        }
    }
    else{
        var num4 = confirm("Are you wild ?");
        if(num4){
            document.writeln("you are a lion <br>")
            document.writeln("<img src='images/5.jpg'>")
        }
        else{
            document.writeln("you are a cat <br><br>")
            document.writeln("<img src='images/6.jpg'>")

        }
    }    
}

}
else{
document.writeln("End");
}


