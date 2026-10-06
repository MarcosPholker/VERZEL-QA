# Como usei a IA de forma inteligente nos testes

## Contexto

A IA foi usada para acelerar, organizar e validar o processo de automação de testes, mas sempre com foco em evidência e regra de negócio.

## Fluxo usado

### 1. Leitura da documentação

Primeiro, usei a IA para interpretar a documentação do ambiente e transformar os critérios em cenários de teste.

Isso foi importante porque a automação precisa refletir o que a aplicação realmente exige, não apenas o que foi inferido a partir da interface.

### 2. Tradução para casos de teste

A partir dos critérios de aceite, convertemos as regras em cenários de QA, como:

- adicionar produto ao carrinho
- aplicar cupom válido
- invalidar cupom inexistente
- confirmar frete grátis acima do limite
- verificar resumo do pedido

### 3. Diagnóstico de falhas reais

Quando a suíte falhava, a IA foi usada para analisar mensagens do Playwright e identificar o problema real, como:

- strict mode: vários elementos com o mesmo texto
- seletor muito genérico
- texto de resumo do pedido duplicado com "Frete"
- botão de finalização que não era um botão, e sim um link

Esse tipo de análise reduziu muito tempo de tentativa e erro.

### 4. Ajuste com base em evidência

A IA ajudou a sugerir correções, porém a decisão final sempre foi validada pela execução do navegador real e pelos resultados do Playwright.

### 5. Validação final

A suíte foi executada após os ajustes e confirmou que a automação estava estável para os cenários definidos.

## Regras que precisam ser seguidas

Mesmo usando IA, o fluxo precisa obedecer a estas regras:

- usar a documentação como fonte principal de verdade
- não criar regras que não existam no ambiente
- validar no navegador real antes de concluir o teste
- ajustar seletores para refletir a DOM real da aplicação
- priorizar critérios de aceite e não suposições pessoais
- manter a automação útil para QA, e não apenas elegante na aparência

## O que foi inteligente no uso da IA

- ela permitiu transformar requisitos em testes mais rapidamente
- ajudou na leitura de documentação complexa
- acelerou a análise de falhas na automação
- reduziu o custo de depuração de seletores
- manteve foco na qualidade e na validação real do comportamento

## O que não foi feito

A IA não substituiu a validação humana e não foi usada como uma ferramenta cega.

A automação foi concluída com:

- leitura da regra de negócio
- execução real da interface
- inspeção do DOM
- confirmação dos resultados por testes executados

## Conclusão

O uso inteligente da IA foi de apoio ao processo de QA, não de substituição. Ela acelerou a leitura, o diagnóstico e a organização dos testes, e o resultado final foi validado pela execução real da aplicação.
