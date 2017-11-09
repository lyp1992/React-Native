/**
 * Created by xiaomage on 2017/5/20.
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
    TabBarIOS
}
    from 'react-native'


// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedIndex:0
        }
    }

    render(){

        return (
            <TabBarIOS>
                {/*消息*/}
                <TabBarIOS.Item title='消息'
                                icon={{uri:'tab_recent_nor'}}
                                onPress={()=>{
                                    this.setState({
                                        selectedIndex:0
                                    })
                                }}
                                selected={this.state.selectedIndex == 0}
                                badge={10}
                >
                    <View style={{backgroundColor:'red',flex:1}}></View>
                </TabBarIOS.Item>

                {/*动态*/}
                <TabBarIOS.Item title='动态'
                                icon={{uri:'tab_qworld_nor'}}
                                selected={this.state.selectedIndex == 1}
                                onPress={()=>{
                                    this.setState({
                                        selectedIndex:1
                                    })
                                }}
                >
                    <View style={{backgroundColor:'blue',flex:1}}></View>
                </TabBarIOS.Item>

                {/*我*/}
                <TabBarIOS.Item title='我'
                                icon={{uri:'tab_buddy_nor'}}
                                onPress={()=>{
                                    console.log('点击了我')
                                    this.setState({
                                        selectedIndex:2
                                    })
                                }}
                                selected={this.state.selectedIndex == 2}
                >
                    <View style={{backgroundColor:'green',flex:1}}></View>
                </TabBarIOS.Item>
            </TabBarIOS>
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