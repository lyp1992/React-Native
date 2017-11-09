/**
 * Created by xiaomage on 2017/5/7.
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
    TouchableOpacity
}
    from 'react-native'

// 什么时候使用{},包装对象的时候使用{}
// 什么时候使用{},表达式都需要使用{}
// 什么时候使用{},变量也需要使用{}包起来
// 什么时候使用(),保证组件标签的时候,必须使用()
// 3.自定义 程序入口组件([[UIView alloc] init])

//  基本组件 View
//  View:容器,里面存放子控件
//  style:样式
//  注意:View不能监听点击的

// 需求:监听红色View点击
// TouchableOpacity:点击事件
// activeOpacity:不透明度 1
// 注意:onPress与onPressIn,onPressOut 冲突,不要一起实现
// 箭头函数:(参数)=>{执行代码}



class ReactDemo extends Component {

    _onPress(){
        alert('点击');
    }

    render(){

        return (
            <View style={styles.mainStyle}>
                <TouchableOpacity activeOpacity={0.7}
                                  onPress={()=>{
                                      alert('点击')
                                  }}
                                  onLongPress={()=>{
                                      alert('长按')
                                  }}
                                  onPressIn={()=>{
                                      alert('手指按下')
                                  }}
                                  onPressOut={()=>{
                                      alert('手指抬起')
                                  }}
                                  disabled={true}

                >
                    <View style={styles.redViewStyle}></View>
                </TouchableOpacity>

            </View>
        )

    }

}

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    mainStyle:{
        // 占据全屏
        flex:1,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    redViewStyle:{
        backgroundColor:'red',
        width:200,
        height:200
    }

})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);