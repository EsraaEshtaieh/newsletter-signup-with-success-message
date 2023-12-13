let emailinput = document.querySelector("[name='email']");
console.log(emailinput);

let subresult = document.querySelector("[name='submit']");
console.log(subresult);




/* setTimeout(() => {
   
 }, timeout);*/

let emailvalid;


let a =5;
var span = document.createElement("span");
span.innerHTML='abc<br>efg';
subresult.onclick= function () {
  emailvalid=false;
  if (emailinput.value !== "") {
    emailvalid = true;
    console.log("hello");
    console.log(emailvalid);
    Swal.fire({icon:"success",text:"Thanks for subscribing! a confirmation email has sent to "+span+emailinput.value+". please open it and click to the button inside to confirm your subscribtion."});
    
  }else{ swal("notok")};


 // if (emailvalid === false) {
  //  e.preventDefault();
    //console.log(emailvalid);
    //window.alert("no");
 // }
};


console.log(emailvalid);

