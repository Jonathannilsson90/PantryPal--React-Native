import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  } from 'react-native';
import BottomTab from './components/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  
  return (

<NavigationContainer>
<BottomTab />
</NavigationContainer>

  );
}
