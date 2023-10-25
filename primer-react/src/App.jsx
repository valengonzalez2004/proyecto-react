import React from "react";
import { Navbar } from "./components/navbar";
import { ItemListContainer } from "./components/ItemListConteiner";


function App (){
  return(
  <>
  <Navbar />
  <ItemListContainer greeting={"Bienvenido/a"} />;
  </>
  );
}


export default App;