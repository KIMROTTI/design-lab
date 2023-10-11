import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  font-family: Helvetica;
  font-weight: 500;
`;

const MenuButton = styled.div;

const Main = () => {
  return (
    <Wrapper>
      <Container>Hello</Container>
    </Wrapper>
  );
};

export default Main;
