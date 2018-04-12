(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{118:function(n,i,e){"use strict";e.r(i),i.default='# Write a plugin\n\nIt\'s easy to expand the commander, analyse project files, and modifying the generated entry file by plugins.\n\n## Install\n\nFirst, create an empty folder:\n\n```bash\nmkdir test; cd test\nnpm init\nnpm install pri\n```\n\nThen, init the pri plugin:\n\n```bash\nnpx pri plugin-init\n```\n\nNo `npx`? Run `./node_modules/.bin/pri plugin-init`\n\n## Plug-in loading mode\n\nAll the pri-plugin should be named like `pri-plugin-*` or `@ali/pri-plugin-*`, for example:\n\n* `pri-plugin-test`\n* `pri-plugin-command-deploy`\n\nAnd when you installed `pri`, `pri-plugin-test` at the same time in your project , the plug-in will be automatically loaded when any `pri` scripts are executed.\n\n> You can also install pri-plugins in pri-plugin! This is a way to merge plug-in.\n\n## Debug plug-in\n\nChange your npm path from project `package.json`:\n\n```json\n{\n  "dependencies": {\n    "pri": "*",\n    "pri-plugin-test": "^1.0.0"\n  }\n}\n```\n\nTo\n\n```json\n{\n  "dependencies": {\n    "pri": "*",\n    "pri-plugin-test": "file:../pri-plugin-test"\n  }\n}\n```\n\nAnd run `npm start` in plugin root.\n'}}]);