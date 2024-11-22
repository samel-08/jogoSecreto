alert('Bem-vindo ao jogo do número secreto')
let numeroSecreto = parseInt(Math.random() * 1000 + 1);
console.log ('numeroSecreto')
let chute;
let tentativa = 1;
 
//Enquanto chute não for igual ao N.S
while (chute != numeroSecreto) {
    chute = prompt ('Escolha seu número entre 1 e 1000');
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute}`);
        } else {
                alert(`O número secreto é maior que ${chute}`);
        }
        tentativa++;
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`);
