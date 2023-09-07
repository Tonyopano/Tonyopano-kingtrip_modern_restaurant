import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
            <h1 className="headtext__cormorant">About Us</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
              <p className="p__opensans">Kingtrip restaurant is a 3 star hotel from Kenya located in Nairobi CBD along Thika road highway, This restaurant offer variety of high standard meals of several different cultures which include spanish, French  .</p>
              <button type="button" className="custom__button">Know More</button>
          </div>

          <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt="about_knife" />
          </div>

          <div className="app__aboutus-content_history">
            <h1 className="headtext__cormorant">Our History</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
              <p className="p__opensans">Kingtrip restaurant was founded on early January 15/07/2023 with main purpose of serving customers high diversity of local and foreign cultures meals. This restaurant has been able to thrive well with high turn of customers.</p>
              <button type="button" className="custom__button">Know More</button>
          </div>
    </div>
  </div>
);

export default AboutUs;
