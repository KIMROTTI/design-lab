import SideBar from "components/sidebar/SideBar";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import BoxAnimation from "./design/BoxAnimation";
import DroppingLiquid from "./design/DroppingLiquid";
import HotCoffee from "./design/HotCoffee";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const Lab = () => {
  return (
    <Wrapper>
      <SideBar />
      <Routes>
        <Route path="/1" element={<BoxAnimation />} />
        <Route path="/2" element={<DroppingLiquid />} />
        <Route path="/3" element={<HotCoffee />} />
      </Routes>
    </Wrapper>
  );
};

export default Lab;
