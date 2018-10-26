import React, { PureComponent, Fragment } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { CalvinAndHobbesConsumer } from '../../containers/CalvinAndHobbes/context';
import withCH from '../../containers/CalvinAndHobbes/withCH';
import chImg from './calvin-and-hobbes.png';

const CalvinAndHobbesUrl = () => (
  <CalvinAndHobbesConsumer>
    {({ fetchImgSrc, imgSrc, loading }) => (
      <CalvinAndHobbesModal fetchImgSrc={fetchImgSrc} imgSrc={imgSrc} loading={loading} />
    )}
  </CalvinAndHobbesConsumer>
);

const imgStyle = {
  modalImg: {
    maxWidth: '100%',
  },
  chImgStyle: {
    maxWidth: '9rem',
  },
};

const ImageComponent = ({ imgSrc, fetchRandom }) => (
  <Fragment>
    <img src={imgSrc} alt="Calvin and Hobbes" style={imgStyle.modalImg} />
    {/* eslint-disable */}
    <a href="#" onClick={fetchRandom}>
      <i className="fa fa-refresh">&nbsp;</i>
    </a>
    {/* eslint-enable */}
  </Fragment>
);

class CalvinAndHobbesModal extends PureComponent {
  swalModal = withReactContent(Swal);

  launchModal = (event = null, imagesrcProp) => {
    if (event) event.preventDefault();
    const src = event ? event.target.dataset.imagesrc : imagesrcProp;

    this.swalModal.fire({
      html: <ImageComponent imgSrc={src} fetchRandom={this.reloadModal} />,
      width: '50rem',
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

  fetchRandom = () => {
    const { fetchImgSrc } = this.props;

    fetchImgSrc();
  };

  reloadModal = () => {
    this.fetchRandom();
    const { imgSrc } = this.props;

    this.swalModal.clickCancel();
    this.launchModal(null, imgSrc);
  };

  componentDidMount() {
    this.fetchRandom();
  }

  render() {
    const { imgSrc, loading } = this.props;
    const canLoadImg = !!imgSrc && !loading;
    const tagContent = canLoadImg ? (
      <img src={chImg} data-imagesrc={imgSrc} alt="Calvin and Hobbes" style={imgStyle.chImgStyle} />
    ) : (
      'Calvin and Hobbes'
    );

    return (
      <a
        href="https://www.gocomics.com/random/calvinandhobbes/"
        onClick={event => this.launchModal(event)}
        data-imagesrc={imgSrc}
      >
        {tagContent}
      </a>
    );
  }
}

export default withCH(CalvinAndHobbesUrl);
