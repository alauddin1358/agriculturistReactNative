import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Routes from './src/routes'


const App = () => {




  return (
    <>
      <SafeAreaView style={[styles.safeAreaView]}>
        <Routes />
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;

