const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Entre um Civic SI 2.0 2008 ou Opala Comodoro 4.1 1992, Qual você escolheria?",
        alternativas: [
            {
                texto: "Civic SI 2008",
                afirmacao: "afirmacao"
            },
            {
             texto: "Opala 4.1 1992",   
             afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Carburado ou Injetado?",
        alternativas: [
            {
                texto: "Carburado",
                afirmacao: "afirmacao"
            },
            {
                texto: "Injetado",
                afirmacao: "afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Turbo ou Aspirado?",
        alternativas: [
            {
                texto: "Turbo",
                afirmacao:"afirmacao"
            },
            {
                texto: "Aspirado",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Correr à noite em Le Mans ou em Nurburgring?",
        alternativas: [
            {
                texto:"Le Mans",
                afirmacao:"afirmacao"
            },
            {
                texto:"Nurburgring",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual o Melhor Motor para o Skyline R34 do O'Conner?",
        alternativas: [
            {
                texto: "Gallo 12",
                afirmacao:"afirmacao"
            },
            {
                texto:"Gallo 24",
                afirmacao:"afirmacao"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();    
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas); 
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    
}

mostraPergunta();