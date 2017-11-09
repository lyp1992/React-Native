/**
 * Created by xiaomage on 2017/5/14.
 */

/**
 * Created by xiaomage on 2017/5/7.
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    TextInput,
    Image,
    Dimensions,

}
    from 'react-native'

import {Navigator} from 'react-native-deprecated-custom-components'
// Navigator:跳转
//
// Navigator使用步骤
// 1.初始化路由,决定第一个界面外观
// 2.配置跳转场景 跳转方向,从左往右,从右往左,从下到上
// 3.创建组件

class XMGTwoView extends Component {
    render(){
        return (
            <View style={{backgroundColor:'green',justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>第二个界面</Text>
                <Text onPress={()=>{
                    this.props.navigator.pop();
                }}>返回</Text>
            </View>
        )
    }
}

class XMGOneView extends Component {

    render(){
        console.log('XMGOneView-render')
        console.log(this);

        return (
            <View style={{backgroundColor:'red',justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>第一个界面</Text>
                <Text onPress={()=>{
                    this.props.navigator.push({
                        component:XMGTwoView
                    })
                }}>跳转</Text>
            </View>
        )
    }

}

/*
 * var arr = [1,2,3,4];

 var a = [0];

 // a.push(...arr);
 // a = a.concat(arr);
 // ...:遍历数组中元素,取出来赋值给别人
 // ...:遍历一个对象props中属性,传递给下一组控件

 console.log(a);
 * */

// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    componentDidMount() {


    }

    // 渲染场景
    _renderScene(route, navigator){

        // console.log(route);
        // ... : 延展操作符
        //  ...this.props:把当前对象的props中所有属性传递给下一个
        // ...route: 把route中所有属性,传递给下一个控件的props
        // 遍历对象的属性,一个一个传值给下一个控件
        // (<route.component navigator={navigator} component='XMGOneView' title='xmg' age=0 />)
        return (<route.component navigator={navigator} {...route}/>)
    }

    // 控制跳转方向
    _configureScene(){

        return Navigator.SceneConfigs.PushFromRight;
    }

    render(){

        return (
            <Navigator initialRoute={
            {
                component: XMGOneView,
                title: 'xmg',
                age: 0
            }
            }
                       renderScene={this._renderScene.bind(this)}
                       configureScene={this._configureScene.bind(this)}

            />
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({

})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);