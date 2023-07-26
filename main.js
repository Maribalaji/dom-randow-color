var boxColor=document.getElementById("box-color");
console.log(boxColor);

function colorChange(){

    var value=boxColor.value;
    console.log(value);

    boxColor.style.backgroundColor=value;
    boxColor.style.fontsize="50px";
}

var textcolor=document.getElementById("text-color");
console.log(textcolor);

function colorChange1(){
    var colour=textcolor.value;
    console.log(colour);

    textcolor.style.color=colour;
}

var para=document.getElementsByClassName("para");
console.log(para);
var button=document.getElementById("btn");

function bodycolor(){
    var a=["red","green","blue","yellow","pink","brown","aqua"];
    var number=(Math.floor(Math.random()*a.length));
    console.log(number); 
   
    para[0].style.backgroundColor=a[number];
}
var but=document.getElementById("btn");

function background(){
var a=["red","green","blue","yellow","pink","brown","aqua"];
var number=(Math.floor(Math.random()*a.length));
console.log(number); 

document.body.style.backgroundColor=a[number]
}



