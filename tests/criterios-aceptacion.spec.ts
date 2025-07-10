import { test, expect } from '@playwright/test';

test('Seleccion-entradas', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.locator('div').filter({ hasText: /^\$85\.99Ver detalles$/ }).getByRole('link').click();
    await page.getByRole('spinbutton').click();
    await page.getByRole('spinbutton').fill('');
    await page.getByRole('spinbutton').press('ArrowLeft');
    await page.getByRole('spinbutton').fill('500');
    await page.getByRole('button', { name: 'Comprar entradas' }).click();
  });
  
  test('Compra', async ({ page }) => {
    await page.goto('http://localhost:3000/concerts/1');
    await page.getByRole('spinbutton').click();
    await page.getByRole('spinbutton').fill('');
    await page.getByRole('spinbutton').press('ArrowLeft');
    await page.getByRole('spinbutton').fill('500');
    await page.getByRole('button', { name: 'Comprar entradas' }).click();
  
    await page.getByRole('textbox', { name: 'Nombre del titular' }).click();
    await page.getByRole('textbox', { name: 'Nombre del titular' }).fill('sdf');
    await page.getByRole('button', { name: 'Completar compra' }).click();
  });

  