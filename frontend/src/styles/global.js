import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px Roboto, sans-serif;
        background: ${(props) => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
        transition: color, background .5s ease 0s, transform .5s ease 0s;
        color: ${(props) => props.theme.colors.text}
    }

    input, button, textarea {
        font: 400 18px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    form input {
        width: 100%;
        height: 60px;
        color: ${(props) => props.theme.colors.text};
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }

    form textarea {
        width: 100%;
        min-height: 140px;
        color: ${(props) => props.theme.colors.text};
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 16px 24px;
        line-height: 24px;
        resize: vertical;    
    }    
    `;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;

  -webkit-box-pack: center;
  justify-content: center;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;
export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
    background: ${(props) => props.theme.colors.input};
    color: ${(props) => props.theme.colors.text};
    transition: color, background 1s ease 0s, transform 1s ease 0s;
  }

  input:focus {
    border-color: #e02041;
    border-width: 1px;
  }

  textarea:focus {
    border-color: #e02041;
    border-width: 1px;
  }

  input::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.text};
  }
  textarea::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.text};
  }
  textarea {
    transition: color, background 1s ease 0s, transform 1s ease 0s;
    background: ${(props) => props.theme.colors.input};
    margin-top: 8px;
    color: ${(props) => props.theme.colors.text};
  }
`;
