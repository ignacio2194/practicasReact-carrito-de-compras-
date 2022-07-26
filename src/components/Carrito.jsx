import React from "react";
import Producto from "./Producto";

const Carrito = ({ carrito }) => {
  return (
    <div className="carrito">
      <h2>
        Tu carrito de compras :
        {carrito.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </h2>
    </div>
  );
};

export default Carrito;
