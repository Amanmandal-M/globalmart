// categoryRoutes.js
const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

// GET all categories
router.get('/categories', categoryController.getAllCategories);

// GET a single category by ID
router.get('/categories/:id', categoryController.getCategoryById);

// POST a new category
router.post('/categories', categoryController.createCategory);

// PUT (update) a category by ID
router.put('/categories/:id', categoryController.updateCategory);

// PATCH (partially update) a category by ID
router.patch('/categories/:id', categoryController.partiallyUpdateCategory);

// DELETE a category by ID
router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = categoryRouter;
