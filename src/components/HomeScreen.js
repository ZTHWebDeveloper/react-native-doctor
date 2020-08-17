import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
export default function HomeScreen() {

    const Face = ({icon,title,color})=>{
        return(
            <View style={styles.faceGroup}>
                <Icon name={icon} size={36} color={color}/>
                <Text style={styles.faceText}>{title}</Text>
            </View>  
        )
    }
    return (
        <View style={styles.container}>
           <View style={styles.HeaderContainer}>
               <Text style={styles.heading}>Hi Cury</Text>
               <Text style={styles.desc}> How are you</Text>
           </View>
           <View style={styles.faceContainer}>
                <Face icon="laughing" color="#E23f9c" title="Greet"/>
                <Face icon="slightly-smile" color="#C55696" title="Good"/>
                <Face icon="neutral" color="#E23f9c" title="Okay"/>
                <Face icon="frowning" color="#827791" title="Bad"/>
                <Face icon="expressionless" title="Awful"/>

           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    faceGroup:{
        justifyContent:'center',
        alignItems:'center'
    },
    faceContainer:{
        backgroundColor:'#fff',
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:30,
        borderRadius:20,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        shadowColor:'#000',
        shadowRadius:4,
        marginTop:20
    },
    faceText:{
        fontSize:16,
        marginTop:6

    },
    container:{
        flex:1
    },
    
    HeaderContainer:{
        padding:20,
        paddingHorizontal:30,
    },
    heading:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:32
    },
    desc:{
        color:'#fff',
        fontWeight:'400',
        fontSize:20,
        marginTop:5
    }
})
