var limite;
var valorSim;
var aviso;

function contaChars(){

    var tamString   = document.getElementById("caixa_de_texto").value.length;
    var valorCaixa  = document.getElementById("caixaSecreta").value;
    var contador    = document.getElementById("chars_digitados");
    var textoAdd;
    var cor;
    var c_digitar;

    valorSim        = document.getElementById("sim").checked;
    aviso           = document.getElementById("aviso");
    limite          = (valorSim) ? valorCaixa : '';
    c_digitar       = (limite == '') ? 0 : limite - tamString;
    
    cor =   (limite == '') ?    'white' :
            (c_digitar > 0) ? 'white' : 'red';

    textoAdd    =   (limite == '') ?
                        (tamString == 0) ?  "Não há caracteres digitados." :
                        (tamString == 1) ?  "Há " + tamString + " caractere digitado."
                        : "Há " + tamString + " caracteres digitados."
                    :
                    (c_digitar == 0) ?  "Você não pode mais digitar caracteres." :
                    (c_digitar == 1) ?  "Você ainda pode digitar " + c_digitar + " caractere." :
                    (c_digitar > 0) ?   "Você ainda pode digitar " + c_digitar + " caracteres."
                    : "Você passou " + (-c_digitar) + " caracteres do limite permitido.";

    aviso.style.display =   (valorSim) ?
                                (limite == '') ?    'block' : 'none'
                            : aviso.style.display;

    contador.innerHTML      = textoAdd;
    contador.style.color    = cor;
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
