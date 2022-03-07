function myFunction(){
    var element=document.getElementById("circle");
    element.style.opacity='0.5';    
    element.addEventListener('click',myNewFunction);
}

function myNewFunction()
{
    var element=document.getElementById("circle");
    element.style.backgroundColor='blue';
    var circleOpacity=parseFloat(element.style.opacity);
    element.style.opacity=circleOpacity+0.1;  
    
}

document.addEventListener('DOMContentLoaded',myFunction);