import React from 'react';
import PlaceCard from './place-card.jsx';
import renderer from 'react-test-renderer';

it(`PlaceCard коректно рендарится после перезапуска`, () => {
  const tree = renderer.create(<PlaceCard name=' ' />).toJSON();
  expect(tree).toMatchSnapshot();
}
);

