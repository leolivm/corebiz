import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Container, ImgDiv, Cart, SearchDiv, AccDiv } from "./styles";
import { MdSearch, MdPersonOutline } from "react-icons/md";
import logo from "../../assets/logo.svg";
import dot from "../../assets/dot.svg";

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <ImgDiv>
          <div>
            <img src={logo} alt="Corebiz" />
          </div>
          <img src={dot} alt="Corebiz" />
        </ImgDiv>
      </Link>

      <SearchDiv>
        <input name="search" placeholder="O que está procurando?" />
        <button type="submit">
          <MdSearch color="#000" size={25} />
        </button>
      </SearchDiv>

      <AccDiv to="/profile">
        <MdPersonOutline color="#000" size={25} />
        <p>Minha Conta</p>
      </AccDiv>

      <Cart to="/cart">
        <div>
          <MdShoppingCart size={30} color="#000" />
          <span>{cartSize}</span>
        </div>
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
