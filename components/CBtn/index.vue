<template>
  <button
    class="c-btn"
    :class="[
      `c-btn--${type}`,
      {'c-btn--disabled': isDisabled},
      {'c-btn--block': isBlock},
      {'c-btn--border-none': !hasBorder},
    ]"
    :style="{'--custom-bg': color, '--custom-color': textColor}"
    @click="handleClick($event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CBtn',
  props: {
    /**
     * 按鈕類型
     * 'primary'、'default'
     */
    type: {
      type: String,
      default: 'default',
    },
    /**
     * 按鈕寬度是否與父元素一致
     */
    isBlock: {
      type: Boolean,
      default: false,
    },
    /**
     * 按鈕是否禁用
     */
    isDisabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 客製按鈕顏色
     */
    color: {
      type: String,
      default: '',
    },
    /**
     * 客製文字顏色
     */
    textColor: {
      type: String,
      default: '',
    },
    /**
     * 按鈕是否有border
     */
    hasBorder: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      const vm = this;
      if (vm.isDisabled) {
        e.preventDefault();
        return;
      }

      vm.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/components/CBtn/mixin.scss';

.c-btn {
  @include btn-bg;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 7px;
  border-radius: var(--square-curved);
  color: var(--font-normal-color);
  font-size: 14px;
  background: transparent;
  transition: all 0.3s ease;
  outline: 0;
  cursor: pointer;

  &--block {
    width: 100%;
  }

  &--border-none {
    border: none;
  }
}
</style>
