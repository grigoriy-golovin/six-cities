import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";


class PlacesSorting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOptions: `Popular`
    };
    this.setSortingOption = this.props.setSortingOption;
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
    document.querySelector(`.places__option--active`).classList.remove(`places__option--active`);
    evt.currentTarget.classList.add(`places__option--active`);
    const value = evt.currentTarget.textContent;
    this.setSortingOption(value);
    this.setState({activeOptions: value});
    this.handlerSortType();
  }

}

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {

});

const mapDispatchToProps = (dispatch) => ({
  setSortingOption: (value) => dispatch(ActionCreator.setSortingOption(value)),
});

PlacesSorting.propTypes = {
  setSortingOption: PropTypes.func.isRequired,
};

export {PlacesSorting};
export default connect(mapStsteToProps, mapDispatchToProps)(PlacesSorting);
