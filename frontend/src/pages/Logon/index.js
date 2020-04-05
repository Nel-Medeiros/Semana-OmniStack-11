import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { ThemeContext } from "styled-components";

import api from "../../services/api";

import { Button } from "../../styles/global";
import { Container, SectionForm, Form } from "./styles";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      alert("Falha no login. Tente novamente.");
    }
  }

  const { logo, heroTheme } = useContext(ThemeContext);

  return (
    <Container>
      <SectionForm>
        <img src={logo} alt="Be The Hero" />

        <Form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <FiLogIn size={16} color={"#E02041"} />
            Não tenho cadastro.
          </Link>
        </Form>
      </SectionForm>

      <img src={heroTheme} alt="Heroes" />
    </Container>
  );
}
