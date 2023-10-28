import React from "react";
import { keyframes, styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: white;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  filter: url(#goo);
`;
const fall = keyframes`
 0% {top: -20%}
 20% {top: 0%}
 80% {top: 85%}
 100% {top: 100%}
`;
const Particle = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -20%;
  background-color: black;
  border-radius: 50%;
  animation: ${fall} 15s infinite;

  &:nth-of-type(2n) {
    width: 60px;
    height: 60px;
  }
  &:nth-of-type(3n) {
    width: 120px;
    height: 120px;
  }
  &:nth-of-type(1) {
    left: 30%;
    animation-delay: 1s;
  }
  &:nth-of-type(2) {
    left: 60%;
    animation-delay: 2s;
  }
  &:nth-of-type(3) {
    left: 25%;
    animation-delay: 3s;
  }
  &:nth-of-type(4) {
    left: 75%;
    animation-delay: 4s;
  }
  &:nth-of-type(5) {
    left: 35%;
    animation-delay: 5s;
  }
  &:nth-of-type(6) {
    left: 50%;
    animation-delay: 6s;
  }
  &:nth-of-type(7) {
    left: 65%;
    animation-delay: 7s;
  }
  &:nth-of-type(8) {
    left: 35%;
    animation-delay: 8s;
  }
  &:nth-of-type(9) {
    left: 55%;
    animation-delay: 9s;
  }
  &:nth-of-type(10) {
    left: 55%;
    animation-delay: 10s;
  }
  &:nth-of-type(11) {
    left: 35%;
    animation-delay: 11s;
  }
  &:nth-of-type(12) {
    left: 50%;
    animation-delay: 12s;
  }
  &:nth-of-type(13) {
    left: 65%;
    animation-delay: 13s;
  }
  &:nth-of-type(14) {
    left: 40%;
    animation-delay: 14s;
  }

  &:nth-of-type(15) {
    left: 60%;
    animation-delay: 15s;
  }
`;

const BorderBox = styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  height: 4%;
  &:nth-last-of-type(1) {
    top: 0;
    left: 0;
  }
  &:nth-last-of-type(2) {
    bottom: 0;
    left: 0;
  }
`;

const DroppingLiquid = () => {
  return (
    <Wrapper>
      <Container>
        <Particle className="particle"></Particle>
        <Particle className="particle"></Particle>
        <Particle className="particle"></Particle>{" "}
        <Particle className="particle"></Particle>
        <Particle className="particle"></Particle>
        <Particle className="particle"></Particle>{" "}
        <Particle className="particle"></Particle>
        <Particle className="particle"></Particle>
        <Particle className="particle"></Particle>{" "}
        <Particle className="particle"></Particle>
        <Particle className="particle"></Particle>
        <Particle className="particle"></Particle>{" "}
        <Particle className="particle"></Particle>
        <Particle className="particle"></Particle>
        <Particle className="particle"></Particle>
        <BorderBox className="border"></BorderBox>
        <BorderBox className="border"></BorderBox>
        <svg>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              <feColorMatrix
                in="name"
                mode="matrix"
                values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 30 -15
              "
              />
              <feBlend in="SourceGraphic" />
            </filter>
          </defs>
        </svg>
      </Container>
    </Wrapper>
  );
};

export default DroppingLiquid;
