import styled, { css } from "styled-components";
import Slider from "infinite-react-carousel";
import { Form, Input } from "@rocketseat/unform";
import banner from "../../assets/banner.png";
import bannermedia from "../../assets/banner-media.png";

export const Container = styled.div`
  display: flex;
  margin-top: 15px;

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const Carousel = styled(Slider)`
  position: absolute;
  width: 1902px;
  left: 0;

  @media (max-width: 600px) {
    width: 320px;
  }
`;

export const Img = styled.img.attrs({
  src: `${banner}`,
  alt: `${banner}`,
})`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MediaImg = styled.img.attrs({
  src: `${bannermedia}`,
  alt: `${bannermedia}`,
})`
  @media (min-width: 601px) {
    display: none;
  }
`;

export const ShelfDiv = styled.div`
  position: absolute;
  top: 550px;

  h3 {
    border-bottom: 5px solid #c0c0c0;
    padding-bottom: 10px;
    width: 11%;
  }

  @media (max-width: 600px) {
    top: 355px;

    h3 {
      margin-left: 15px;
      width: 39%;
    }
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 90px;
  list-style: none;
  padding: 0 20px;
  margin-top: 10px;

  li {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    transition: background 0.2s;
    margin-top: 10px;

    &:hover {
      background: #e6e8ea;
    }

    img {
      align-self: center;
    }

    > div {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 10px 0;

      > span {
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        margin-top: 7px;
        color: #7a7a7a;
      }

      > strong {
        font-size: 18px;
        font-weight: bold;
        margin: 18px 0 0;
      }

      button {
        background: rgba(0, 0, 0, 0.9);
        color: #ffffff;
        border: 0;
        border-radius: 5px;
        overflow: hidden;
        width: 150px;
        height: 38px;
        margin-top: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }

        span {
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    list-style: none;

    li {
      img {
        width: 90px;
      }

      > div {
        padding: 0;

        p {
          font-size: 10px;
          font-weight: 300;
        }

        button {
          width: 125px;
          height: 38px;
        }
      }
    }
  }
`;

export const PriceDesc = styled.p`
  ${(props) =>
    props.hasDesc === true &&
    css`
      font-size: 11px;
      font-weight: normal;
      line-height: 15px;
      margin: 3px 0 0;
      color: #7a7a7a;
    `}
  ${(props) =>
    props.hasDesc === false &&
    css`
      visibility: hidden;

      @media (max-width: 600px) {
        margin-top: -4px;
      }
    `}
`;

export const Badge = styled.img`
  background: none;
  ${(props) =>
    props.hasSale === false &&
    css`
      position: relative;
      display: none;
    `}
  ${(props) =>
    props.hasSale === true &&
    css`
      position: absolute;
      margin-left: 70px;
      background: #f8475f;
      border-right: 75px solid transparent;
      border-bottom: 75px solid #ffffff;
    `}

    @media (max-width: 600px) {
    margin-left: 5px;
    border-right: 25px solid transparent;
    border-bottom: 25px solid #ffffff;
  }
`;

export const Off = styled.span`
  position: relative;
  ${(props) =>
    props.hasSale === false &&
    css`
      position: absolute;
      display: none;
    `}
  ${(props) =>
    props.hasSale === true &&
    css`
      position: absolute;
      margin-left: 185px;
      margin-top: 20px;
      font-size: 16px;
      font-weight: bold;
      line-height: 12px;
      color: #ffffff;
    `}

    @media (max-width: 600px) {
    margin-left: 109px;
    margin-top: 1.8px;
    font-size: 8px;
    font-weight: bold;
    line-height: 12px;
  }
`;

export const News = styled.div`
  ${(props) =>
    props.sent === false &&
    css`
      position: absolute;
      left: 0;
      width: 1900px;
      height: 145px;
      background: #f2f2f2;
      margin-top: 915px;
      align-items: center;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        color: #000;
        font-size: 22px;
        font-weight: bold;
        line-height: 22px;
      }

      @media (max-width: 600px) {
        width: 320px;
        height: 290px;
        margin-top: 780px;
        align-items: center;

        p {
          font-size: 15px;
          padding: 0 10px;
          font-weight: bold;
          line-height: 15px;
        }
      }
    `}

  ${(props) =>
    props.sent === true &&
    css`
      position: absolute;
      left: 0;
      width: 1900px;
      height: 145px;
      background: #f2f2f2;
      margin-top: 915px;
      align-items: center;
    `}
`;

export const NewsForm = styled(Form)`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-items: center;

  > span {
    display: flex;
    padding-top: 10px;
    align-items: center;
    color: #d7182a;
    font-size: 12px;
  }

  @media (max-width: 600px) {
    margin: 0 0 8px;
  }
`;

export const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-items: center;

  > span {
    display: flex;
    padding-top: 10px;
    align-items: center;
    color: #d7182a;
    font-size: 12px;
  }

  @media (max-width: 600px) {
    margin: 0 0 8px;
  }
`;

export const NewsInput = styled(Input)`
  background: #fff;
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  margin: 0 15px;
  width: 100%;
  max-width: 315px;

  @media (max-width: 600px) {
    &::placeholder {
      padding-left: 10px;
    }
  }
`;

export const NewsButton = styled.button`
  height: 44px;
  background: #000;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  padding: 0 25px;
  transition: 0.2s;

  &:hover {
    background: #111;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  left: 0;
  width: 1900px;
  height: 250px;
  background: #000;
  margin-top: 1060px;
  align-items: center;

  @media (max-width: 600px) {
    width: 320px;
    height: 390px;
    margin-top: 1070px;
    align-items: unset;
  }
`;

export const Encompass = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 350px;
  margin-top: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 16px;
    font-weight: bold;
    line-height: 12px;
    color: #ffffff;
    margin-bottom: 30px;
    border-bottom: 5px solid #fff;
    padding: 0 0 20px;
    width: 20%;
  }

  p {
    color: #ffffff;
    font-size: 13px;
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
    strong {
      font-size: 16px;
      width: 90%;
      margin: 4px 0 10px 10px;
    }
    p {
      width: 90%;
      margin-top: 7px;
    }
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 13px 0;
    width: 300px;
    height: 44px;
    background: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    font-size: 14px;
    color: #000;
    transition: opacity 0.2s;
    padding-left: 8px;

    p {
      padding: 0 80px 0 30px;
      text-align: right;
    }

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 600px) {
    margin-top: 15px;
    button {
      width: 280px;
      padding-left: 0;

      p {
        padding: 0 60px 0 30px;
      }
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    p {
      color: #ffffff;
      font-size: 13px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 17px;

    div {
      padding: 0 40px;
    }
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    align-items: center;
  }

  @media (max-width: 600px) {
    button {
      display: none;
    }
  }
`;

export const LoaderDiv = styled.div`
  display: flex;
  margin-top: 600px;
  margin-left: 48%;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 450px;
    margin-left: 42%;
  }
`;

export const LoaderDivNews = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

export const Wrapper = styled.div`
  ${(props) =>
    props.show === false &&
    css`
      display: none;
    `}
  ${(props) =>
    props.show === true &&
    css`
      position: absolute;
      left: 0;
      width: 1900px;
      height: 145px;
      background: #f2f2f2;
      margin-top: 915px;
      align-items: center;

      strong {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        color: #000;
        font-size: 18px;
        font-weight: bold;
        line-height: 22px;
      }

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 8px;
        color: #333;
        font-size: 14px;
      }

      > button {
        position: absolute;
        left: calc(50% - 87px);
        margin-top: 8px;
        height: 44px;
        width: 328;
        background: #000;
        font-weight: bold;
        border: 0;
        border-radius: 5px;
        font-size: 14px;
        color: #fff;
        padding: 0 25px;
        transition: 0.2s;

        &:hover {
          background: #111;
        }
      }

      @media (max-width: 600px) {
        width: 320px;
        height: 290px;
        margin-top: 780px;
        align-items: center;
        justify-content: center;

        strong {
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-top: 30px;
        }

        p {
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-top: 30px;
          font-size: 13px;
          padding: 0 10px 0 10px;
        }

        > button {
          left: calc(50% - 99px);
          margin-top: 45px;
        }
      }
    `}
`;
