var interest = document.getElementById("userInput").value;
    alert(interest);
    var time = document.getElementById("time").value;
    alert(time);
    var principle = document.getElementById("principle").value;
    alert(principle);  

    var simple = (nterest * time * principle)/100;
    var newprinciple = principle;
    var newsimple = 0;
    for(var i = 1; i <= time; i++){
         newsimple = (nterest * time * principle)/100;
         principle = newsimple + principle;
    }

    var compound = principle - newprinciple;

document.write(simple);
document.write(compound);
