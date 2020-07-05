import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`клик по заголовку сработал`, () => {
  const cardOverHandler = jest.fn();
  const placeCard = shallow(<PlaceCard
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
  />);

  const heading = placeCard.find(`.place-card`);
  heading.simulate(`click`);
  expect(cardOverHandler).toHaveBeenCalledTimes(1);
});


