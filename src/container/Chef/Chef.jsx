import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Accoutability in service delivery.</p>
          <p className="p__opensans">Customer satisfaction has been and our main constant goal through out our journey since foundation. Since this can not be achieved alone, several measure has been put to place.   </p>

          <div className="app__chef-sign">
            <p>Antony Opano</p>
            <p className="p__opensans">Chef & Founder</p>
            <img src={images.sign} alt="Sign" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
