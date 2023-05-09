function teste(){

    var tamString = document.getElementById("caixa_de_texto").value.length;
    var contador = document.getElementById("chars_digitados");
    var textoAdd;

    if(tamString == 0){

        textoAdd = "Não há caracteres digitados.";

    }
    else {

        textoAdd = "Há "+ tamString +" caracteres digitados.";

    }

    contador.innerHTML = textoAdd;

}