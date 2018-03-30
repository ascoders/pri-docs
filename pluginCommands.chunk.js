(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{167:function(n,e,i){"use strict";i.r(e),e.default='# Commands\n\nUse `.commands` to extend the commander.\n\n## registerCommand\n\nRegister new command by using `registerCommand` method.\n\n**`./src/index.ts`**\n\n```typescript\nimport { pri } from "pri"\n\nexport default (instance: typeof pri) => {\n  // Add new commander: pri deploy\n  instance.commands.registerCommand({\n    name: "deploy",\n    description: "desc",\n    action: () => {}\n  })\n}\n```\n\nThen you can use `pri deploy`.\n\n| Option      | Description                                    |\n| ----------- | ---------------------------------------------- |\n| name        | Command name, `pri <name>`.                    |\n| description | Description for command, when excute `pri -h`. |\n| action      | Action for command, when excute `pri <name>.`  |\n\n## expandCommand\n\nExpand commander which already exist.\n\n**`./src/index.ts`**\n\n```typescript\nimport { pri } from "pri"\n\nexport default (instance: typeof pri) => {\n  // Run extra code between pri init\n  instance.commands.expandCommand({\n    name: "init",\n    beforeAction: (...args: any[]) => {}\n    afterAction: (...args: any[]) => {}\n  })\n}\n```\n\n| Option       | Description                       |\n| ------------ | --------------------------------- |\n| name         | Exist command name, `pri <name>`. |\n| beforeAction | Action before `pri <name>`.       |\n| afterAction  | Action after `pri <name>`.        |\n'}}]);