import React from "react";
import { Navbar } from "./components/navbar";
import { ItemListContainer } from "./components/ItemListConteiner";
import ContainerCardItems from "./components/components items/ContainerCardItems";

function App (){
  return(
  <>
  <Navbar />
  <ItemListContainer greeting={"Bienvenido/a"} />;
  <ContainerCardItems/>
  </>
  );
}


export default App;