import React from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';

class PlacesSorting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOptions: `Popular`
    };
  }

  render() {
    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={this.handlerSortType}>
        {this.state.activeOptions}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        <li onClick={(evt) => this.handlerOptionChange(evt)} className="places__option places__option--active" tabIndex="0">Popular</li>
        <li onClick={(evt) => this.handlerOptionChange(evt)} className="places__option" tabIndex="0">Price: low to high</li>
        <li onClick={(evt) => this.handlerOptionChange(evt)} className="places__option" tabIndex="0">Price: high to low</li>
        <li onClick={(evt) => this.handlerOptionChange(evt)} className="places__option" tabIndex="0">Top rated first</li>
      </ul>
    </form>;
  }

  handlerSortType() {
    document.querySelector(`.places__options`).classList.toggle(`places__options--opened`);
  }

  handlerOptionChange(evt) {
    const value = evt.currentTarget.textContent;
    this.setState({activeOptions: value});
  }

}

export default PlacesSorting;
