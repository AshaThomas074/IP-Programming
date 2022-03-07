function myFunction(){
    var element=document.getElementById("circle");
    element.style.opacity='1';    
    element.addEventListener('click',myNewFunction);
}

function myNewFunction()
{
    element.style.backgroundColor='blue';
    setInterval(myTimerAction,1000);
    
}

function myTimerAction(){
    var element=document.getElementById("circle");    
    var circleOpacity=parseFloat(element.style.opacity);
    element.style.opacity=circleOpacity-0.1;  
}

document.addEventListener('DOMContentLoaded',myFunction);