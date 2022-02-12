<template>
  <div class="layout flex flex-col justify-between h-screen">
    <header-row />
    <main class="main flex-1 h-full">
      <nuxt />
    </main>
    <c-loading
      :is-loading="isLoading"
    />
    <c-modal
      :is-show="isModalShow"
      width="300px"
      @close="toggleModal(false)"
    >
      <div class="setting flex justify-around">
        <div class="setting__block">
          <div class="setting__title">
            {{ $t('global.__theme') }}
          </div>
          <ul class="setting__list">
            <li
              v-for="(item) in themeList"
              :key="`themeList-${item.code}`"
              class="setting__item is-btn"
              :class="{'setting__item--active': item.code === siteTheme}"
              @click.stop="setTheme(item.code)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>

        <div class="setting__block">
          <div class="setting__title">
            {{ $t('global.__lang') }}
          </div>
          <ul class="setting__list">
            <li
              v-for="(item) in langList"
              :key="`langList-${item.code}`"
              class="setting__item is-btn"
              :class="{'setting__item--active': item.code === siteLang}"
              @click.stop="setLang(item.code)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </c-modal>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { setCssVars } from '@/assets/js/utils';
import HeaderRow from '@/components/HeaderRow';
import CLoading from '@/components/CLoading';
import CModal from '@/components/CModal';

export default {
  components: {
    HeaderRow,
    CLoading,
    CModal,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState('config', {
      isLoading: (state) => state.isLoading,
      isModalShow: (state) => state.isModalShow,
      // siteTheme: (state) => state.siteTheme,
      // siteLang: (state) => state.siteLang,
    }),
    ...mapGetters('config', [
      'siteTheme',
      'siteLang',
      'themeList',
      'langList',
    ]),
  },
  mounted() {
    const vm = this;
    setCssVars(vm.siteTheme);
    vm.handleFullHeight();
  },
  methods: {
    ...mapMutations('config', [
      'SET_FULL_VH',
      'SET_IS_MODAL_SHOW',
      'SET_SITE_THEME',
      'SET_SITE_LANG',
    ]),
    handleFullHeight() {
      const vm = this;
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      vm.SET_FULL_VH(vh);
    },
    toggleModal(isShow = false) {
      const vm = this;
      vm.SET_IS_MODAL_SHOW(isShow);
    },
    setTheme(theme) {
      const vm = this;
      vm.SET_SITE_THEME(theme);
      vm.toggleModal(false);
    },
    setLang(lang) {
      const vm = this;
      vm.SET_SITE_LANG(lang);
      vm.toggleModal(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: $header-h + 16px 0 24px;
}

.setting {
  &__title {
    padding-bottom: 12px;
  }

  &__item {
    padding: 5px 0;
  }

  &__item--active {
    color: var(--primary-color);
  }
}
</style>
