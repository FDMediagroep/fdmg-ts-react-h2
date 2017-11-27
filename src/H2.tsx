import * as React from 'react';

export interface Props {
    className?: string;
    children?: JSX.Element[]|HTMLElement[]|string|number;
}

/**
 * H2 compononent renders a heading
 */
export default class H2 extends React.Component<Props, any> {
    public state: any;
    public props: Props;

    constructor(props: Props) {
        super(props);
        this.props = props;
        console.info('H2 component', props);
    }

    render() {
        return (
            <h2 className={this.props.className}>{this.props.children}</h2>
        );
    }
}
