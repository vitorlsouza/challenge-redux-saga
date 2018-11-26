import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  bookDetails: {
    flex: 1.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingVertical: metrics.bigPadding,
    paddingHorizontal: metrics.basePadding,
  },

  bookView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imageView: {
    width: 110,
    height: 150,
    marginBottom: metrics.bigMargin,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },

  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  pages: {
    color: colors.darkGrey,
    fontSize: metrics.small,
    marginBottom: metrics.baseMargin,
  },

  bookInformation: {
    flex: 1.5,
  },

  bookContent: {
    flex: 2.2,
    justifyContent: 'space-between',
  },

  bookTitle: {
    flex: 5,
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
    alignItems: 'flex-end',
  },

  textPrice: {
    marginRight: metrics.baseMargin,
    fontSize: metrics.medium,
    fontWeight: 'bold',
  },

  rating: {
    marginBottom: 4,
  },

  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  buttonBuy: {
    width: 130,
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
    marginLeft: metrics.smallMargin,
  },

  bookDescription: {
    flex: 3,
    backgroundColor: colors.white,
    padding: 20,
    lineHeight: 35,
    textAlign: 'justify',
  },

  textDescription: {
    lineHeight: 30,
    fontSize: metrics.small,
  },
});

export default styles;
