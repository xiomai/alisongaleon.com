import React from 'react';

import { CalvinAndHobbesProvider } from './context';
import reducer, { initialState } from './reducer';
import fetchCHGoComics from './actions';
// import randomDate from '../utils';

const withCH = Component =>
  class WithCH extends React.Component {
    state = {
      ...initialState,
      dispatch: action => this.setState(state => reducer(state, action)),
    };

    fetchImgSrc = () => {
      const { dispatch } = this.state;
      // const now = new Date();
      // const start = new Date(1985, 11, 11);
      // const rDate = randomDate(start, now);
      // const formattedRandomDate = `${rDate.getUTCFullYear()}/${rDate.getUTCMonth()}/${rDate.getUTCDay()}`;
      // const url = `http://www.gocomics.com/calvinandhobbes/${formattedRandomDate}`;
      const url = `https://cors-anywhere.herokuapp.com/https://www.gocomics.com/random/calvinandhobbes`;

      fetchCHGoComics(dispatch, url);
    };

    render() {
      const { imgSrc, loading } = this.state;
      const value = {
        imgSrc,
        loading,
        fetchImgSrc: this.fetchImgSrc,
      };
      return (
        <CalvinAndHobbesProvider value={value}>
          <Component {...this.props} />
        </CalvinAndHobbesProvider>
      );
    }
  };

export default withCH;
