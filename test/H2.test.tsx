import * as React from 'react';
import * as renderer from 'react-test-renderer';
import H2 from '../src/H2';

console.info = () => {};

describe('H2', () => {
    test('renders correctly', () => {
        let component = renderer.create(
            <H2/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(
            <H2>test h2</H2>
        );
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(
            <H2><span>testing 123</span><div>testing 456</div></H2>
        );
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with CSS class', () => {
        const component = renderer.create(
            <H2 className={'title'}>test h2</H2>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
