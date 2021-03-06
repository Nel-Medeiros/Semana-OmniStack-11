import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { ThemeContext } from "styled-components";

import api from "../../services/api";

//import { Button } from '../../styles/global';
import { Container, Header, Ul } from "./styles";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert("Erro ao deletar caso. Tente novamente.");
    }
  }

  function handleLogOut() {
    localStorage.clear();

    history.push("/");
  }

  const { logo } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem vinda, {ongName}.</span>
        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogOut} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>

      <h1>Casos Cadastrados</h1>

      <Ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#E02041" />
            </button>
          </li>
        ))}
      </Ul>
    </Container>
  );
}
