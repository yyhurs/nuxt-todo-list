import ThemeConfig from '@/assets/js/themeConfig';

/**
 * 推遲數秒
 * @param {Number} val - 毫秒
 */
// eslint-disable-next-line
export const deferTime = async (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 字串型別判斷
 * @param {String} val - 字串
 */
export const isString = (val) => Object.prototype.toString.call(val) === '[object String]';

/**
 * 陣列型別判斷
 * @param {Array} val - 陣列
 */
export const isArray = (val) => Array.isArray(val);

/**
 * 在根節點寫入 ThemeConfig 裡設定的 CSS Vars
 * @param {String} siteTheme - render的主題
 */
export const setCssVars = (siteTheme = 'general') => {
  const themeList = ThemeConfig.getMainTheme();
  if (!Object.keys(themeList)?.length) return;

  const rootStyle = document.documentElement.style;
  Object.entries(themeList).forEach((item) => {
    const key = item[0];
    const value = item[1];
    const keyName = key.split('').map((char) => (/[A-Z]/.test(char) ? `-${char.toLowerCase()}` : char)).join('');
    rootStyle.setProperty(`--${keyName}`, value[siteTheme]);
  });
};
