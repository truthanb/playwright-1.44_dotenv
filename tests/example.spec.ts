import { test, expect } from '@playwright/test';

test('.env file variable is true', async () => {

  // Expect a title "to contain" a substring.
  await expect(process.env.TESTENV).toBe('true');
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
