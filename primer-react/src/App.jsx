import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";
import { Navbar } from "./components/navbar";
import { ItemListContainer } from "./components/ItemListConteiner";
import ContainerCardItems from "./components/components items/ContainerCardItems";

function App (){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenido/a"} />} />
        <Route path="/items" element={<ContainerCardItems />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;