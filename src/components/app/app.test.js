import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

it(`App коректно рендарится после перезапуска`, () => {
  const tree = renderer
    .create(<App places={[` `, ` `]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
}
);

