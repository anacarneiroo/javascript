let lista = [] 

function adicionar() {
    var n = Number(document.getElementById('n').value)
    if (lista.includes(n) || n <= 0 || n > 100){
        window.alert('Valor inválido ou já encontrado na lista!')
    } else {
        var select = document.getElementById('seletor')
        var option = document.createElement('option')
        select.appendChild(option)
        lista.push(n)
        option.innerHTML = `Valor ${n} adicionado.`
    }
}

function finalizar() {
    if (lista.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let reverso = lista.sort()
        var soma = 0
        var media = 0

        for(let valor of lista){
            soma = valor + soma
        }
        
        media = soma / lista.length

        var paragrafos = document.getElementById('paragrafos')
        paragrafos.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados</p>
        <p>O maior valor informado foi ${reverso[reverso.length-1]}</p>
        <p>O menor valor informado foi ${reverso[0]}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${Number(media)}.</p>`
    }   
}

function clicar(){
    paragrafos.innerHTML = ''
}

    

    



