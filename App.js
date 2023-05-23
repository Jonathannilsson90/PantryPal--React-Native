import { StatusBar } from 'expo-status-bar';
import BottomTab from './components/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { loadFonts } from './fonts';

export default function App() {
 
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
<BottomTab />
</NavigationContainer>

  );

  }