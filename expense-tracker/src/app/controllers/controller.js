const db = require('../config/db.config.js');
const Expense = db.Expense;

exports.create = (req, res) => {
    let expense = {};

    try{
        // Building Customer object from upoading request's body
        expense.date = req.body.date;
        expense.place = req.body.place;
        expense.cost = req.body.cost;
        expense.category = req.body.category;
    
        // Save to MySQL database
        Expense.create(expense).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully an expense with id = " + result.id,
                expense: [result],
                error: ""
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            expense: [],
            error: error.message
        });
    }
}

exports.getAll = (req, res) => {
    // find all Customer information from 
    try{
        Expense.findAll({attributes: ['id', 'date', 'place', 'category', 'cost']})
        .then(expense => {
            res.status(200).json({
                message: "Get Expense' Infos!",
                expense: expense
            });
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Retrieving Error!",
            error: error
        });
    }
}

exports.deleteById = async (req, res) => {
    try{
        let expenseId = req.params.id;
        let expense = await Expense.findByPk(expenseId);

        if(!expense){
            res.status(404).json({
                message: "Does Not exist an expense with id = " + expenseId,
                error: "404",
                expenses: []
            });
        } else {
            await expense.destroy();
            res.status(200).json({
                message: "Delete Successfully an expense with id = " + expenseId,
                expenses: [expense],
                error: ""
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete an expense with id = " + req.params.id,
            error: error.message,
            expenses: []
        });
    }
}

exports.updateById = async (req, res) => {
    try{
        let expenseId = req.params.id;
        let expense = await Expense.findByPk(expenseId);
    
        if(!expense){
            // return a response to client
            res.status(404).json({
                message: "Not Found for updating an expense with id = " + expenseId,
                expenses: [],
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                date : req.body.date,
                place : req.body.place,
                cost : req.body.cost,
                category : req.body.category
            }
            let result = await Expense.update(updatedObject, {returning: true, where: {id: expenseId}});
            
            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Can not update an expense with id = " + req.params.id,
                    error: "Can NOT Updated",
                    expenses: []
                });
            }

            res.status(200).json({
                message: "Update successfully an expense with id = " + expenseId,
                expenses: [updatedObject],
                error: ""           
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Can not update an expense with id = " + req.params.id,
            error: error.message,
            expenses: []

        });
    }
}