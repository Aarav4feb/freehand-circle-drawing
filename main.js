var canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="black"
mouseX=0
mouseY=0
var lastx,currentx,lasty,currenty



var mousevent=""

canvas.addEventListener("mouseup",mu)
function mu(e){
    mousevent="mouseup"
    console.log("mouse is up")

}

canvas.addEventListener("mouseleave",ml)
function ml(e){
    mousevent="mouseleave"
    console.log("mouse is left")
}

canvas.addEventListener("mousedown",md)
function md(e){
    mousevent="mousedown"
    console.log("mouse has been clicked")
    lastx=e.clientX-canvas.offsetLeft
    lasty=e.clientY-canvas.offsetTop
    mouseX=e.clientX-canvas.offsetLeft;
mouseY=e.clientY-canvas.offsetTop;
    ctx.strokeStyle=color;
ctx.lineWidth = 3;
ctx.arc(mouseX,mouseY,50,0,2*Math.PI);
ctx.stroke();
}

canvas.addEventListener("mousemove",mm)
function mm(e){
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientY-canvas.offsetTop
    mouseX=e.clientX-canvas.offsetLeft;
mouseY=e.clientY-canvas.offsetTop;
    if (mousevent=="mousedown") {
        ctx.strokeStyle=color;
        ctx.lineWidth = 3;
        ctx.arc(mouseX,mouseY,50,0,2*Math.PI);
        ctx.stroke();
    }
    lastx=currentx 
    lasty=currenty
}
