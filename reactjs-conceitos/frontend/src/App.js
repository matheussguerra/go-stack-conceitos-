import React, { useState, useEffect } from "react";
import api from "./services/api.js";

import "./App.css";

import backgroundImage from "./assets/background.jpg";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  //useState retorna array com 2 posições:
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos o valor inicial, ser imutável é que não podemos alterar o formatos das variáveis, é necessário recriar com as informçaões

  async function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`); // Não respeita a imutabilidade, ou seja, ele altera diretamente o valor original.
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post("projects", {
      title: `Novo projeto ${Date.now()}`,
      owner: "Matheus Guerra",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects"></Header>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto!
      </button>
    </>
  );
}

export default App;
