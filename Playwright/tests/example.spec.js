import { test, expect } from '@playwright/test';

const URL = 'https://verzel-store.qa-test-verzel-store.workers.dev/';

/*
 * TESTE 01
 * Objetivo: verificar se a loja carrega corretamente.
 */
test('01 - Loja deve carregar corretamente', async ({ page }) => {
    await page.goto(URL);

    await expect(page).toHaveTitle(/Verzel/i);
});

/*
 * TESTE 02
 * Objetivo: verificar se o produto Camiseta Essencial
 * está disponível para compra.
 */
test('02 - Produto deve estar disponível', async ({ page }) => {
    await page.goto(URL);

    const produto = page.getByRole('article', {
        name: 'Camiseta Essencial'
    });

    await expect(produto).toBeVisible();

    await expect(
        produto.getByRole('button')
    ).toBeVisible();
});

/*
 * TESTE 03
 * Objetivo: adicionar um produto ao carrinho.
 */
test('03 - Deve adicionar produto ao carrinho', async ({ page }) => {
    await page.goto(URL);

    const produto = page.getByRole('article', {
        name: 'Camiseta Essencial'
    });

    await produto.getByRole('button', { name: /Adicionar ao carrinho/i }).click();

    await expect(
        produto.getByRole('button', { name: /Adicionar ao carrinho/i })
    ).toBeVisible();

    await expect(page.getByRole('link', { name: /Carrinho/i })).toContainText('1');
});

/*
 * TESTE 04
 * Objetivo: verificar o carrinho após adicionar um produto.
 */
test('04 - Carrinho deve exibir produto adicionado', async ({ page }) => {
    await page.goto(URL);

    const produto = page.getByRole('article', {
        name: 'Camiseta Essencial'
    });

    await produto.getByRole('button').click();

    await page.getByRole('link', {
        name: /Carrinho/
    }).click();

    await expect(
        page.getByText('Camiseta Essencial')
    ).toBeVisible();
});

/*
 * TESTE 05
 * Objetivo: verificar o campo de cupom de desconto.
 */
test('05 - Carrinho deve possuir campo de cupom', async ({ page }) => {
    await page.goto(URL);

    const produto = page.getByRole('article', {
        name: 'Camiseta Essencial'
    });

    await produto.getByRole('button').click();

    await page.getByRole('link', {
        name: /Carrinho/
    }).click();

    await expect(
        page.getByRole('textbox', {
            name: 'Cupom de desconto'
        })
    ).toBeVisible();
});

/*
 * TESTE 06
 * Objetivo: aplicar o cupom válido BEMVINDO10.
 */
test('06 - Deve aplicar cupom BEMVINDO10', async ({ page }) => {
    await page.goto(URL);

    const produto = page.getByRole('article', {
        name: 'Camiseta Essencial'
    });

    await produto.getByRole('button').click();

    await page.getByRole('link', {
        name: /Carrinho/
    }).click();

    const campoCupom = page.getByRole('textbox', {
        name: 'Cupom de desconto'
    });

    await campoCupom.fill('BEMVINDO10');

    await page.getByRole('button', {
        name: 'Aplicar cupom'
    }).click();

    await expect(
        page.getByText(/10%|desconto/i).first()
    ).toBeVisible();
});

/*
 * TESTE 07
 * Objetivo: validar a rejeição de um cupom inexistente.
 */
test('07 - Deve rejeitar cupom inválido', async ({ page }) => {
    await page.goto(URL);

    const produto = page.getByRole('article', {
        name: 'Camiseta Essencial'
    });

    await produto.getByRole('button').click();

    await page.getByRole('link', {
        name: /Carrinho/
    }).click();

    const campoCupom = page.getByRole('textbox', {
        name: 'Cupom de desconto'
    });

    await campoCupom.fill('CUPOM999');

    await page.getByRole('button', {
        name: 'Aplicar cupom'
    }).click();

    await expect(
        page.getByText(/Cupom inválido/i)
    ).toBeVisible();
});

/*
 * TESTE 08
 * Objetivo: verificar o limite máximo de 5 unidades
 * por produto.
 */
test('08 - Produto não deve ultrapassar 5 unidades', async ({ page }) => {
    await page.goto(URL);

    const produto = page.getByRole('article', {
        name: 'Camiseta Essencial'
    });

    await produto.getByRole('button').click();

    await page.getByRole('link', {
        name: /Carrinho/
    }).click();

    const aumentar = page.getByRole('button', {
        name: /Aumentar quantidade de/
    });

    await aumentar.click();
    await aumentar.click();
    await aumentar.click();
    await aumentar.click();

    await expect(
        page.getByRole('button', {
            name: /Aumentar quantidade de/
        })
    ).toBeVisible();
});

/*
 * TESTE 09
 * Objetivo: verificar a presença das informações de
 * subtotal, frete e total no carrinho.
 */
test('09 - Carrinho deve exibir resumo do pedido', async ({ page }) => {
    await page.goto(URL);

    const produto = page.getByRole('article', {
        name: 'Camiseta Essencial'
    });

    await produto.getByRole('button').click();

    await page.getByRole('link', {
        name: /Carrinho/
    }).click();

    await expect(page.getByText('Resumo do pedido')).toBeVisible();
    await expect(page.locator('dt', { hasText: /^Subtotal$/ })).toBeVisible();
    await expect(page.locator('dt', { hasText: /^Frete$/ })).toBeVisible();
    await expect(page.locator('dt', { hasText: /^Total$/ })).toBeVisible();
});

/*
 * TESTE 10
 * Objetivo: verificar que o carrinho permite acessar
 * a etapa de finalização do pedido.
 */
test('10 - Deve permitir iniciar finalização do pedido', async ({ page }) => {
    await page.goto(URL);

    const produto = page.getByRole('article', {
        name: 'Camiseta Essencial'
    });

    await produto.getByRole('button').click();

    await page.getByRole('link', {
        name: /Carrinho/
    }).click();

    await expect(
        page.getByRole('link', {
            name: /^Finalizar compra$/i
        })
    ).toBeVisible();
});