import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Mobile, Pc } from "styles/device/device";

const Wrapper = styled.div`
  width: 200px;
  min-width: 200px;
  height: 100%;
  min-height: 100vh;
  /* position: fixed; */
  /* left: 0; */
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Arial Narrow Bold", sans-serif;
  padding: 20px 16px;
`;

const TitleBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

const TitleLink = styled(Link)`
  font-size: 2rem;
  font-weight: 200;
  text-decoration: none;
  color: white;
`;

const MenuList = styled.ul`
  margin-top: 24px;
  width: 100%;
  list-style: none;
`;

const MenuTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  height: 32px;
  margin-left: 8px;
  cursor: pointer;
`;

const MenuLink = styled(Link)`
  color: white;
  font-weight: 300;
  &:hover {
    font-weight: 400;
  }
`;
const SideBar = () => {
  return (
    <>
      <Pc>
        <Wrapper>
          <TitleBox>
            <TitleLink to="/">Design Lab</TitleLink>
          </TitleBox>
          <MenuList>
            <MenuTitle>Examples</MenuTitle>
            <MenuItem style={{ marginTop: "12px" }}>
              <MenuLink to="1">3D Menu Animation</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="2">Dropping Liquid</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="3">Hot Coffee</MenuLink>
            </MenuItem>
          </MenuList>
        </Wrapper>
      </Pc>
      <Mobile>
        <Wrapper>
          <TitleBox>
            <TitleLink to-="/">Design Lab</TitleLink>
          </TitleBox>
          <MenuList>
            <MenuTitle>Examples</MenuTitle>
            <MenuItem style={{ marginTop: "12px" }}>
              <MenuLink to="1">3D Menu Animation</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="2">Dropping Liquid</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="3">Hot Coffee</MenuLink>
            </MenuItem>
          </MenuList>
        </Wrapper>
      </Mobile>
    </>
  );
};

export default SideBar;
