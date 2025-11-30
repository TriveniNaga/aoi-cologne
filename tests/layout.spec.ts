import { test, expect } from '@playwright/test';

test.describe('App Layout', () => {
  test.beforeEach(async ({ page }) => {
    // With playwright.config.ts webServer setup, you can just use '/'
    await page.goto('/');
  });

  // 1️⃣ Left panel width check
  test('renders left panel with correct width', async ({ page }) => {
    const leftPanel = page.locator('div', { hasText: 'Define Area of Interest' });
    await expect(leftPanel).toBeVisible();
    const box = await leftPanel.boundingBox();
    expect(box?.width).toBeCloseTo(314, 1); // matches your inline style
  });

  // 2️⃣ Search bar presence
  test('search bar is present in left panel', async ({ page }) => {
    const searchBar = page.locator('input[placeholder="city, town, region..."]');
    await expect(searchBar).toBeVisible();
    await searchBar.fill('India');
    await expect(searchBar).toHaveValue('India');
  });

  // 3️⃣ Apply Outline button state change
  test('Apply Outline button disables after click and enables Confirm button', async ({ page }) => {
    const applyButton = page.locator('button', { hasText: 'Apply outline as base image' });
    const confirmButton = page.locator('button', { hasText: 'Confirm Area of Interest' });

    // Initially: Apply enabled, Confirm disabled
    await expect(applyButton).toBeEnabled();
    await expect(confirmButton).toBeDisabled();

    // Click Apply
    await applyButton.click();

    // After click: Apply disabled, Confirm enabled
    await expect(applyButton).toBeDisabled();
    await expect(confirmButton).toBeEnabled();
  });
});
