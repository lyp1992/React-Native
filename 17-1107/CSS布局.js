
import React, { Component } from 'react';
// noinspection JSAnnotator
import {
    AppRegistry,
    Text,
    View,
    StyleSheet
}
    from 'react-native';

class  ReactDemo extends  Component{

    render(){
        return(
            <View style = {styles.mainStyle}>
                <View style = {styles.greenStyle}>
                    <View style = {styles.yellowStyle}></View>
                </View>
            </View>
        )

    }

}

var styles = StyleSheet.create({

    mainStyle:{

        //  占据全屏
        flex:1,
        backgroundColor:'red',
    },
    greenStyle:{
        backgroundColor:'green',
        width:200,
        height:200,
        marginTop:100,
        marginLeft:100,
    },
    yellowStyle:{

        backgroundColor:'yellow',
        width:100,
        height:100,
        marginTop:0,
        marginLeft:0,
    }

})
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);
