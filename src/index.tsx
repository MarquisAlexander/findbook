import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    let items = [
      {
        id: 1,
        title: "F*deu Geral: Um livro sobre esperança?",
        capa: "https://i.pinimg.com/564x/32/52/3e/32523ee6432ca31cde8f1072e509d43c.jpg",
        description: "sem descricao",
        evaluation: "0",
        released: new Date(),
      },
      {
        id: 2,
        title: "As Veias Abertas da América Latina",
        capa: "https://i.pinimg.com/564x/31/3f/c4/313fc44fef87b61bd873846e7316e106.jpg",
        description: "sem descricao",
        evaluation: "0",
        released: new Date(),
      },
      {
        id: 3,
        title: "A Insustentável Leveza do Ser",
        capa: "https://i.pinimg.com/564x/21/84/9d/21849df956373f8684e4fbcd9e256df4.jpg",
        description: "sem descricao",
        evaluation: "0",
        released: new Date(),
      },
      {
        id: 4,
        title: "Textos Cruéis Demais",
        capa: "https://i.pinimg.com/564x/eb/3e/bf/eb3ebfe6d1c772e6d5b44d380a3256c5.jpg",
        description: "sem descricao",
        evaluation: "0",
        released: new Date(),
      },
    ];

    this.get("/books", () => {
      return items;
    });

    let newId = 5;
    this.post("/createbook", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = newId++;

      items.push(attrs);
      return { reminder: attrs };
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
