function val () {
	if(frm.email.value =="") {
		
		alert("Please enter the email");
		frm.email.focus();
		return false;
 }


var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if (reg.test(frm.email.value) == false) {

	alert('Invalid email address');
	frm.email.focus();
	return false;
} 
	return true;
}

window.open('mailto:test@example.com?subject=subject&body=body');

