function compute()
{
    // get document objects
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculate interest
    var interest = parseInt(principal * years * rate /100);
    
    // calculate year
    var year = new Date().getFullYear()+parseInt(years);
    
    // check for error in principal; return false if error
    if(principal== null || principal <= 0){
    		alert("Enter a positive number");
       	document.getElementById("principal").focus();
        return false;
    }
    
    // get result document object and add calculated principal, rate and year into text
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}

function updateRate() 
{
    // get rate document object
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}