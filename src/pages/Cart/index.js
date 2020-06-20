import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import * as CartActions from "../../store/modules/cart/actions";
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from "react-icons/md";
import { Container, ProductTable, Total } from "./styles";
import { maskPrice } from "../../_util/format";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const data = cart.map((item) => ({
    ...item,
    subtotal: maskPrice((item.price * item.amount).toString()),
  }));
  const total = cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);

  function remove(product) {
    dispatch(CartActions.removeFromCart(product.productId));
  }

  function increment(product) {
    dispatch(CartActions.updateAmount(product.productId, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmount(product.productId, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTDE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr>
              <td>
                <img src={product.imageUrl} alt={product.productName} />
              </td>
              <td>
                <strong>{product.productName}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#000" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#000" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => remove(product)}>
                  <MdDelete size={20} color="#000" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{maskPrice(total.toString())}</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default connect((state) => ({
  cart: state.cart,
}))(Cart);
