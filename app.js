let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
 
//função com parâmetro e sem retorno
function exibirTextonaTela(tag, texto) {
let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
 
exibirTextonaTela ('h1', 'Jogo do número secreto');
exibirTextonaTela ('p', 'Escolha um número entre 1 a 10000');
exibirMensagemInicial();
 
//função sem parâmetro e sem retorno
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextonaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
            exibirTextonaTela('p', mensagemtentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        //document.getElementById('reiniciar').disabled = false;
    } else {
        if (chute > numeroSecreto) {
            exibirTextonaTela('p', 'O número secreto é menor');
        } else {
            exibirTextonaTela('p', 'O número secreto é maior')
        }
        tentativas++
        limparCampo();
    }
}
 
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
 
function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    exibirTextonaTela ('h1', 'Jogo do número secreto');
    exibirTextonaTela ('p', 'Escolha um número entre 1 a 10000');
    tentativas = 1;
    //document.getElementById('reiniciar').disabled = true;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
 
 
//função sem parâmetro e com retorno
function gerarNumeroSecreto() {
    return parseInt(Math.random() * 10000 + 1)
}
 