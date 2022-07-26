import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
import { Fragment, useState } from "react";
function App() {
  const fecha = new Date().getFullYear();

  const [productos, setProductos] = useState([
    { id: 1, nombre: "camisa", precio: 50 },
    { id: 2, nombre: "camisa2", precio: 40 },
    { id: 3, nombre: "camis3", precio: 30 },
    { id: 4, nombre: "camisa4", precio: 20 },
    { id: 5, nombre: "camisa5", precio: 10 },
  ]);
  // state para un carrito de compras
  const [carrito, setCarrito] = useState([]);

  return (
    <Fragment>
      <Header titulo="Tienda virtual" />
      <h1>Lista de productos </h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          // las propiedades del producto name,id, precio etc...
          producto={producto}
          productos={productos}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))}
      <Carrito carrito={carrito} />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
