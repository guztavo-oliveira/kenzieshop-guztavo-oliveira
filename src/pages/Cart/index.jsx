import { Container } from "./styles";
import { useSelector } from "react-redux";
import CardCart from "../../components/CardCart";
import ButtonCart from "./styles";

const Cart = () => {
  const itens = JSON.parse(localStorage.getItem("@shop:cart")) || [];
  const qtd = useSelector((state) => state.cart);

  return (
    <Container>
      <div className="products">
        <div className="text">
          <h2>Meu Carrinho</h2>
        </div>

        {itens.length !== 0 ? (
          itens.map((e, i) => {
            return <CardCart item={e} key={i} />;
          })
        ) : (
          <div className="empty">
            <h3>Nenhum produto ainda no carrinho, vamos às compras!</h3>
          </div>
        )}
      </div>
      <aside className="chart">
        <h2>Resumo da compra</h2>
        <div className="information">
          <span>{qtd.length} Produtos</span>
          <span>
            <strong>Total: </strong>
            R$
            {itens
              .reduce((acc, curr) => acc + curr.price, 0)
              .toFixed(2)
              .replace(".", ",")}
          </span>
        </div>
        <ButtonCart>Finalizar compra</ButtonCart>
      </aside>
    </Container>
  );
};

export default Cart;
