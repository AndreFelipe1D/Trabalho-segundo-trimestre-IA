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
                afirmacao: [
                    "Se você escolheu o Civic, foi uma Ótima escolha!O Civic com seu sistema I-Vtec e os 192 pocotós anda muito bem. ",
                    "Já que não estamos no Japão, nada mais racional do que trazer um pouco do Japão para o Brasil."
            ]
            },
            {
             texto: "Opala 4.1 1992",   
             afirmacao: [
                "Se você escolheu o Opala foi uma ótima escolha! Um ícone automotivo brasileiro que por onde passa chama a atenção.",
                "Classe e Robustez em um carro só, isso é Opala" 
            ]
            }
        ]
    },
    {
        enunciado: "Com Carburador ou Injeção programável?",
        alternativas: [
            {
                texto: "Com Carburador",
                afirmacao: [
                    "Ousado em escolher o carburador, hoje em dia é dificil ver carros com essa configuração.",
                    "Prepara o bolso que carburado gasta mais combustivel."
            ]
            },
            {
                texto: "Com Injeção programável",
                afirmacao: [
                    "Escolheu bem,a escolha de uma injeção programável possibilita uma economia melhor de combustível.",
                    "Anderson Dick agradece a sua escolha."
            ]
            }
            
        ]
    },
    {
        enunciado: "Turbo ou Aspirado?",
        alternativas: [
            {
                texto: "Turbo",
                afirmacao:[
                    "Se escolheu turbo se prepara porque quando a turbina encher é só uma patada de potência de uma vez.",
                    "Se é eficiência é o que você busca, você está no caminho certo."
            ]
            },
            {
                texto: "Aspirado",
                afirmacao: [
                    "Se fazer barulho por onde passa for o objetivo, os aspirados são a escolha certa.",
                    "É barulho e diversão a vontade."
            ]
            }
        ]
    },
    {
        enunciado: "Correr à noite em Le Mans ou em Nurburgring?",
        alternativas: [
            {
                texto:"Le Mans",
                afirmacao:[
                    "Essa foi uma escolha racional, pois em Le Mans pelo menos tem iluminação",
                    "Um circuto marcante na história do automobilismo, boa escolha."
            ]
            },
            {
                texto:"Nurburgring",
                afirmacao:[
                    "Se quiser conhecer o Ayrton Senna de perto Nurburgring é a melhor escolha",
                    "Circuito incrível, mas a noite deve ser tenso, escolha ousada."
            ]
            }
        ]
    },
    {
        enunciado: "Qual o Melhor Motor para o Skyline R34 do Brian O'Conner?",
        alternativas: [
            {
                texto: "Gallo 12",
                afirmacao:[
                    "Você não conhece o filme ou se esqueceu da clássica cena.",
                    "Não sabia que pizzaria fazia motor de carro."
            ]
            },
            {
                texto:"Gallo 24",
                afirmacao:[
                    "Tá sabendo hein, entendeu a referência, isso aí!",
                    "Não sabia que pizzaria fazia motor de carro."
            ]
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