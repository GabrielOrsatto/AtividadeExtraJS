function calculadoraIdade(){
    let novaData = new Date;
    let anoAtual = novaData.getFullYear();

    let anoNascimento = prompt("Digite o ano que você nasceu:");

    let calculo = anoAtual - anoNascimento;

    if (anoNascimento < anoAtual & anoNascimento > 0) {
        return("Sua idade é: " + calculo )
    }else{
        return("Digite um ano válido")
    }
}

alert(calculadoraIdade())
