import { useState } from "react";
import { api } from "../../services/api";
import {
  Container,
  Content,
  Header,
  Input,
  TitleInput,
  Form,
  ContainerButton,
} from "./styles";

const INITIAL_VALUE_FORM = {
  title: "",
  capa: "",
  description: "",
  available: 0,
  released: new Date(),
};

export function Modal({ showModal = false, onCloseModal = () => {} }) {
  const [form, setForm] = useState(INITIAL_VALUE_FORM);

  function handleSendForm() {
    console.log("enviar form", form);
    let body = form;
    api
      .post("createbook", body)
      .then((response) => response.status === 201 && onCloseModal());
  }

  function updateForm({ input = "title", value = "", available = 0 }) {
    if (input === "title") setForm({ ...form, title: value });
    else if (input === "description") setForm({ ...form, description: value });
    else if (input === "available") setForm({ ...form, available });
    else if (input === "capa") setForm({ ...form, capa: value });
  }

  return (
    <>
      {showModal ? (
        <Container>
          <Content>
            <Header>
              <strong>Cadastrar livro</strong>
              <button onClick={() => onCloseModal()}>X</button>
            </Header>
            <Form>
              <TitleInput>Título</TitleInput>
              <Input
                onChange={(event) =>
                  updateForm({ input: "title", value: event.target.value })
                }
              />
              <TitleInput>Link da capa</TitleInput>
              <Input
                onChange={(event) =>
                  updateForm({ input: "capa", value: event.target.value })
                }
              />
              <TitleInput>Descrição</TitleInput>
              <Input
                onChange={(event) =>
                  updateForm({
                    input: "description",
                    value: event.target.value,
                  })
                }
              />
              <TitleInput>Avaliação</TitleInput>
              <Input
                onChange={(event) =>
                  updateForm({
                    input: "available",
                    available: Number(event.target.value),
                  })
                }
              />
            </Form>
            <ContainerButton>
              <button onClick={() => handleSendForm()}>Cadastrar</button>
            </ContainerButton>
          </Content>
        </Container>
      ) : null}
    </>
  );
}
