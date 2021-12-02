import styled from "styled-components";
import Button from "../../components/Button";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #e9e9e9;
  padding: 10px;

  @media (min-width: 930px) {
    background: #fff;
    flex-direction: row;
    width: 80%;
  }

  .products {
    width: 100%;
    padding: 10px;

    .empty {
      font-size: 18px;
      margin-top: 20px;
    }
  }

  .text {
    display: flex;
    justify-content: space-between;
    h2 {
      margin: 10px 20px;
    }
  }

  .chart {
    height: 300px;
    border: 1px solid #e9e9e9;
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    max-width: 500px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 10px;

    h2 {
      margin: 10px 20px;
      text-align: center;
    }

    .information {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;

      span {
        font-size: 18px;
      }
    }

    @media (min-width: 930px) {
      background: #f5f5f5;
      width: 60%;
    }
  }
`;

const ButtonCart = styled(Button)`
  width: 100%;
`;

export default ButtonCart;
