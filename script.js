function btnclick(val){
    document.getElementById ("screen").value+=val;
    console.log(val)
}
function clearDisp(){
    document.getElementById("screen").value="";
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text);                  //predefined fun to evaluate the text expression
    document.getElementById('screen').value=result;
}