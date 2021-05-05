const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "firstapi",
  port: "5432",
});

pool.connect((err) => {
  if (err) {
    console.error(`Fallo conexión ${err}`);
  } else {
    console.error(`Conexion exitosa `);
  }
});

module.exports = pool;
