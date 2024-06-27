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

test("1.45 debug", async ({ page }) => {
  await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target", { waitUntil: "domcontentloaded" });
  // await page.getByText("Accept all & visit the site").click();

  const page1Promise = page.context().waitForEvent("page");
  await page.frameLocator('iframe[name="iframeResult"]').getByRole("link", { name: "Visit W3Schools.com!" }).click();
  const page1 = await page1Promise;
// URL is printed
  console.log(page1.url());
// Expect stuck
  await expect(page1).toHaveURL(/w3schools/, { timeout: 2_000 });
// locator() doesn't work
  await expect(page1.getByText("Learn to Code")).toBeVisible({ timeout: 2_000 });
});
