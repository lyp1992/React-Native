/**
 * Created by xiaomage on 2017/5/6.
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter
}

    from 'react-native'

// 什么时候使用{},包装对象的时候使用{}
// 什么时候使用{},表达式都需要使用{}
// 什么时候使用{},变量也需要使用{}包起来
// 什么时候使用(),保证组件标签的时候,必须使用()
// 儿子组件
class GeGe extends Component {

    // 给钱
    sendMoney(){
        DeviceEventEmitter.emit('sendMoney',100)
    }

    render(){
        console.log('render')
        return (
            <View style={styles.sonStyle}>
                <Text onPress={this.sendMoney.bind(this)}>给弟弟钱</Text>
            </View>
        )
    }
}

// 修改Props:不会刷新界面
// 只能去修改state

// 弟弟组件
class DiDi extends Component {

    // 收到钱
    getMoney(money){

        var m = this.state.money;

        m += money;

        this.setState({
            money:m
        })

    }

    constructor(props){
        super(props);

        this.state = {
            money:0
        }

        // 监听
        DeviceEventEmitter.addListener('sendMoney',this.getMoney.bind(this))

    }

    render(){
        return (
            <View style={styles.fatherStyle}>
                <Text>收到哥哥+{this.state.money}+钱</Text>
            </View>
        )
    }
}

// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render(){

        return (
            <View style={styles.mainStyle}>
                <GeGe />
                <DiDi />
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