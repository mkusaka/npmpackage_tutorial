# npmpackage_tutorial
[![Build Status](https://travis-ci.org/mkusaka/npmpackage_tutorial.svg?branch=master)](https://travis-ci.org/mkusaka/npmpackage_tutorial)

# install

```bash
npm install --save @mkusaka/npmpackage_tutorial
```

# useage

index.js
```js
import { IsNullOrEmpty } from "@mkusaka/npmpackage_tutorial";

console.log(IsNullOrEmpty(""));
console.log(IsNullOrEmpty(null));
console.log(IsNullOrEmpty([]));
```

```bash
node index.js
# => true
#    true
#    true
```

more usecase has impremented in [test case](./test/index.ts).

# publish memo
```bash
npm version patch
npm publish
```

cf. https://efcl.info/2015/04/08/npm-publish-pattern/

# refer
- [Build an npm package with TypeScript in 10 minutes by Nilay Vishwakarma](https://medium.com/@nilayvishwakarma/build-an-npm-package-with-typescript-by-nilay-vishwakarma-f303d7072f80)
