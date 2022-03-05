import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 500px;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border: 0 0 10px 0 solid;
  margin: 0 0 2rem 0;
`;

export const TitleInput = styled.p``;

export const Form = styled.div`
  padding: 2rem 0;
  align-items: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;
