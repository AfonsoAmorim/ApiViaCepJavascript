function consultaCep(){
    let cep = document.querySelector("#cep").value;
    if (cep.length !== 8){
        alert('CEP INVÁLIDO!')
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        console.log(response);
    });
}

