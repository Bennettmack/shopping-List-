var input=document.getElementById("input");
var sub=document.getElementById("add");
var ul=document.getElementById("ul");
var vl=ul.style.display="none";

function hide(){
    ul.style.display="none";
}
function showoff(){
    ul.style.display="block";
}
function createListElement(){
    if(input.value!=0){
    var li=document.createElement("li");
    var txt=document.createTextNode(input.value);
    li.appendChild(txt);
    ul.appendChild(li);
    li.classList.add("l");
    }
}
function addListAfterClick(){
        createListElement();
    }
sub.addEventListener("click",addListAfterClick);

function addListAfterKeyPress(event){
        if(input.value!=0 && event.which===13){
          createListElement();
        }
}
input.addEventListener("keypress",addListAfterKeyPress);
var rem=document.getElementById("remove");
rem.addEventListener("click",function(){
    ul.removeChild(ul.lastChild);
})
var l=document.getElementById("l");
var del=document.getElementById("del");
del.addEventListener("click",function(){
    ul.removeChild(ul.firstChild);
})