function buttonclick( val)
{
    console.log(val)
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function cleardisplay()
{
    document.getElementById("screen").value=""
}
function ans(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
console.log("working")