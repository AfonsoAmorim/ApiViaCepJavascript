function consultaCep(){
    let cep = document.querySelector("#cep").value;
    if (cep.length !== 8){
        alert('CEP INVÁLIDO!')
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data);
            mostrarEndereco(data);
        })
    });
}


function mostrarEndereco(dados){

    let resultado = document.querySelector('#resultado');
    if (dados.erro){
        resultado.innerHTML = "Endereço não encontrado"
    }else {
    resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
    <p>Complemento: ${dados.complemento}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>Cidade: ${dados.localidade} - Estado: ${dados.uf}</p>`
}

}
