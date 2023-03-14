function myFunction()
{
    var x=document.getElementById("input").value;
  
    


for(var i=1;i<=x;i++)
{
var n=Math.floor(Math.random()*i+1);
document.querySelector(".but").innerHTML=n;
}

document.querySelector("h2").innerHTML="Number is ➡ "+n;

}
