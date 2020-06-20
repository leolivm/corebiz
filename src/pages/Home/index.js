import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Container,
  ShelfDiv,
  ProductList,
  Badge,
  Off,
  Carousel,
  News,
  NewsForm,
  NewsInput,
  NewsButton,
  Footer,
  Encompass,
  Left,
  Center,
  Right,
  IconsDiv,
  PriceDesc,
  NameDiv,
  EmailDiv,
  LoaderDiv,
  LoaderDivNews,
  Wrapper,
  Img,
  MediaImg,
} from "./styles";
import {
  MdMail,
  MdHeadsetMic,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import api from "../../services/api";
import * as CartActions from "../../store/modules/cart/actions";
import * as Yup from "yup";
import { maskPrice } from "../../_util/format";
import Star from "react-star-ratings";
import Loader from "react-loader-spinner";
import whitelogo from "../../assets/white-logo.png";
import vtex from "../../assets/vtex.svg";

const schema = Yup.object().shape({
  name: Yup.string().required("Preencha com seu nome completo."),
  email: Yup.string()
    .email("Preencha com um e-mail válido.")
    .required("O e-mail é obrigatório."),
});

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingNews, setLoadingNews] = useState(false);
  const [showWrapper, setShowWrapper] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/products");
      const data = response.data.map((item) => ({
        ...item,
        priceFormatted: maskPrice(item.price.toString()),
        installmentPrice: item.installments.map((price) =>
          maskPrice(price.value.toString())
        ),
      }));
      setLoadingProducts(false);
      setProducts(data);
    }

    loadProducts();
  }, []);

  async function handleSubmit() {
    if (name === "" || email === "") return;
    setLoadingNews(true);
    await api.post("/newsletter", {
      name,
      email,
    });
    setName("");
    setEmail("");
    setLoadingNews(false);
    setShowWrapper(true);
  }

  function handleAddProduct(product) {
    dispatch(CartActions.addToCart(product));
  }

  return (
    <Container>
      <Carousel dots autoplay arrows={false}>
        <div>
          <Img />
          <MediaImg />
        </div>
        <div>
          <Img />
          <MediaImg />
        </div>
        <div>
          <Img />
          <MediaImg />
        </div>
        <div>
          <Img />
          <MediaImg />
        </div>
      </Carousel>

      {loadingProducts ? (
        <LoaderDiv>
          <Loader type="Oval" color="#000" width={45} height={45} />
        </LoaderDiv>
      ) : (
        <ShelfDiv>
          <h3>Mais Vendidos</h3>
          <IconsDiv>
            <button type="button">
              <MdChevronLeft size={30} color="#000" />
            </button>
            <ProductList>
              {products.map((product) => (
                <li key={product.productId}>
                  <img src={product.imageUrl} alt="shoe" />
                  <Badge hasSale={product.listPrice ? true : false} />
                  <Off hasSale={product.listPrice ? true : false}>OFF</Off>
                  <div>
                    <p>{product.productName}</p>
                    <Star
                      rating={product.stars}
                      numberOfStars={5}
                      starRatedColor="#F8475F"
                      starDimension="15"
                      starSpacing="1px"
                    />
                    <strong>por {product.priceFormatted}</strong>
                    <PriceDesc
                      hasDesc={product.installments.length ? true : false}
                    >
                      ou em {product.installments.map((item) => item.quantity)}x
                      de {product.installmentPrice}
                    </PriceDesc>

                    <button
                      type="button"
                      onClick={() => handleAddProduct(product)}
                    >
                      <span>ADICIONAR AO CARRINHO</span>
                    </button>
                  </div>
                </li>
              ))}
            </ProductList>
            <button type="button">
              <MdChevronRight size={30} color="#000" />
            </button>
          </IconsDiv>
        </ShelfDiv>
      )}

      <News sent={loadingNews}>
        {loadingNews ? (
          <LoaderDivNews>
            <Loader type="Oval" color="#000" width={45} height={45} />
          </LoaderDivNews>
        ) : (
          <>
            <p>Participe de nossas news com promoções e novidades!</p>
            <NewsForm schema={schema} onSubmit={handleSubmit}>
              <NameDiv>
                <NewsInput
                  name="name"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </NameDiv>
              <EmailDiv>
                <NewsInput
                  name="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </EmailDiv>
              <NewsButton type="submit">Eu quero!</NewsButton>
            </NewsForm>
          </>
        )}
      </News>

      <Wrapper show={showWrapper}>
        <strong>Seu e-mail foi cadastrado com sucesso!</strong>
        <p>
          A partir de agora voce receberá as novidades e ofertas exclusivas.
        </p>
        <button type="button" onClick={() => setShowWrapper(false)}>
          Cadastrar novo e-mail
        </button>
      </Wrapper>

      <Footer>
        <Encompass>
          <Left>
            <strong>Localização</strong>
            <p>Rua Ifigênia Maria de Oliveira 3793</p>
            <p>Jd. Piratininga - 14403-583</p>
            <p>Franca SP, Brasil</p>
            <p>contato@clickqi.com.br</p>
            <p>+55 16 3713-6985</p>
          </Left>

          <Center>
            <button>
              <MdMail size={25} color="#000" />
              <p>ENTRE EM CONTATO</p>
            </button>
            <button>
              <MdHeadsetMic size={25} color="#000" />
              <p>FALE COM O NOSSO CONSULTOR ONLINE</p>
            </button>
          </Center>

          <Right>
            <div>
              <p>Created by</p>
              <img src={whitelogo} alt="whitelogo" width="71px" />
            </div>
            <div>
              <p>Powered by</p>
              <img src={vtex} alt="whitelogo" />
            </div>
          </Right>
        </Encompass>
      </Footer>
    </Container>
  );
}

export default connect()(Home);
