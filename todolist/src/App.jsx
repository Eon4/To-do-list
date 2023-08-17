import React from 'react';
import "./App.css";
import { Header } from "./components/header";
import { Todolist } from "./components/todolist";

function App() {
  return (
    <>
      <Header/>
      <Todolist/>
    </>
  );
}

export default App;

