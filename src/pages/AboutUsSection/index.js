import React from 'react'
import Video from './video.mp4'
import { AboutUsContainer, AboutUsBg as AboutUsBackground, VideoBg as VideoBackground } from './AboutUsElements';

const AboutUsSection = () => {
  return (
    <AboutUsContainer>
        <AboutUsBackground>
            <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
        </AboutUsBackground>
    </AboutUsContainer>
  );
};

export default AboutUsSection;