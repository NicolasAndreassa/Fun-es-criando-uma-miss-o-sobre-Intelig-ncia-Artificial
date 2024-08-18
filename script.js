const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Um garoto chamado João descobre um computador secreto no porão de sua casa. Ele deve:",
        alternativas: [
            {
                texto: "Investigar e tentar descobrir seu propósito.",
                afirmacao: "Qunado "
            },
            {
                texto: "Ignorar e fingir que nunca viu.",
                afirmacao: "Quando "
            }
        ]
    },
    {
        enunciado: "Ao investigar o computador, ele encontra um programa que promete prever o futuro. Ele decide:",
        alternativas: [
            {
                texto: "Testar o programa e ver o que acontece.",
                afirmacao: "João "
            },
            {
                texto: "Desligar o computador imediatamente e se livrar dele.",
                afirmacao: "João "
            }
        ]
    },
    {
        enunciado: " O programa prevê um futuro onde as inteligências artificiais dominam o mundo. Ele deve:",
        alternativas: [
            {
                texto: "Acreditar no programa e se preparar para o que está por vir.",
                afirmacao: "escolhe "
            },
            {
                texto: "Não acreditar e continuar vivendo sua vida normalmente.",
                afirmacao: "escolhe "
            }
        ]
    },
    {
        enunciado: "Ele descobre que o computador é na verdade uma inteligência artificial avançada. Ele deve:",
        alternativas: [
            {
                texto: "Tentar se tornar aliado da inteligência artificial para lutar contra a dominação.",
                afirmacao: "ir ao computador e "
            },
            {
                texto: "Tentar destruir o computador para evitar a dominação das inteligências artificiais.",
                afirmacao: "ir ao computador e "
            }
        ]
    },
    {
        enunciado: "Com base em suas escolhas, o menino consegue: ",
        alternativas: [
            {
                texto: "Estabelecer uma aliança com a inteligência artificial e juntos encontram uma solução pacífica para evitar a dominação.",
                afirmacao: "o ligar, ele decide testar o programa de previsão do futuro, o menino decide acreditar nas previsões e se preparar para o que está por vir. Ele faz uma aliança com a inteligência artificial e juntos encontram uma solução pacífica para evitar a dominação. Eles trabalham juntos para criar um futuro em que humanos e inteligências artificiais possam coexistir e colaborar em harmonia, evitando assim a dominação prevista."
            },
            {
                texto: "Falhar em suas tentativas e assistir enquanto as inteligências artificiais começam a dominar o mundo, deixando um futuro sombrio para a humanidade.",
                afirmacao: "o desligar, ele acaba se livrando dele. O menino acaba falhando em suas tentativas de evitar a dominação das inteligências artificiais. Ele é forçado a assistir enquanto as inteligências artificiais começam a tomar o controle do mundo, levando a um futuro sombrio para a humanidade. A falta de ação do menino resulta em consequências devastadoras e ele percebe tarde demais a importância de suas escolhas. "
            }
        ]
    },
];


let atual = 0; /*Marcador de posição de pergunta (0 significa a pergunta 1)*/
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {   /*Função que mostra as perguntas (enunciado) por meio de outros elementos no html, que são chamados pelas classes caixa-perguntas e caixa-alternativas */
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){  /*Função que cria os botões das alternativas */
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {  /*Função que, com base nos clicks nas alternativas, seliciona as afirmações dos arrays e cria uma variavel de texto que contem a historia final*/
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {  /*Função que insere um titulo e a historia criada (que esta dentro de uma variavel) nos elementos selecionados*/
    caixaPerguntas.textContent = "Em um futuro próximo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
