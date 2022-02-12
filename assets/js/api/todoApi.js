import axios from 'axios';
import { deferTime } from '@/assets/js/utils';

const todo = axios.create({
  baseURL: 'http://localhost:3001/',
});

/**
 * 取得所有 todoList
 */
export const getTodoList = async () => {
  await deferTime();
  return todo.get('/todo-list');
};

/**
 * 新增一筆資料到 todoList
 * @param {String|Number} id - timestamp
 * @param {String} text - todoItem內容
 * @param {Boolean} isChecked - 是否完成
 */
export const addTodoList = async ({ id, text, isChecked = false }) => {
  if (!id || !text) return undefined;
  await deferTime();
  const params = {
    id,
    text,
    isChecked,
  };
  const result = await todo.post('/todo-list', params);
  return result;
};

/**
 * 刪除一筆 todoItem
 * @param {String|Number} id - timestamp
 */
export const rmTodoList = async (id) => {
  if (!id) return undefined;
  await deferTime();
  const result = await todo.delete(`/todo-list/${id}`);
  return result;
};

/**
 * 修改一筆 todoItem
 * @param {String|Number} id - timestamp
 * @param {Boolean} isChecked - 是否已完成
 */
export const editTodoList = async ({ id, isChecked }) => {
  if (!id) return undefined;
  await deferTime();
  const params = {
    isChecked,
  };
  const result = await todo.patch(`/todo-list/${id}`, params);
  return result;
};
