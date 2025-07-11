const readline = require('readline-sync');
const fs = require('fs');

const perguntas = [
  { pergunta: "Qual a capital do Brasil?", opcoes: ["1) Rio de Janeiro", "2) Brasília", "3) São Paulo"], correta: 2 },
  { pergunta: "Quantos estados tem o Brasil?", opcoes: ["1) 26", "2) 27", "3) 25"], correta: 2 },
  { pergunta: "Qual o maior planeta do sistema solar?", opcoes: ["1) Terra", "2) Júpiter", "3) Saturno"], correta: 2 },
  { pergunta: "Qual o menor país do mundo?", opcoes: ["1) Mônaco", "2) Vaticano", "3) Nauru"], correta: 2 },
  { pergunta: "Quem pintou a Mona Lisa?", opcoes: ["1) Van Gogh", "2) Leonardo da Vinci", "3) Picasso"], correta: 2 },
  { pergunta: "Quem escreveu 'Dom Casmurro'?", opcoes: ["1) Machado de Assis", "2) José de Alencar", "3) Clarice Lispector"], correta: 1 },
  { pergunta: "Qual é o gás mais abundante na atmosfera da Terra?", opcoes: ["1) Oxigênio", "2) Nitrogênio", "3) Gás Carbônico"], correta: 2 },
  { pergunta: "Quantos continentes existem no planeta?", opcoes: ["1) 5", "2) 6", "3) 7"], correta: 3 },
  { pergunta: "Qual é o resultado de 9 x 8?", opcoes: ["1) 72", "2) 81", "3) 64"], correta: 1 },
  { pergunta: "Quem foi o primeiro homem a pisar na Lua?", opcoes: ["1) Yuri Gagarin", "2) Neil Armstrong", "3) Buzz Aldrin"], correta: 2 },
  { pergunta: "Qual é o símbolo químico do Ouro?", opcoes: ["1) Au", "2) Ag", "3) Fe"], correta: 1 },
  { pergunta: "Quantos segundos tem uma hora?", opcoes: ["1) 3600", "2) 6000", "3) 1800"], correta: 1 },
  { pergunta: "O que significa a sigla ONU?", opcoes: ["1) Organização Nacional Unida", "2) Organização das Nações Unidas", "3) Ordem Nacional Universal"], correta: 2 },
  { pergunta: "Quem descobriu o Brasil?", opcoes: ["1) Pedro Álvares Cabral", "2) Cristóvão Colombo", "3) Vasco da Gama"], correta: 1 },
  { pergunta: "Qual o nome do processo de transformação da água em vapor?", opcoes: ["1) Condensação", "2) Evaporação", "3) Fusão"], correta: 2 },
];

const premiacoes = [1000, 5000, 10000, 50000, 100000, 150000, 200000, 250000, 300000, 400000, 500000, 600000, 700000, 800000, 1000000];

function usarAjuda(pergunta) {
  console.log(`\n🧠 UNIVERSITÁRIOS acham que a resposta certa é a opção ${pergunta.correta}.`);
}

function salvarRanking(nome, premio) {
  const linha = `${nome} - R$ ${premio.toLocaleString('pt-BR')}\n`;
  fs.appendFileSync('ranking.txt', linha);
}

function mostrarRanking() {
  if (fs.existsSync('ranking.txt')) {
    const dados = fs.readFileSync('ranking.txt', 'utf8');
    console.log("\n🏆 RANKING DOS JOGADORES:");
    console.log(dados);
  } else {
    console.log("\n📂 Nenhum ranking ainda disponível.");
  }
}

function jogar() {
  console.clear();
  console.log("🟡 BEM-VINDO AO SHOW DO MILHÃO 🟡\n");

  const nome = readline.question("Digite seu nome: ");
  console.log(`\nOlá, ${nome}! Vamos começar!\n`);

  let premio = 0;
  let rodadaFinal = 0;
  let respostaCorretaFinal = null;

  for (let i = 0; i < perguntas.length; i++) {
    const valorRodada = premiacoes[i];
    rodadaFinal = i + 1;

    const p = perguntas[i];

    console.log(`\n📍 Rodada ${rodadaFinal} - Valendo R$ ${valorRodada.toLocaleString('pt-BR')}`);
    console.log(p.pergunta);
    p.opcoes.forEach(o => console.log(o));
    console.log("\nDigite 9 para usar a AJUDA DOS UNIVERSITÁRIOS.");
    console.log("Digite 0 para PARAR e levar o prêmio.");

    const resp = readline.questionInt("\nSua resposta: ");

    if (resp === 9) {
      usarAjuda(p);
      i--; 
      continue;
    }

    if (resp === 0) {
      console.log(`\n🚪 Você decidiu parar. Levou R$ ${premio.toLocaleString('pt-BR')} para casa.`);
      break;
    }

    respostaCorretaFinal = p.correta;

    if (resp === p.correta) {
      premio = valorRodada;
      console.log("✅ Resposta correta!");
    } else {
      console.log(`❌ Resposta errada! A correta era: ${p.correta})`);
      premio = 0;
      break;
    }
  }

  console.log("\n🎉 Fim de jogo!");
  console.log(`Jogador: ${nome}`);
  console.log(`Parou na rodada ${rodadaFinal} de ${perguntas.length}.`);
  if (respostaCorretaFinal) {
    console.log(`Última resposta correta: opção ${respostaCorretaFinal}.`);
  }
  console.log(`Premiação final: R$ ${premio.toLocaleString('pt-BR')}`);

  salvarRanking(nome, premio);

  const verRanking = readline.question("\nQuer ver o ranking dos jogadores? (s/n): ");
  if (verRanking.toLowerCase() === 's') {
    mostrarRanking();
  }

  const jogarNovamente = readline.question("\nDeseja jogar novamente? (s/n): ");
  if (jogarNovamente.toLowerCase() === 's') {
    jogar();
  } else {
    console.log("\n👋 Obrigado por jogar!");
  }
}

jogar();

