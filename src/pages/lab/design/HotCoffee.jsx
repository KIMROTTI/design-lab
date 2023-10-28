import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #405d72;
  align-items: center;
`;

const TemperatureBox = styled.div`
  width: 200px;
  height: auto;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: gray;
`;

const ThermometerHead = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  position: relative;
`;

const ThermometerTube = styled.div`
  width: 180px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0, -50%);
  background-color: white;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const HotCoffee = () => {
  return (
    <Wrapper>
      <Container>
        <TemperatureBox>
          <ThermometerHead>
            <ThermometerTube></ThermometerTube>
          </ThermometerHead>
        </TemperatureBox>
      </Container>
    </Wrapper>
  );
};

export default HotCoffee;
