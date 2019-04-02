var cpf;
var cpfArray;
var i;
var soma1;
var soma2;
var resto1;
var resto2;
var mult1;
var mult2;

const verificador = {};



// --- FUNÇÃO MAIN ---
verificador.main = function main(btn) {
    //cpfArray = null;
    //cpf = document.getElementById("cpfInput").value;
    cpfArray = cpf.split("");

    if (cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" ) {

            document.getElementById('verif').innerHTML = "CPF Inválido!";

        } else {

            verificador.calc();
        }
    
    return cpfArray;
    
    

}

verificador.calc = function calc() {
    // --- EQUAÇÃO PRIMIERO DÍGITO --- 
    soma1 = 0;
    soma2 = 0;
    mult1 = 10;
    mult2 = 11;
    for (i = 0; i < 9; i++) {
        soma1 = soma1 + (cpfArray[i] * mult1);
        mult1--;
    }

    resto1 = soma1 % 11;
    soma1 = 11 - resto1;

    // --- EQUAÇÃO SEGUNDO DÍGITO ---

    for (i = 0; i < 10; i++) {

        soma2 = soma2 + (cpfArray[i] * mult2);
        mult2--;
    }

    resto2 = soma2 % 11;
    soma2 = 11 - resto2;
    verificador.autent();
    testSoma = [soma1, soma2];
    return testSoma;


}
// --- FUNÇÃO PRIMEIRO DÍGITO ---
verificador.ver1 = function ver1() {
    if (soma1 > 9 && cpfArray[9] == 0) {
        return true;
    } else {
        return false;
    }

}

verificador.ver2 = function ver2() {
    if (soma1 == cpfArray[9]) {
        return true;
    } else {
        return false;
    }
}

// --- FUNÇÃO SEGUNDO DÍGITO ---
verificador.ver3 = function ver3() {
    if (soma2 > 9 && cpfArray[10] == 0) {
        return true;
    } else {
        return false;
    }
}

verificador.ver4 = function ver4() {
    if (soma2 == cpfArray[10]) {
        return true;
    } else {
        return false;
    }
}

verificador.autent = function autent() {
    // --- VERIFIAÇÃO DE AUTENTICIDADE ---
    if (verificador.ver1() == true || verificador.ver2() == true) {

        if (verificador.ver3() == true || verificador.ver4() == true) {

            //document.getElementById('verif').innerHTML = "CPF Válido!";

        } else {

            //document.getElementById('verif').innerHTML = "CPF Inválido!";

        }

    } else {

        //document.getElementById('verif').innerHTML = "CPF Inválido!";

    }
    // ---- LOGS ----
    console.log("Soma 1: <br>" + soma1);
    console.log("Soma 2: <br>" + soma2);
    console.log(verificador.ver1() + "<br>" + verificador.ver2());
    console.log(verificador.ver3() + "<br>" + verificador.ver4());
}

