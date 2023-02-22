function validaForm(){
	let validaCod = document.forms["cadastrar"]["codReg"].value;
	let validaNom = document.forms["cadastrar"]["nome"].value;
	let validaTut = document.forms["cadastrar"]["tutor"].value;
	let validaCont = document.forms["cadastrar"]["telefone"].value;
	let validaData = document.forms["cadastrar"]["dataAg"].value;	
	
	
	
    if (validaCod == ""){
    	alert("O número de registro deve ser preenchido!");
    	return false;
    }

    if (validaNom == ""){
    	alert("O nome do doguinho deve ser preenchido!");
    	return false;
    }
    if (validaTut == ""){
    	alert("O nome do tutor deve ser preenchido!");
    	return false;
    }

    if (validaCont == ""){
    	alert("O telefone de contato deve ser preenchida!");
    	return false;
    }
    if (validaData == ""){
    	alert("A data de agendamento deve ser preenchida!");
    	return false;
    }
  
}
function insere(){
	let codR = document.forms["cadastrar"]["codReg"].value;
	let nome = document.forms["cadastrar"]["nome"].value;
	let tuto = document.forms["cadastrar"]["tutor"].value;
	let cont = document.forms["cadastrar"]["telefone"].value;
	let data = document.forms["cadastrar"]["dataAg"].value;
	

	
	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${codR}</th>`;
	inserir.innerHTML += `<td>${nome}</td>`;
	inserir.innerHTML += `<td>${tuto}</td>`;
	inserir.innerHTML += `<td>${cont}</td>`;
	inserir.innerHTML += `<td>${data}</td>`;
	

}
