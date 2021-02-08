let express = require('express');
let router = express.Router();
 
const expense = require('../controllers/controller.js');

let path = __basedir + '/view/';

router.get('/', (req,res) => {
    console.log("__basedir" + __basedir);
    res.sendFile(path + "index.html");
});

router.get('/add-expense/', (req,res) => {
    console.log("__basedir" + __basedir);
    res.sendFile(path + "add-expense.html");
});

router.post('/api/expense/create', expense.create);
router.get('/api/expense/getAll', expense.getAll);
router.put('/api/expense/updatebyid/:id', expense.updateById);
router.delete('/api/expense/deletebyid/:id', expense.deleteById);

module.exports = router;