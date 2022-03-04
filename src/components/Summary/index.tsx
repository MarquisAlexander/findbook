import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function Summary() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("books").then((response) => setBooks(response.data));
  }, []);

  return (
    <Container>
      <div>
        <header>
          <p>Livros Disponíveis</p>
        </header>
        <strong>{books.length}</strong>
      </div>
      <div>
        <header>
          <p>Já leu</p>
        </header>
        <strong>4</strong>
      </div>
      <div className="highlight-backgrond">
        <header>
          <p>Não lidos</p>
        </header>
        <strong>{books.length - 4}</strong>
      </div>
    </Container>
  );
}
