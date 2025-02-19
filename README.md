# Jogo da Minhoca com IA

Um jogo da minhoca (snake) clássico implementado em HTML5 Canvas com uma inteligência artificial baseada em Q-Learning.

## Características

- Interface gráfica simples e intuitiva
- Sistema de pontuação e recorde
- 3 níveis de dificuldade
- IA treinável com Q-Learning
- Design responsivo
- Armazenamento local para salvar progresso

## Como Jogar

1. Abra o arquivo `index-ia.html` em seu navegador
2. Escolha a dificuldade (Fácil, Médio ou Difícil)
3. Use o botão "Ativar IA" para alternar entre controle manual e IA
4. A minhoca se move automaticamente quando a IA está ativa
5. Colete as comidas vermelhas para aumentar a pontuação
6. Evite colisões com as paredes e com o próprio corpo

## Controles da IA

- **Ativar IA**: Alterna entre modo manual e IA
- **Resetar IA**: Limpa a memória de aprendizado da IA
- A IA aprende através do algoritmo Q-Learning
- O epsilon diminui gradualmente para melhorar a exploração

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Canvas API
- Local Storage
- Q-Learning (Reinforcement Learning)

## Como Funciona a IA

A IA utiliza Q-Learning para aprender a jogar:
- Estados: Posição atual da minhoca e da comida
- Ações: Movimentos possíveis (cima, baixo, esquerda, direita)
- Recompensas: 
  - +10 para comer comida
  - -100 para colisões
  - -1 para movimentos sem comer

## Desenvolvimento

Para modificar o jogo, edite o arquivo `index-ia.html`. O código está organizado em:
- Estilização CSS
- Canvas para renderização
- Lógica do jogo em JavaScript
- Sistema de IA com Q-Learning

## Armazenamento

O jogo utiliza Local Storage para salvar:
- Recorde
- Tabela Q (aprendizado da IA)
- Epsilon (taxa de exploração)
