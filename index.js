const readline = require('readline-sync');

const perguntas = [
  {
    pergunta: "Qual a capital do Brasil?",
    opcoes: ["1) Rio de Janeiro", "2) Brasília", "3) São Paulo"],
    correta: 2
  },
  {
    pergunta: "Quantos estados tem o Brasil?",
    opcoes: ["1) 26", "2) 27", "3) 25"],
    correta: 1
  },
  {
    pergunta: "Qual o maior planeta do sistema solar?",
    opcoes: ["1) Terra", "2) Júpiter", "3) Saturno"],
    correta: 2
  },
];

const premiacoes = [1000, 5000, 10000, 50000, 100000];

function jogar() {
  console.clear();
  console.log("🟡 BEM-VINDO AO SHOW DO MILHÃO 🟡\n");

  const nome = require('readline-sync').question("Digite seu nome: ");
  console.log(`\nOlá, ${nome}! Vamos começar o jogo!\n`);

  let premio = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`\n📍 Rodada ${i + 1} - Valendo R$ ${premiacoes[i].toLocaleString('pt-BR')}!`);
    const pergunta = perguntas[i];

    console.log(`\n${pergunta.pergunta}`);
    pergunta.opcoes.forEach(opcao => console.log(opcao));

    const resposta = require('readline-sync').questionInt("\nDigite o número da sua resposta (ou 0 para PARAR): ");

    if (resposta === 0) {
      console.log(`\n🚪 Você decidiu parar. Levou R$ ${premio.toLocaleString('pt-BR')} para casa!`);
      break;
    }

    if (resposta === pergunta.correta) {
      premio = premiacoes[i];
      console.log("✅ Resposta correta! Você continua no jogo!");
    } else {
      console.log(`❌ Resposta errada! A resposta correta era: ${pergunta.correta})`);
      premio = 0;
      break;
    }
  }

  console.log(`\n🎉 Fim de jogo, ${nome}!`);
  console.log(`🏆 Premiação final: R$ ${premio.toLocaleString('pt-BR')}`);
}

jogar();
