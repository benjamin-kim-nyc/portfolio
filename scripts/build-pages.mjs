import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// This portfolio uses native links and video controls, so Pages needs no client runtime.
const root = process.cwd();
const scratch = path.join(root, '.pages-render');
const out = path.join(root, 'pages-dist');
await fs.mkdir(scratch, { recursive: true });
await fs.rm(out, { recursive: true, force: true });
await fs.mkdir(out, { recursive: true });
const modules = [
  ['app/projects.ts', 'projects.mjs'],
  ['app/quote-annotations.ts', 'quote-annotations.mjs'],
  ['app/page.tsx', 'home.mjs'],
  ['app/work/[slug]/page.tsx', 'project.mjs'],
];
try {
  for (const [source, destination] of modules) {
    const text = await fs.readFile(path.join(root, source), 'utf8');
    let js = ts.transpileModule(text, { compilerOptions: {
      target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext,
      jsx: ts.JsxEmit.ReactJSX,
    }}).outputText;
    js = js.replace(/from ['"](?:\.\/|\.\.\/\.\.\/)projects['"]/g, 'from "./projects.mjs"')
      .replace(/from ['"]\.\.\/\.\.\/quote-annotations['"]/g, 'from "./quote-annotations.mjs"')
      .replace(/import \{ notFound \} from ['"]next\/navigation['"];?/, 'function notFound() { throw new Error("Unknown project"); }');
    await fs.writeFile(path.join(scratch, destination), js);
  }
  const { default: Home } = await import(pathToFileURL(path.join(scratch, 'home.mjs')));
  const { default: Project } = await import(pathToFileURL(path.join(scratch, 'project.mjs')));
  const { projects } = await import(pathToFileURL(path.join(scratch, 'projects.mjs')));
  const base = ''; // Custom domain: benjikim.me
  const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  async function page(route, title, element) {
    let body = renderToStaticMarkup(element).replace(/\b(href|src)="\/(?!\/)/g, `$1="${base}/`)
      .replace(/\bposter="\/(?!\/)/g, `poster="${base}/`);
    const dir = path.join(out, route);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(title)}</title><meta name="description" content="Product design and user research by Benji Kim."><link rel="stylesheet" href="${base}/styles.css"></head><body>${body}</body></html>`);
  }
  await page('', 'Benji Kim — Product designer', React.createElement(Home));
  const publishedProjects = process.env.HIDE_SOVENTURE === 'true' ? projects.filter(project => project.slug !== 'travel-insurance' && project.slug !== 'plan-comparison') : projects;
  for (const project of publishedProjects) await page(`work/${project.slug}`, `${project.focus} — Benji Kim`, await Project({params:Promise.resolve({slug:project.slug})}));
  if (process.env.HIDE_SOVENTURE !== 'true') await page('work/travel-insurance-case-study', 'Soventure case study — Benji Kim', await Project({params:Promise.resolve({slug:'travel-insurance-case-study'})}));
  const css = (await fs.readFile('app/globals.css', 'utf8')).replace(/@import\s+['"]tailwindcss['"];?/g, '');
  await fs.writeFile(path.join(out, 'styles.css'), css);
  await fs.cp('public', out, { recursive: true });
  await fs.writeFile(path.join(out, '.nojekyll'), '');
  await fs.writeFile(path.join(out, '404.html'), `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found</title><link rel="stylesheet" href="${base}/styles.css"><main class="portfolio"><h1>Page not found</h1><p><a href="${base}/">Back to the portfolio</a></p></main></html>`);
  console.log(`Built ${publishedProjects.length + (process.env.HIDE_SOVENTURE === 'true' ? 0 : 1)} portfolio pages in pages-dist`);
} finally {
  await fs.rm(scratch, { recursive: true, force: true });
}
