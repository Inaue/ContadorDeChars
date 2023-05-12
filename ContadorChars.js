function contaChars(area_txt, num_lim, rad_sim, count)
{
    var tamString   = document.getElementById(area_txt).value.length;
    var valor_lim   = document.getElementById(num_lim).value;
    var valorSim    = document.getElementById(rad_sim).checked;
    var contador    = document.getElementById(count);
    var limite      = (valorSim) ? valor_lim : '';
    var c_digitar   = (limite == '') ? 0 : limite - tamString;
    var textoAdd;
    var cor;
    
    cor =   (limite == '') ?    'gray' :
            (c_digitar > 0) ?   'gray' : 'red';

    textoAdd    =   (limite == '') ?
                        (tamString == 0) ?  "Não há caracteres digitados." :
                        (tamString == 1) ?  "Há " + tamString + " caractere digitado."
                        : "Há " + tamString + " caracteres digitados."
                    :
                    (c_digitar == 0) ?  "Você não pode mais digitar caracteres." :
                    (c_digitar == 1) ?  "Você ainda pode digitar " + c_digitar + " caractere." :
                    (c_digitar > 0) ?   "Você ainda pode digitar " + c_digitar + " caracteres."
                    : "Você passou " + (-c_digitar) + " caracteres do limite permitido.";

    contador.innerHTML      = textoAdd;
    contador.style.color    = cor;
}

function temLimite(area_txt, num_lim, rad_sim, count)
{
    var valorSim    = document.getElementById(rad_sim).checked;
    var caixa_lim   = document.getElementById(num_lim);

    caixa_lim.style.display = valorSim ? 'inline' : 'none';
    contaChars(area_txt, num_lim, rad_sim, count);
}

let display_txt     = function(alert, num_lim, rad_sim)
{
    let valor_lim   = document.getElementById(num_lim).value;
    let valorSim    = document.getElementById(rad_sim).checked;
    let txt_aviso   = document.getElementById(alert);
    let limite      = (valorSim) ? valor_lim : '';

    txt_aviso.style.display =   (valorSim) ?
                                    (limite == '') ?    'block' : 'none'
                                : txt_aviso.style.display;
}