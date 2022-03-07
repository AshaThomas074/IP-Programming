function myFunction(){ 
    document.addEventListener('keydown',myNewFunction);
}

function myNewFunction()
{
    var element=document.getElementById("circle");    
    var positionLeft=element.offsetLeft;
    element.style.left=positionLeft-10+'px';    
}

function myTimerAction(){
    var element=document.getElementById("circle");    
    var positionLeft=element.offsetLeft;
    element.style.left=positionLeft-10+'px';
}

document.addEventListener('DOMContentLoaded',myFunction);