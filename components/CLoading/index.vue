<template>
  <div v-if="isLoading" class="c-loading">
    <div class="c-loading__overlay">
      <div
        class="c-loading__icon"
        :style="{
          width,
          height,
          'border-width': iconRingWidth,
          'border-color': iconColor,
          'border-top-color': iconActiveColor,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CLoading',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '50px',
    },
    height: {
      type: String,
      default: '50px',
    },
    iconColor: {
      type: String,
      default: 'var(--primary-border-color)',
    },
    iconActiveColor: {
      type: String,
      default: 'var(--primary-color)',
    },
    iconRingWidth: {
      type: String,
      default: '8px',
    },
  },
};
</script>

<style lang="scss" scoped>
.c-loading {
  position: fixed;
  z-index: $z-loading;
  width: 100%;
  height: 100%;

  &__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #ffffff80;
  }

  &__icon {
    border-radius: 50%;
    border: 8px solid var(--primary-border-color);
    border-top: 8px solid var(--primary-color);
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
