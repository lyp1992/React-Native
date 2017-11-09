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
    TouchableOpacity,
    Button,
    TextInput
}
    from 'react-native'

// 什么时候使用{},包装对象的时候使用{}
// 什么时候使用{},表达式都需要使用{}
// 什么时候使用{},变量也需要使用{}包起来
// 什么时候使用(),保证组件标签的时候,必须使用()
// 3.自定义 程序入口组件([[UIView alloc] init])

// Text

// suppressHighlighting:如果为true,取消文本点击的高亮效果

// Button
// 不支持样式

// TextInput:输入框组件

class ReactDemo extends Component {

    render(){

        return (
            <View style={styles.mainStyle}>
                <TextInput ref="input" style={styles.textInputStyle}
                           placeholder='请输入密码'
                           placeholderTextColor='green'
                           secureTextEntry={true}
                           selectionColor='green'
                           clearTextOnFocus={false}
                           onChangeText={(text)=>{
                               console.log(text)
                           }}

                           onBlur={()=>{
                               var input = this.refs.input;
                               // 清空文本框内容
                               input.clear();
                           }}


                >
                </TextInput>

            </View>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    mainStyle:{
        // 占据全屏
        flex:1,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    textInputStyle:{
        borderWidth:1,
        borderColor:'red',
        height:35
    }

})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);