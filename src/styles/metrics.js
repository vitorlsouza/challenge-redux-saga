import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  smallMargin: 10,
  baseMargin: 15,
  mediumMargin: 20,
  bigMargin: 30,
  basePadding: 20,
  bigPadding: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  small: 16,
  medium: 22,
  big: 28,
  large: 32,
};
