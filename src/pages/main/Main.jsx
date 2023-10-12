import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* min-height: 100vh; */
  background-color: black;
`;

const Container = styled.div`
  /* font-family: Helvetica; */
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Impact, "Arial Narrow Bold", sans-serif;
`;

const Title = styled.h1`
  font-size: 56px;
  margin: 0;
  margin-top: 24px;
  color: white;
`;

const MenuBox = styled.div`
  width: 200px;
  position: relative;
  margin: 50px auto 0 auto;
`;

const MenuLink = styled(Link)`
  position: relative;
  text-decoration: noen;
  color: white;
  &:hover p {
    transform: translate(-50%, -50%) rotate(-27deg);
    font-size: 0;
    transition: 0.2s;
    opacity: 0;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: white;
    /* background-color: black; */
    /* background: linear-gradient(
      89.8deg,
      rgb(39, 115, 255) 4.3%,
      rgb(62, 211, 232) 101.4%
    ); */
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(0 25%, 50% 0, 50% 100%, 0 75%);
    transition: clip-path 0.2s 0.5s, width, 0.2s 0.2s, left, 0.2s 0.2s;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: white;
    /* background-color: black; */
    /* background: linear-gradient(
      89.8deg,
      rgb(39, 115, 255) 4.3%,
      rgb(62, 211, 232) 101.4%
    ); */
    position: absolute;
    top: 0;
    left: -1px;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%);

    transition: clip-path 0.2s 0.5s, width, 0.2s 0.2s, left, 0.2s 0.2s;
  }
  &:nth-of-type(2) {
    top: -40px;
    left: 100px;
  }
  &:nth-of-type(3) {
    top: -80px;
    /* left: 40px; */
  }
  &:nth-of-type(4) {
    top: -120px;
    left: 100px;
  }
  &:nth-child(odd):hover:before {
    width: 0;
    left: 100px;
    transition: clip-path 0.2s, width, 0.2s 0.2s, left, 0.2s 0.2s;
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  }
  &:nth-child(even):hover:after {
    width: 0;
    left: 99px;
    transition: clip-path 0.2s, width, 0.2s 0.2s, left, 0.2s 0.2s;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  }
  &:hover span {
    width: auto;
    transition: 0.5s 0.2s;
    transform: rotateY(0);
  }
  &:nth-child(odd) span {
    right: 100px;
    left: auto;
    transform-origin: right;
  }
`;

const MenuButton = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  /* border: 1px solid black; */
`;

const MenuText = styled.span`
  font-size: 252px;
  position: absolute;
  left: 100px;
  height: 100%;
  display: block;
  line-height: 200px;
  transform: rotateY(90deg);
  transform-origin: left;
  transition: 0.5s;
  overflow: hidden;
`;

const MenuSubText = styled.p`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  color: black;
  z-index: 10;
  font-size: 40px;
  transition: 0.3s cubic-bezier(0, 2.17, 0.83, 1.36) 0.3s;
  /* transition: 0.3s; */
`;
const Main = () => {
  return (
    <Wrapper>
      <Container>
        <MenuBox>
          <MenuLink to="/">
            <MenuButton>
              <MenuText>HOME</MenuText>
              <MenuSubText>HOME</MenuSubText>
            </MenuButton>
          </MenuLink>
          <MenuLink to="/lab">
            <MenuButton>
              <MenuText>LAB</MenuText>
              <MenuSubText>LAB</MenuSubText>
            </MenuButton>
          </MenuLink>
          <MenuLink to="/contact">
            <MenuButton>
              <MenuText>CONTACT</MenuText>
              <MenuSubText>CONTACT</MenuSubText>
            </MenuButton>
          </MenuLink>

          <MenuLink to="/about">
            <MenuButton>
              <MenuText>ABOUT</MenuText>
              <MenuSubText>ABOUT</MenuSubText>
            </MenuButton>
          </MenuLink>
        </MenuBox>
      </Container>
    </Wrapper>
  );
};

export default Main;
