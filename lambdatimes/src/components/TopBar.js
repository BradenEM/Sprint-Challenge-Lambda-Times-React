import React from "react";
import styled, { css } from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerMid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const SpanLeft = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const SpanMid = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:hover {
    text-decoration: underline;
  }

  ${props =>
    props.last &&
    css`
      margin-right: 0;
    `};
`;

const SpanRight = styled.span`
  cursor: pointer;
`;

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Top>
      <Container>
        <ContainerLeft>
          <SpanLeft>TOPICS</SpanLeft>
          <SpanLeft>SEARCH</SpanLeft>
        </ContainerLeft>
        <ContainerMid>
          <SpanMid>GENERAL</SpanMid>
          <SpanMid>BROWNBAG</SpanMid>
          <SpanMid>RANDOM</SpanMid>
          <SpanMid>MUSIC</SpanMid>
          <SpanMid last>ANNOUNCEMENTS</SpanMid>
        </ContainerMid>
        <ContainerRight>
          <SpanRight>LOG IN</SpanRight>
        </ContainerRight>
      </Container>
    </Top>
  );
};

export default TopBar;
