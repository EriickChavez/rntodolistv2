import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  image: {
    width: RFValue(210),
    height: RFValue(210),
  },
  imageContainer: {
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: RFValue(12),
  },
});
