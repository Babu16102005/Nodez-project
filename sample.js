
var ad=document.querySelector(".overlay");
var box=document.querySelector(".box");
var add=document.querySelector(".add");
    
add.addEventListener("click",function(){
    ad.style.display="block"
    box.style.display="block";
    });
    

var Cancel=document.getElementById("Cancel");
Cancel.addEventListener("click",function(event){
    event.preventDefault();
    ad.style.display="none";
    box.style.display="none";
});


var subtitle=document.querySelector(".container");
var Add=document.getElementById("submit");
var input01=document.getElementById("input1");
var input02=document.getElementById("input2");
var input03=document.getElementById("input3");
Add.addEventListener("click",function(event)
{
    event.preventDefault()
    var creat=document.createElement("div");
    creat.setAttribute("class","subtitle");
    creat.innerHTML=`<h2>${input01.value}</h2>
            <h4>${input02.value}</h4>
            <p>${input03.value}</p>
            <button class='del_btn' onclick='del(event)'>Delete</button>`
    subtitle.append(creat)
    ad.style.display="none";
    box.style.display="none";
    
    input01.value="";
    input02.value="";
    input03.value="";
})

function del(event){
    event.target.parentElement.remove();
}