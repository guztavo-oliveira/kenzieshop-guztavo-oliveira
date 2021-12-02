import { Container, Menu } from "./styles";
import { BsCart4 } from "react-icons/bs";
import { RiLoginCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Link to="/">
        <h2>KenzieShop</h2>
      </Link>
      <Menu>
        <Link to="/cart">
          <h3 className="cart">
            <BsCart4 />
            <div>
              <span>{cart.length}</span>
            </div>
          </h3>
        </Link>
        <Link to="/login">
          <h3 className="login">
            <RiLoginCircleLine />
            Entrar
          </h3>
        </Link>
      </Menu>
    </Container>
  );
};
export default Header;
