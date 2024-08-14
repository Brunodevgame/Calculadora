function adjustFontSize() {
    var resultado = document.getElementById("resultado");
    var maxWidth = resultado.clientWidth; // Largura disponível para o texto
    var textWidth = resultado.scrollWidth; // Largura total do texto
    
    // Tamanho da fonte inicial
    var fontSize = 25;
    var step = 1; // Quantidade para reduzir o tamanho da fonte

    // Reduz o tamanho da fonte enquanto o texto exceder a largura do visor
    while (textWidth > maxWidth && fontSize > 10) {
        fontSize -= step;
        resultado.style.fontSize = fontSize + 'px';
        textWidth = resultado.scrollWidth;
    }
}

function insert(num) {
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById("resultado").innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById("resultado").innerHTML;
    if (resultado) {
        try {
            document.getElementById("resultado").innerHTML = eval(resultado);
        } catch (e) {
            document.getElementById("resultado").innerHTML = "Erro";
        }
    } else {
        document.getElementById("resultado").innerHTML = "Digite um valor";
    }
}

// Adiciona um event listener para capturar eventos de teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '.', 'Enter', 'Backspace'];
    
    if (validKeys.includes(key)) {
        if (key === 'Enter') {
            calcular();
        } else if (key === 'Backspace') {
            back();
        } else {
            insert(key === '*' ? '*' : key);
        }
    }
});
