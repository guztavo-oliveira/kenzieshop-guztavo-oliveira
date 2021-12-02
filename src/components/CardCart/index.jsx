import { Container, Divider } from "./styles";
import { FaTrash } from "react-icons/fa";
import { remProductThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";

const CardCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="product">
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
      </div>
      <Divider />

      <div className="price">
        <button onClick={() => dispatch(remProductThunk(item.id))}>
          <FaTrash />
        </button>
        <p>R$ {item.price.toFixed(2).replace(".", ",")}</p>
      </div>
    </Container>
  );
};

export default CardCart;
