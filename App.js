import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './src/routes'
import { store } from './src/store/index'


const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={[styles.safeAreaView]}>
        <Routes />
      </SafeAreaView>
    </Provider>
  )
}


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
})

export default App

