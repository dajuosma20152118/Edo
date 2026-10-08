// Genera les imatges PNG (1080x1080) a partir de posts.html.
// Ús: node magdalena-instagram/src/render.js
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1200 } });
  await page.goto('file://' + path.join(__dirname, 'posts.html'));
  const outDir = path.join(__dirname, '..', 'fotos');
  for (const el of await page.$$('.post')) {
    const id = await el.getAttribute('id');
    await el.screenshot({ path: path.join(outDir, `${id}.png`) });
    console.log(`fotos/${id}.png`);
  }
  await browser.close();
})();
