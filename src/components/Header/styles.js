import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    div {
      > img {
        height: 25px;
      }
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  > div {
    display: flex;
    align-items: center;
    text-align: right;
    margin-right: 10px;
  }

  span {
    display: flex;
    margin-left: 5px;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
    width: 20px;
    height: 20px;
    color: #ffffff;
    background: #f8475f;
  }

  @media (max-width: 600px) {
    position: absolute;
    right: 0;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;

  input {
    text-align: center;
    width: 470px;
    background: none;
    border: 0;
    padding: 8px;
    border-bottom: 1px solid #000;
    transition: 0.6s;
    &:focus {
      width: 490px;
    }
  }

  button {
    background: transparent;
    border: none;
    margin: 10px auto auto -23px;
  }

  @media (max-width: 600px) {
    input {
      margin-top: 20px;
      width: 285px;
      background: none;
      border: 0;
      padding: 2px;
      border-bottom: 1px solid #000;
      transition: 0.6s;
      &:focus {
        width: 300px;
      }
    }
  }
`;

export const AccDiv = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  p {
    color: #7a7a7a;
    margin-left: 5px;
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 600px) {
    position: absolute;
    left: 0;
    margin: 5px -15px 0 15px;

    p {
      display: none;
    }
  }
`;
