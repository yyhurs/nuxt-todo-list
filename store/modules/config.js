import Cookies from 'js-cookie';
import { isString, setCssVars } from '@/assets/js/utils';

const state = () => ({
  siteTheme: window.localStorage.getItem('siteTheme') || 'general',
  siteLang: Cookies.get('i18n_redirected') || 'tw',
  fullVh: 0,
  isLoading: false,
  isModalShow: false,
});

const getters = {
  siteTheme: (state) => state.siteTheme || 'general',
  siteLang: (state) => state.siteLang || 'tw',
  themeList: () => [
    {
      name: window?.$nuxt?.$t('global.themeName.__general'),
      code: 'general',
    },
    {
      name: window?.$nuxt?.$t('global.themeName.__netflix'),
      code: 'netflix',
    },
  ],
  langList: () => window?.$nuxt?.$i18n?.locales || [],
};

const mutations = {
  SET_SITE_THEME(state, payload) {
    if (!isString(payload)) payload = 'general';
    if (payload === state.siteTheme) return;

    state.siteTheme = payload;
    window.localStorage.setItem('siteTheme', payload);
    setCssVars(payload);
  },
  SET_SITE_LANG(state, payload) {
    const { defaultLocale } = this.$i18n;
    if (!isString(payload)) payload = defaultLocale;
    if (payload === state.siteLang) return;

    state.siteLang = payload;
    this.$i18n.setLocale(payload);
  },
  SET_FULL_VH(state, payload) {
    state.fullVh = payload;
  },
  SET_IS_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_IS_MODAL_SHOW(state, payload) {
    state.isModalShow = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
