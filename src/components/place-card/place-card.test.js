import React from 'react';
import PlaceCard from './place-card.jsx';
import renderer from 'react-test-renderer';

it(`PlaceCard коректно рендарится после перезапуска`, () => {
  const tree = renderer.create(<PlaceCard
    offer={{
      isPremium: true,
      id: 0,
      previewImage: ``,
      price: 0,
      rating: 0,
      description: ``,
      type: ``
    }}
    cardOverHandler={jest.fn()}
  />).toJSON();
  expect(tree).toMatchSnapshot();
}
);
