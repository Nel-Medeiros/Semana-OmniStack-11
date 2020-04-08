import styled from "styled-components/native";

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.default};
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.property};
  font-weight: bold;
  margin-top: 24px;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: ${props => props.theme.colors.value};
`;
//Details
export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.default};
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.value};
  margin-top: 16px;
  text-align: justify;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionTouch = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: ${props => props.theme.colors.default};
  font-size: 15px;
  font-weight: bold;
`;
