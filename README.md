# Verzel QA - Automação de testes

Este projeto reúne uma automação de testes web com Playwright e uma coleção de testes de API em Postman para o ambiente da Verzel Store.

## Objetivo

Validar o comportamento da loja em cenários reais de compra, carrinho, cupons e regras de frete, conforme a documentação disponível em:

- https://verzel-store.qa-test-verzel-store.workers.dev/documentacao

A ideia principal foi transformar os critérios de aceite em testes automatizados, cobrindo o fluxo do cliente em navegadores Chromium, Firefox e WebKit.

## Estrutura do projeto

- `Playwright/` - suíte de testes automatizados com Playwright
- `postman/` - coleção de testes e fluxos de API
- `docs/` - documentação complementar do projeto

## Como o projeto funciona

### Playwright

Os testes de interface ficam na pasta `Playwright/tests` e cobrem cenários como:

- carregamento da loja
- disponibilidade do produto
- adição ao carrinho
- cupom válido e inválido
- frete grátis
- resumo do pedido
- início da finalização da compra

### Postman

A coleção em `postman/TESTES.postman_collection.json` auxilia na validação dos endpoints e da regra de negócio da API, especialmente para cálculo de carrinho e cupons.

## Requisitos

- Node.js 18+
- npm
- navegador Playwright instalado

## Instalação

No diretório `Playwright`:

```bash
npm install
npx playwright install
```

## Execução dos testes

### Rodar toda a suíte

```bash
cd Playwright
npx playwright test
```

### Rodar com relatório em linha

```bash
cd Playwright
npx playwright test --reporter=line
```

### Abrir relatório HTML

```bash
cd Playwright
npx playwright show-report
```

## Casos cobertos

Os testes foram criados com base na documentação do ambiente, incluindo critérios como:

- cupom `BEMVINDO10` com desconto de 10%
- cupom inexistente retorna mensagem de erro
- cupom expirado retorna mensagem de erro
- frete grátis acima de R$ 200,00
- frete fixo de R$ 19,90 abaixo do limite
- limite de 5 unidades por produto
- subtotal, desconto, frete e total exibidos corretamente

## Regras obrigatórias do projeto

Para manter a automação alinhada ao ambiente, é obrigatório seguir estas regras:

1. Basear os testes na documentação oficial da loja e nos critérios de aceite.
2. Não inventar regras de negócio fora do que foi especificado.
3. Validar sempre o comportamento real da interface no navegador.
4. Usar seletores acessíveis e estáveis para evitar falsos positivos.
5. Respeitar as regras de cupom, subtotal, frete e quantidade por produto.
6. Verificar a aplicação em múltiplos navegadores antes de concluir o cenário.
7. Considerar a IA como apoio, nunca como substituta da análise crítica do QA.

## Como usei a IA de forma inteligente

A IA foi usada como uma assistente de QA e de depuração, e não como uma substituição do raciocínio humano. O fluxo foi:

1. Leitura da documentação do ambiente e extração dos critérios de aceite.
2. Tradução desses critérios em cenários de teste automatizados.
3. Uso da IA para identificar falhas reais de seletores e comportamentos da interface.
4. Diagnóstico de erros de strict mode, textos duplicados e elementos acessíveis divergentes da expectativa.
5. Ajuste dos testes com base em evidência observada no navegador real.
6. Validação final da suíte completa com Playwright.

Essa abordagem foi inteligente porque a IA ajudou a acelerar a interpretação do comportamento e a correção de seletores, mas a validação final aconteceu com execução real do código em ambiente de teste.

## Aprendizado principal

O maior ganho foi combinar:

- documentação do produto
- automação de teste
- inspeção do DOM real
- análise do comportamento da aplicação em execução

Isso tornou os testes mais confiáveis, menos frágeis e mais aderentes à regra de negócio da loja.

## Documentação complementar

- [docs/relatorio-execucao-qa.md](docs/relatorio-execucao-qa.md)
- [docs/guia-de-testes.md](docs/guia-de-testes.md)
- [docs/uso-da-ia-na-qa.md](docs/uso-da-ia-na-qa.md)

## Evidência de execução

Para documentar a execução real dos testes, o projeto deve registrar:

- comando executado
- resultado final
- evidência visual ou de relatório

### Comando executado

```bash
cd Playwright
npx playwright test --reporter=line
```

### Resultado verificado

A execução foi validada com sucesso:

- 30 testes executados
- 30 testes passaram
- status final: sucesso

### Evidência complementar

Como evidência de execução, pode ser utilizado:

- screenshot da página em execução
- relatório HTML gerado pelo Playwright
- log de console com o resultado final

A recomendação é manter o relatório em `Playwright/playwright-report` e, quando necessário, anexar prints dos cenários principais.

### Prints de execução

![Home da loja](Playwright/evidencias/home.png)

![Carrinho com item adicionado](Playwright/evidencias/carrinho.png)

## Observações finais

Este projeto mostra como a automação de QA pode ser estruturada de maneira prática, com foco em:

- clareza dos cenários
- aderência à documentação
- robustez de seletores
- validação em multiload (Chromium, Firefox e WebKit)

---

Projeto desenvolvido com foco em QA automatizada, testes funcionais e validação de requisitos de negócio.
