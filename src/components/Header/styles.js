import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  border-radius: 5px;
  margin: 10px auto 0 auto;
  padding: 0 20px;

  a {
    text-decoration: none;
    color: #333;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px; //250
  height: 100%;

  @media (min-width: 500px) {
    width: 250px; //250
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .cart {
    display: flex;
    align-items: baseline;
    position: relative;
    margin-right: 20px;

    svg {
      display: flex;
      font-size: 24px;
      margin-right: 5px;
    }
    div {
      background: #403caa;
      border-radius: 50%;
      position: absolute;
      width: 20px;
      height: 20px;
      right: 0;
      bottom: 10px;
    }

    span {
      position: absolute;
      color: red;
      color: #fff;
      bottom: 0px;
      right: 5px;
    }
  }

  .login {
    display: flex;
    svg {
      font-size: 24px;
      margin-right: 5px;
    }
  }
`;
