 
 let onincH= document.getElementById("scoreH");
 let count=0;
function inc1H(){
    count=count+1;
   onincH.textContent=count;
}
function inc2H(){
    count = count+2;
   onincH.textContent=count;
}
function inc3H(){
    count=count+3;
    onincH.textContent=count;
}
let onincG =document.getElementById("scoreG");
let count1=0;
function inc1G(){
    count1=count1+1;
   onincG.textContent=count1;
}
function inc2G(){
    count1 = count1+2;
   onincG.textContent=count1;
}
function inc3G(){
    count1=count1+3;
    onincG.textContent=count1;
}
let winD=document.getElementById("save-win")
function win(){
    let WinF=""
    if(count>count1)
     WinF+= "HOME IS WINNER "
    else if(count<count1)
   WinF+= "GUEST IS WINNER"
    else
   WinF+="TIE"
   let winstr=WinF
   winD.textContent+=winstr
    console.log(WinF)
}