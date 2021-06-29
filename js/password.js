var input=prompt('PASSWORD');
if(input!='1107'){
	alert('Incorrect password');
	window.onload=function(){
		document.write('<h1>Forbidden Request</h1><p>Invalid Password</p>');
	}
}