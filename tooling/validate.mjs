import fs from 'node:fs';import assert from 'node:assert/strict';import crypto from 'node:crypto';
const registry=JSON.parse(fs.readFileSync('public/catalog/registry.json'));
assert.equal(registry.resources.length,32);assert.equal(new Set(registry.resources.map(x=>x.id)).size,32);
for(const r of registry.resources){assert.equal(r.license,'MIT');assert(r.files.some(f=>f.path===r.entry));assert(r.files.some(f=>f.path==='LICENSE'));for(const f of r.files){assert(!f.path.includes('..'));assert.equal(crypto.createHash('sha256').update(fs.readFileSync(f.path)).digest('hex'),f.sha256,`Stale manifest: ${f.path}`)}}
assert.equal(registry.resources.filter(x=>x.id.startsWith('section-')).length,6);assert.equal(registry.resources.filter(x=>x.id.startsWith('page-')).length,2);console.log('PASS: 32 resources, complete source closures, licenses and content hashes.');
