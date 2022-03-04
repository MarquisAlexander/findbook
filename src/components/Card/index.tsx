import { Container, Tag } from "./styles";

export function Card({
  title = "sem titulo",
  capa = "https://i.pinimg.com/564x/32/52/3e/32523ee6432ca31cde8f1072e509d43c.jpg",
  description = "sem descricao",
  evaluation = "0",
  released = new Date(),
}) {
  return (
    <Container>
      <div>
        <img src={capa} alt={capa} />
      </div>
      <div>
        <Tag>
          <strong>Título: </strong>
          <p> {title}</p>
        </Tag>
        <Tag>
          <strong>Descrição: </strong>
          <p>{description}</p>
        </Tag>
        <Tag>
          <strong>Avaliação: </strong>
          <p>{evaluation}</p>
        </Tag>
        <Tag>
          <strong>Lançamento: </strong>
          <p>{released.getDay()}</p>
        </Tag>
      </div>
    </Container>
  );
}
