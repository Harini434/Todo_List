// For form validation
function btnsubmit(){
//   check the rollno using pattern
    const number=document.getElementById("rollno").value;
    const mixedpattern=/[A-Z0-9]/g;
    if(number === ""){
        document.getElementById("errorno").innerHTML="Please enter the number"
    }
    else if(!mixedpattern.test(number)){
        document.getElementById("errorno").innerHTML="Invalid Number,Please check the format and try again."
    }
    
//  check the name using pattern
     const sname=document.getElementById("name").value;
    const namepattern=/[A-Z.]/g;
    if(sname === ""){
        document.getElementById("errorname").innerHTML="please enter the number"
    }
    else if(!namepattern.test(sname)){
        document.getElementById("errorname").innerHTML="Invalid name, Please check the format and try again."
    }
// check the age using pattern
        const sage=document.getElementById("age").value;
        var numberpattern=/[0-9]/g;
        if(sage === ""){
            document.getElementById("errorage").innerHTML="Please enter the age"
        }
        else if(!numberpattern.test(sage)){
            document.getElementById("errorage").innerHTML="Invalid age, Please check the format and try again."
        }
 // Sumbitting alert message
        // alert("You have successfully submitted the Form!")
// Map method
    const obj={number,sname,sage,mark1,mark2,mark3,mark4,mark5,total}
    const arr=JSON.parse(localStorage.getItem("students")) || [];
    arr.push(obj);
    localStorage.setItem("students",JSON.stringify(arr))

}
// // calling the new function to create a div
        function display(){
           const newdiv=document.getElementById("newdiv")
           const arr=JSON.parse(localStorage.getItem("students")) || [];
           newdiv.innerhtml=arr.map(details =>`
            <div>
            <table>
               <thead>
                  <tr>
                    <th scope="col">Rollno</th>
                    <th scope="col">Name</th> 
                    <th scope="col">Age</th>  
                    <th scope="col">Total</th> 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${details.number}</td>
                   <td>${details.sname}</td>
                    <td>${details.sage}</td>
                  </tr>
                </tbody>
            </table>
            <button type="button" class="btn btn-primary">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
            `)
        }
        display();
 
                // marks section only
 // Enter the marks and get total
    function total() {
// Get the mark by input value
        const mark1 = parseFloat(document.getElementById("mark1").value) || 0;
        const mark2 = parseFloat(document.getElementById("mark2").value) || 0;
        const mark3 = parseFloat(document.getElementById("mark3").value) || 0;
        const mark4 = parseFloat(document.getElementById("mark4").value) || 0;
        const mark5 = parseFloat(document.getElementById("mark5").value) || 0;
        const final = document.getElementById("totvalue");
//Adding the marks 
        const total = mark1 + mark2 + mark3 + mark4 + mark5;
        final.value = + total;

    }




