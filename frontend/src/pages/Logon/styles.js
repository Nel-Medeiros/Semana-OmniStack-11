import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionForm = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const Form = styled.form`
  margin-top: 100px;

  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 32px;
    margin-bottom: 32px;
    border-width: 3px;
  }

  input {
    transition: background 0.5s ease 0s, transform 0.5s ease 0s;
    background: ${(props) => props.theme.colors.input};
  }

  input:focus {
    border-color: #e02041;
    border-width: 1px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  a svg {
    margin-right: 10px;
  }
`;
