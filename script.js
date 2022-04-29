function tornarMaiusculas() {
    let texto = document.getElementById("texto").value;
    
    if (texto == false){
        alert("Campo vazio.Não há texto a ser transformado.")
    } else {
        alert(texto.toUpperCase());
    }
}

function tornarMinusculas() {
    let texto = document.getElementById("texto").value;
    
    if (texto == false){
        alert("Campo vazio.Não há texto a ser transformado.")
    } else {
        alert(texto.toLowerCase());
    }
}

function contarCaracteres() {
    let texto = document.getElementById("texto").value;
    
    if (texto == false){
        alert("Campo vazio.Não há texto a ser transformado.")
    } else {
        alert(texto.length);
    }
}