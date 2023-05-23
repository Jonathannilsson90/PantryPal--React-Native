import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Kalam-Regular': require('./assets/fonts/Kalam-Regular.ttf'),
    'Yellowtail-Regular': require('./assets/fonts/Yellowtail-Regular.ttf'),
  });
};