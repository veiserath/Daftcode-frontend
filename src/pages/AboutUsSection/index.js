import React from 'react'
import Video from './video.mp4'
import { AboutUsContainer, AboutUsBg, VideoBg } from './AboutUsElements';

const AboutUsSection = () => {
  return (
    <AboutUsContainer>
        <AboutUsBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </AboutUsBg>
    </AboutUsContainer>
  );
};

export default AboutUsSection;