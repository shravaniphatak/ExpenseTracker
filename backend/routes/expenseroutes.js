const express = require("express");
const Expense = require("../models/expense");
const router = express.Router();

// Add a new expense
router.post("/add", async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all expenses
router.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an expense by ID
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Expense.findByIdAndDelete(id);
        res.json({ message: "Expense deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
