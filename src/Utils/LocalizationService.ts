import EN from '@/Constants/EN';
import ES from '@/Constants/ES';
import LocalizedStrings from 'react-native-localization';


export const LocalizationService = new LocalizedStrings({
  'en-us': EN,
  en: EN,
  es: ES,
});

export default LocalizationService;
