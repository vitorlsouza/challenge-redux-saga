import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  bookDetails: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#ffe207',
    padding: 20,
  },

  imageView: {
    width: 110,
    height: 150,
    marginRight: 30,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },

  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  bookInformation: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  author: {
    color: colors.darkGrey,
  },

  price: {
    flex: 1,
    flexDirection: 'row',
  },

  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },

  pages: {
    color: colors.darkGrey,
  },

  buttonBuy: {
    width: 100,
    height: 40,
    borderRadius: 25,
    backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBuy: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },

  buttonHeart: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.heart,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookDescription: {
    flex: 4,
    backgroundColor: colors.white,
    padding: 20,
    lineHeight: 35,
    textAlign: 'justify',
  },
});

export default styles;
