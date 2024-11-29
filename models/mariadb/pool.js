import mariadb from 'mariadb'

// Cargamos variables de entorno
process.loadEnvFile()

export const pool = mariadb.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'ecommerce',
  port: process.env.DB_PORT || 3306,
  connectionLimit: process.env.DB_CONN_LIMIT || 5
})

export default pool