function myFunction(){ 
    document.addEventListener('keydown',myKeyDown);
}

function myNewFunction()
{
    var element=document.getElementById("circle");    
    var positionLeft=element.offsetLeft;
    element.style.left=positionLeft-10+'px';    
}

function myKeyDown(event){
    console.log(event.keyCode);
}

document.addEventListener('DOMContentLoaded',myFunction);