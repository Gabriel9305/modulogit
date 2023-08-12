const form = document.getElementById('form-confirmar');

function validaFormulario(valorA, valorB){
    return valorB > valorA
}

form.addEventListener('submit', function(e){
    e.preventDefault();

const valorA = parseFloat(document.getElementById('campoA').value);
const valorB = parseFloat(document.getElementById('campoB').value);
const menssagemSucesso = `É válido. O valor B: ${valorB} é maior que o valor A:${valorA}`;

    let formValid = validaFormulario(valorA, valorB)
    
    
    if (formValid) {
        alert(menssagemSucesso);

        document.getElementById('campoA').value='';
        document.getElementById('campoB').value='';
    }  else if (valorB === valorA) {
        alert("Não é válido pois B é igual a A!");
    }  else {
        alert("Não é válido pois A é maior que B!");
    }

});



