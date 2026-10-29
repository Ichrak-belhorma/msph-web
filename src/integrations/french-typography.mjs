// Typographie française : remplace l'espace précédant « : ; ? ! » et les espaces intérieures
// des guillemets par des espaces insécables, pour éviter qu'un signe se retrouve seul en début de ligne.
// Appliqué au HTML généré, hors <script>, <style> et attributs.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NBSP = '\u00a0';

function fixText(text) {
  return text
    .replace(/ ([;?!])/g, `${NBSP}$1`)
    .replace(/ :(?=\s|$|<)/g, `${NBSP}:`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/ »/g, `${NBSP}»`);
}

function processHtml(html) {
  // Découpe en balises / texte ; ignore le contenu des blocs script et style.
  const parts = html.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)/g);
  return parts.map((part) => (part.startsWith('<') ? part : fixText(part))).join('');
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)])));
  return files.flat();
}

export default function frenchTypography() {
  return {
    name: 'french-typography',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files = (await walk(root)).filter((f) => f.endsWith('.html'));
        await Promise.all(
          files.map(async (file) => {
            const html = await readFile(file, 'utf8');
            const out = processHtml(html);
            if (out !== html) await writeFile(file, out);
          }),
        );
      },
    },
  };
}
