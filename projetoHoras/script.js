
function gravar() {
    var agora = new Date();
    var hora = agora.getHours();
    img = document.getElementById('imagem');
    var fundo = document.getElementById('estilo');
    var titulo = document.getElementById('titulo');
    var texto = document.getElementById('texto');
    if (hora < 12) {
        document.getElementById("mensagem").innerHTML = 'Bom dia!';
        img.src = 'imagem/manha.jpg';
        fundo.style.backgroundColor = 'rgb(255, 255, 129)';
        titulo.style.color = 'Black';
    }
    else if (hora >= 12 && hora < 18) {
        document.getElementById("mensagem").innerHTML = 'Boa tarde!';
        img.src = 'imagem/tarde.jpg';
        fundo.style.backgroundColor = 'orange';
        titulo.style.color = 'White';
        texto.innerText = `Agora são ${hora} horas`;
    }
    else if (hora > 18 && hora <= 23) {
        document.getElementById("mensagem").innerHTML = 'Boa noite!';
        img.src = 'imagem/noite.jpg';
        fundo.style.backgroundColor = 'black';
        titulo.style.color = 'White';
    }

}