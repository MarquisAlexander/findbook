import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Modal } from "../Modal";
import { Container, Content } from "./styles";

export function Header({ closeModa = () => {} }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={() => setShowModal(true)}>Add Book</button>
        <Modal
          showModal={showModal}
          onCloseModal={() => {
            setShowModal(false)
            closeModa();
          }}
        />
      </Content>
    </Container>
  );
}
