// Definir el servidor base (puedes ajustar esto si cambias el puerto o el host)
const SERVER_URL = "http://localhost:3000";

// Función para obtener datos de una ruta específica
async function fetchData(route) {
    try {
        const response = await fetch(`${SERVER_URL}${route}`);
        if (!response.ok) {
            throw new Error(`Error al obtener datos de ${route}: ${response.status}`);
        }
        const data = await response.json(); // Convertir la respuesta a JSON
        console.log(`Datos obtenidos de ${route}:`, data);
        return data; // Devolver los datos para su uso
    } catch (error) {
        console.log("Error en fetchData:", error);
    }
}

// Obtener datos de /cart
fetchData("/cart").then((data) => {
    // Aquí puedes procesar los datos de "cart"
    console.log("Datos de /cart:", data);
});

// Obtener datos de /cats
fetchData("/cats").then((data) => {
    // Aquí puedes procesar los datos de "cats"
    console.log("Datos de /cats:", data);
});

// Obtener datos de /cats_products
fetchData("/cats_products").then((data) => {
    // Aquí puedes procesar los datos de "cats_products"
    console.log("Datos de /cats_products:", data);
});

// Obtener datos de /products
fetchData("/products").then((data) => {
    // Aquí puedes procesar los datos de "products"
    console.log("Datos de /products:", data);
});

// Obtener datos de /products_comments
fetchData("/products_comments").then((data) => {
  // Aquí puedes procesar los datos de "products_comments"
  console.log("Datos de /products_comments:", data);
});

// Obtener datos de /sell
fetchData("/sell").then((data) => {
  // Aquí puedes procesar los datos de "sell"
  console.log("Datos de /sell:", data);
});

// Obtener datos de /user_cart
fetchData("/user_cart").then((data) => {
  // Aquí puedes procesar los datos de "user_cart"
  console.log("Datos de /user_cart:", data);
});


document.addEventListener("DOMContentLoaded", setUserNameInNavBar())

function setUserNameInNavBar() {
  const navItemsUserName = document.querySelectorAll(".userName-navBar")
  const userName = localStorage.getItem("userName")

  navItemsUserName.forEach((navItem) => {
    navItem.textContent = userName
  })
}

