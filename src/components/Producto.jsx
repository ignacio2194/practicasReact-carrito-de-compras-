import React from "react";


const Producto = ({ producto, productos, carrito, setCarrito }) => {
  const { nombre, precio, id } = producto;


  const agregarProducto = (id) => {
    const produc = productos.filter((item) => item.id === id);
    setCarrito([...carrito, ...produc]);
  };
  const eliminarProducto = (id) => {
 const newArray = carrito.filter(item=> item.id !==id)

 setCarrito([...newArray]);
  };

  return (
    <div>
      <h3>Los productos son :{nombre} </h3>
      <h4>y su precio es $ : {precio}</h4>

      {productos ? (
        <button type="button" onClick={() => agregarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
