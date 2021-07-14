# Example repo for local packages

```
npm i
npx lerna bootstrap
npm run dev client
```

The browser shows 

```
[vite] connecting... client.ts:22:8
Loading module from “http://one.auctria.local:3000/src/internal/something” was blocked because of a disallowed MIME type (“text/html”).
```

`src/internal/something` is under `packages/test-core/src/internal/something` and is imported from `packages/test-core/src/main.ts` via:

```
import { something } from '@/src/internal/something';
```

Removing the `src` portion of the @ alias does not solve the problem.