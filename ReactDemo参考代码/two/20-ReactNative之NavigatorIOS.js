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
    NavigatorIOS
}
    from 'react-native'

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
        return (
            <View style={{backgroundColor:'red',justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>第一个界面</Text>
                <Text onPress={()=>{
                    this.props.navigator.push({
                        component:XMGTwoView,
                        title:'详情页',

                    })
                    {/*console.log(this.props);*/}
                }}>跳转</Text>
            </View>
        )
    }

}


// 3.自定义 程序入口组件([[UIView alloc] init])
// NavigatorIOS:必须要设置尺寸,必须要执行initialRoute初始化路由
// 只要是导航下子组件,就能获取导航,this.props.navigator

// 当前子组件props自动有两个属性,route,navigator

// NavigatorIOS弊端:
// 1.默认图片是渲染,而且没法修改渲染状态
// 2.不能显示两张图片
// 3.不能同时展示图片和文字
// 4.不能跨平台

// 自定义导航条 : RN

class ReactDemo extends Component {


    render(){

        return (
            <NavigatorIOS initialRoute={
            {
                component:XMGOneView,
                title:'首页',
                leftButtonTitle:'左边',
                rightButtonIcon:{uri:'navigationbar_friendattention'}
            }
            }
                          style={{flex:1}}
                          titleTextColor='blue'
                          tintColor='black'
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