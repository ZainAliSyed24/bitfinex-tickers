import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { HomeScreen } from './src/pages';
import { theme } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
