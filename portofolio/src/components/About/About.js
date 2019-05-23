import React, { Component } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import profileImg from "../assets/profile.jpg";

class About extends Component {
  state = {
    modal: false
  };

  render() {
    return (
      <Element name="About">
        <AboutWrapper>
          <ContentWrapper>
            <h3>About Me</h3>
            <Description>
              <ProfileImg src={profileImg} alt="profile" />
              <TextContainer>
                Enthusiast programmer, passionate about clean and organized
                code. I aim to know and work with the newest fullstack web
                development technologies.
                <button>RESUME HERE</button>
              </TextContainer>
            </Description>
            <p>What I build</p>
          </ContentWrapper>
        </AboutWrapper>
      </Element>
    );
  }
}

export default About;

const AboutWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Signika&display=swap");
  font-family: "Signika", sans-serif;
  background: white;
  padding: 100px 50px;

  h3 {
    font-size: 30px;
    margin: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`;

const TextContainer = styled.p`
  max-width: 55%;
  font-size: 20px;
`;
