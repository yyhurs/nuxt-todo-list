class ThemeConfig {
  static getMainTheme() {
    const result = {
      primaryColor: {
        general: '#8dc8ff',
        netflix: '#e50914',
      },
      primaryBg: {
        general: '#f8f8f8',
        netflix: '#141414',
      },
      primaryBorderColor: {
        general: '#c7c3c6',
        netflix: '#808080',
      },
      squareCurved: {
        general: '4px',
        netflix: '4px',
      },
      fontNormalColor: {
        general: '#000',
        netflix: '#808080',
      },
      fontActiveColor: {
        general: '#fff',
        netflix: '#fff',
      },
      containerBg: {
        general: '#fff',
        netflix: '#141414',
      },
      containerBorder: {
        general: '1px solid #c7c3c6',
        netflix: '0',
      },
      containerCurved: {
        general: '4px',
        netflix: '6px',
      },
      containerBoxShadow: {
        general: 'none',
        netflix: 'rgb(0 0 0 / 75%) 0px 3px 10px',
      },
      scrollbarTrackBg: {
        general: 'rgba(0, 0, 0, 0.06275)',
        netflix: 'rgba(51, 51, 51, 0.6)',
      },
      scrollbarThumbBg: {
        general: '#d6d6d6',
        netflix: '#dcdcdc',
      },
    };

    return result;
  }
}

export default ThemeConfig;
