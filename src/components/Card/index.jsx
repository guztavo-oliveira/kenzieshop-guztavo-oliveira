import { Container, Divider } from "./styles";
import Button from "../Button";
import { addProductThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  console.log(products);

  const handleAddProducts = (item) => {
    if (!products.find((e) => e.id === item.id)) {
      dispatch(addProductThunk(item));
      toast.success("Produto adicionado ao carrinho!");
    } else {
      toast.error("Produto já adicionado ao carrinho");
    }
  };

  return (
    <Container>
      <div className="boxImg">
        <img src={item.image} alt={item.title} />
      </div>
      <Divider />
      <h3 className="title">{item.title}</h3>

      <h3>R$ {item.price.toFixed(2).replace(".", ",")}</h3>
      <Button type="button" onClick={() => handleAddProducts(item)}>
        Adicionar ao carrinho!
      </Button>
    </Container>
  );
};

export default Card;
