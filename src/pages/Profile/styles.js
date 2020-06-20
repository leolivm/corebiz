import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  @media (max-width: 600px) {
    max-width: 320px;
    margin: 50px 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.2);
      }
    }

    span {
      color: #d7182a;
      align-self: stretch;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.4);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #001910;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  > button {
    width: 100%;
    margin: 15px 0 0;
    height: 44px;
    background: rgba(0, 0, 0, 0.3);
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;
