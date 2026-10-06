const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const dir = path.resolve(__dirname, 'evidencias');
  fs.mkdirSync(dir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');
  await page.screenshot({ path: path.join(dir, 'home.png'), fullPage: true });

  const produto = page.getByRole('article', { name: 'Camiseta Essencial' });
  await produto.getByRole('button', { name: /Adicionar ao carrinho/i }).click();
  await page.getByRole('link', { name: /Carrinho/i }).click();
  await page.screenshot({ path: path.join(dir, 'carrinho.png'), fullPage: true });

  await browser.close();
  console.log('Evidências salvas em:', dir);
})();
