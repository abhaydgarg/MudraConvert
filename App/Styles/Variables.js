import Colors from '../Data/Colors';
import normalize from '../Lib/normalizeText';

export default function (theme) {
  return {
    colors: {
      primary: Colors[theme].primary,
      secondary: Colors[theme].secondary,
      info: '#00529B',
      error: '#D8000C',
      warning: '#ffcc00',
      white: '#ffffff',
      black: '#333333',
    },
    fonts: {
      base: 'Merriweather-Regular',
      bold: 'Merriweather-Bold',
      emphasis: 'Merriweather-Italic',
      numeric: 'StardosStencil-Regular',
      numericBold: 'StardosStencil-Bold'
    },
    fontSize: {
      large: normalize(17),
      regular: normalize(15),
      medium: normalize(13),
      small: normalize(11),
      tiny: normalize(9),
      input: normalize(30)
    }
  };
}
