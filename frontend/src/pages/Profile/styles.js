import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24;
    transition: color 1s ease 0s, transform 1s ease 0s;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
    transition: color 1s ease 0s, transform 1s ease 0s;
    color: ${(props) => props.theme.colors.text};
  }

  img {
    height: 64px;
  }

  a {
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

    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }

    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: #343d46;
    margin-left: 16px;
    transition: all 0.2s ease;
    display: flex;

    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 8px;

    &:hover {
      filter: brightness(70%);
    }
  }
`;
export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: ${(props) => props.theme.colors.input};
    padding: 24px;
    position: relative;
    border: 1px solid #a7adba;
    border-radius: 8px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.2s ease 0s;

    &:hover {
      border: 1px solid;
      border-color: #e02041;
    }

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: transparent;

      display: flex;

      -webkit-box-pack: center;
      justify-content: center;
      border-radius: 8px;
      transition: border 0.2s ease 0s, transform 0.2s ease 0s;
      border-width: 3px;
      border-style: solid;
      border-color: transparent;
      border-image: initial;

      svg {
        transition: border 0.2s ease 0s, transform 0.2s ease 0s;
        color: ${(props) => props.theme.colors.text};
      }

      &:hover {
        transform: translateY(-7px);
        border-color: transparent;
        svg {
          color: ${(props) => props.theme.colors.text};
        }
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;

      transition: color 1s ease 0s, transform 1s ease 0s;
      color: ${(props) => props.theme.colors.text};
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: #999;
      line-height: 21px;
      font-size: 16px;
    }
  }
`;
