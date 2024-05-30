import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';
import './firebase';

enableScreens();

export default function App() {
  return <AppNavigator />;
}