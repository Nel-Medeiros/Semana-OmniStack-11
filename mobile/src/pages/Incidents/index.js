import React, { useState, useEffect, useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Switch } from "react-native";
import { ThemeContext } from 'styled-components/native';

import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import { Container, Header, ButtonTouch } from "../../styles/global";

import {
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentList,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailsButtonText,
} from "./styles";

import { useStateValue } from '../../state/ContextProvider'

export default function Incidents() {
  const [darkMode, setDarkMode] = useState(false);

  //const [, dispach] = useStateValue();

  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // function handleChange(){
  //   dispach({
  //     type: !darkMode ? 'enableDarkMode' : 'disableDarkMode'
  //   });

  //   setDarkMode(!darkMode)
  // }

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get("incidents", {
      params: { page },
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);

    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  const { logo } = useContext(ThemeContext)

  return (
    <Container>
      {/* <Switch
        value={darkMode}
        onValueChange={handleChange}
        thumbColor="#424242"
        trackColor="#292929"
      /> */}
      <Header>
        <Image source={logo} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem Vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident>
            <IncidentProperty>ONG</IncidentProperty>
            <IncidentValue>{incident.name}</IncidentValue>

            <IncidentProperty>CASO</IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </IncidentValue>

            <ButtonTouch onPress={() => navigateToDetail(incident)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </ButtonTouch>
          </Incident>
        )}
      />
    </Container>
  );
}
