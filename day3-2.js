document.getElementById('uname').addEventListener('click',function(){
    let uname=document.getElementById('uname').value;
    let invalidMessege=document.getElementById('invalidMessege');
for(let i=0;i<uname.length;i++){
    if(uname.charAt(i)==" " || uname.toLowerCase()!= "citiustech"){
     invalidMessege.innerHTML="INVALID CREDENTIALS";
}
else{
    invalidMessege.innerHTML="";
}
}
})
document.getElementById('password').addEventListener('click',function(){
    let password=document.getElementById('password').Value;
    let invalidMessege1=document.getElementById('invalidMessege1');
for(let i=0;i<password.length;i++){
    if(password.charAt(i)==" " || password.toLowerCase()!= "citiustech"){
     invalidMessege1.innerHTML="INVALID CREDENTIALS";
}
else{
    invalidMessege1.innerHTML="";
}
}
})
document.getElementById('uname').addEventListener('focusout',function(){
    let uname=document.getElementById('uname').value;

    if(uname.length>2){
    document.getElementById("mbutton").disabled=false;

}
})
function login(){
    let x= document.getElementById('uname').value;
    let y= document.getElementById('password').value;
    let invalidMessege=document.getElementById('invalidMessege');
    let invalidMessege1=document.getElementById('invalidMessege1');
    if(x.toLowerCase() =="citiustech" && y.toLowerCase()== "citiustech"){
        window.open("https://www.goggle.co.in/");
    }
    else{
        invalidMessege.innerHTML="Invalid credentials";
    }
}