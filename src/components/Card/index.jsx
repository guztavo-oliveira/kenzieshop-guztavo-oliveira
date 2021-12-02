import { Container, Divider } from "./styles";
import Button from "../Button";
import { addProductThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="boxImg">
        <img src={item.image} alt={item.title} />
      </div>
      <Divider />
      <h3 className="title">{item.title}</h3>

      <h3>R$ {item.price.toFixed(2).replace(".", ",")}</h3>
      <Button
        type="button"
        onClick={() => {
          dispatch(addProductThunk(item));
          toast.success("Produto adicionado ao carrinho!");
        }}
      >
        Adicionar ao carrinho!
      </Button>
    </Container>
  );
};

export default Card;
