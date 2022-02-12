<template>
  <label
    class="c-checkbox"
    :class="{'c-checkbox--active': value}"
  >
    <span class="c-checkbox__item c-checkbox__box">
      <input
        type="checkbox"
        class="c-checkbox__input"
        :checked="value"
        @change="handleChange($event)"
      >
      <span class="c-checkbox__inner" />
    </span>
    <span class="c-checkbox__item c-checkbox__details">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: 'CCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(e) {
      const vm = this;
      vm.$emit('change', e.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.c-checkbox {
  $this: &;

  display: inline-flex;
  align-items: center;
  color: var(--font-normal-color);
  font-size: 14px;
  cursor: pointer;

  &__item {
    & + & {
      padding-left: 32px;

      @include mobile {
        padding-left: 12px;
      }
    }
  }

  &__box {
    position: relative;
    width: 22px;
    height: 20px;
  }

  &__input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }

  &__inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary-border-color);
    border-radius: var(--square-curved);
    background: transparent;
    transition: all 0.3s;

    &::after {
      position: absolute;
      top: 50%;
      left: 22%;
      display: block;
      width: 6px;
      height: 9px;
      border: 2px solid var(--primary-color);
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg) scale(1) translate3d(-50%, -50%, 0);
      transition: all 0.2s;
      opacity: 0;
      content: '';
    }
  }

  &__details {
    flex: 1 1 0%;
    font-size: 18px;
    transition: all 0.3s;
  }

  &:hover,
  &--active {
    #{$this}__inner {
      border-color: var(--primary-color);
    }

    #{$this}__details {
      color: var(--primary-color);
    }
  }

  &--active {
    #{$this}__inner::after {
      opacity: 1;
    }
  }
}
</style>
