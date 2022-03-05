import { useEffect, useState } from "react";
import { Summary } from "../Summary";
import { Card } from "../Card";
import { Container } from "./styles";
import Grid from "@mui/material/Grid";
import { api } from "../../services/api";


export function Dashboard({ update = false }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("books").then((response) => setBooks(response.data));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [update]);

  return (
    <Container id="myId">
      <Summary />
      <div
        style={{
          paddingTop: "5rem",
        }}
      >
        <Grid container spacing={3}>
          {books.map(({ title, capa, description }) => (
            <Grid item xs={12} sm={6} md={6}>
              <Card title={title} capa={capa} description={description} loading={loading}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
