import * as React from 'react';
import * as renderer from 'react-test-renderer';
import H2 from '../src/H2';

console.info = function() {};

test('H2 renders correctly', () => {
    const component = renderer.create(
        <H2 text={'test h2'}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('H2 renders correctly with CSS class', () => {
    const component = renderer.create(
        <H2 text={'test h2'} className={'title'}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});