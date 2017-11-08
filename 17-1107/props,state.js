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

class YPView extends Component{

    updateMoney(){

        //    获取到多少钱
        var money = this.state.money;
        money += 100;

        this.setState({
            money : money,
        })
        console.log(this.state.age)
    }

    //构造器，构造属性
    constructor(props) {
        super(props);
        this.state = {
            money:0,
            age:1
        };
        console.log(this)
        // 第一个参数:函数,每隔一端时间,需要做什么事情
        // 第二个参数:时间,毫秒 1000 = 1秒
        // bind:给当前方法指定一个方法调用者,并且返回方法本身
        setInterval(this.updateMoney.bind(this),1000);

    }


    render(){

        return(

            <View style = {styles.xmgViewStyle}>

    <Text>共有 + {this.state.money}</Text>
        </View>
    )
    }
}

class ReactDemo extends Component{

    render(){

        return(
            < View style = {styles.mainStyle}>

    <YPView/>
        </View>
    )
    }
}

var styles = StyleSheet.create({

    mainStyle:{
        flex:1,
        backgroundColor:'red',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    xmgViewStyle:{
        width:100,
        height:100,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    }

})


AppRegistry.registerComponent('ReactDemo',() => ReactDemo );