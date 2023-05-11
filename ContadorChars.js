function contaChars()
{
    var tamString   = document.getElementById("caixa_de_texto").value.length;
    var valorCaixa  = document.getElementById("caixa_limite").value;
    var valorSim    = document.getElementById("radio_sim").checked;
    var contador    = document.getElementById("chars_digitados");
    var txt_aviso   = document.getElementById("txt_aviso");
    var limite      = (valorSim) ? valorCaixa : '';
    var c_digitar   = (limite == '') ? 0 : limite - tamString;
    var textoAdd;
    var cor;
    
    cor =   (limite == '') ?    'white' :
            (c_digitar > 0) ?   'white' : 'red';

    textoAdd    =   (limite == '') ?
                        (tamString == 0) ?  "Não há caracteres digitados." :
                        (tamString == 1) ?  "Há " + tamString + " caractere digitado."
                        : "Há " + tamString + " caracteres digitados."
                    :
                    (c_digitar == 0) ?  "Você não pode mais digitar caracteres." :
                    (c_digitar == 1) ?  "Você ainda pode digitar " + c_digitar + " caractere." :
                    (c_digitar > 0) ?   "Você ainda pode digitar " + c_digitar + " caracteres."
                    : "Você passou " + (-c_digitar) + " caracteres do limite permitido.";

    txt_aviso.style.display =   (valorSim) ?
                                    (limite == '') ?    'block' : 'none'
                                : txt_aviso.style.display;

    contador.innerHTML      = textoAdd;
    contador.style.color    = cor;
}

function temLimite()
{
    var valorSim    = document.getElementById("radio_sim").checked;
    var valorNao    = document.getElementById("radio_nao").checked;
    var caixa       = document.getElementById("caixa_limite");
    var txt_aviso   = document.getElementById("txt_aviso");

    if (valorSim)
    {
        caixa.style.display = "inline";
        
        if(caixa.value == "")

            txt_aviso.style.display = "block";
        else
            contaChars();
    }
    else if (valorNao)
    {
        caixa.style.display     = "none";
        txt_aviso.style.display = "none";
        contaChars();
    }
}
