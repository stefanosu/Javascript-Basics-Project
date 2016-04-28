//NOTE: Not sure what frm.email.focus does. I commented it out to see if there were any changes but could not find any.

//if the text field is empty then give  the alert and return false
function val () {

	if(frm.email.value =="") {
		
		alert("Please enter the email");
		//frm.email.focus();
		return false;
 }

//gives all possible values for what a valid email could look like
var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//if our input doesnt qualify as something that could equal to reg, show the alert and return FALSE, otherwise return TRUE and take user to the next page.
if (reg.test(frm.email.value) == false) {

	alert('Invalid email address');
	//frm.email.focus();
	return false;
} 
	return true;
}


