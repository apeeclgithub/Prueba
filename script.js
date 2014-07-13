function validar() {
	var name1 = document.getElementById("name1").value;
	var namexp = /[A-Z a-z]{3}/;
		if (namexp.test(name1)) {
			alert('bien nombre');
		}else{
			alert('mal nombre');
   		}

	var email1 = document.getElementById("email1").value;
	var emailexp = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
		if (emailexp.test(email1)) {
			alert('bien mail');
		}else{
			alert('mal mail');
   		}


	var pass1 = document.getElementById("pass1").value;
	var passexp = /[A-Z a-z 0-9]{3}/;
		if (passexp.test(pass1)){
			alert('bien pass');
		}else{
			alert('mal pass');
   		}
}

  function validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
  }