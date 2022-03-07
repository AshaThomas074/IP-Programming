function myFunction(){
    var element=document.getElementById("circle");
    element.style.opacity='1';    
    element.addEventListener('click',myNewFunction);
}

function myNewFunction()
{
    setInterval(myTimerAction,1000);
    
}

function myTimerAction(){
    var element=document.getElementById("circle");    
    var positionLeft=element.offsetLeft;
    element.style.left=positionLeft-10+'px';
    //var circleOpacity=parseFloat(element.style.opacity);
    //element.style.opacity=circleOpacity-0.1;  
}

document.addEventListener('DOMContentLoaded',myFunction);