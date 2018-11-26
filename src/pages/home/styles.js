import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: metrics.bigPadding,
    backgroundColor: colors.primary,
  },

  imageView: {
    flex: 1,
  },

  image: {
    width: metrics.screenWidth - 200,
    height: metrics.screenHeight - 500,
    resizeMode: 'contain',
  },

  contentView: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: metrics.large,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: metrics.small,
  },

  buttonView: {
    flex: 1,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth - 80,
    height: 40,
    backgroundColor: colors.button,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },

  textButton: {
    color: colors.white,
    fontSize: metrics.small,
    fontWeight: 'bold',
  },
});

export default styles;
