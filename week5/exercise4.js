function myFunction(){
    var element=document.getElementById("circle");
    element.style.opacity='0.5';    
    element.addEventListener('click',myNewFunction);
}

function myNewFunction()
{
    var element=document.getElementById("circle");
    element.style.backgroundColor='blue';
    element.style.opacity='1';   
    
}

document.addEventListener('DOMContentLoaded',myFunction);