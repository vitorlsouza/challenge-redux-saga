import { StyleSheet } from 'react-native';
import { metrics } from '../../styles';

const styles = StyleSheet.create({
  bookView: {
    width: 100,
    height: 120,
    marginVertical: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },
  book: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
