import styled from "styled-components/native";

export const HeaderText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.value};
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.value};
`;

export const IncidentList = styled.FlatList`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.default};
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.property};
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${props => props.theme.colors.value};
`;

export const DetailsButtonText = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-size: 15px;
  font-weight: bold;
`;
