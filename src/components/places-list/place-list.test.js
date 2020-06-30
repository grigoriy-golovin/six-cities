import React from 'react';
import PlacesList from './places-list.jsx';
import renderer from 'react-test-renderer';

it(`App коректно рендарится после перезапуска`, () => {
  const tree = renderer.create(<PlacesList places={[` `, ` `]} />).toJSON();
  expect(tree).toMatchSnapshot();
}
);
