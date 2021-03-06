import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Linking, ScrollView } from "react-native";
import * as MailComposer from "expo-mail-composer";
import { ThemeContext } from 'styled-components/native';

import logoImg from "../../assets/logo.png";

import { Container, Header, ButtonTouch } from "../../styles/global";

import {
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  ActionTouch,
  ActionText,
} from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá, ${
    incident.name
  }. Estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  const { logo } = useContext(ThemeContext)

  return (
    <Container>
      <Header>
        <Image source={logo} />

        <ButtonTouch onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </ButtonTouch>
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Incident>
          <IncidentProperty style={{ marginTop: 0 }}>ONG</IncidentProperty>
          <IncidentValue>
            {incident.name} de {incident.city}/{incident.uf}
          </IncidentValue>

          <IncidentProperty>CASO:</IncidentProperty>
          <IncidentValue>{incident.title}</IncidentValue>

          <IncidentProperty>DESCRIÇÃO:</IncidentProperty>
          <IncidentValue>{incident.description}</IncidentValue>

          <IncidentProperty>VALOR:</IncidentProperty>
          <IncidentValue>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(incident.value)}
          </IncidentValue>
        </Incident>

        <ContactBox>
          <HeroTitle>Salve o dia!</HeroTitle>
          <HeroTitle>Seja o herói desse caso.</HeroTitle>

          <HeroDescription>Entre em contato:</HeroDescription>

          <Actions>
            <ActionTouch onPress={sendWhatsapp}>
              <ActionText>WhatsApp</ActionText>
            </ActionTouch>

            <ActionTouch onPress={sendMail}>
              <ActionText>E-mail</ActionText>
            </ActionTouch>
          </Actions>
        </ContactBox>
      </ScrollView>
    </Container>
  );
}
