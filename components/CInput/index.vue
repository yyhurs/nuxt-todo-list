<template>
  <input
    type="text"
    class="c-input"
    :class="[
      {'c-input--block': isBlock},
    ]"
    :placeholder="placeholderText"
    :value="value"
    @input="passValue($event)"
    @keyup.enter="handleSubmit"
  >
</template>

<script>
export default {
  name: 'CInput',
  props: {
    /**
     * 輸入框內容
     */
    value: {
      type: String,
      default: '',
    },
    /**
     * placeholder內容
     */
    placeholderText: {
      type: String,
      default: '',
    },
    /**
     * 輸入框寬度是否與父元素一致
     */
    isBlock: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    passValue(e) {
      const vm = this;
      vm.$emit('input', e.target.value);
    },
    handleSubmit() {
      const vm = this;
      vm.$emit('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.c-input {
  height: 34px;
  padding: 11px 14px 7px;
  background: transparent;
  border: 1px solid var(--primary-border-color);
  border-radius: var(--square-curved);
  color: var(--font-normal-color);
  font-size: 14px;

  &:hover,
  &:focus {
    border-color: var(--primary-color);
    outline: 0;
  }

  &--block {
    width: 100%;
  }
}
</style>
