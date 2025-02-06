import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/slices/userSlice";
import { Header } from "../../components/Header";

export function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const response = {
      id: 1,
      name: "Carla Silva",
      token: "7aca7c72-adcb-44e1-915b-007a58bef2fd",
    };

    dispatch(login(response));
    navigate("/avaliacoes");
  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Fazer Login
          </Typography>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                name="email"
                variant="outlined"
                label="E-mail"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                name="password"
                variant="outlined"
                label="Senha"
              />
            </Grid>

            <Grid>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
