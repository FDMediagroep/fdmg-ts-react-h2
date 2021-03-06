/// <reference types="react" />
import * as React from 'react';
export interface Props {
    className?: string;
    children?: JSX.Element[] | HTMLElement[] | string | number;
}
/**
 * H2 compononent renders a heading
 */
export default class H2 extends React.Component<Props, any> {
    state: any;
    props: Props;
    constructor(props: Props);
    render(): JSX.Element;
}
