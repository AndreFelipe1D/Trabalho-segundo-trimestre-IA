const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Entre um Gol CL 1.8 MI 1997 ou Chevette DL 1.6 1992, Qual você escolheria?",
        alternativas: [
            "Gol CL 1.8 MI 1997",
            "Chevette DL 1.6 1992"
        ]
    },
    {
        enunciado: "Pergunta2",
        alternativas: [
            "Alternativa1",
            "Alternativa2"
        ]
    },
    {
        enunciado: "Pergunta2",
        alternativas: [
            "Alternativa1",
            "Alternativa2"
        ]
    },
    {
        enunciado: "Pergunta2",
        alternativas: [
            "Alternativa1",
            "Alternativa2"
        ]
    },
    {
        enunciado: "Pergunta2",
        alternativas: [
            "Alternativa1",
            "Alternativa2"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();    
}

function mostraPergunta(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild() 
    }
}

mostraPergunta();