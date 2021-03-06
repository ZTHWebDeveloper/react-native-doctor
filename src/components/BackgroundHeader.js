import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import  LinearGradient from 'react-native-linear-gradient';
const w = Dimensions.get('window').width
export default function BackgroundHeader({ style }) {
    return (
        <LinearGradient 
        style={[styles.linearGradient,style]}
        colors={['#5D0E7F','#7A007E','#9C007F']} 
        start={{x:0,y:0}}
        end={{x:1,y:0}}
         >   
        <View style={styles.line}/>
        <View style={[styles.line,{top:130,left:-150}]}/>
         <View style={[styles.line,{top:160,left:0}]}/>
        </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    linearGradient:{
        height: ( w * 3 )/4,
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60
    },
    line:{
        position:'absolute',
        width:w+100,
        top:100,
        left:-300,
        height:80,
        backgroundColor:'rgba(255,255,255,0.1)',
        transform:[
            {
                rotate:'-35deg'
            }
        ],
        borderRadius:60

    }
})




