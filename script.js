let valor_cidade = []   //  Váriavel global tipo array:
let res = document.getElementById ("res")


function inserir(){
    let cidade = document.getElementById("cidade").value
    valor_cidade.push(cidade)
   console.log(valor_cidade)
   res.innerHTML = valor_cidade

}



function excluir(){
    valor_cidade.pop()
    console.log(valor_cidade)
    res.innerHTML = valor_cidade

}
