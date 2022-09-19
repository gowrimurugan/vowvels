function validate(){
    if (document.getElementById("text1").value == "demo" && document.getElementById("text2").value == "demo");
    {
        alert("validation succeeded");
        location.href = "run.html";
    }
    // else 
    { 
        alert ("validation")
    }
}

var a = 23;
var lastDigit = 0;
var sum = 0;

while (a){
    lastDigit = a % 10;
    sum = sum + lastDigit;
    a = (a - lastDigit)/10;
}
console.log(sum);

var b = [1,2,3,4,5,10,9,8,7,6]
var c = b.sort(function(a,b){return a-b});
console.log(c);