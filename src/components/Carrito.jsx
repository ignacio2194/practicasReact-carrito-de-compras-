import React from "react";
import Producto from "./Producto";

const Carrito = ({ carrito,setCarrito }) => {
  return (
    <div className="carrito">
      <h2>
        Tu carrito de compras :
        {carrito.map((producto) => (
          <Producto key={producto.id}  producto={producto}carrito={carrito} setCarrito={setCarrito} />
        ))}
      </h2>
    </div>
  );
};

export default Carrito;
