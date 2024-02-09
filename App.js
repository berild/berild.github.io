import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';

import "./styles.css"

export default function App() {
  return (
    <>
     <View className="flex-1 items-center justify-center bg-red-400">
      <Text className="text-white">Open up App.js to start working on your app!</Text>
      <Button title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button" />
      <StatusBar style="auto" />
    </View>
    </>
  );
}