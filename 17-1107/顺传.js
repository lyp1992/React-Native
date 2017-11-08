

import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View
}

    from 'react-native'

//顺传 父传子
// props传值
// ref 通过ref拿到控件给控件传值

//逆传 子传父
// // 父:定义一个接收到值方法,
//子：绑定父类接受到值得方法，然后给他传值

class Son extends Component{

    //传建一个方法，刷新jiemian

    receiveMoney(money){

        var m = this.state.money;
        m += money;
        this.setState({
            money:m

        });
    }

    constructor(props) {
        super(props);
        this.state = {
            money:0
        };
    }

    render() {

        return (

            < View style = {styles.sonStyle}>

    <Text>{this.props.name} 的儿子</Text>
        < Text>总共收到{this.state.money}的生活费</Text>
        </View>
    )
    }
}

//创建点击事件，onpress，ref绑定属性
class Father extends Component{

    render(){

        return(

            < View style = {styles.fatherStyle}>

    <Text style ={{marginTop: 100}} onPress = {()=>{this.refs.son.receiveMoney(1000)}}>发生活费</Text>
        <Son ref = 'son'  name = {this.props.name}/>

        </View>
    )
    }
}

class ReactDemo extends Component{

    render(){

        return(

            < View style = {styles.mainStyle}>
    <Father name = "lyp"/>

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