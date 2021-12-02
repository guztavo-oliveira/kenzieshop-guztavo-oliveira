import styled from "styled-components";

const border = 5;

export const Container = styled.div`
  width: 270px;
  height: 600px;
  background: #fff;
  border-radius: ${border}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;

  h3 {
    color: #333;
  }

  .boxImg {
    width: 300px;
    height: 220px;
    margin: 10px 0;

    img {
      border-radius: ${border}px;
      max-width: 400px;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: all ease 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .title {
    margin-bottom: 10px;
    min-height: 110px;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Divider = styled.div`
  width: 95%;
  height: 1px;
  background: #333;
  margin: 30px 0;
  opacity: 0.2;
`;
