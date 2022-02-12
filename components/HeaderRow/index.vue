<template>
  <header class="header fixed flex items-center justify-between w-full">
    <div class="header__item header__icon is-btn">
      <c-svg-icon icon-class="bars-solid" width="32px" height="24px" />
    </div>
    <div class="header__item header__content flex-1">
      <h1 class="header__logo text-lg">
        HandsUP
      </h1>
    </div>
    <div class="header__item header__icon is-btn" @click="toggleModal(true)">
      <c-svg-icon icon-class="setting-solid" width="32px" height="24px" />
    </div>
    <div class="header__item header__icon is-btn">
      <c-svg-icon icon-class="sign-out-alt-solid" width="32px" height="24px" />
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'HeaderRow',
  methods: {
    ...mapMutations('config', [
      'SET_IS_MODAL_SHOW',
    ]),
    toggleModal(isShow = true) {
      const vm = this;
      vm.SET_IS_MODAL_SHOW(isShow);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  min-height: $header-h;
  padding: 0 11px;
  background: var(--primary-color);
  color: var(--font-active-color);

  &__icon {
    width: 32px;

    & + & {
      margin-left: 10px;
    }
  }

  &__content {
    padding: 0 25px;
  }
}
</style>
