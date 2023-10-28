let borad;
let boradwidth=420; 
let boradhight=600; 
let context;


//pipes 
let pipewidth=64; 
let pipehight=200;
let pipeX=boradwidth-pipewidth;
let pipeY=0;

let randompipY=pipeY-pipehight/1-Math.random()*(pipehight/2);
let openingSpace=boradhight/1;

let Toppipe={
    x:pipeX,
    y:randompipY+pipehight,
    width:pipewidth,
    height:pipehight
}
let Bottompipe={
    x:pipeX,
    y:randompipY+pipehight+openingSpace, 
    width:pipewidth,
    height:pipehight
}

window.onload=function(){
    borad=document.getElementById ("board");
    borad.height=boradhight; 
    borad.width=boradwidth;
    context=borad.getContext ("2d");

    //bird location
    context.fillstle="green";
 context.fillRect(22,320,43,43);

    bidimage=new Image(); 
    bidimage.src="bird.jpeg";
    bidimage.onload=function(){
        context.drawImage (bidimage, 22, 320,43,43);
    }

//context.fillRect(Toppipe.x,Toppipe.y,Toppipe.width,Toppipe.height);
//context.fillRect(Bottompipe.x,Bottompipe.y,Bottompipe.width,Bottompipe.height);

var ImageTP=document.getElementById ("TP");
var ImageBP=document.getElementById ("BP");

context.drawImage(ImageTP,Toppipe.x,Toppipe.y,Toppipe.width,Toppipe.height); 
context.drawImage(ImageBP,Bottompipe.x,Bottompipe.y,Bottompipe.width,Bottompipe.height);
    

}