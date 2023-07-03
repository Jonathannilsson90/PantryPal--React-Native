import { StatusBar } from 'expo-status-bar';
import BottomTab from './components/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from 'react';
import { loadFonts } from './fonts';
import { AuthContext, AuthProvider } from './Contexts/AuthContext';
import LoginScreen from './screens/LoginScreen';

const AppContent = () => {
  const { accessToken } = useContext(AuthContext);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAsync = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {accessToken ? <BottomTab /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}