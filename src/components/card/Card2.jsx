import React from "react";
import styled, { css } from "styled-components";

/**
 * const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, section ,article, ...);
 * CSS-in-JS
 */

const StyledCard = styled.div`
  position: relative;
  .cart-img {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }

  .cart-content {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: calc(100% - 36px);
    transform: translate(-50%, 50%);
    background-color: white;
    z-index: 10px;
    border-radius: 20px;
    padding: 20px;
  }

  .cart-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .cart-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .user-avt {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }

  .user-name {
    font-weight: 300px;
    font-size: 16px;
    color: #333;
  }

  .cart-meta {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  .cart-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-title {
    font-size: 18px;
    font-weight: bold;
    color: black;
  }

  .cart-amount {
    font-size: 18px;
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
  }
`;

const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary}>
      <div className="cart-img">
        <img src="./images/shiba.png" alt="Shiba" />
      </div>
      <div className="cart-content">
        <div className="cart-top">
          <div className="cart-user">
            <img className="user-avt" src="./images/avt1.png" alt="Shiba" />
            <span className="user-name">@zndrson</span>
          </div>
          <div className="cart-meta">
            <img src="./icon-heart.svg" alt="256" />
            <span>256</span>
          </div>
        </div>
        <div className="cart-footer">
          <h3 className="cart-title">Cosmic Perspective</h3>
          <span className="cart-amount">12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
