import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  h1 {
    font-size: 25px;
  }
`;

export const InputContainer = styled.div`
  width: 400px;

  margin-top: 50px;

  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #e9e9e9;
  background: #fff;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 20px;

    a {
      text-decoration: none;
      color: #000;
      cursor: pointer;
    }
  }
`;
