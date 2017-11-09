
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

import XMGRequest from 'XMGRequest'

import XMGHAHAHA from 'XMGHAHAHA'


// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    // 组件加载完成,
    componentDidMount() {
        XMGRequest.Get();

        XMGHAHAHA.HAHAHA();

        // GET(baseUrl,param,success,failure)
        // fetch('http://192.168.33.12:5000/home?name=abc&age=20')
        //     .then((response)=>response.json())
        //     .then((json)=>{
        //         console.log(json);
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //     })

    }


    render(){

        return (
            <Image source={{uri:'bg'}}
                   style={styles.imageStyle}
            >
                <View style={styles.lockViewStyle}>

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

})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);