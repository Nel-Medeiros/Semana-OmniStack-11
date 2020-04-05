import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: auto;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;

  img {
    margin-right: 15px;
  }
`;
