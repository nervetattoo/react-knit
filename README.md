# react-knit

> Join arrays of data like a pro in [React](https://reactjs.org)


## Install

```
$ npm install react-knit
```

## Usage

```js
import React from 'react';
import Knit, {
  withSeparator,
  withOxfordComma,
  withTag,
} from 'react-knit';

const App = props => (
  <React.Fragment>
    <Knit items={['Joe', 'Jane', 'John']} /> // Joe, Jane, John
    <Knit wrap="p" items={['Joe', 'Jane', 'John']} /> // <p>Joe, Jane, John</p>
    <Knit wrap="p" items={['Joe', 'Jane', 'John']} render={withOxfordComma()} /> // <p>Joe, Jane, and John</p>
    <Knit wrap="p" items={['Joe', 'Jane', 'John']} render={withOxfordComma('og')} /> // <p>Joe, Jane, og John</p>
    <Knit items={['Joe', 'Jane', 'John']} render={withTag('span')} /> // <span>Joe<span><span>Jane</span><span><span>John</span>
    <Knit items={['Joe']} render={withTag('span', {className:'user'})} /> // <span class="user">Joe<span>
  </React.Fragment>
);
```


## Props

### items
Type: `array`

Array of data to process. Can be strings or React elements, or anything.

### render
Type: `func`

A render function. There are some embedded render functions that should cover most use cases:

#### withTag(tagName, attributes)
#### withSeparator(separator)
#### withOxfordComma(word)

#### wrap
Type: `string` `element`

Wrap the output in a tag/component

## License

MIT © [Raymond Julin](http://raymondjulin.com)

