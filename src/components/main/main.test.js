import React from 'react';
import {Main} from './main.jsx';
import renderer from 'react-test-renderer';

it(`Main коректно рендарится после перезапуска`, () => {
  const tree = renderer
    .create(<Main sityName='Amsterdam'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
}
);

