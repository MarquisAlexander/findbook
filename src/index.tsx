import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/books", () => {
      return [
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
        {
          id: 5,
          title: "Textos Cruéis Demais",
          capa: "https://i.pinimg.com/564x/91/7b/b1/917bb1234ee3bcc7a476791d0cad617a.jpg",
          description: "sem descricao",
          evaluation: "0",
          released: new Date(),
        },
        {
          id: 6,
          title: "Textos Cruéis Demais",
          capa: "https://i.pinimg.com/564x/88/18/65/8818658596bb7df0bf283bd8a0474399.jpg",
          description: "sem descricao",
          evaluation: "0",
          released: new Date(),
        },
        {
          id: 7,
          title: "Textos Cruéis Demais",
          capa: "https://i.pinimg.com/564x/32/52/3e/32523ee6432ca31cde8f1072e509d43c.jpg",
          description: "sem descricao",
          evaluation: "0",
          released: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
