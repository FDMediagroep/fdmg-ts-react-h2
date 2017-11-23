import * as React from 'react';

export interface Props {
    className?: string;
    text: string;
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

    componentDidMount() {
        console.info('H2 mounted');
    }
        
    componentWillUnmount() {
        console.info('H2 will unmount');
    }

    componentWillReceiveProps(nextProps) {
        console.info('H2 next props', nextProps);
    }

    render() {
        return (
            <h2 className={this.props.className}>{this.props.text}</h2>
        );
    }
}
