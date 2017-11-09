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
    Image
}
    from 'react-native'

// 什么时候使用{},包装对象的时候使用{}
// 什么时候使用{},表达式都需要使用{}
// 什么时候使用{},变量也需要使用{}包起来
// 什么时候使用(),保证组件标签的时候,必须使用()
// 3.自定义 程序入口组件([[UIView alloc] init])


// Image:加载图片

// source:

// require(相对路径):加载资源(图片,json)
// 注意:如果通过uri加载图片,必须要设置尺寸

class ReactDemo extends Component {

    render(){

        return (
            <View style={styles.mainStyle}>
                <Text>1.加载RN中图片</Text>
                <Image source={require('./Img/chaolan.jpeg')}
                       style={styles.imageStyle}

                />
                <Text>2.加载iOS中图片</Text>
                <Image source={{uri:'wukong'}}
                       style={styles.imageStyle}
                />
                <Text>3.加载网络中图片</Text>
                {/*https*/}

                {/*http*/}
                <Image source={{uri:'http://img01.youxiaoshuo.com/portal/201703/21/083647y43dl1j14s8s3g99.jpg'}}
                       style={styles.imageStyle}
                />

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
    imageStyle:{
        width:200,
        height:200
    }

})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);