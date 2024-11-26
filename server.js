const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Función para leer y devolver archivos de una carpeta
function getFilesFromFolder(folderPath) {
    return fs.readdirSync(folderPath).map((file) => {
        const filePath = path.join(folderPath, file);
        return JSON.parse(fs.readFileSync(filePath, 'utf8')); // Leer y parsear el contenido JSON
    });
}

// Ruta para la carpeta "cart"
app.get('/cart', (req, res) => {
    const folderPath = path.join(__dirname, 'data', 'cart');
    const files = getFilesFromFolder(folderPath);
    res.json(files); // Devuelve el contenido de los JSON de /cart
});

// Ruta para la carpeta "cats"
app.get('/cats', (req, res) => {
    const folderPath = path.join(__dirname, 'data', 'cats');
    const files = getFilesFromFolder(folderPath);
    res.json(files); // Devuelve el contenido de los JSON de /cats
});

// Ruta para la carpeta "cats_products"
app.get('/cats_products', (req, res) => {
    const folderPath = path.join(__dirname, 'data', 'cats_products');
    const files = getFilesFromFolder(folderPath);
    res.json(files); // Devuelve el contenido de los JSON de /cats_products
});

// Ruta para la carpeta "products"
app.get('/products', (req, res) => {
    const folderPath = path.join(__dirname, 'data', 'products');
    const files = getFilesFromFolder(folderPath);
    res.json(files); // Devuelve el contenido de los JSON de /products
});

// Ruta para la carpeta "products_comments"
app.get('/products', (req, res) => {
    const folderPath = path.join(__dirname, 'data', 'products_comments');
    const files = getFilesFromFolder(folderPath);
    res.json(files); // Devuelve el contenido de los JSON de /products_comments
});

// Ruta para la carpeta "sell"
app.get('/products', (req, res) => {
    const folderPath = path.join(__dirname, 'data', 'sell');
    const files = getFilesFromFolder(folderPath);
    res.json(files); // Devuelve el contenido de los JSON de /sell
});

// Ruta para la carpeta "user_cart"
app.get('/products', (req, res) => {
    const folderPath = path.join(__dirname, 'data', 'user_cart');
    const files = getFilesFromFolder(folderPath);
    res.json(files); // Devuelve el contenido de los JSON de /user_cart
});


app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:${port}');
});