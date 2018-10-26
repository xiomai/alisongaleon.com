import cheerio from 'cheerio';
import request from 'request-promise';
import * as actionType from '../actionTypes';

export default async function fetchCHGoComics(dispatch, url) {
  dispatch({
    type: actionType.FETCH_CH_GOMICS_PENDING,
  });

  const options = {
    uri: url,
    transform(body) {
      return cheerio.load(body);
    },
  };

  try {
    const $ = await request(options);
    const imgSrc = await $('.comic__image > a > picture > img').attr('src');

    dispatch({
      type: actionType.FETCH_CH_GOMICS_FULFILLED,
      payload: imgSrc,
    });
  } catch (error) {
    dispatch({
      type: actionType.FETCH_CH_GOMICS_REJECTED,
    });
  }
}
