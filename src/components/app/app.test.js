import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

it(`App коректно рисуется после перезапуска`, () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
}
);

