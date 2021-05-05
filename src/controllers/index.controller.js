"use strict";
const pool = require("../database");

async function getUsers(req, res) {
  try {
    const response = await pool.query(`SELECT * FROM users`);
    res.json(response.rows);
  } catch (e) {
    res.send(e);
  }
}

async function getoneuser(req, res) {
  try {
    const id =req.params.id;
    console.log('id', id)
    const response = await pool.query(`
    select 
      a.id as id,
      a.name as name,
      a.email as email
    from 
    users a where id = $1 ;`,[req.params.id]);
    res.json(response.rows);
  } catch (e) {
    res.send(e);
  }
}

async function Createduser(req, res) {
  try {
   const { name,email} = req.body;
    const response = await pool.query('INSERT INTO users (name,email) VALUES ($1, $2);',[name, email]);
    console.log(response);
    res.send('usuario creado');
  } catch (e) {
    console.log(e)
    res.send(e);
  }
}

async function deleteuser(req, res) {
  try {
    const id =req.params.id;
    console.log('id', id)
    const response = await pool.query(`
    delete 
    from 
    users where id = $1 ;`,[req.params.id]);
    res.json(`el usurio ${id} ha sido eliminado `);

    

  }catch (e) {
      res.send(e);
    }
}

async function updateuser(req, res) {
  try {
    const id = req.params.id;
    const {name,email} = req.body;
    console.log('user update', id)
    const response = await pool.query(`
    update 
    users
    set  name = $1 , email = $2 where id = $3;`,[
    name,
    email,
    id
     ]);
    console.log(response);
    res.json(`el usurio ${id} ha sido actualizado `);

    

  }catch (e) {
      res.send(e);
    }
}


module.exports = {
  getUsers,
  Createduser,
  getoneuser,
  deleteuser,
  updateuser


};
