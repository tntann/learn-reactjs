import React from "react";
import styled, { css } from "styled-components";

/**
 * const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, section ,article, ...);
 * CSS-in-JS
 */

const StyledCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: calc(100% - 36px);
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10px;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvt = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300px;
  font-size: 16px;
  color: #666;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.color.blue};
`;

const CardAmount = styled.span`
  font-size: 18px;
  /* font-size: ${(props) => props.fonSize || "18px"}; */
  font-weight: bold;
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #20e3b2 1.38%,
        #2cccff 64.35%,
        #fc2872 119.91%
      );
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg src="./images/cake.png" alt="Shiba" />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvt src="./images/fish.png" alt="Shiba" />
            <UserName>@ztntan</UserName>
          </CardUser>
          <CardMeta>
            <img src="./icon-heart.svg" alt="256" />
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary}>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
