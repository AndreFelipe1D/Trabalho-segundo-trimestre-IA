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
                afirmacao: "Ótima escolha!O Civic com seu sistema I-Vtec e os 192 pocotós anda muito bem. "
            },
            {
             texto: "Opala 4.1 1992",   
             afirmacao: "Ótima escolha! Um ícone automotivo brasileiro que por onde passa chama a atenção."
            }
        ]
    },
    {
        enunciado: "Com Carburador ou Injeção programável?",
        alternativas: [
            {
                texto: "Com Carburador",
                afirmacao: "Ousado, hoje em dia é dificil ver um clássico como o Opala desse jeito"
            },
            {
                texto: "Com Injeção programável",
                afirmacao: "Escolheu bem, uma injeção programável possibilita uma economia melhor de combustível."
            }
            
        ]
    },
    {
        enunciado: "Turbo ou Aspirado?",
        alternativas: [
            {
                texto: "Turbo",
                afirmacao:"Quando a turbina encher é só uma patada de potência."
            },
            {
                texto: "Aspirado",
                afirmacao:"Se fazer barulho por onde passa for o objetivo essa é a melhor pedida."
            }
        ]
    },
    {
        enunciado: "Correr à noite em Le Mans ou em Nurburgring?",
        alternativas: [
            {
                texto:"Le Mans",
                afirmacao:"Essa foi uma escolha racional, deu aula."
            },
            {
                texto:"Nurburgring",
                afirmacao:"Se quiser conhecer o Ayrton Senna de perto esse é o caminho."
            }
        ]
    },
    {
        enunciado: "Qual o Melhor Motor para o Skyline R34 do Brian O'Conner?",
        alternativas: [
            {
                texto: "Gallo 12",
                afirmacao:"Você não conhece o filme ou se esqueceu da clássica cena."
            },
            {
                texto:"Gallo 24",
                afirmacao:"Tá sabendo hein, entendeu a referência isso aí."
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Independente, foram ótimas escolhas, Valeu tmj";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();