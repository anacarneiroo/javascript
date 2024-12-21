function contar() {
    var retorno = window.document.getElementById('principal')
    var inicio = window.document.querySelector('input#iinicio').value
    var fim = window.document.querySelector('input#ifim').value
    var passo = window.document.querySelector('input#ipasso').value
    if (inicio == "" || fim == "" || passo == ""){
        retorno.innerText= 'Impossível contar!'
    }
    else{
        var inicio = Number(inicio);
        var fim = Number(fim);
        var passo = Number(passo);

        if (passo == 0){
            window.alert('Passo inválido! Considerando PASSO 1.');
            passo = 1
        }
        
        if(inicio == fim){
            retorno.innerHTML = 'Não é possível contar!';
        }

        else if(inicio > 0 && fim > 0 && passo < 0 && inicio < fim){
            retorno.innerHTML = 'Não é possível contar!';
        }

        else if(inicio > 0 && fim > 0 && passo > 0 && inicio > fim){
            retorno.innerHTML = 'Não é possível contar!';
        }

        else if(inicio < 0 && fim < 0 && passo > 0 && inicio > fim){
            retorno.innerHTML = 'Não é possível contar!';
        }

        else if((fim-inicio)%passo>0 || (fim-inicio)%passo<0){
            retorno.innerHTML = 'Não é possível contar!';
        }

        else if(inicio < fim){
            retorno.innerHTML = '';
            retorno.innerHTML += 'Contando: <br>';
            for(var n = inicio; n <=fim; n += passo){
                retorno.innerHTML += `${n} &#x1F449;`;
            }
            retorno.innerHTML += `&#x1F3F4;`;
        }   

        else{
            retorno.innerHTML = '';
            retorno.innerHTML += 'Contando: <br>';
            for(var n = inicio; n >=fim; n += passo){
                retorno.innerHTML += `${n} &#x1F449;`;
            }
            retorno.innerHTML += `&#x1F3F4;`;
        }
    }   
}

