let contextMenu=document.getElementById("contextMenu");

//eventlistener
document.body.addEventListener("contextmenu" ,contextHandler);
document.body.addEventListener("click",clickHandler);
document.body.addEventListener("keydown",keyDownkHandler)



///function
 function contextHandler(event){
     event.preventDefault();
      if(contextMenu.style === "none"){
        contextMenu.style.top=event.pageY +"px";
        contextMenu.style.left=event.pageX +"px"
        contextMenu.style.display="block";
      }
      else{
        contextMenu.style.top=event.pageY +"px";
        contextMenu.style.left=event.pageX +"px"
      }
      console.log(event)
 }

 function clickHandler(){
    contextMenu.style.display="none";

 }
 function keyDownkHandler(){
    contextMenu.style.display="none";

 }