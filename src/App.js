import GlobalStyle from "./styles/global";
import Routes from "./routes/";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
