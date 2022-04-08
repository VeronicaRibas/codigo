function cifraCesar(p, mensagem, critp = true){
    var letras = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    var novoAlfabeto = letras.slice((p)*2) + letras.slice(0,(p)*2)
    var novaMensagem = ""
    if (critp){
        for (var i = 0; i < mensagem.length; i++){
            if (letras.indexOf(mensagem[i]) > 0){
                var n = novoAlfabeto.indexOf(mensagem[i])
                novaMensagem = novaMensagem + letras[n]
            } else{
                novaMensagem = novaMensagem + mensagem[i]
            }
        }
    } else {
        for (var i = 0; i < mensagem.length; i++){
            if (letras.indexOf(mensagem[i]) > 0){
                var n = letras.indexOf(mensagem[i])
                novaMensagem = novaMensagem + novoAlfabeto[n]
            } else{
                novaMensagem = novaMensagem + mensagem[i]
            }
        }
    }
    return novaMensagem
}



function base64(mensagem, critp = true){
    var novaMensagem = ""
    if (critp){
        novaMensagem = atob(mensagem)
    } else {
        novaMensagem = btoa(mensagem)
    }
    return novaMensagem
}


var select = document.querySelector("#seletor")
var c = 0
select.addEventListener('change', (event) => {
    var escolha = event.target.value
    if (escolha == "cif1" & c == 0){
        var parte = document.createElement("label")
        parte.innerText = "Adicione um passo"
        parte.setAttribute('id', 'parte')
        var input = document.createElement("input")
        input.type = "number"
        input.id = "parte_input"
        parte.id = "parte_label"
        document.querySelector("#parte_cesar").append(parte)
        document.querySelector("#parte_cesar").append(input) 
        c = 1
    } else if (c == 1){
        console.log(c)
        c = 0   
        var parte_cesar = document.querySelector("#parte_cesar") 
        parte_cesar.removeChild(document.querySelector("#parte_input"))
        parte_cesar.removeChild(document.querySelector("#parte_label"))
    }
    
})


var enviar = document.querySelector("#submit")
enviar.addEventListener("click", function(event){
    event.preventDefault();
    var mensagem = document.querySelector("#mensagem").value
    var seletor = document.querySelector("#seletor")
    var novaMensagem = ""
    var cript = document.querySelector("#cod").checked
    if (seletor.value == "cif1"){
        var passo = Number(document.querySelector("#passo_input").value)
        console.log(cript)
        if (cript){
            novaMensagem = cifraCesar(passo, mensagem, false)
        } else{
            novaMensagem = cifraCesar(passo, mensagem, true)
        }
    }else if(seletor.value == "bas2") {
        if (cript){
            novaMensagem = base64(mensagem, false)
        } else{
            novaMensagem = base64(mensagem, true)
        }
    }
    var tagNovaMensagem  = document.querySelector("#novaMensagem")
    tagNovaMensagem.value = novaMensagem
    console.log(novaMensagem)
})

