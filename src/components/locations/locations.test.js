import React from 'react';
import {Locations} from './locations.jsx';
import renderer from 'react-test-renderer';

it(`Locations коректно рендарится после перезапуска`, () => {
  const tree = renderer
    .create(<Locations
      sityArr={[``, ``]}
      onChangeSity={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
}
);

