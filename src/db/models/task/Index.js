// Подключение mongoose
const mongoose = require('mongoose');

// Экспорт схемы
const { Schema } = mongoose;

// Создаем схему, как будут храниться данные
const taskSchema = new Schema({
  text: String,
  isCheck: Boolean
});

// Модель для работы с таблицей в самой БД
// В mongoose создаем модель по таблице "tasks" по схеме taskSchema
module.exports = Task = mongoose.model('tasks', taskSchema);