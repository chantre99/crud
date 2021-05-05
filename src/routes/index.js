const { Router } = require('express')
require('../index');



const router = Router();
const { getUsers, Createduser,getoneuser, deleteuser, updateuser } = require('../controllers/index.controller');


router.get('/users',getUsers );
router.get('/users/:id',getoneuser );
router.post('/users/createduser',Createduser );
router.delete('/users/:id',deleteuser );
router.put('/users/:id',updateuser );


module.exports = router;