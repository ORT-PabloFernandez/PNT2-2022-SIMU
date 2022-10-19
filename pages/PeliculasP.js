import React, { useState } from "react";
import Paginas from "../src/components/Pagina";

const Peliculas = (props) => {
  return <Paginas pageSize={props.pageSize} page={props.page} />;
};

export default Peliculas;
