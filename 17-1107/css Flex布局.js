/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native'

class ReactDemo extends Component {

    render() {

        return (
            < View style = {styles.mainStyle}>
    <View style = {styles.childStyle}>
    <Text>1</Text>
        </View>
        <View style = {styles.childStyle}>
    <Text>2</Text>
        </View>
        <View style = {[styles.childStyle,{alignSelf:'flex-start', backgroundColor:'blue'}]}>
    <Text>3</Text>
        </View>
        <View style = {styles.childStyle}>
    <Text>4</Text>
        </View>
        < /View>

    )

    }

}
//  flexDirection:column,默认主轴:垂直
//  flexWrap:换行

var styles = StyleSheet.create({

    mainStyle: {
        flex:1,
        backgroundColor:'red',
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    childStyle:{
        width:40,
        height:40,
        backgroundColor:'yellow',
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center'
    },
    threeStyle:{

        alignSelf:'flex-start'
    }


})

AppRegistry.registerComponent('ReactDemo',() => ReactDemo );