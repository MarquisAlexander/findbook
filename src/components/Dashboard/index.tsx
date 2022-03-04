import { useEffect, useState } from "react";
import { Summary } from "../Summary";
import { Card } from "../Card";
import { Container } from "./styles";
import Grid from "@mui/material/Grid";
import { api } from "../../services/api";

export function Dashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("books").then((response) => setBooks(response.data));
  }, []);
  return (
    <Container>
      <Summary />
      <div
        style={{
          paddingTop: "5rem",
        }}
      >
        <Grid container spacing={3}>
          {books.map(({ title, capa, description }) => (
            <Grid item xs={12} sm={6} md={6}>
              <Card title={title} capa={capa} description={description} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
