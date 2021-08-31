'use strict'

var enterBtn = document.getElementById("enter");
var wrapper = document.getElementById("wrapper");
var loginform = document.getElementById("loginform");
var exit = document.getElementById("exit");
var submitmsg = document.getElementById("submitmsg");


enterBtn.addEventListener("click", function(){ 
   
    loginform.style.visibility = "hidden";
    wrapper.style.visibility = "visible";

});

exit.addEventListener("click", function(){ 
   
    wrapper.style.visibility = "hidden";
    loginform.style.visibility = "visible";

});

submitmsg.addEventListener("click", function(){ 
   
    console.log("send msg");

});