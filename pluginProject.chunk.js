(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{169:function(n,e,t){"use strict";t.r(e),e.default='# Project\n\nUse `.project` to extend project operator.\n\n## getProjectRootPath\n\nGet project root path from `project.getProjectRootPath`:\n\n```typescript\nimport { pri } from "pri"\n\nexport default (instance: typeof pri) => {\n  const projectRootPath = instance.project.getProjectRootPath()\n}\n```\n\n## getProjectConfig\n\nGet project config by env: `local` or `prod`.\n\n```typescript\nimport { pri } from "pri"\n\nexport default (instance: typeof pri) => {\n  const projectConfig = instance.project.getProjectConfig("prod")\n}\n```\n\n## onAnalyseProject\n\nEvery time `pri` scan project files.\n\n**`./src/index.ts`**\n\n```typescript\nimport { pri } from "pri"\n\ninterface IAnalyseInfo {\n  myCustomPlugin: {\n    hasComponents: boolean\n  }\n}\n\nexport default (instance: typeof pri) => {\n  instance.project.onAnalyseProject((files, env, projectConfig) => {\n    return {\n      myCustomPlugin: {\n        hasComponents: files.some(file => {\n          const relativePath = path.relative(projectRootPath, path.join(file.dir, file.name))\n          return relativePath.startsWith("src/components")\n        })\n      }\n    } as IAnalyseInfo\n  })\n}\n```\n\n| Option        | Description                                                                                                          |\n| ------------- | -------------------------------------------------------------------------------------------------------------------- |\n| files         | All project\'s files.                                                                                                 |\n| env           | `"local"` when excute `pri dev`. <br/> `"prod"` when excute like `pri build` and `pri preview` other than `pri dev`. |\n| projectConfig | See [Config](../config).                                                                                             |\n\n### Return value\n\nThe return value from `onAnalyseProject` callback will merge into project analyse info, you can access it from `onCreateEntry`.\n\n## onCreateEntry\n\nEvery time `pri` create entry file. You can get analyse info from first params in first callback function.\n\n**`./src/index.ts`**\n\n```typescript\nimport { pri } from "pri"\n\nexport default (instance: typeof pri) => {\n  instance.project.onCreateEntry((analyseInfo: IAnalyseInfo, entry, env, projectConfig) => {\n    // Get analyseInfo from above.\n    const hasComponents = analyseInfo.myCustomPlugin.hasComponents\n\n    const componentsRelativePath = path.relative(".temp", "src/components")\n\n    if (hasComponents) {\n      // Expand importer code before header.\n      entry.pipeHeader(header => {\n        return `\n          ${header}\n          import components from "${componentsRelativePath}"\n        `\n      })\n    }\n  })\n}\n```\n\n### Entry\n\nYou can use methods like `entry.pipeHeader` and `entry.pipeBody` to extend entry code. Usage:\n\n```typescript\nentry.pipeBody(str => str)\n```\n\n### Entry structor\n\nHere are some buit-in pipe position:\n\n`pipeHeader` `pipeBody` `pipeEntryComponent` `pipeEntryClassBody` `pipeRenderRouter` `pipeRenderRoutes`\n\n```js\n// ----- pipeHeader before\nimport createBrowserHistory from "history/createBrowserHistory"\nimport { setCustomEnv, setEnvLocal, setEnvProd } from "pri/client"\nimport * as React from "react"\nimport * as ReactDOM from "react-dom"\nimport Loadable from "react-loadable"\nimport { Redirect, Route, Router, Switch } from "react-router-dom"\n// ----- pipeHeader after\n\n// ----- pipeBody before\nconst customHistory = createBrowserHistory({\n  basename: ".." // baseHref from projectConfig\n})\n// ----- pipeBody after\n\n// ----- pipeEntryComponent before\nclass Root extends React.PureComponent<any, any> {\n  // ----- pipeEntryClassBody before\n  // ----- pipeEntryClassBody after\n\n  public render() {\n    return (\n      // ----- pipeRenderRouter before\n      <Router>\n        // ----- pipeRenderRoutes before\n        // ----- pipeRenderRoutes after\n      </Router>\n      // ----- pipeRenderRouter after\n    )\n  }\n}\n// ----- pipeEntryComponent after\n```\n\n### Custom pipe\n\nYou can also get or set custom code position in plugins. Using `.pipe`:\n\n```typescript\nentry.pipeBody(body => {\n  return `\n    ${body}\n    some code after body.\n    ${entry.pipe.get("my-custom-position", "defaultValue")}\n    some other code.\n  `\n})\n```\n\nAnd in other plugins, you can pipe custom position:\n\n```typescript\nentry.pipe.set("my-custom-position", text => {\n  return `\n    ${text}\n    some code.\n  `\n})\n```\n\n**`pipe`**\n\n| Option | Params                                 | Description           |\n| ------ | -------------------------------------- | --------------------- |\n| get    | `name: string`, `defaultValue: string` | Get custom pipe code. |\n| set    | `pipe: (str: string) => string`        | Set custom pipe code. |\n\n## whiteFileRules\n\nPri uses a white list for project file management. You can use `whiteFileRules.add` to add project white file list.\n\n```typescript\nexport default (instance: typeof pri) => {\n  instance.project.whiteFileRules.add(file => {\n    const relativePath = path.relative(projectRootPath, file.dir)\n    return relativePath === "src/pages" && file.name === "404" && file.ext === ".tsx"\n  })\n})\n```\n\nIt mean that file or dir is validate, when return `true`.\n\n> Any project files that are not on the white list will report error.\n\n## lint\n\nYou can run lint anywhere by execute `project.lint()`:\n\n```typescript\nimport { pri } from "pri"\n\nexport default (instance: typeof pri) => {\n  instance.project.lint()\n}\n```\n\n## checkProjectFiles\n\nCheck project white file list.\n\n`pri dev` and `pri build` has built in `checkProjectFiles` function, you can call this function when add a new command.\n\n```typescript\nimport { pri } from "pri"\n\nexport default (instance: typeof pri) => {\n  const projectConfig = instance.project.getProjectConfig("prod")\n  await instance.project.checkProjectFiles(projectConfig)\n}\n```\n\n## ensureProjectFiles\n\nEnsure important files exist, like `.gitignore`, `.npmignore` and so on. You can call it in a custom command.\n\nThis method will called when excute `pri init`, `pri`, `pri build`.\n\n```typescript\nimport { pri } from "pri"\n\nexport default (instance: typeof pri) => {\n  const projectConfig = instance.project.getProjectConfig("prod")\n  await instance.project.ensureProjectFiles(projectConfig)\n}\n```\n\n## onEnsureProjectFiles\n\nHook when running `ensureProjectFiles`, you can add your custom files here:\n\n```typescript\nimport { pri } from "pri"\n\nexport default (instance: typeof pri) => {\n  instance.project.onEnsureProjectFiles(() => ({\n    fileRelativePath: "abc.json",\n    fileContentOrResolve: JSON.stringify({\n      bin: "npm start"\n    })\n  }))\n}\n```\n\nYou can also pass a function into `fileContentOrResolve` to access current file content:\n\n```typescript\nfileContentOrResolve: prevFileContent => prevFileContent + "\\n"\n```\n'}}]);