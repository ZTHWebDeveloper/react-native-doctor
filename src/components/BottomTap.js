import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const menu = ['home','search1','hearto','calendar','user']
 function BottomTap() {
    return (
        <View style={styles.buttom}>
                 {
                     menu.map((e)=>{
                         return(
                           <TouchableOpacity key={e}>
                               <AntDesign name={e} size={30} color="#4F8EF7" />
                           </TouchableOpacity> 
                         )
                     })
                 }
        </View>
    )
}

export default BottomTap

const styles = StyleSheet.create({
    buttom:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        paddingHorizontal:30,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:4,
        paddingBottom:43
    }
})
