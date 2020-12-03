# react-spinkit

A collection of spinner indicators animated with SpinKit for React.

[![NPM](https://img.shields.io/npm/v/@alckor127/react-spinkit.svg)](https://www.npmjs.com/package/@alckor127/react-spinkit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @alckor127/react-spinkit
```

## Usage

```jsx
import React, { Component } from "react"

import SpinKit from "@alckor127/react-spinkit"
import "@alckor127/react-spinkit/dist/index.css"

class Example extends Component {
  render() {
    return <SpinKit />
  }
}
```

## API Reference

<a name="spinkit-component"></a>

### `<SpinKit />`

| Prop                   | Type   |                         Value                          | Required | Description                                                              |
| :--------------------- | :----- | :----------------------------------------------------: | :------: | :----------------------------------------------------------------------- |
| [`type`](#type-prop)   | String | Check all possible values [`here`](#type-prop-values). |          | Determine the style type of the spinner. Default value is `fade-circle`. |
| [`size`](#size-prop)   | String | Check all possible values [`here`](#size-prop-values)  |          | Determine the size of the spinner.                                       |
| [`color`](#color-prop) | String | Check all possible values [`here`](#color-prop-values) |          | Determine the size of spinner.                                           |

<a name="type-prop"></a>

#### Type

Determine the style type of the spinner. Default value is `fade-circle`.

```jsx
<SpinKit type='pulse' />
```

<a name="type-prop-values"></a>

##### All values

- circle
- double-bounce
- fade-circle
- flow
- fold-cube
- grid-cube
- grow
- pulse
- rotate-plane
- swing
- wave

<a name="type-prop"></a>

#### Size

Determine the size of the spinner.

```jsx
<SpinKit size='sm' />
```

<a name="size-prop-values"></a>

##### All values

- sm
- lg

<a name="color-prop"></a>

#### Color

Determine the color of the spinner.

```jsx
<SpinKit color='dark' />
```

<a name="color-prop-values"></a>

##### All values

- primary
- secondary
- success
- danger
- warning
- info
- light
- dark

## License

MIT © [alckor127](https://github.com/alckor127) 2020
