function loginInButton(){
   
   
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    let invalidmessege=document.getElementById('invalidmessege');

    if(username==="citiustech"&& password==="citiustech"){
        window.open("https://www.google.co.in/");
    }
    else{
        document.getElementById('Invalidmessege').innerHTML="wrong crededentials";
    }
}





