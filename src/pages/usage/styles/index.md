# Styles

We use [css-modules](https://github.com/css-modules/css-modules) to write styles.

```
.
├── src
│   └── pages
│         ├── index.tsx
│         └── index.css         # Style file
└── priconfig.json
```

> If you use `css-in-js` such as [styled-components](https://github.com/styled-components/styled-components), you can skip this introduction.

## sass

```
.
├── src
│   └── pages
│         ├── index.tsx
│         └── index.scss         # Scss file
└── priconfig.json
```

To use sass, you should install `node-sass` `sass-loader`:

```shell
npm i node-sass sass-loader --save
```

## less

```
.
├── src
│   └── pages
│         ├── index.tsx
│         └── index.less         # Less file
└── priconfig.json
```

To use less, you should install `less-loader`:

```shell
npm i less-loader --save
```

## css

Already support.

## Usage

You can import `css` files into JSX file.

```css
.button {
  color: red;
}
```

```tsx
import * as React from 'react';
import './index.css';

export default () => <button className="button" />;
```

## Css Modules Usage

If set `xx.scss` to `xx.module.scss`, will enable [CSS Modules](https://github.com/css-modules/css-modules).

For example, we have 3 files named `src/index.tsx`、`src/input.module.css`、`src/button.module.scss`, the two style files:

**src/input.module.css:**

```css
input {
  border: 1px solid #ccc;
  font-size: 14px;
}
```

**src/button.module.scss:**

```scss
button {
  color: blue;
  &:hover {
    color: red;
  }
}
```

Here we use it in **src/index.tsx:**

```tsx
import * as React from 'react';
import inputStyles from './input.module.css';
import buttonStyles from './button.module.scss';

export default () => (
  <div>
    <div className={inputStyles.input}>input</div>
    <div className={buttonStyles.button}>button</div>
  </div>
);
```

For project type, just run `npm start`, for component type, just run `npm run docs`, it's as simple as that.

## Compile

Css is compiled by `css-module` rules:

**Any css file:**

```scss
.container {
  color: red;
}
```

Will compile to:

```css
.some-path-style-container-22VSk {
  color: red;
}
```

**Any ts file:**

```tsx
import styles from './some-path/style.module.scss'

export () => <div className={styles.container} />
```

Will compile to:

```tsx
import styles from './some-path/style.module.scss'

export () => <div className="some-path-style-container-22VSk" />
```

Don't worry, `css-modules` won't take effect in `node_modules`, so the following css will be output directly without processing:

```tsx
import 'antd/dist/antd.css';
```

## Css extract

If you set `cssExtract: true` in config, you will get a extra css file.

If `cssExtract: false`, all css will auto imported by import js.

> You can set `outFileName` and `outCssFileName` to rename out css name.

## Deploy component

You have two way to create usage for component style.

Here is your component `my-component` code example:

```tsx
import * as React from 'react';
import inputStyles from './input.module.css';
import buttonStyles from './button.module.scss';

export default () => (
  <div>
    <div className={inputStyles.input}>input</div>
    <div className={buttonStyles.button}>button</div>
  </div>
);
```

If you set `cssExtract: false` (default), we can use it just by import entry file:

```tsx
import MyComponent from 'my-component' // All css will be injected dynamically.

ReactDOM.render(<MyComponent>, dom)
```

If you set `cssExtract: true`, all CSS files will be picked to `my-component/dist/index.css`:

```tsx
import MyComponent from 'my-component'
import 'my-component/dist/index.css' // Import static css file.

ReactDOM.render(<MyComponent>, dom)
```
