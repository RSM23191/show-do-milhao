# 🟡 Show do Milhão - Jogo em Node.js

##  Autor  
Ray Silva Matos

---

## Enunciado  
Este projeto é um jogo de perguntas e respostas estilo “Show do Milhão”, desenvolvido em **JavaScript com Node.js**, executado totalmente pelo terminal. O objetivo é responder corretamente o máximo de perguntas e acumular o maior valor em prêmios.

---

## 🕹Regras do Jogo

- O jogador informa o **nome** no início.
- Cada **rodada** possui uma pergunta e 3 alternativas (1, 2 ou 3).
- A premiação aumenta a cada rodada.
- O jogador pode:
  - Digitar **1, 2 ou 3** para responder.
  - Digitar **9** para usar a **ajuda dos universitários** (uma dica).
  - Digitar **0** para **parar** o jogo e levar o prêmio acumulado.
- Se errar uma pergunta, perde tudo.
- São 15 perguntas no total.

---
## ▶️ Como Jogar

1. Baixe o projeto clicando em **Code > Download ZIP**.
2. Extraia a pasta no seu computador.
3. Abra o **terminal** (Prompt de Comando).
4. Acesse a pasta onde extraiu o projeto. Exemplo:
   ```bash
   cd Desktop/show-do-milhao-main
5.Instale a biblioteca necessária com:
npm install readline-sync

6.Inicie o jogo com:
node index.js

