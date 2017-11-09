

import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter
} from 'react-native'

class DiDi extends Component{

    getMoney(money){
        var m = this.state.money;
        m += money;
        this.setState({

            money:m,
        })
    }

    constructor(props) {
        super(props);
        this.state = {

            money: 0,
        };
        //监听
        DeviceEventEmitter.addListener('sendMoney',this.getMoney.bind(this))
    }

    render(){
        return(

            <View style = {styles.sonStyle}>

    <Text>收到哥哥+{this.state.money} 人民币</Text>
        </View>

    )
    }
}

class GeGe extends Component{

    sendMoney(){

        DeviceEventEmitter.emit('sendMoney',100)
    }
    render(){
        return(

            <View style = {styles.fatherStyle}>
    <Text onPress = {this.sendMoney.bind(this)}>给弟弟钱</Text>
        </View>
    )
    }
}

//两个不相关的控件用通知
class ReactDemo extends Component{

    render(){

        return(

            <View style = {styles.mainStyle}>
    <GeGe/>
        <DiDi/>
        </View>
    )
    }
}

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    mainStyle:{
        // 占据全屏
        flex:1,
        backgroundColor:'red',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    fatherStyle:{
        width:200,
        height:400,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    },
    sonStyle:{
        width:200,
        height:200,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    }
})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);