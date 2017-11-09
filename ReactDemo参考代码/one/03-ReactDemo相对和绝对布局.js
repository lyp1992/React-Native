/**
 * Created by xiaomage on 2017/5/6.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 1.导入组件(面向组件),React(JSX)
// React:默认组件,不需要添加{}
// Compoent:非默认组件,需要添加{}
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

// 什么时候使用{},包装对象的时候使用{}
// 什么时候使用{},表达式都需要使用{}
// 什么时候使用{},变量也需要使用{}包起来
// 什么时候使用(),保证组件标签的时候,必须使用()

// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render(){
        var str = 'gogogogogogogogogogogo'
        return (
            <View style={styles.mainStyle}>
                <View style={styles.greenStyle}>
                    <View style={styles.yellowStyle}></View>
                </View>
            </View>
            // [[UIView alloc] init]
        )

    }


}


// 需求:一个View设置了尺寸,但是想显示到右下角
// 绝对定位:参照父控件
// 相对定位:参照控件本身

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    mainStyle:{
        // 占据全屏
        flex:1,
        backgroundColor:'red'
    },
    greenStyle:{
        backgroundColor:'green',
        width:200,
        height:200,
        marginTop:50,
        marginLeft:70,

    },
    yellowStyle:{
        // 173.160.0
        backgroundColor:'rgb(173,160,0)',
        width:100,
        height:100,
        position:'absolute',
        top:-10
        // position:'relative',
        // top:-10
    }

})


// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);

/*
 *
 * position:'absolute',
 bottom:0,
 right:0
 * */