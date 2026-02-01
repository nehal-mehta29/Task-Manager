/*========================= READ =========================*/

const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

//To GET all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } 
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

//To GET a single task by ID
router.get("/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } 
    catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
