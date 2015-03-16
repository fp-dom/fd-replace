# fd-replace

[![Build Status](https://travis-ci.org/fp-dom/fd-replace.svg)](https://travis-ci.org/fp-dom/fd-replace) [![npm version](https://badge.fury.io/js/fd-replace.svg)](http://badge.fury.io/js/fd-replace)
> replace DOM element in a functional way.


## Installation

`npm install fd-replace --save`

## Usage

```js
import elem from 'fd-elem';
import append from 'fd-append';
import replace from 'replace';

let appendtoBody = append(document.body),
h1 = elem('h1','meow'),
h2 = elem('h2', 'bow');

appendtoBody(h1);
  
replace(document.body,h2,h1);

assert.equal(document.body.lastChild.textContent, 'bow'); // True.
```

## API

```
append :: parent -> oldNode -> newNode
```

A curried function that takes in:

* parent   -> Parent element in which the DOM must be replaced.

* oldNode  -> DOM element that is to be replaced.

* newNode  -> New DOM element.



