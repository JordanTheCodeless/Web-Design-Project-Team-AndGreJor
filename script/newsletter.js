document.addEventListener('DOMContentLoaded', function() {
//  Assigning the form to a variable 
 var form = document.getElementById('registration');
 // This is the div that contains the users Form we will reassign it to a variable
 var formDisappear = document.getElementById("userForm");
//  this function is used for all fields to be reset upon refresh
 resetAllFields(form);
// Here I made the function as above 
 function resetAllFields(form){
  form.reset();
}
 // This will prevent the default actions that come with submitting a form 
 form.addEventListener('submit', function (event) {
   event.preventDefault();

   // Here im calling the functions to check the forms validation and if conditions are met it  will proceed with the disappear function.

   if (formCompletion()) {
     disappear();
   }
 });
 // Here we will take the users entries and check if they are valid.
 function formCompletion() {

   var firstName = document.getElementById("firstName").value;
   var secondName = document.getElementById("secondName").value;
   var userEmail = document.getElementById("userEmail").value;
   var userEmail2 = document.getElementById("userEmail2").value;
   var password = document.getElementById("password").value;
   var confirmPassword = document.getElementById("confirmPassword").value;


   //  Here I use If else to check for each validation
   // The trim method removes white space from the beginning or end of a string
   if (firstName.trim() === '') {
     alert("Please enter your first name.");
     resetField("firstName");

   }
   else if (secondName.trim() === '') {
     alert("Please enter your Surname");
     resetField("secondName");

   }
   else if (userEmail === '') {
     alert("Please enter a valid email.");
     resetField("userEmail");


   }
   // I got this regex from w3resource.com 
   else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/.test(userEmail)) {
     alert("Please enter a valid email.");
     resetField("userEmail");

// If users emails are not the same
   }
   else if (userEmail !== userEmail2) {
     alert("Emails do not match.");
     resetField("userEmail");
     resetField("userEmail2");

   }
//    Here I will alert the user if their password doesnt have 8 letters a special character or a number
   else if (password.length < 8 || (!/[!@£$%^&*{}:.,?|<>]/.test(password)) || (!/\d/.test(password))) {

     alert("Your password must contain at least 8 characters, one special character and a number to ensure safety");
     resetField("password");
     ;

   }
   else if  (confirmPassword !== password) {
     alert("Passwords do not match");
     resetField("password");
     resetField("confirmPassword");

   }
//    Here the user must check the terms and conditions.
   else if (!termsConditions.checked) {
     alert("You need to agree to the terms and conditions");


   }
   else {
     // here I call the disappear function that will manipulate the DOM
     disappear();
     finalMessage();
     
    

     }
     // function that prints final message to user regarding their succesful sign up and clicking newsletter checkbox
   function finalMessage(){
     if(newsCheck.checked){
     document.getElementById("greetingMessage").innerHTML= ("Congratulations " + firstName + " you have succesfully signed up and opted to receive e-mails regarding our NewsLetter we will contact you shortly at " + userEmail + " for verification");
    
   }
     else{
       document.getElementById("greetingMessage").innerHTML= ("Congratulations " + firstName + " you have succesfully signed up we will contact you shortly at " + userEmail + " for verification");

   }
//    JQuery redirecting the user back to index.html
 $("#hiddenBtn").show();
 $("#hiddenBtn").click(function () {
  window.location = "index.html"
 });

 }

   // Need to edit 
   function disappear() {
     formDisappear.style.display = "none";
   }
   // This reset field function is for when a user types the incorrect validation to reset the input field
   function resetField(fieldName) {
     document.getElementById(fieldName).value = ('');
   }
   
 }})