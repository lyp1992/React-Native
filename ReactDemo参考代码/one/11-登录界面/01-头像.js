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

var screenW = Dimensions.get('window').width
var screenH = Dimensions.get('window').height

// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {


    render(){

        return (
            <View style={{flex:1,backgroundColor:'rgb(208,208,208)',alignItems:'center'}}>
                {/*头像*/}
                <Image source={{uri:'wukong'}}
                       style={styles.iconStyle}
                />
                {/*账号文本框*/}
                <TextInput style={styles.textInputStyle}/>
                {/*密码文本框*/}
                <TextInput style={styles.textInputStyle}/>
                {/*登录*/}
                {/*无法登录/新用户*/}
                {/*其他登录方式*/}
            </View>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    iconStyle:{
        width:100,
        height:100,
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        marginTop:80
    },
    textInputStyle:{
        backgroundColor:'white',
        width:
    }

})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);