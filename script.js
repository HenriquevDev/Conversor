function converterValor(){
    let valorEmDolar = document.getElementById("valor").value
    let valorConvertido = valorEmDolar * 5.2
    document.getElementById("valorConvertido").innerText = "$" + valorConvertido.toFixed(2)
}