<template>
  <div class="todo flex justify-center h-full">
    <div class="todo__main flex flex-col h-full">
      <div class="todo__title text-lg font-bold">
        {{ $t('components.todoList.__title') }}
      </div>

      <ul class="todo__list flex-1">
        <li v-for="item in todoArr" :key="item.id" class="todo__item item flex items-center">
          <div class="item__action">
            <c-checkbox
              v-model="item.isChecked"
              @change="editTodo(item, ...arguments)"
            >
              {{ item.text }}
            </c-checkbox>
          </div>

          <div class="item__action item__delete" @click="rmTodo(item.id)">
            <c-svg-icon icon-class="trash-alt-solid" width="24px" height="24px" />
          </div>
        </li>
      </ul>

      <div class="todo__creation flex w-full">
        <div class="creation__input flex-1">
          <c-input
            v-model="inputText"
            is-block
            :placeholder="$t('components.todoList.__inputPlaceholder')"
            @submit="addTodo"
          />
        </div>

        <div class="creation__addition flex">
          <c-btn
            v-bind="btnAttrs"
            @click="addTodo"
          >
            <c-svg-icon icon-class="plus-solid" width="21px" height="18px" />
          </c-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState, mapMutations, mapActions,
} from 'vuex';
import { isArray } from '@/assets/js/utils';
import CBtn from '@/components/CBtn';
import CInput from '@/components/CInput';
import CCheckbox from '@/components/CCheckbox';

export default {
  name: 'TodoList',
  components: {
    CBtn,
    CInput,
    CCheckbox,
  },
  data() {
    return {
      inputText: '',
      inputAttrs: {
        'is-block': true,
        placeholder: this.$t('components.todoList.__inputPlaceholder'),
      },
    };
  },
  computed: {
    ...mapState('todo', {
      todoArr: (state) => state.todoArr,
    }),
    btnAttrs() {
      return {
        'is-block': true,
        'is-disabled': !this.inputText,
        type: 'primary',
      };
    },
  },
  async created() {
    const vm = this;
    await vm.storeTodo();
  },
  methods: {
    ...mapMutations('todo', [
      'STORE_TODO',
      'ADD_TODO',
      'RM_TODO',
      'EDIT_TODO',
    ]),
    ...mapActions('todo', [
      'getTodoApi',
      'addTodoApi',
      'rmTodoApi',
      'editTodoApi',
    ]),
    ...mapMutations('config', [
      'SET_IS_LOADING',
    ]),
    async storeTodo() {
      const vm = this;
      vm.SET_IS_LOADING(true);
      const { status, data } = await vm.getTodoApi();
      vm.SET_IS_LOADING(false);
      if (status !== 200 || !isArray(data) || !data?.length) return;
      vm.STORE_TODO(data);
    },
    async addTodo() {
      const vm = this;
      const val = vm.inputText.trim();
      if (!val) return;

      const newItem = {
        id: Math.floor(Date.now()),
        text: val,
        isChecked: false,
      };
      vm.SET_IS_LOADING(true);
      const { status } = await vm.addTodoApi(newItem);
      vm.SET_IS_LOADING(false);
      if (status !== 201) return;
      vm.ADD_TODO(newItem);
      vm.inputText = '';
    },
    async rmTodo(id) {
      const vm = this;
      vm.SET_IS_LOADING(true);
      const { status } = await vm.rmTodoApi(id);
      vm.SET_IS_LOADING(false);
      if (status !== 200) return;
      vm.RM_TODO(id);
    },
    async editTodo(item, isChecked) {
      const vm = this;
      const updItem = {
        id: item.id,
        isChecked,
      };
      vm.SET_IS_LOADING(true);
      const { status } = await vm.editTodoApi(updItem);
      vm.SET_IS_LOADING(false);
      if (status !== 200) return;
      vm.EDIT_TODO(updItem);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  &__main {
    width: 800px / 979px * 100%;
    padding: 33px 30px 10px;
    background: var(--container-bg);
    border: var(--container-border);
    border-radius: var(--container-curved);
    box-shadow: var(--container-box-shadow);
  }

  &__title {
    padding-bottom: 10px;
  }

  &__list {
    padding: 0 22px;
    overflow-y: auto;
  }

  &__list::-webkit-scrollbar {
    width: 10px;
    height: 0px;
  }

  &__list::-webkit-scrollbar-track {
    border-radius: 10px;
    background: var(--scrollbar-track-bg);
  }

  &__list::-webkit-scrollbar-thumb {
    border-radius: var(--square-curved);;
    background: var(--scrollbar-thumb-bg);
  }

  &__item {
    padding: 33px 0;
  }

  &__creation {
    margin-top: auto;
    padding-top: 25px;
  }
}

.item {
  &__delete {
    width: 24px;
    margin-left: auto;
    cursor: pointer;
  }
}

.creation {
  &__input {
    padding-right: 25px;
  }

  &__addition {
    width: 35px;
    margin-left: auto;
  }
}
</style>
