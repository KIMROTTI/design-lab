import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  width: 260px;
  height: 260px;
  position: relative;
  /* background-color: yellow; */
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
  padding: 30px;
`;

const Scene = styled.div`
  width: 50px;
  height: 50px;
  perspective: 500px;
  margin-left: 8px;
  .i {
    color: white;
    font-size: 30px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    transition: bottom 0.3s;
  }
  &:hover .i {
    transform: translate(-50%, 0) rotateY(360deg);
    bottom: -10px;
    transition: 0.3s 0.2s;
  }

  &:hover .cube_shadow {
    width: 60px;
    height: 10px;
    filter: blur(15px);
    bottom: 0;
    left: 10px;
  }
  &:hover .cubeBox {
    transform: translateY(-40px) translateZ(-100px) rotateX(30deg)
      rotateY(30deg);
  }
`;

const CubeShadow = styled.span`
  display: block;
  position: absolute;
  width: 50px;
  height: 30px;
  filter: blur(10px);
  bottom: -10px;
  left: 0;
  background-color: #9f9f9f;
  transition: 0.3s ease-in;
`;

const CubeBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s ease-in;
  transform: translateY(0) translateZ(-100px) rotateX(-20deg) rotateY(20deg);

  .front {
    transform: rotateY(0) translateZ(25px);
  }
  .right {
    transform: rotateY(90deg) translateZ(25px);
  }
  .back {
    transform: rotateY(180deg) translateZ(25px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(25px);
  }
  .top {
    transform: rotateX(90deg) translateZ(25px);
  }
`;

const CubeFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #9c0c0c;

  opacity: 1;
  border: 1px solid black;

  .b {
    color: white;
    font-size: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s 0.2s;
  }
`;

const DesginBoxAnimation = () => {
  return (
    <Wrapper>
      <Container>
        <Scene>
          <CubeShadow className="cube_shadow"></CubeShadow>
          <FontAwesomeIcon className="i" icon={faHtml5} />
          <CubeBox className="cubeBox">
            <CubeFace className="front">
              <FontAwesomeIcon className="b" icon={faHtml5} />
            </CubeFace>
            <CubeFace className="back"></CubeFace>
            <CubeFace className="right"></CubeFace>
            <CubeFace className="left"></CubeFace>
            <CubeFace className="top"></CubeFace>
          </CubeBox>
        </Scene>
        <Scene>
          <CubeShadow className="cube_shadow"></CubeShadow>
          <FontAwesomeIcon className="i" icon={faCss3Alt} />
          <CubeBox className="cubeBox">
            <CubeFace className="front">
              <FontAwesomeIcon className="b" icon={faCss3Alt} />
            </CubeFace>
            <CubeFace className="back"></CubeFace>
            <CubeFace className="right"></CubeFace>
            <CubeFace className="left"></CubeFace>
            <CubeFace className="top"></CubeFace>
          </CubeBox>
        </Scene>
        <Scene>
          <CubeShadow className="cube_shadow"></CubeShadow>
          <FontAwesomeIcon className="i" icon={faJs} />
          <CubeBox className="cubeBox">
            <CubeFace className="front">
              <FontAwesomeIcon className="b" icon={faJs} />
            </CubeFace>
            <CubeFace className="back"></CubeFace>
            <CubeFace className="right"></CubeFace>
            <CubeFace className="left"></CubeFace>
            <CubeFace className="top"></CubeFace>
          </CubeBox>
        </Scene>
        <Scene>
          <CubeShadow className="cube_shadow"></CubeShadow>
          <FontAwesomeIcon className="i" icon={faReact} />
          <CubeBox className="cubeBox">
            <CubeFace className="front">
              <FontAwesomeIcon className="b" icon={faReact} />
            </CubeFace>
            <CubeFace className="back"></CubeFace>
            <CubeFace className="right"></CubeFace>
            <CubeFace className="left"></CubeFace>
            <CubeFace className="top"></CubeFace>
          </CubeBox>
        </Scene>
        <Scene>
          <CubeShadow className="cube_shadow"></CubeShadow>
          <FontAwesomeIcon className="i" icon={faPython} />
          <CubeBox className="cubeBox">
            <CubeFace className="front">
              <FontAwesomeIcon className="b" icon={faPython} />
            </CubeFace>
            <CubeFace className="back"></CubeFace>
            <CubeFace className="right"></CubeFace>
            <CubeFace className="left"></CubeFace>
            <CubeFace className="top"></CubeFace>
          </CubeBox>
        </Scene>

        <Scene>
          <CubeShadow className="cube_shadow"></CubeShadow>
          <FontAwesomeIcon className="i" icon={faDatabase} />
          <CubeBox className="cubeBox">
            <CubeFace className="front">
              <FontAwesomeIcon className="b" icon={faDatabase} />
            </CubeFace>
            <CubeFace className="back"></CubeFace>
            <CubeFace className="right"></CubeFace>
            <CubeFace className="left"></CubeFace>
            <CubeFace className="top"></CubeFace>
          </CubeBox>
        </Scene>
        <Scene>
          <CubeShadow className="cube_shadow"></CubeShadow>
          <FontAwesomeIcon className="i" icon={faSquareFacebook} />
          <CubeBox className="cubeBox">
            <CubeFace className="front">
              <FontAwesomeIcon className="b" icon={faSquareFacebook} />
            </CubeFace>
            <CubeFace className="back"></CubeFace>
            <CubeFace className="right"></CubeFace>
            <CubeFace className="left"></CubeFace>
            <CubeFace className="top"></CubeFace>
          </CubeBox>
        </Scene>
        <Scene>
          <CubeShadow className="cube_shadow"></CubeShadow>
          <FontAwesomeIcon className="i" icon={faInstagram} />
          <CubeBox className="cubeBox">
            <CubeFace className="front">
              <FontAwesomeIcon className="b" icon={faInstagram} />
            </CubeFace>
            <CubeFace className="back"></CubeFace>
            <CubeFace className="right"></CubeFace>
            <CubeFace className="left"></CubeFace>
            <CubeFace className="top"></CubeFace>
          </CubeBox>
        </Scene>
        <Scene>
          <CubeShadow className="cube_shadow"></CubeShadow>
          <FontAwesomeIcon className="i" icon={faTwitter} />
          <CubeBox className="cubeBox">
            <CubeFace className="front">
              <FontAwesomeIcon className="b" icon={faTwitter} />
            </CubeFace>
            <CubeFace className="back"></CubeFace>
            <CubeFace className="right"></CubeFace>
            <CubeFace className="left"></CubeFace>
            <CubeFace className="top"></CubeFace>
          </CubeBox>
        </Scene>
      </Container>
    </Wrapper>
  );
};

export default DesginBoxAnimation;
