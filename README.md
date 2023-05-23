### Setup

```bash
git clone ...
cd ...
pnpm install
pnpm dev
# open browser and see the error
```

### Error

```bash
1:15:39 AM [vite] Error when evaluating SSR module /src/routes/+page.svelte: failed to import "/src/lib/reatom/Todos.svelte"
|- /Users/roman/Desktop/EXPERIMENTS/0.SVELTE/reatom/node_modules/.pnpm/@reatom+framework@3.4.6/node_modules/@reatom/framework/build/index.module.js:1
export*from"@reatom/async";export*from"@reatom/core";export*from"@reatom/effects";export*from"@reatom/hooks";export*from"@reatom/lens";export*from"@reatom/logger";export*from"@reatom/primitives";export*from"@reatom/utils";
^^^^^^

SyntaxError: Unexpected token 'export'
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1176:20)
    at Module._compile (node:internal/modules/cjs/loader:1218:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

Internal server error: Unexpected token 'export'
      at internalCompileFunction (node:internal/vm:73:18)
      at wrapSafe (node:internal/modules/cjs/loader:1176:20)
      at Module._compile (node:internal/modules/cjs/loader:1218:27)
      at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
      at Module.load (node:internal/modules/cjs/loader:1117:32)
      at Module._load (node:internal/modules/cjs/loader:958:12)
      at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
      at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
/Users/roman/Desktop/EXPERIMENTS/0.SVELTE/reatom/node_modules/.pnpm/@reatom+framework@3.4.6/node_modules/@reatom/framework/build/index.module.js:1
export*from"@reatom/async";export*from"@reatom/core";export*from"@reatom/effects";export*from"@reatom/hooks";export*from"@reatom/lens";export*from"@reatom/logger";export*from"@reatom/primitives";export*from"@reatom/utils";
^^^^^^
```
