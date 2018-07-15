  form.setAttribute('novalidate', true);

  function checkField(field_id, regex) {
  	var objField = document.getElementById(field_id);
  	if (!regex.test(objField.value)) return (false);
  	else return (true);
  }

  function check() { 
  	var ok = true; 
  	objName = /^[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]{2,20}$/; 
  	objEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;

  	if (!checkField("name", objName)) {
  		ok = false;
  		document.getElementById("name-error").innerHTML =
  			"Wpisz poprawnie dane!";
  	} else {
		document.getElementById("name-error").innerHTML = "";
		localStorage.setItem('name', JSON.stringify(name));
	}

      
  	if (!checkField("email", objEmail)) {
  		ok = false;
  		document.getElementById("email-error").innerHTML = "Wpisz poprawny email!";
  	} else {
		document.getElementById("email-error").innerHTML = "";
		localStorage.setItem('email', JSON.stringify(email));
	}

      
  	if(document.getElementById("message").value.length<1){
		ok = false;
		document.getElementById("text-error").innerHTML="Pole nie moze byc puste!";
	}else {
		document.getElementById("text-error").innerHTML = "";
		localStorage.setItem('message', JSON.stringify(message));
	}
	  
	  return ok;
  }
