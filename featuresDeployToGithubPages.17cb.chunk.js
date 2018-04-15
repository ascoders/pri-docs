(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{120:function(n,e,o){"use strict";o.r(e),e.default='# Deploy to github pages\n\nSet up `publicPath`, `baseHref` in the **Custom config**.\n\n```typescript\n// src/config/config.default.ts\nimport { ProjectConfig } from "pri/client"\n\nexport default {\n  publicPath: "/<your-repo-name>",\n  baseHref: "/<your-repo-name>"\n} as ProjectConfig\n```\n\nThen, execute `npm i gh-pages --save-dev`, and add npm scripts:\n\n```json\n"deploy": "pri build && gh-pages -d dist"\n```\n\nFinally, execute `npm run deploy`!\n\n> This is because js files will be served from `/<your-repo-name>` and the root path changed to `/<your-repo-name>` on github-pages.\n'}}]);