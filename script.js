const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Entre um Civic SI 2.0 2008 ou Opala Comodoro 4.1 1992, Qual você escolheria?",
        alternativas: [
            "Civic SI 2008",
            "Opala 4.1 1992"
        ]
    },
    {
        enunciado: "Carburado ou Injetado?",
        alternativas: [
            "Carburado",
            "Injetado"
        ]
    },
    {
        enunciado: "Turbo ou Aspirado?",
        alternativas: [
            "Turbo",
            "Aspirado"
        ]
    },
    {
        enunciado: "Correr à noite em Le Mans ou em Nurburgring?",
        alternativas: [
            "Le Mans",
            "Nurburgring"
        ]
    },
    {
        enunciado: "Qual o Melhor Motor para o Skyline R34 do O'Conner?",
        alternativas: [
            "Gallo 12",
            "Gallo 24"
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas); 
    }
}

mostraPergunta();