# Pri &middot; [![npm version](https://img.shields.io/npm/v/pri.svg?style=flat-square)](https://www.npmjs.com/package/pri)

Pri is a toolkit for building `web applications` or `component` with React. **Helps you deal with everything, and you can focus on business logic.**

## Install

First, create an empty folder, and `npm i pri`:

```shell
mkdir test;
cd test;
npm i pri --save;
```

Then, run `npx pri init`, and choose type: `Project` or `Component`.

```shell
npx pri init

# choose type: Pri Plugin
? Choose project type (Use arrow keys)
❯ Project
  Component
  Pri Plugin
```

> No `npx`? Run `./node_modules/.bin/pri init`.

## Project

Now you choose `Project`, you will create a web application.

Then, run `npm start` to run this web application locally, and `npm run build` to create a bundle.

**Deploy:**

See deploy on the left menu. Or you can regist a command `npm run publish` by create a new pri-plugin.

## Component

Now you choose `Component`, you will create a npm packages for any usage. Eg: an UI component, a Nodejs utils or a simple typescript definition package.

Then, run `npm run docs` to debug your component, and `npm run build` to transfer your code from Typescript to ES3(not bundled).

**Deploy:**

Run `npm publish` to deploy your component.

## Built-in packages in 2.x version

- [react@16.7.0](https://www.npmjs.com/package/react)
- [react-dom@16.7.0](https://www.npmjs.com/package/react-dom)
- [react-router-dom@4.3.1](https://www.npmjs.com/package/react-router-dom)
- [antd@3.13.0](https://www.npmjs.com/package/antd)
- [lodash@4.17.11](https://www.npmjs.com/package/lodash)
- [react-loadable@5.5.0](https://www.npmjs.com/package/react-loadable)
- [webpack@4.25.1](https://www.npmjs.com/package/parcel-bundler)
- [babel@7.2.2](https://www.npmjs.com/package/babel-core)
- [typescript@3.2.2](https://github.com/Microsoft/TypeScript)
- [jest@23.6.0](https://github.com/facebook/jest)