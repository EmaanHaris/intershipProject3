function validateForm(){
    var firstname=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById('num').value;
    var msg =document.getElementById('message').value;
    var rg=/@/;

    if(firstname == ""){
        alert("name is missing");
        return false;
    }
    if(email == ""){
        alert("email is missing")
        return false;
    }
    if(number == ""){
        alert("contact number is missing")
        return false;
    }
    if(msg==""){
        alert("leave a message!");
        return false;
    }
    if(!rg.test(email)){
        alert("email should contain @");
        return false;
    }
    if(number.length < 10){
        alert("enter a valid phone number");
    }
    else{
        alert("form submitted sucessfully!");
    }
    

}