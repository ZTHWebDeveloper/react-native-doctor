import React, { Component } from 'react'
import {
   View ,
   Text,
   ScrollView,
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Dimensions
  } from 'react-native'

import BackgroundHeader from './src/components/BackgroundHeader'
import BottomTap from './src/components/BottomTap'
import HomeScreen from './src/components/HomeScreen';
class App extends Component {
  render() {
    return (
      <>
          <StatusBar barStyle="dark-content" />
          <View style={styles.container}>
              <BackgroundHeader style={styles.bg}/>
              <ScrollView style={styles.scrollView}>
                 <HomeScreen/>
              </ScrollView>
              <BottomTap/>
          </View> 
      </>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F0F1F2'
  },
  bg:{
    position:'absolute',
    width:Dimensions.get('window').width,
  },
  scrollView:{
    flex:1
  }
})
export default  App