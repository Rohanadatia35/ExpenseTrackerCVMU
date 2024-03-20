const ExpenseModel = require("../models/ExpenseModel");

const ExpenseLimit = async function() {
    let x = 0;  
    const expenses = await ExpenseModel.find();
    expenses.forEach((expense) =>{
        x += expense.amount
    })
    return x;
}

module.exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const expense = new ExpenseModel({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (typeof !amount === 'number' || amount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }
        
        await expense.save();
        const x = await ExpenseLimit();
        res.status(200).json({ message: 'Expense Added', totalExp: x });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports.getExpense = async (req, res) => {
    try {
        const expenses = await ExpenseModel.find().sort({ createdAt: -1 });
        // console.log(expenses);
        
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const expense = await ExpenseModel.findById(id);
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        await expense.remove();
        res.status(200).json({ message: 'Expense Deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}
