function readvalues()
{
    console.log("clicked");
    
    var name= document.getElementById("nam").value;
    var emailid=document.getElementById("emailid").value;
    var Mobilenumber=document.getElementById("mobilenumber").value;
    var password=document.getElementById("password").value;
    var cnfpassword= document.getElementById("cnfpassword").value;

    if(password==cnfpassword)
    {
    console.log(name);
    console.log(emailid);
    console.log(Mobilenumber);
    console.log(password);
    console.log(cnfpassword);

    }
    else
    {
        console.log("password not matching");
    alert("passwords not matching");
    }

}

