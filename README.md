[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-h2.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-h2)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-h2/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-h2?branch=master)

# fdmg-ts-react-h2
[ReactJS](https://reactjs.org/) H2 component. This component renders an H2 header.
You might think it silly to have this as a separate component. But when you use an H2-element multiple times in your
project then having that as a component might eventually save you some bytes.

## Installation
- Run `npm i --save-dev fdmg-ts-react-h2`

or

- Run `yarn add fdmg-ts-react-h2 --dev`

## Usage
### TypeScript
```
import * as React from 'react';
import H2 from 'fdmg-ts-react-h2';

export default class foo {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    render() {
        return (<H2 text={'title'} className={'css-class-name'} />);
    }
}
```
