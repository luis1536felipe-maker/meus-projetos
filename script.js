function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso && altura) {
        const imc = calcularIMC(peso, altura);
        const classificacao = classificarIMC(imc);

        
        document.getElementById('resultado').innerHTML = `Seu IMC é ${imc} (${classificacao})`;
    } else {
    
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos.";
    }
});
