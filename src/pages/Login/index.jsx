import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";

import { Link } from "react-router-dom";

import { Container, Title, InputContainer } from "./styles";
import Button from "../../components/Button";

import { useDispatch } from "react-redux";
import { signInThunk } from "../../store/modules/user/thunks";

const Login = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .email("E-mail inválido")
      .required("Utilize seu e-mail cadastrado"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmitForm = (data) => {
    // dispatch(signInThunk(data));
  };

  return (
    <Container>
      <InputContainer>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Title>
            <h1>Login</h1>
          </Title>
          <TextField
            id="outlined-basic"
            label="E-mail"
            type="email"
            variant="outlined"
            sx={{ marginTop: 3 }}
            fullWidth
            helperText={errors.username?.message}
            {...register("username")}
            error={!!errors.username}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            sx={{ marginTop: 3 }}
            fullWidth
            helperText={errors.password?.message}
            {...register("password")}
            error={!!errors.password}
            type="password"
          />
          <Button>Logar</Button>
          <span>
            Não possui conta? <Link to="/">Cadastrar</Link>
          </span>
        </form>
      </InputContainer>
    </Container>
  );
};

export default Login;
