(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{130:function(n,t,o){"use strict";o.r(t),t.default='# pri-plugin-dob &middot; [![npm version](https://img.shields.io/npm/v/pri-plugin-dob.svg?style=flat-square)](https://www.npmjs.com/package/pri-plugin-dob)\n\n[dob](https://github.com/dobjs/dob) is a tool for monitoring object changes, and [dob-react](https://github.com/dobjs/dob-react) can help you manage stores in react.\n\nWe provide a pri-plugin for [dob](https://github.com/dobjs/dob)!\n\n## Usage\n\n```bash\nnpm i pri-plugin-dob\n```\n\n## Features\n\n* Extend webui for store operates.\n* Allow files in path `src/stores/**`, and automatic binding stores into entry.\n\nLet\'s try it! For example, create a store named `application`:\n\n**src/stores/application.tsx**\n\n```typescript\nimport { Action, inject, observable } from "dob"\n\n@observable\nexport class ApplicationStore {\n  public testValue = 1\n}\n\nexport class ApplicationAction {\n  @inject(ApplicationStore) public applicationStore: ApplicationStore\n\n  @Action\n  public test() {\n    this.applicationStore.testValue++\n  }\n}\n```\n\n`pri-plugin-dob` will automatic create `src/utils/helper.tsx` for ts defintion, then you can use it like this:\n\n**src/pages/index.tsx**\n\n```typescript\nimport * as React from "react"\nimport { stores } from "../utils/helper"\n\nexport default class View extends React.PureComponent<typeof stores, any> {\n  render() {\n    // this.props.ApplicationStore.testValue\n    // this.props.ApplicationAction.test()\n  }\n}\n```\n\n> For more skills about using dob in pri, please see [dob docs](<[dob](https://github.com/dobjs/dob)>).\n'}}]);