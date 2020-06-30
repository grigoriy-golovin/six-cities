import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`клик по заголовку сработал`, () => {
  const clickHandler = jest.fn();
  const placeCard = shallow(<PlaceCard
    name=' '
    onHeadingClick={clickHandler}
  />);

  const heading = placeCard.find(`.place-card__name`);
  heading.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});


