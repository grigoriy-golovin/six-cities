import React from 'react';
import PlacesList from './places-list.jsx';
import renderer from 'react-test-renderer';

it(`PlacesList коректно рисуется после перезапуска`, () => {
  const tree = renderer.create(<PlacesList offers={[` `, ` `]} />).toJSON();
  expect(tree).toMatchSnapshot();
}
);
