import React from "react";
import styled from "styled-components";

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Date = styled.span`
  margin-left: 25px;
  flex: 1;
`;

const AichOne = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Temp = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Head>
      <Date>SMARCH 32, 2018</Date>
      <AichOne>Lambda Times</AichOne>
      <Temp>98°</Temp>
    </Head>
  );
};

export default Header;
