import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  border-radius: 5px;
  background: #fff;
  margin: 10px 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e9e9e9;
  padding: 10px;

  .product {
    display: flex;

    img {
      width: 70px;
      height: 70px;
      object-fit: contain;
      margin: 0 10px;
    }

    p {
      font-size: 12px;
      width: 90%;
      margin-top: 10px;
    }
  }

  .price {
    display: flex;
    justify-content: space-between;

    p {
      color: #333;
    }

    svg {
      margin-left: 20px;
      color: #403caa;
      cursor: pointer;
    }

    button {
      border: none;
      background: transparent;
      height: 0px;
      width: 0px;
    }
  }
`;

export const Divider = styled.div`
  background: #333;
  height: 1px;
  width: 100%;
  opacity: 0.2;
  margin: 10px 0;
`;
