// For form validation
const number=document.getElementById("rollno").value
const mixedpattern=/[a-Z 0-9]/
const errorno=document.getElementsByClassName("errorno")
function btnsubmit(){
    errorno.textcontent="Invalid Roll No"
    //  if(!number.test(mixedpattern)){
    //     errorno.textcontent="Invalid Roll No"
    //  }
 }