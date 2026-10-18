# Create Website Plan

## Context

Jornada da presença digital da Bem Dondoca, confeitaria em Manaus desde janeiro de 2017. Intake confirmado em 2026-10-06. Não há `POSITIONING.md` nem `CUSTOMER.md` de uma jornada create-business. O que já existe e esta jornada reutiliza, sem inventar fato novo:

- `.claude/prds/bem-dondoca.prd.md`
- `docs/fontes/estrategia-extrato.md`
- `docs/fontes/marca-extrato.md`
- `docs/prd/index.html` (leitura do PRD, não é o site)
- Master vetorial `Arquivo logo Bem Dondoca.ai` (16 pranchetas, curvas, sem fonte editável)

Produto: bolos, doces, brownies, bem-casados e cupcakes por ocasião, com caminho para encomenda sob medida. Sem preço, checkout, login ou reserva de evento.

Quem é servido: **classe A em Manaus**, ocasião marcante. Avatar de referência: Helena Augusto (40, classe A). Valéria Albuquerque (53, classe A+) permanece no mesmo nicho, como anfitriã. Mariana Sampaio (33, classe B+) fica fora da mensagem principal.

Objetivo único de conversão: iniciar um contato de encomenda ou de dúvida. O canal é o WhatsApp +55 92 98460-0996. Quem responde é Cíntia Stamato, em horário comercial. Instagram: https://www.instagram.com/bemdondocadoces/. A loja publicada fica na R. Leonor Teles, 276 A, Adrianópolis, Manaus.

Formato: site enxuto de várias páginas, no escopo do MVP do PRD (marca, história desde 2017, portfólio por ocasião, diferenciais, presente, espaço físico, contato).

Onde o código mora: HTML estático nesta pasta `site/`. Bodoni Moda é a família oficial. O logo só nas cores oficiais (marrom `#371F16`, bege `#E7D4BE`, preto ou branco). A página usa as cinco cores pedidas: marfim `#F6F1EA`, verde profundo `#2C3330`, terracota `#C47B4A`, sálvia `#7A9A76`, areia `#C4A882`. Decidido na fase 4.

Prova que existe hoje: história desde 2017, voz e assinatura do brandbook ("Experimente a sensação de ser Bem Dondoca."). Não há depoimento nomeado, número de resultado, garantia nem preço publicável. O endereço publicado, informado pelo usuário, é R. Leonor Teles, 276 A - Adrianópolis, Manaus - AM, 69057-510. A estratégia cita a loja na Nossa Senhora das Graças; o site usa o endereço informado. Cíntia Stamato é quem responde no WhatsApp. A página `/historia` não a transforma em rosto da casa.

Acabamento: design completo. Fases 4 a 7 rodam inteiras. Fase 9 não roda.

## Phase Status

| Phase | Skill | Status | Artifact | Date |
|---|---|---|---|---|
| 1 | one-page-marketing | done | MARKETING.md, CUSTOMER.md | 2026-10-06 |
| 2 | storybrand-messaging | done | POSITIONING.md, WEBSITE.md | 2026-10-06 |
| 3 | made-to-stick | done | POSITIONING.md, WEBSITE.md | 2026-10-06 |
| 4 | top-design | done | DESIGN.md | 2026-10-06 |
| 5 | web-typography | done | DESIGN.md | 2026-10-06 |
| 6 | refactoring-ui | done | DESIGN.md | 2026-10-06 |
| 7 | ux-heuristics | done | DESIGN.md | 2026-10-06 |
| 8 | cro-methodology | done | WEBSITE.md, EXPERIMENTS.md | 2026-10-06 |
| 9 | scorecard-marketing | skipped: um CTA direto de contato basta; a estratégia não descreve nutrição por e-mail | WEBSITE.md, MARKETING.md | 2026-10-06 |
| 10 | steve-jobs-design-review | deferred: o HTML está em `site/`; a revisão ainda não rodou | WEBSITE.md | 2026-10-06 |

Statuses: pending · in-progress · awaiting-evidence · done · deferred: <reason> · skipped: <reason>

A fase 10 é portão: pode esperar, não pode ser pulada. As fases 2 a 8 e 10 só abrem depois que a fase 1 for aprovada e marcada `done`.

## Key Decisions

| Date | Phase | Decision | Rationale |
|---|---|---|---|
| 2026-10-06 | Intake | Nicho não fechado | Usuário recusou escolher entre classe A (Helena e Valéria) e incluir B+ (Mariana). O PRD já tratava isso como pergunta aberta. |
| 2026-10-06 | 1 | Nicho = classe A em Manaus | Usuário fechou o nicho em "classe A". Helena é o avatar. Valéria (A+) fica no mesmo nicho. Mariana (B+) sai da mensagem principal. |
| 2026-10-06 | 1 | USP e grade aprovadas | USP da encomenda pelo nome, sem "a única". Grade 2/9. Arquivos gravados. |
| 2026-10-06 | 2 | One-liner trancado | "Sua ocasião, pelo seu nome." Home não abre com "Nós". Prova de cliente fica vazia. Nota 9/10. |
| 2026-10-06 | 3 | Gancho e reescritas | "O cardápio não tem preço. A encomenda tem o seu nome." SUCCESs 41/60. Sem história de cliente inventada. |
| 2026-10-06 | 4 | Direção visual | Frase gigante em Bodoni, cursor nativo, sem foto gerada. Página nas cinco cores. Logo só nas cores oficiais. Nota de direção 7,3. |
| 2026-10-06 | 5 | Uma família, um arquivo | Bodoni Moda romana variável, 161424 bytes. Itálico fica de fora para permanecer sob 200 KB. |
| 2026-10-06 | 6 | Tokens e botões | Escala 4–64. Terracota só no botão principal, com texto verde profundo. Sálvia e areia não entram em texto pequeno. |
| 2026-10-06 | 7 | Pacote de uso antes do HTML | Gravidades 2, 3 e 4 que não pedem fato novo entram na especificação. Canal, endereço, telefone, horário, Instagram e depoimento ficam em aberto. Nota 2/10; com o pacote, 4/10 enquanto o envio não tiver destino. |
| 2026-10-06 | 8 | Objeções com fato já escrito | Cinco respostas entram na página. Nota 6/10. Depoimento, canal e prazo de resposta ficam na lista de espera. E1 e E2 bloqueados. |
| 2026-10-06 | 10 | Portão adiado | A revisão final espera o HTML. Não foi pulada. |
| 2026-10-06 | Contato | WhatsApp, Cíntia Stamato, horário comercial, Instagram | Número +55 92 98460-0996. Link https://wa.me/5592984600996. Perfil corrigido para https://www.instagram.com/bemdondocadoces/. Endereço: R. Leonor Teles, 276 A - Adrianópolis, Manaus - AM, 69057-510. Sem relógio. |
| 2026-10-06 | Intake | Conversão = iniciar contato de encomenda ou dúvida | MVP do PRD, item 7. Checkout e preço ficam fora. Canal ainda sem dono. |
| 2026-10-06 | Intake | Site enxuto, várias páginas | O MVP tem vários trabalhos (marca, história, ocasiões, diferenciais, presente, espaço, contato). Uma landing só apertaria isso. |
| 2026-10-06 | Intake | HTML estático em `site/` | A pasta não tem stack. O escopo não pede aplicação. |
| 2026-10-06 | Intake | Fases 4–7 inteiras | A estratégia quer percepção de confeitaria exclusiva. Acabamento leve não sustenta isso. |
| 2026-10-06 | Intake | Paleta da página adiada para a fase 4 | Brandbook imprime só marrom e bege. As cinco cores pedidas para a interface não estão no brandbook. Logo não se recolore. |
| 2026-10-06 | 9 | Quiz pulado | Um contato direto cobre quem já tem ocasião. Quiz exigiria uma nutrição que a estratégia não documenta. |

## Next Actions

- [x] Fechar o nicho da fase 1: classe A (usuário, 2026-10-06)
- [x] Aprovar o rascunho da fase 1 e gravar `MARKETING.md` e `CUSTOMER.md` (usuário, 2026-10-06)
- [x] Fase 2 gravada: `POSITIONING.md` e `WEBSITE.md` (2026-10-06)
- [x] Fase 3 gravada: gancho e reescritas em `POSITIONING.md` e `WEBSITE.md` (2026-10-06)
- [x] Fase 4 gravada: `DESIGN.md` (2026-10-06)
- [x] Fase 5 gravada: tipografia em `DESIGN.md` (2026-10-06)
- [x] Fase 6 gravada: tokens e componentes em `DESIGN.md` (2026-10-06)
- [x] Fase 7 gravada: auditoria de uso em `DESIGN.md` e regras de contato em `WEBSITE.md` (usuário, pacote recomendado, 2026-10-06)
- [x] Fase 8 gravada: objeções em `WEBSITE.md` e experimentos em `EXPERIMENTS.md` (usuário, gravar assim, 2026-10-06)
- [x] Fase 10 adiada até existir o HTML do site (usuário, 2026-10-06)
- [x] Na fase 4, a página usa as cinco cores; o logo fica nas cores oficiais (usuário, 2026-10-06)
- [x] Contato definido: WhatsApp +55 92 98460-0996, Cíntia Stamato, horário comercial, https://www.instagram.com/bemdondocadoces/ (usuário, 2026-10-06)
- [x] Endereço publicado: R. Leonor Teles, 276 A - Adrianópolis, Manaus - AM, 69057-510 (usuário, 2026-10-06)
- [x] HTML estático na pasta: home, história, ocasiões, presente, espaço, contato e 404 (2026-10-06)
- [ ] Depoimento com nome e ocasião, quando existir (usuário)
- [ ] Revisão da fase 10, com o HTML já publicado
