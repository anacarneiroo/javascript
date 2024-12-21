function gerarTabuada() {
    var select = window.document.querySelector('select#tabuada');
    var num = window.document.querySelector('input#num').value;
    
    if (num == ''){
        window.alert('Digite um número,por favor!')
    }
    else{
        select.innerHTML = "";
        for (var c = 1; c<=10; c+=1) {
            var option = window.document.createElement('option');
            select.appendChild(option);
            option.innerHTML = `${num} x ${c} = ${num*c}`
        } 
    }
}