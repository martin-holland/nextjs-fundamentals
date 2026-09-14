const { expect, test } = require("@playwright/test");

test("home page shows the main heading", async ({ page }) => {
  await page.goto("/");

  const heading = page.getByRole("heading", {
    name: /martin's next\.js playground/i,
  });
  await expect(heading).toBeVisible();
});

test("can navigate from the home page to the about page", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: /go to about page/i }).click();

  await expect(page).toHaveURL(/\/about$/);
  await expect(
    page.getByRole("heading", { name: /about this course/i })
  ).toBeVisible();
});
