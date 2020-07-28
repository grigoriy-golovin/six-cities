import React from 'react';
import {FavoriteCard} from './favorite-card.jsx';
import renderer from 'react-test-renderer';

it(`FavoriteCard коректно рендарится после перезапуска`, () => {
  const tree = renderer.create(<FavoriteCard
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
