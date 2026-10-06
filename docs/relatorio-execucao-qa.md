# Relatório de execução QA

## 1. Visão geral

Este relatório consolida a execução dos testes automatizados da Verzel Store, com foco na validação dos critérios de negócio definidos na documentação oficial do ambiente.

## 2. Objetivo

Validar, por automação, o comportamento da loja em cenários de compra, cupom, frete e carrinho, garantindo que a aplicação atende aos requisitos esperados pelos critérios de aceite.

## 3. Base de referência

Documentação oficial utilizada:

- https://verzel-store.qa-test-verzel-store.workers.dev/documentacao

## 4. Escopo validado

Os testes cobriram os principais cenários da loja:

- carregamento da loja
- disponibilidade do produto
- adição de produto ao carrinho
- exibição do item no carrinho
- campo de cupom de desconto
- aplicação de cupom válido
- rejeição de cupom inválido
- regra de limite de 5 unidades por produto
- apresentação do resumo do pedido
- início da finalização da compra

## 5. Critérios de negócio validados

- Cupom `BEMVINDO10` aplica 10% de desconto sobre o subtotal
- cupom inexistente exibe a mensagem "Cupom inválido."
- frete grátis para subtotal igual ou superior a R$ 200,00
- frete fixo de R$ 19,90 abaixo do limite
- desconto não incide sobre o frete
- quantidade máxima por produto: 5 unidades
- cálculo do total conforme regra `subtotal - desconto + frete`
- execução em múltiplos navegadores: Chromium, Firefox e WebKit

## 6. Evidência de execução

### 6.1 Comando executado

```bash
cd Playwright
npx playwright test --reporter=line
```

### 6.2 Resultado verificado

A execução foi concluída com sucesso.

- 30 testes executados
- 30 testes aprovados
- status final: sucesso

### 6.3 Relatório e evidências visuais

O projeto armazenou o relatório gerado pelo Playwright em:

- [Playwright/playwright-report](../Playwright/playwright-report)

Evidências visuais capturadas em execução real:

![Home da loja](../Playwright/evidencias/home.png)

![Carrinho com item adicionado](../Playwright/evidencias/carrinho.png)

## 7. Observações

Durante a execução, foi necessário ajustar seletores para refletir o DOM real da aplicação. Os principais problemas foram relacionados a:

- elementos duplicados com o mesmo texto
- uso de textos genéricos que não eram exclusivos
- botão de finalização representado como link na interface real

Esses ajustes foram realizados com base na validação real no navegador e na documentação do produto, garantindo maior confiabilidade da automação.

## 8. Conclusão

A suíte de testes automatizados foi executada corretamente, com evidência de validação real e aprovação dos cenários propostos. O projeto está pronto para uso como referência de QA funcional e evidência de execução em ambiente de processo seletivo ou repositório GitHub.
