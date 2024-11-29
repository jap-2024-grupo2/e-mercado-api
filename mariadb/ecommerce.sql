-- Creación de base de datos
CREATE DATABASE ecommerce CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- Uso de la base de datos recién creada
USE ecommerce;

-- Creación de tabla CATEGORIES
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    product_count INT DEFAULT 0,
    img_src VARCHAR(255)
);

-- Creación de tabla PRODUCTS
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    cost DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(10) NOT NULL,
    sold_count INT DEFAULT 0,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Creación de tabla PRODUCT_IMAGES
CREATE TABLE product_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    image_src VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

-- Creación de tabla USERS
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    second_name VARCHAR(255),
    last_name VARCHAR(255),
    second_last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(15),
    profile_picture VARCHAR(255)
);

-- Creación de tabla CARTS
CREATE TABLE carts (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Creación de tabla COMMENTS
CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    score INT CHECK (score BETWEEN 1 AND 5),
    description TEXT,
    datetime DATETIME NOT NULL,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Creación de tabla PRODUCT_CART
CREATE TABLE product_cart (
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT DEFAULT 1 CHECK (quantity > 0),
    PRIMARY KEY (cart_id, product_id),
    FOREIGN KEY (cart_id) REFERENCES carts(cart_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);