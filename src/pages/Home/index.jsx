import { Container } from "./styles";
import api from "../../services/API/api";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setProducts([...response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {products.map((e, i) => {
        return <Card item={e} key={i} />;
      })}
    </Container>
  );
};

export default Home;
