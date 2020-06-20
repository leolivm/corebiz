import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #000;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 5px;

    footer {
      button {
        font-size: 8px;
        height: 30px;
        width: 90px;
        padding: 0;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 600px) {
    thead th {
      padding: 0;
      font-size: 9px;
    }

    strong {
      margin: 0;
      margin-right: -25px;
      font-size: 9px;
    }

    span {
      margin-top: 4px;
      font-size: 10px;
    }

    img {
      height: 30px;
    }

    div {
      margin-left: -20px;
      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 30px;
      }

      button {
        margin-left: 0;
        padding-right: -20px;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }

  @media (max-width: 600px) {
    strong {
      font-size: 16px;
    }
  }
`;
