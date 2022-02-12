<template>
  <svg
    class="c-svg-icon"
    :class="[
      className,
      {'c-svg-icon--block': isBlock},
    ]"
    :style="{
      width,
      height,
    }"
    aria-hidden="true"
    fill="red"
  >
    <use :href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'CSvgIcons',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    isBlock: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '1em',
    },
    height: {
      type: String,
      default: '1em',
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.c-svg-icon {
  vertical-align: -0.15em;
  overflow: hidden;
  fill: var(--font-active-color);

  &--block {
    display: block;
    width: 100%;
  }
}
</style>
