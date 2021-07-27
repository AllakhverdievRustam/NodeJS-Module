// Подключение express
const express = require('express');
// Нуждно для того, 
// чтобы роут понимал какой котроллер запустить
const router = express.Router();

// Импорт контроллеров
const {
  createNewTask,
  getAllTasks,
  deleteOneTask,
  deleteAllTask,
  updateOneTask
} = require('../controllers/task.controllers');

// Tasks routes
router.post('/createNewTask', createNewTask);
router.get('/getData', getAllTasks);
router.delete('/deleteOne', deleteOneTask);
router.delete('/deleteAll', deleteAllTask);
router.patch('/updateOne', updateOneTask);

module.exports = router;