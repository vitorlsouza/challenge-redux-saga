import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  list: {
    flex: 1,
    alignItems: 'center',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
