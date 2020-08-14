import React, {PureComponent} from "react";
import {Operation} from "../../reducer";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from './../header/header.jsx';


class SingIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginInput = React.createRef();
    this.passInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {login} = this.props;
    evt.preventDefault();
    login({
      email: this.loginInput.current.value,
      passworld: this.passInput.current.value,
    });
  }

  render() {
    return <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={(evt) => this.handleSubmit(evt)}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" ref={this.loginInput}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" ref={this.passInput}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>;
  }
}


SingIn.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {

});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => {
    dispatch(Operation.login(data));
  },
});

export {SingIn};
export default connect(mapStsteToProps, mapDispatchToProps)(SingIn);
