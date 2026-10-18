# Design System

## Design Direction

**Paleta oficial confirmada pelo usuário:** marrom profundo `#371F16` (RGB 55, 31, 22; Pantone 497 C) e bege champagne `#E7D4BE` (RGB 231, 212, 190; Pantone 4685 C). São os códigos exatos para aplicações digitais; detalhes e associações em `docs/BRAND-COLORS.md`.

Decidido em 2026-10-06. Ainda não há HTML do site. Esta nota é a direção, não uma página medida.

**Essência:** ocasião.

**Tensão:** a frase ocupa a tela; o resto fica vazio. Exclusivo sem esnobar. Quente sem parecer promoção.

**Momento que se fotografa:** a primeira tela. Bodoni Moda em escala de monumento, com a frase "Sua ocasião, pelo seu nome." O gancho fica menor, logo abaixo: "O cardápio não tem preço. A encomenda tem o seu nome." Um só botão, "Iniciar a encomenda". Muito marfim vazio à direita, no desktop. A frase nasce à esquerda, não no centro. Sem foto de pessoa, sem doce gerado, sem foto de estoque. O logo vertical marrom entra pequeno, com o respiro de 1 X do brandbook.

**Ambição técnica:** HTML estático. A entrada das palavras é escalonada, cerca de 80 ms entre uma e outra, só com `transform` e `opacity`, curva `cubic-bezier(0.16, 1, 0.3, 1)`. Quem pede menos movimento vê o texto já pronto. Sem cursor próprio. Sem roubar a rolagem. Sem WebGL.

### Paleta da página

| Nome | Hex | Papel |
|---|---|---|
| Marfim | `#F6F1EA` | Fundo claro |
| Verde profundo | `#2C3330` | Texto e fundo escuro. Não é preto puro. |
| Terracota | `#C47B4A` | Só o botão principal e o foco desse botão |
| Verde sálvia | `#7A9A76` | Apoio raro: link já visitado ou detalhe |
| Areia quente | `#C4A882` | Fio de divisão |

### Paleta do logo

O logo não usa a tabela de cima. Marrom `#371F16` sobre marfim. Bege `#E7D4BE` ou branco sobre verde profundo. Preto só onde o brandbook já permite. Verde no logo é uso incorreto.

### Nota da direção

Tipografia 8, composição 8, movimento 6, cor 8, detalhe 6. Peso do método: **7,3 / 10**, faixa profissional. O 10 esperaria foto verdadeira, rolagem desenhada e microdetalhe já construído. A rolagem fica a do sistema de propósito: o site é uma confeitaria, e a pessoa precisa descer no próprio ritmo. O cursor fica o do sistema, por escolha.

- [ ] Não recolorir o logo com sálvia, terracota, areia ou verde profundo (agente, prioridade alta)
- [ ] Não gerar rosto nem foto de produto (agente, prioridade alta)

## Typography

Teste atualizado em 2026-10-06 a pedido do usuário: títulos digitais usam o arquivo estático **Bodoni Moda 18pt Regular** fornecido pelo projeto (`assets/fonts/BodoniModa-18pt-Regular.ttf`). O slogan e os títulos usam o corte Regular; os textos corridos continuam em sans-serif do sistema para facilitar a leitura. Avaliar visualmente no localhost antes de consolidar a escolha.

Nota da especificação: **8/10**. Falta medir em tela real e no zoom de 200%. Não há página construída ainda.

| Uso | Papel | Tamanho | Peso | Entrelinha |
|---|---|---|---|---|
| Display | Slogan do HERO | Escala fluida por largura do container | 500 | 0.96 |
| Título de seção | Páginas internas | `clamp(2rem, 1.4rem + 2vw, 3.5rem)` | 700 | 1.15 |
| Corpo | Texto de ler | `clamp(1.0625rem, 1rem + 0.25vw, 1.125rem)` | 400 | 1.6 |
| Interface | Botão, navegação, rótulo | `1rem` | 500 | 1.3 |

O teto do display é 11,25 rem, dez vezes o corpo de 1,125 rem. A frase quebra em duas linhas: "Sua ocasião," e "pelo seu nome." Se a palavra "ocasião" estourar a largura, o teto desce até caber. `text-wrap: balance` nos títulos.

Medida do texto corrido: `max-width: 65ch`. Corpo nunca abaixo de 17 px. No celular, o corpo fica no piso de 1,0625 rem.

Fallback: `Georgia`, `"Times New Roman"`, serif. `font-display: swap`; preload do subconjunto Latin. O subconjunto Latin Extended fornece acentos portugueses fora do bloco básico.

Links: sublinhados, na terracota. Não dependem só da cor.

- [ ] Converter o romano para WOFF2 antes de publicar, sem passar de 200 KB (agente, prioridade média)
- [ ] Na build, margem lateral de 16 px abaixo de 400 px; a frase pode quebrar; sem nowrap. Medido no arquivo, a 56 px: "ocasião" 266 px, "Sua ocasião," 391 px, "pelo seu nome." 412 px (agente, prioridade alta)

## Tokens

Aprovado em 2026-10-06. O sistema parte do marfim e do verde profundo. Sálvia e areia não servem para texto pequeno: sobre marfim o contraste é 2,78:1 e 2,02:1.

**Espaço:** 4, 8, 16, 24, 32, 48, 64 px. Entre grupos, 48 ou 64. Dentro do grupo, 8 ou 16.

**Neutros**, do verde profundo ao marfim:

| Token | Hex |
|---|---|
| 900 | `#2C3330` |
| 800 | `#444A46` |
| 700 | `#5C615D` |
| 600 | `#797B77` |
| 500 | `#959691` |
| 400 | `#B1B0AB` |
| 300 | `#CAC7C1` |
| 200 | `#E2DED7` |
| 100 | `#F6F1EA` |

Texto principal: 900. Texto secundário: 700. Fio: 300. Fundo: 100. Texto sobre fundo escuro: 100 sobre 900, contraste 11,51:1. Logo marrom sobre marfim: 13,64:1. Logo bege sobre verde profundo: 8,97:1.

**Sombra**, em verde profundo, nunca em preto puro:

- Repouso: `0 1px 2px rgb(44 51 48 / 0.06), 0 1px 1px rgb(44 51 48 / 0.04)`
- Flutuante, só menu se existir: `0 8px 24px rgb(44 51 48 / 0.08), 0 2px 6px rgb(44 51 48 / 0.05)`

Cantos retos. Sem raio de pílula.

## Components

| Component | Decision | Status |
|---|---|---|
| Botão principal | Fundo terracota, texto verde profundo, no mínimo 1,25 rem e peso 700. Contraste 3,87:1, válido como texto grande. Marfim sobre terracota fica em 2,98:1 e não se usa. Um por seção. Rótulo nas páginas que levam ao contato: "Iniciar a encomenda". Área mínima 44×44. Sombra de repouso. | locked |
| Botão de envio | Só em `/contato`. Mesmo desenho do principal. Rótulo: "Enviar a ocasião". Abre `https://wa.me/5592984600996` com nome, ocasião e mensagem. Não diz que a mensagem já foi entregue. | definido em 2026-10-06 |
| Botão de transição | Texto verde profundo, sublinhado, sem fundo. Rótulo: "Ver as ocasiões". Não compete com o principal. Área mínima 44×44. | locked |
| Terciário | Não há terceiro botão. | locked |
| Campo | Fundo marfim, fio areia, texto 900, rótulo 700 acima do campo. Foco: contorno de 2 px em terracota, afastado 3 px. | locked |
| Cartão | Fundo 200, sem sombra, canto reto. Sombra só se o bloco flutuar. | locked |
| Navegação | Cinco itens, no topo e no rodapé, com as mesmas palavras: História, Ocasiões, Presente, Espaço, Contato. O item da página atual fica em peso 700. Logo à esquerda, texto alternativo "Bem Dondoca", leva à home. Área mínima 44×44. Sem caixa de busca. | aprovado fase 7 |
| Cursor | Nativo | locked |

## UX Audit Findings

Auditoria de 2026-10-06 sobre a especificação, sem HTML. Método: leis do Krug, as 10 heurísticas de Nielsen, gravidade 0–4. Nota de partida **2/10**: a única tarefa do site, iniciar o contato, não podia terminar. Com o pacote de uso, a nota foi a **4/10**. Com o WhatsApp, a nota foi a **8/10**. Com o endereço e o Instagram corrigidos, a nota da especificação fica **9/10**: a tarefa tem destino, a página não anuncia uma entrega que ainda não aconteceu, e o lugar tem rua. O 10/10 pede a página construída e um depoimento verdadeiro.

Teste do porta-malas, como regra da build: em qualquer página dá para ver o logo, o nome da seção igual ao menu, as cinco seções, a ação da página e o item atual. A home não marca item de seção. A busca fica de fora de propósito: são seis páginas e uma tarefa.

| Issue | Heuristic | Severity (0-4) | Fix | Status |
|---|---|---|---|---|
| `/contato` confirma um envio que não tem destino | Nielsen 1, visibilidade do estado | 4 | O botão abre o WhatsApp +55 92 98460-0996. A página diz: "A mensagem abre no WhatsApp. Cíntia Stamato responde em horário comercial." Não diz que já foi entregue. | fechado na especificação, 2026-10-06 |
| Não há texto quando nome, ocasião ou mensagem faltam | Nielsen 9, recuperação de erro | 3 | Nome: "Falta o nome. A resposta precisa chegar à pessoa certa. Escreva nome e sobrenome." Ocasião: "Falta a ocasião. Ela é o assunto da encomenda. Escreva, por exemplo, aniversário ou casamento." Mensagem: "Falta a mensagem. Uma linha já serve." O que deseja leva "(opcional)". Sem campo de e-mail. | antes do HTML |
| A confirmação de exemplo cita Helena Augusto | Nielsen 1 e 2 | 3 | A página não mostra "mensagem enviada". O cumprimento fica com Cíntia Stamato no WhatsApp. Helena Augusto não entra no HTML. | antes do HTML |
| O título poético não repete a palavra do menu, e nenhum item marca a página | Trunk Test, Krug | 2 | Rótulo pequeno acima do título, com a palavra do menu. Item atual em peso 700. | antes do HTML |
| Alvos de toque ainda sem mínimo | Krug, celular | 2 | Botão, menu e logo com área mínima 44×44. | antes do HTML |
| "O cardápio não tem preço" deixa a pergunta do valor | Krug 1 | 2 | Na mesma primeira tela: "Sem preço neste site." A frase gigante permanece. | antes do HTML |
| Em 320 px a linha combinada não cabe | Nielsen 8, leitura | 2 | Medido na Bodoni Moda regular a 56 px: "ocasião" 266 px, "Sua ocasião," 391 px, "pelo seu nome." 412 px. Abaixo de 400 px a margem lateral é 16 px. A frase pode quebrar. Sem `nowrap`. | antes do HTML |
| A seção de prova vazia ocuparia a home | Nielsen 8 | 2 | A seção só existe com depoimento verdadeiro, nome e ocasião. | antes do HTML |
| Não há página para endereço errado | Trunk Test | 2 | Título: "Esta página não existe." Uma linha: "A ocasião continua no cardápio da casa." O mesmo menu e o botão "Iniciar a encomenda". | antes do HTML |
| O logo ainda não tem nome para leitor de tela | Nielsen 6 | 2 | Texto alternativo "Bem Dondoca". | antes do HTML |
| Telefone, horário e Instagram | Krug, reserva de boa vontade | 2 | Publicar WhatsApp +55 92 98460-0996, https://www.instagram.com/bemdondocadoces/ e "Cíntia Stamato responde em horário comercial". | fechado na especificação, 2026-10-06 |
| Endereço completo | Krug, reserva de boa vontade | 2 | R. Leonor Teles, 276 A - Adrianópolis, Manaus - AM, 69057-510. | fechado na especificação, 2026-10-06 |
| Não há depoimento com nome | Nielsen 4, consistência com o que é verdade | 2 | A prova permanece de fora. | depois; usuário |
| O envio diz "Enviar a ocasião" e o resto do site diz "Iniciar a encomenda" | Nielsen 4 | 1 | Os dois verbos ficam. Um abre a página. O outro envia. | sem mudança |
| Não há busca | Conflito descoberta × mínimo | 0 | Seis páginas, uma tarefa. Sem caixa de busca. | sem mudança |

- [x] O envio abre o WhatsApp e não confirma entrega antes disso (usuário, 2026-10-06)
- [x] Usar os três textos de erro e marcar "o que deseja" como opcional (página, 2026-10-06)
- [x] Confirmar só com o nome digitado, dentro do WhatsApp (página, 2026-10-06)
- [x] Rótulo da seção igual ao menu, item atual em peso 700, alvos de 44 px, alt do logo (página, 2026-10-06)
- [x] Primeira tela com "Sem preço neste site." (página, 2026-10-06)
- [x] Margem de 16 px abaixo de 400 px e frase livre para quebrar (página, 2026-10-06)
- [x] Omitir a prova vazia e publicar a página 404 com o menu (página, 2026-10-06)
- [x] Publicar o WhatsApp, o Instagram e o horário comercial informados (usuário, 2026-10-06)
- [x] Publicar o endereço R. Leonor Teles, 276 A - Adrianópolis, Manaus - AM, 69057-510 (usuário, 2026-10-06)
- [ ] Publicar o depoimento só com fato entregue (usuário, prioridade alta)

## Microinteraction Inventory

| Interaction | Trigger/Rules/Feedback/Loops | Fix | Status |
|---|---|---|---|
| Entrada da frase | Palavras sobem em sequência; some se `prefers-reduced-motion` | Implementar na build | direção |


Atualização 2026-10-07: o hero passou a usar Bodoni Moda variável (`opsz` 36, peso 460) e o corpo do site passou para **Literata** variável (`assets/fonts/Literata-*.woff2`), no lugar da sans-serif do sistema, para melhorar a leitura. O arquivo Bodoni Moda 18pt estático não é mais carregado.

Atualização 2026-10-07 (2): o mesmo tratamento do hero vale para todos os títulos em Bodoni (tokens `--display-weight: 460` e `--display-axes: "opsz" 36`). Os cabeçalhos de página seguem a ordem título → texto de abertura (`.lede`, com run-in em negrito) → ações; o texto de abertura usa `--ink-soft`, 40ch e entrelinha 1,7.
Títulos médios (~2–4rem: `.pull`, `.band`/`.close .page-title`, `.models-head h2`, `.brand-promise-copy h2`, `.occasion h2`, `.quote`) usam `--display-weight-md: 540` e `--display-axes-md: "opsz" 24`. Títulos grandes (hero, cabeçalhos de página e `.showcase-copy h2`) ficam em 460 / opsz 36.
Hero (2026-10-07, 3): título em dois níveis — "Experimente a / sensação de ser" (`.lead`, peso médio) e "Bem Dondoca." (`.name`, peso 560, ~2× o tamanho). Os tamanhos usam `cqi` da coluna `.hero-copy`; "Bem Dondoca." mede ~6,4em nesse peso, por isso o teto é 14.8cqi.
Hero (2026-10-07, 4): revertido o título em dois níveis. As quatro linhas voltam ao mesmo tamanho; "Bem Dondoca." ganha destaque por uma faixa de fundo bege champagne (`.name-tag`), sem mudar o tamanho.
