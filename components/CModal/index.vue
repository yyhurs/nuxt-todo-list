<template>
  <div v-if="isShow" class="c-modal">
    <div class="c-modal__overlay" @click="clickOverlay">
      <div
        class="c-modal__content"
        :style="{ width }"
        @click.stop="clickContent"
      >
        <div class="c-modal__body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CModal',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '80%',
    },
  },
  methods: {
    clickOverlay() {
      const vm = this;
      vm.$emit('close');
    },
    clickContent() {
      const vm = this;
      vm.$emit('focus');
    },
  },
};
</script>

<style lang="scss" scoped>
.c-modal {
  position: fixed;
  z-index: $z-modal;
  width: 100%;
  height: 100%;

  &__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  &__content {
    width: 80%;
    padding: 25px 30px;
    background: var(--container-bg);
    border: var(--container-border);
    border-radius: var(--container-curved);
    box-shadow: var(--container-box-shadow);
  }
}
</style>
