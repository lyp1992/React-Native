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
    TextInput,
    Image,
    Dimensions
}
    from 'react-native'

// 什么时候使用{},包装对象的时候使用{}
// 什么时候使用{},表达式都需要使用{}
// 什么时候使用{},变量也需要使用{}包起来
// 什么时候使用(),保证组件标签的时候,必须使用()
// 3.自定义 程序入口组件([[UIView alloc] init])

var screenW = Dimensions.get('window').width
var screenH = Dimensions.get('window').height

var count = 9;

// e:合成事件 (原生事件)

// 下载一张图片,图片尺寸保持原样尺寸
// this => self:方法调用者
class ReactDemo extends Component {

    setUpIconView(){

        var childs = [];

        // 遍历9次,生成9个Image,返回
        for (var i =0;i < count;i++){

            childs.push(
                <Image source={{uri:'gesture'}}
                       style={styles.iconViewStyle}
                       key={i}
                />
            )

        }

        return childs

    }


    render(){

        return (
            <Image source={{uri:'bg'}}
                   style={styles.imageStyle}
            >
                <View style={styles.lockViewStyle}>
                    {this.setUpIconView()}
                </View>

            </Image>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    imageStyle:{
        width:screenW,
        height:screenH,
        justifyContent:'center',
        alignItems:'center'
    },
    lockViewStyle:{
        width:screenW,
        height:320,
        backgroundColor:'red'
    },
    iconViewStyle:{
        width:60,
        height:60
    }


})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);