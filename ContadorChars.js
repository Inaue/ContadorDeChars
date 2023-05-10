var limite;
var valorSim;
var aviso;

function contaChars(){

    var tamString = document.getElementById("caixa_de_texto").value.length;
    var valorCaixa = document.getElementById("caixaSecreta").value;
    var contador = document.getElementById("chars_digitados");
    var textoAdd;

    valorSim = document.getElementById("sim");
    aviso = document.getElementById("aviso");

    if(valorSim.checked){

        limite = valorCaixa;

        if(limite != ""){

            aviso.style.display = "none";

        } else {

            aviso.style.display = "block";

        }

    }
    else {

        limite = "";

    }
    
    if (limite == ""){

        if(tamString == 0){

            textoAdd = "Não há caracteres digitados.";
    
        }
        else {
    
            textoAdd = "Há "+ tamString +" caracteres digitados.";
    
        }
    
    }
    else {

        if(limite - tamString > 0){

            textoAdd = "Você ainda pode digitar "+ (limite - tamString) +" caracteres.";  

        }
        else if(limite - tamString == 0){

            textoAdd = "Você não pode mais digitar caracteres.";

        }
        else {

            textoAdd = "Você passou "+ (tamString - limite) +" caracteres do limite permitido."; 
            
        }

    }

    contador.innerHTML = textoAdd;

}

function temLimite(){

    var valorNao = document.getElementById("nao");
    var caixa = document.getElementById("caixaSecreta");
    
    valorSim = document.getElementById("sim");
    aviso = document.getElementById("aviso");

    if (valorSim.checked){

        caixa.style.display = "inline";
        
        if(caixa.value == ""){

            aviso.style.display = "block";

        }
        else {
            
            contaChars();

        }

    }
    else if (valorNao.checked){

        caixa.style.display = "none";
        aviso.style.display = "none";
        contaChars();

    }

}
