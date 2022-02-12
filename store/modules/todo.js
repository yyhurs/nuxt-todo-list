import {
  apiGetTodoList, apiAddTodoList, apiRmTodoList, apiEditTodoList,
} from '@/assets/js/api';

const state = () => ({
  todoArr: [],
});

const mutations = {
  STORE_TODO(state, payload) {
    state.todoArr = [...payload];
  },
  ADD_TODO(state, payload) {
    state.todoArr = [...state.todoArr, payload];
  },
  RM_TODO(state, payload) {
    state.todoArr = state.todoArr.filter((item) => item.id !== payload);
  },
  EDIT_TODO(state, payload) {
    const { id, isChecked } = payload;
    const updItem = state.todoArr.find((item) => item.id === id);
    Object.assign(updItem, { isChecked });
  },
};

const actions = {
  async getTodoApi() {
    try {
      const res = await apiGetTodoList();
      return res;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },
  async addTodoApi(context, params) {
    try {
      const res = await apiAddTodoList(params);
      return res;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },
  async rmTodoApi(context, params) {
    try {
      const res = await apiRmTodoList(params);
      return res;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },
  async editTodoApi(context, params) {
    try {
      const res = await apiEditTodoList(params);
      return res;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
