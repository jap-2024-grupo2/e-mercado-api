# 🛍️ eMercado | API

**eMercado API** es la capa de backend para la plataforma ficticia de comercio electrónico **eMercado**, diseñada con fines educativos. Proporciona servicios RESTful para manejar autenticación, productos, categorías, carrito de compras y más.

***Nota:*** Ninguna de las transacciones o datos son reales; todo es simulado para fines de aprendizaje.

## ✔ Funcionalidades

- **Autenticación:** Gestión de usuarios con soporte para inicio de sesión y autenticación mediante JWT.
- **Gestión de productos:** CRUD para productos, incluyendo detalles, precios, y comentarios.
- **Categorías:** Navegación y administración de categorías de productos.
- **Carrito de compras:** Operaciones dinámicas para agregar, eliminar y visualizar productos en el carrito.
- **Ventas:** Simulación de procesos de compra y manejo de transacciones ficticias.

## 🛠️ Requisitos previos

- [Node.js](https://nodejs.org) versión 22 o superior.
- [MariaDB](https://mariadb.org/) configurado y en funcionamiento.

## 🚀 Instalación y configuración

### 1. Clona el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd e-mercado-api
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura las variables de entorno (Opcional)

Crea un archivo `.env` y completa los valores necesarios:
```bash
# Configuración del servidor
PORT = 3000

# Clave secreta para JWT
SECRET_KEY = claveultrasecreta

# Configuración de base de datos
DB_HOST=localhost
DB_USER=user_db
DB_PASSWORD=password_db
DB_NAME=name_db
DB_PORT=XXXX
DB_CONN_LIMIT=X

# Configuración del token JWT
JWT_EXPIRES_IN = 1h
```

### 4. Configura la base de datos

1. Importa el script SQL proporcionado en el repositorio para configurar la base de datos. El archivo se encuentra en la carpeta:
    ```bash
    mariadb/ecommerce.sql
    ```

2. Ejecuta el script en tu instancia de MariaDB.

### 5. Inicia el servidor

Ejecuta el siguiente comando para iniciar la aplicación:

```bash
npm run dev
```

La API estará disponible en `http://localhost:3000`.

## 📂 Estructura del proyecto

- `app.js -` Archivo principal para iniciar la aplicación.
- `routes/` - Definición de rutas para los diferentes endpoints.
- `controllers/` - Lógica para manejar las solicitudes de cada ruta.
- `models/` - Definición de las entidades y conexión con la base de datos.
- `mariadb/ecommerce.sql` - Script SQL para configurar la base de datos.
- `postman/` - Carpeta con colecciones de Postman para probar los endpoints de la API.
  - `e-Mercado API Endpoints.postman_collection.json` - Colección de pruebas para los endpoints de la API.

## 🛠️ Construido con

- [![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org) - Entorno de ejecución para JavaScript en el lado del servidor.
- [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) - Framework para construir aplicaciones web y APIs.
- [![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)](https://mariadb.org/) - Sistema de gestión de bases de datos.
- [![JSON Web Tokens](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/) - Autenticación basada en tokens.
- [![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/) - Herramienta para probar y documentar APIs.

## 💻 Desarrollado por

- [Valentina Hernández](https://github.com/ValeHernandezz).
- [Kelly Salas](https://github.com/ksalas039).
- [Fernanda Rigali](https://github.com/FerRigali).
- [Ailen Albornoz](https://github.com/AilenAlbornoz).